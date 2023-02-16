import mongoose from 'mongoose'

const requestSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  image: {
    type: String,
  },
  quantity: {
    type: String,
  },
  expiry: {
    type: String,
  },
  status: {
    type: String,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  pharmacyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pharmacy',
  },
})

export const Request = mongoose.model('Request', requestSchema)
