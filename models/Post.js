const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  game: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  numPlayers: {
    type: Number,
    required: true
  },
  gameDate: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  listofplayers: [
    {
      id: {
        type: String,
        required: true
    },
      name: {
        type: String,
        required: true
      }
  }
  ],
  avatar: {
    type: String
  },
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      }
    }
  ],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
      text: {
        type: String,
        required: true
      },
      name: {
        type: String
      },
      avatar: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Post = mongoose.model('post', PostSchema);
