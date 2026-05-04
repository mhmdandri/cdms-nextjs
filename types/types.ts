import { DefaultSession } from "next-auth";
declare module "next-auth" {
  interface User {
    id: string;
    username: string;
    role: string;
    companyId: string;
  }
  interface Session {
    user: User & DefaultSession["user"];
  }
}
declare module "next-auth/jwt" {
  interface JWT {
    role: string;
    username: string;
    companyId: string;
  }
}
export type CompanyRegister = {
  name: string;
  email: string;
  phone: string;
};
export type UserRegister = {
  username: string;
  fullname: string;
  password: string;
  confirmPassword: string;
};
