import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import ratelimiter from "./middleware/rateLimiter.js";
import cors from "cors";
dotenv.config();

const app=express();
const PORT=process.env.PORT||5001;

app.use(cors({
    origin: "http://localhost:5173",
})
);
//middleware
app.use(express.json());//this middleware will parse JSON bodies: req.body
app.use(ratelimiter)

//our simple custom middleware
// app.use((req,res,next)=>{
//     console.log(`Req method is &{req.method} & Req URL is ${req.url}`);
//     next();
// });
app.use("/api/notes", notesRoutes);

//What is an Endpoint?
//An endpoint is a combination of a URL+HTTP method that lets the client
//interact with a specific resource.

connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log("Server started on PORT:", PORT)
    });
});
