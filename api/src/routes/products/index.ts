import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send("List of Products");    
});

router.get("/:id", (req, res) => {
    const id = req.params.id;
    res.send(`Product ${id} Updated`);
})

router.post("/", (req, res) => {
    res.send("New Product Created");
});

export const productsRouter = router;