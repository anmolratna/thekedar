const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const bodyParser = require('body-parser');
const authRoutes=require('./routes/authRoutes')
dotenv.config();

const app = express();

//Middleware
app.use(cors({ origin: 'http://localhost:4200' }));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//connect to MongoDb 
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.log('Error connecting to MongoDB:', error));


//Routes
app.use('/auth' ,authRoutes );

//Start Server
const port = process.env.PORT || 5000;
app.listen(port , ()=>{
    console.log(`Server is Running on Port ${port}`);
});