import mongoose, { Schema } from "mongoose";
import { MemberStatus, MemberType } from "../lib/enums/member.enum";

const memberSchema = new Schema(
  {
    memberType: {
      type: String,
      enum: MemberType,
      default: MemberType.USER,
    },

    memberStatus: {
      type: String,
      enum: MemberStatus,
      default: MemberStatus.ACTIVE,
    },

    memberNick: {
      type: String,
      index: { unique: true, sparse: true },
      required: true,
    },

    memberPassword: {
      type: String,
      select: false,
      required: true,
    },

    memberDesc: {
      type: String,
    },

    memberImage: {
      type: String,
    },

    memberAddress: {
      type: String,
    },

    memberPhone: {
      type: String,
      index: { unique: true, sparse: true },
      required: true,
    },
  },
  { timestamps: true, collection: "members" }
);

export default mongoose.model("Member", memberSchema);
