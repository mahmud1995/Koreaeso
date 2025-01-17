import { MemberType } from "../lib/enums/member.enum";
import { Member } from "../lib/types/member";
import MemberModel from "../schema/Member.model";

class MemberService {
  private readonly memberModel;

  constructor() {
    this.memberModel = MemberModel;
  }

  //SPA
  public async getMember(): Promise<Member> {
    const result = await this.memberModel
      .findOne({ memberType: MemberType.USER })
      .lean()
      .exec();
    if (!result) throw new Error("MemberNot Found!");
    return result;
  }
}

export default MemberService;
