import { BlogUpdateManyWithoutUsersInput } from "./BlogUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  blogs?: BlogUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
