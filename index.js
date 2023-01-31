import express from 'express';
import * as dotenv from 'dotenv'
import cors from 'cors'
import mongoose from "mongoose";

import postRoutes from './routes/postRoutes.js'
import dalleRoutes from './routes/dalleRoutes.js'

dotenv.config();
const app = express();


//MIDDLEWARES
app.use(cors())
app.use(express.json({ limit: '50mb' }));
app.use('/api/v1/posts', postRoutes)
app.use('/api/v1/dalle', dalleRoutes)


app.get('/', async (req, res) => {
    res.send("AJI LUND MERA")
})


//DATABASE CONNECTION
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGODB_URL)
    .then(() => { console.log('MongoDB Connected!') })

app.listen(8080, () => {
    console.log("App listening on port:8080")
})