import { mockUsers } from "./mock";

export const getUsers = () => {
  const result = Promise.resolve({ data: mockUsers });

  return result;
};
