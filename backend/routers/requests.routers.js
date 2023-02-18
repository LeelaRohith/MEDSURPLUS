import express from 'express'
import { authorizeUser } from '../middlewares/authorizeUser.js'

import { Request } from '../models/requests.schema.js'
import { upload } from '../middlewares/multer.js'
import fs from 'fs'

const router = express.Router()

router.post('/sell', authorizeUser, upload.single('file'), async (req, res) => {
  try {
    const { name, quantity, expiry } = req.body
    if (!name && !quantity && !expiry) {
      return res.status(402).send({ message: 'All fields are required' })
    }
    const image = fs.readFileSync(req.file.path, 'base64')

    const newRequest = await new Request({
      name,
      image,
      quantity,
      expiry,
      status: 'pending',
      userId: req.userId,
    }).save()
    fs.unlinkSync(req.file.path)
    return res.status(200).send({ message: 'successfully placed the order' })
  } catch (err) {
    return res.status(500).send({ message: 'Internal server error', err })
  }
})

router.get('/requests', authorizeUser, async (req, res) => {
  try {
    const requests = await Request.find({ userId: req.userId }).populate(
      'pharmacyId'
    )
    res.status(200).send(requests)
  } catch (err) {
    return res.status(500).send({ message: 'Internal server' })
  }
})

router.get('/pendingRequests', authorizeUser, async (req, res) => {
  try {
    const requests = await Request.find({ status: 'pending' })
    res.status(200).send(requests)
  } catch (err) {
    return res.status(500).send({ message: 'Internal server' })
  }
})

router.get('/acceptedRequests', authorizeUser, async (req, res) => {
  try {
    const requests = await Request.find({
      status: 'accepted',
      pharmacyId: req.userId,
    })
    res.status(200).send(requests)
  } catch (err) {
    return res.status(500).send({ message: 'Internal server' })
  }
})

export const RequestRouters = router
