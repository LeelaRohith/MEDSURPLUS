import mongoose from 'mongoose'

const pharmacySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  contactNo: {
    type: String,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  lattitude: {
    type: Number,
  },
  longitude: {
    type: Number,
  },
})

export const Pharmacy = mongoose.model('Pharmacy', pharmacySchema)
