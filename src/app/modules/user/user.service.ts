import { TUser } from "./user.interface";
import { User } from "./user.model";

const createStudentintoDB = async (payload: TUser) => {
  const result = await User.create(payload);
};
