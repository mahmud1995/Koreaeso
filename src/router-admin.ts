import express, { Request, Response } from "express";

const routerAdmin = express.Router();

routerAdmin.get("/admin", (req: Request, res: Response) => {
  res.send("Hello");
});

export default routerAdmin;
