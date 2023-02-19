import express from 'express'
import { User } from '../models/user.schema.js'
import { authorizeUser } from '../middlewares/authorizeUser.js'
import { signJwtToken } from '../utils/jwt.js'
import { Pharmacy } from '../models/pharmacy.schema.js'

const router = express.Router()

router.post('/userSignin', async (req, res) => {
  try {
    const { email, password } = req.body
    const foundUser = await User.findOne({ email: req.body.email })
    if (!foundUser) {
      res.status(402).send({ message: 'Email is not registered with us' })
      return
    }
    if (foundUser.password === password) {
      const userId = foundUser._id

      return res.status(200).send({
        message: 'successfully logged in',
        jwtToken: signJwtToken(userId),
      })
    } else {
      return res.status(402).send({ message: 'Invalid password' })
    }
  } catch (err) {
    return res.status(500).send({ message: 'Internal server error' })
  }
})

router.post('/userSignup', async (req, res) => {
  try {
    const { username, email, password, contactNo, address, city, state } =
      req.body
    if (
      !username &&
      !email &&
      !password &&
      !contactNo &&
      !address &&
      !city &&
      !state
    ) {
      return res.status(400).send({ message: 'All fields are required' })
    }
    const foundUser = await User.findOne({ email: req.body.email })
    if (foundUser) {
      return res.status(400).send({
        message: 'This email is already registered with us',
      })
    }
    const newUser = await new User({
      username,
      email,
      password,
      contactNo,
      address,
      city,
      state,
    }).save()

    return res.status(200).send({ message: 'Successfully registered' })
  } catch (err) {
    return res.status(500).send({ message: 'Internal server error' })
  }
})

router.post('/pharmacySignin', async (req, res) => {
  try {
    const { email, password } = req.body
    const foundPharmacy = await Pharmacy.findOne({ email: req.body.email })
    if (!foundPharmacy) {
      res.status(400).send({ message: 'Email is not registered with us' })
      return
    }
    if (foundPharmacy.password === password) {
      const userId = foundPharmacy._id
      return res.status(200).send({
        message: 'successfully logged in',
        jwtToken: signJwtToken(userId),
      })
    } else {
      return res.status(400).send({ message: 'Invalid password' })
    }
  } catch (err) {
    return res.status(500).send({ message: 'Internal server error' })
  }
})

router.post('/pharmacySignup', async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      contactNo,
      address,
      city,
      state,
      lattitude,
      longitude,
    } = req.body
    if (
      !name &&
      !email &&
      !password &&
      !contactNo &&
      !address &&
      !city &&
      !state &&
      !lattitude &&
      !longitude
    ) {
      return res.status(400).send({ message: 'All fields are required' })
    }
    const foundPharmacy = await Pharmacy.findOne({ email: req.body.email })
    if (foundPharmacy) {
      return res.status(400).send({
        message: 'This email is already registered with us',
      })
    }
    const newPharmacy = await new Pharmacy({
      name,
      email,
      password,
      contactNo,
      address,
      city,
      state,
      lattitude,
      longitude,
    }).save()

    return res.status(200).send({ message: 'Successfully registered' })
  } catch (err) {
    return res.status(500).send({ message: 'Internal server error' })
  }
})

router.get('/userDetails', authorizeUser, async (req, res) => {
  try {
    const foundUser = await User.findOne({ _id: req.userId }).select(
      'username email -_id'
    )
    res.status(200).send(foundUser)
  } catch (err) {
    return res.status(500).send({ message: 'Internal server error' })
  }
})

router.get('/pharmacyDetails', authorizeUser, async (req, res) => {
  try {
    const foundPharmacy = await Pharmacy.findOne({ _id: req.userId }).select(
      'name email -_id'
    )
    res.status(200).send(foundPharmacy)
  } catch (err) {
    return res.status(500).send({ message: 'Internal server error' })
  }
})

export const AuthRouters = router
