import { ObjectId } from "mongoose";
import { MemberStatus, MemberType } from "../enums/member.enum";

export interface Member {
  _id: ObjectId;
  memberType: MemberType;
  memberStatus: MemberStatus;
  memberNick: string;
  memberPassword?: string;
  memberDesc?: string;
  memberImage?: string;
  memberAddress?: string;
  memberPhone: string;
  createdAt: Date;
  deletedAt: Date;
}
