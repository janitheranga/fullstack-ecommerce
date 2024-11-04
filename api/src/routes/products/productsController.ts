import { Request, Response } from "express";

export const listProducts = (req: Request, res: Response) => {
    res.send("List of Products");
};

export const getProductById = (req: Request, res: Response) => {
    const id = req.params.id;
    res.send(`Product ${id} Details`);
};

export const createProduct = (req: Request, res: Response) => {
    res.send("New Product Created");
};

export const updateProduct = (req: Request, res: Response) => {
    const id = req.params.id;
    res.send(`Product ${id} Updated`);
};

export const deleteProduct = (req: Request, res: Response) => {
    const id = req.params.id;
    res.send(`Product ${id} Deleted`);
};
