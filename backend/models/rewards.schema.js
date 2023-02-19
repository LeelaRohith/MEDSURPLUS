import mongoose from 'mongoose'

const rewardSchema = new mongoose.Schema({
  orderId: {
    type: String,
  },
  type: {
    type: String,
  },
  reward: {
    type: String,
  },
  organisation: {
    type: String,
  },
  image: {
    type: String,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
})

export const Reward = mongoose.model('Reward', rewardSchema)
