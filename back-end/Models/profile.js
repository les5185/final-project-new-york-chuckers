const mongoose = require('mongoose')
const Schema = mongoose.Schema

const profileSchema = new Schema(
  {
    fullName: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
    industry: {
      type: String,
      required: true,
    },
    skills: {
      type: String,
      required: true,
    },
    wantWork: {
      type: String,
      required: true,
    },
    position: {
        type: String,
        required: true,
    },
    companies: {
        type: String,
        required: true,
    },
    image: {
        type: Image,
        required: true,
    },
  },
  {
    timestamps: true,
  }
)

// create mongoose Model
const Profile = mongoose.model('Profile', profileSchema)

// export the model so other modules can import it
module.exports = {
  Profile,
}