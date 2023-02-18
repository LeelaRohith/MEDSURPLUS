import express from 'express'
import { authorizeUser } from '../middlewares/authorizeUser.js'
import { Reward } from '../models/rewards.schema.js'

const router = express.Router()

router.get('/rewards', authorizeUser, async (req, res) => {
  try {
    const rewards = await Reward.find({ userId: req.userId })
    return res.status(200).send(rewards)
  } catch (err) {
    return res.status(500).send({ message: 'Internal server error', err })
  }
})

router.post('/claimReward', authorizeUser, async (req, res) => {
  try {
    const claimedReward = await Reward.findOneAndDelete({ _id: req.body.code })
   // console.log(claimedReward)
    if (!claimedReward) {
      return res.status(401).send({ message: 'Invalid coupon code' })
    }
    return res
      .status(200)
      .send({ message: 'successfully claimed the discount coupon' })
  } catch (err) {
    return res.status(500).send({ message: 'Internal server error', err })
  }
})

export const rewardRouters = router
