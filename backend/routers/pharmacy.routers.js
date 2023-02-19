import express from 'express'
import { authorizeUser } from '../middlewares/authorizeUser.js'
import { Request } from '../models/requests.schema.js'
import { Reward } from '../models/rewards.schema.js'
import { Pharmacy } from '../models/pharmacy.schema.js'
import fs from 'fs'
import path from 'path'

const __dirname = path.dirname(new URL(import.meta.url).pathname)

const filePath = path.join(__dirname, '..', 'uploads', 'discount1.jpg')

const router = express.Router()

router.patch('/pharmacy/accept', authorizeUser, async (req, res) => {
  try {
    const updateRequest = await Request.findOneAndUpdate(
      { _id: req.body.orderId },
      { pharmacyId: req.userId, status: 'accepted' }
    )
    res.status(200).send({ message: 'Successfully accepted the request' })
  } catch (err) {
    return res.status(500).send({ message: 'Internal server' })
  }
})

router.patch('/pharmacy/delivered', authorizeUser, async (req, res) => {
  try {
    const { orderId } = req.body
    const updateRequest = await Request.findOneAndUpdate(
      { _id: orderId },
      { status: 'delivered' }
    )
    const order = await Request.findOne({ _id: orderId }).populate(
      'pharmacyId userId'
    )

    let type,
      reward,
      organisation,
      image = null
    if (order.expiry === 'expired') {
      type = 'coupon'
      reward = 'Get 40% off on selected items'
      organisation = '1mg'
      image = fs.readFileSync('uploads/1mg.png', 'base64')
    } else {
      type = 'discount'
      reward = 'Get 20% off on next purchase'
      organisation = order.pharmacyId.name

      image = fs.readFileSync('uploads/discount1.jpg', 'base64')
    }

    const newReward = await new Reward({
      orderId,
      type,
      reward,
      organisation,
      image,
      userId: order.userId._id,
    }).save()

    res.status(200).send({
      message: 'user successfully delivered and reward is on its way',
    })
  } catch (err) {
    console.log(err)
    return res.status(500).send({ message: 'Internal server error', err })
  }
})

router.get('/pharmaciesCoordinates', async (req, res) => {
  try {
    const pharmacies = await Pharmacy.find({}).select(
      'lattitude longitude name -_id'
    )

    res.status(200).send(pharmacies)
  } catch (err) {
    return res.status(500).send({ message: 'Internal server error' })
  }
})
export const PharmacyRouters = router
