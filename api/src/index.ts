import express from "express";
import { productsRouter } from "./routes/products";

const app = express();
const port = 3000;


app.use("/products", productsRouter);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});