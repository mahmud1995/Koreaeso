import MemberService from "../service/Member.service";
import { Request, Response } from "express";

const memberService = new MemberService();

const memberController: any = {};

memberController.getMember = async (req: Request, res: Response) => {
  try {
    console.log("lll");
    const result = await memberService.getMember();
    res.send(result);
  } catch (err) {
    console.log("ERROR, getMember", err);
  }
};

export default memberController;
