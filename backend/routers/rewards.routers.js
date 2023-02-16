import express from 'express'
import { authorizeUser } from '../middlewares/authorizeUser.js'
import { Reward } from '../models/rewards.schema.js'

const router = express.Router()

router.get('/rewards', authorizeUser, async (req, res) => {
  // try {
  const rewards = Reward.find({ userId: req.userId })
  return res.status(200).send(rewards)
  //   } catch (err) {
  //     return res.status(500).send({ message: 'Internal server error', err })
  //   }
})

export const rewardRouters = router
