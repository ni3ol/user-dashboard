export type Role = "admin" | "user";

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: Role;
};
