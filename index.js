import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

//load the enviornment variable
dotenv.config()

const app = express()
const port = process.env.PORT || 3000
const uri = process.env.MONGO_URI

//connection to mongodb by connection string
async function connectDB() {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    console.log('connected to mongodb');
}

app.listen(port, () =>
{
    console.log(`Server is running on http://localhost:${port}`);
    connectDB()
})