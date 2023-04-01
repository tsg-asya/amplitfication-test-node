import { BlogCreateNestedManyWithoutUsersInput } from "./BlogCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  blogs?: BlogCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
