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
  userId: {
    type: String,
  },
})

export const Reward = mongoose.model('Reward', rewardSchema)
