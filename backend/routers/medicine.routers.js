import express from 'express'
import fs from 'fs'
import xlsx from 'xlsx'
import { Medicine } from '../models/medicines.schema.js'
import { upload } from '../middlewares/multer.js'
import { ChatGPTAPI } from 'chatgpt'
import dotenv from 'dotenv'
dotenv.config()

let api
try {
  console.log(process.env.OPENAI_API_KEY)
  api = new ChatGPTAPI({
    apiKey: process.env.OPENAI_API_KEY,
  })
} catch (err) {
  console.log(err)
}

const router = express.Router()

router.post('/chatgpt', async (req, res) => {
  try {
    const query =
      'For what purpose the medicine ' + req.body.medicineName + ' is used'
    const resp = await api.sendMessage(query)
    res.status(200).send(resp.text)
  } catch (err) {
    console.log(err)
    res.status(500).send({ message: 'Internal server error', err })
  }
})

router.post(
  '/medicine/excelUpload',
  upload.single('file'),
  async (req, res) => {
    try {
      const file = req.file
      const workbook = xlsx.readFile(file.path)
      let workSheets = {}
      async function getSheet(workbook) {
        return new Promise((resolve, reject) => {
          for (const sheetName of workbook.SheetNames) {
            workSheets[sheetName] = xlsx.utils.sheet_to_json(
              workbook.Sheets[sheetName]
            )
          }
          resolve(workSheets)
        })
      }
      await getSheet(workbook)
      //   console.log(workSheets)
      const medicines = await Medicine.insertMany(workSheets.Sheet1)
      fs.unlinkSync(file.path)

      res.status(200).send({ message: 'File successfully uploaded', medicines })
    } catch (err) {
      console.log(err)
      res.status(500).send({ message: 'Internal server error', err })
    }
  }
)

router.get('/medicines', async (req, res) => {
  try {
    const medicines = await Medicine.find({}, 'name -_id')
    let medicineName = []
    async function getMedicineArray(medicines) {
      return new Promise((resolve, reject) => {
        medicines.forEach((element) => {
          medicineName.push(element.name)
        })
        resolve(medicineName)
      })
    }
    getMedicineArray(medicines)
    return res.status(200).send(medicineName)
  } catch (err) {
    res.status(500).send({ message: 'Internal server error' })
  }
})

router.post('/medicineDetails', async (req, res) => {
  try {
    const medicineDetails = await Medicine.findOne({ name: req.body.name })
    return res.status(200).send(medicineDetails)
  } catch (err) {
    res.status(500).send({ message: 'Internal server error' })
  }
})

export const MedicineRouters = router
