import express, { Request, Response } from "express";
import memberController from "./controller/member.controller";

const router = express();

router.get("/users", memberController.getMember);

export default router;
