const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
// const authRoutes = require("./routes/auth");
// const productRoutes = require("./routes/product");
// const orderRoutes = require("./routes/order");
const userRouter = require('./Routes/user.js');


dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)

.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));


// app.use("/api/auth", authRoutes);
// app.use("/api/products", productRoutes);
// app.use("/api/orders", orderRoutes);
const userRoutes = require("./Routes/user");
app.use("/user", userRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

