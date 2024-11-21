import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors"
import morgan from "morgan";
import helmet from "helmet";
// route
import dashboardRoutes from  './routes/dashboardRoutes'
import productRoutes from './routes/productRoutes'
import userRoutes from './routes/userRoutes'
import expenseRoutes from './routes/expenseRoutes'
// configurations
dotenv.config();
const app = express();
app.use(express.json())
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())


//routes
app.use("/dashboard", dashboardRoutes)
app.use("/products", productRoutes)
app.use("/users", userRoutes)
app.use("/expenses", expenseRoutes)

//server
const port = Number(process.env.PORT) || 3000;
app.listen(port, "0.0.0.0", () =>{
    console.log(`Server running on port ${port}`);
});