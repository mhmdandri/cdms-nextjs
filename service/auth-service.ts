import prisma from "@/lib/prisma";
import { CompanyRegister, UserRegister } from "@/types/types";
import z from "zod";
import bcrypt from "bcrypt";

export const register = async (
  { name, email, phone }: CompanyRegister,
  { username, fullname, password, confirmPassword }: UserRegister,
) => {
  const companySchema = z.object({
    name: z.string().min(3, "Nama perusahaan minimal 3 karakter"),
    email: z.email("Email tidak valid"),
    phone: z
      .string()
      .regex(/^[0-9]+$/, "Nomor harus angka")
      .min(10, "Minimal 10 angka")
      .max(15, "Maksimal 15 angka"),
  });
  const userSchema = z
    .object({
      username: z.string().min(3, "Username minimal 3 karakter"),
      fullname: z.string().min(3, "Nama lengkap minimal 3 karakter"),
      password: z.string().min(6, "Password minimal 6 karakter"),
      confirmPassword: z.string().min(6),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Password dan confirm password tidak sama",
      path: ["confirmPassword"],
    });
  const validCompany = companySchema.safeParse({
    name,
    email,
    phone,
  });
  const validUser = userSchema.safeParse({
    username,
    fullname,
    password,
    confirmPassword,
  });
  if (!validCompany.success) {
    throw new Error(validCompany.error.issues.map((e) => e.message).join(", "));
  }
  if (!validUser.success) {
    throw new Error(validUser.error.issues.map((e) => e.message).join(", "));
  }
  const checkexistCompanyName = await prisma.company.findUnique({
    where: {
      name: name,
    },
  });
  if (checkexistCompanyName) {
    throw new Error("Nama perusahaan sudah terdaftar");
  }
  const checkExistEmail = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (checkExistEmail) {
    throw new Error("Email sudah terdaftar");
  }
  const checkExistUsername = await prisma.user.findUnique({
    where: {
      username: username,
    },
  });
  if (checkExistUsername) {
    throw new Error("Username sudah terdaftar");
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const { user, company } = await prisma.$transaction(async (tx) => {
    const company = await tx.company.create({
      data: {
        name,
        email,
        phone,
      },
    });
    const user = await tx.user.create({
      data: {
        companyId: company.id,
        username,
        fullName: fullname,
        email,
        password: hashPassword,
        role: "OWNER",
      },
    });
    return { user, company };
  });
  return {
    success: true,
    data: { user, company },
    message: "Registrasi berhasil",
  };
};

export const login = async (username: string, password: string) => {
  const loginSchema = z.object({
    username: z.string().min(3, "Username minimal 3 karakter"),
    password: z.string().min(6, "Password minimal 6 karakter"),
  });
  const validInput = loginSchema.safeParse({
    username,
    password,
  });
  if (!validInput.success) {
    throw new Error(validInput.error.issues.map((e) => e.message).join(", "));
  }
  const user = await prisma.user.findUnique({
    where: { username },
  });
  if (!user) {
    throw new Error("Username tidak ditemukan");
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error("Password salah");
  }
  return {
    id: user.id,
    email: user.email,
    fullName: user.fullName,
    username: user.username,
    role: user.role,
    companyId: user.companyId,
  };
};
