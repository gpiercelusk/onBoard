const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
//@route   GET api/auth
//@desc    Test Route
//@access  Public
router.get('/', auth, async (req, res) => {
  try {
    const user = await user.findById(req.user.id);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
