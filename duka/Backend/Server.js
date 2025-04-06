const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')

require('dotenv').config();

const dbConfig = require("./config/dbconfig.js");

const userRouter = require('./Routes/user.js');

const cors_options = {
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  };


const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(cors(cors_options));
app.use('/api/user', userRouter);

const port = process.env.PORT || 5000;


// app.use("/api/auth", authRoutes);
// app.use("/api/products", productRoutes);
// app.use("/api/orders", orderRoutes);

app.use("api/user", userRouter)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

