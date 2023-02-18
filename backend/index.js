import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDatabase } from './utils/initMongoose.js'
import { AuthRouters } from './routers/auth.routers.js'
import { RequestRouters } from './routers/requests.routers.js'
import { PharmacyRouters } from './routers/pharmacy.routers.js'
import { rewardRouters } from './routers/rewards.routers.js'
import { MedicineRouters } from './routers/medicine.routers.js'

const app = express()
app.use(express.json())

app.use(cors())
dotenv.config()

try {
  await connectDatabase()
} catch (err) {
  console.log(err)
  process.exit()
}

app.use(AuthRouters)
app.use(RequestRouters)
app.use(PharmacyRouters)
app.use(rewardRouters)
app.use(MedicineRouters)

app.get('/', (req, res) => {
  return res.send('server is up and running...')
})

app.listen(5000, () => {
  console.log('server is running in the port 5000...')
})
