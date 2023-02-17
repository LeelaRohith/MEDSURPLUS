import mongoose from 'mongoose'

const medicineSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  usage: {
    type: String,
  },
  howToUse: {
    type: String,
  },
  sideEffects: {
    type: String,
  },
  durationOfAction: {
    type: String,
  },
  contraIndications: {
    type: String,
  },
  specialPrecautionsWhileTaking: {
    type: String,
  },
  pregnancyRelatedInformation: {
    type: String,
  },
  storageRequirements: {
    type: String,
  },
  effectsOfOverdose: {
    type: String,
  },
  expertAdvice: {
    type: String,
  },
  packagingType: {
    type: String,
  },
  mrp: {
    type: Number,
  },
})

export const Medicine = mongoose.model('Medicine', medicineSchema)
