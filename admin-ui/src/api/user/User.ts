import { Blog } from "../blog/Blog";
import { JsonValue } from "type-fest";

export type User = {
  blogs?: Array<Blog>;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
