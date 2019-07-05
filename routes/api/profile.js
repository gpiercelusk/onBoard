const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Profile = require('../../models/Profile');
const User = require('../../models/User');

//@route   GET api/profile/me
//@desc    get current user profile
//@access  Private
router.get('/', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate(
      'user',
      ['name', 'avatar']
    );

    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@route   POST api/profile/
//@desc    creat or update user profile
//@access  Private
router.post(
  '/',
  [
    auth,
    [
      check('status', 'Status is required')
        .not()
        .isEmpty(),
      check('games', 'Games are required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { location, status, games } = req.body;

    // Build profile object
    const profileFields = {};
    profileFields.user = req.user.id;
    if (location) profileFields.location = location;
    if (status) profileFields.status = status;
    if (games) {
      profileFields.games = games.split(',').map(game => game.trim());
    }
    try {
      let profile = await Profile.findOne({ user: req.user.id });

      if (profile) {
        await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );

        return res.json(profile);
      }

      //create
      profile = new Profile(profileFields);

      await profile.save();
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);
module.exports = router;
