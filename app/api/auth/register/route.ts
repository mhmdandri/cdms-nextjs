import { register } from "@/service/auth-service";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      phone,
      username,
      fullname,
      password,
      confirmPassword,
    } = body;
    const result = await register(
      { name, email, phone },
      { username, fullname, password, confirmPassword },
    );
    return NextResponse.json(
      {
        success: result.success,
        message: result.message,
      },
      { status: 201 },
    );
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          success: false,
          message: error.message,
        },
        { status: 400 },
      );
    }
    return NextResponse.json(
      {
        success: false,
        message: "Terjadi kesalahan internal",
      },
      { status: 500 },
    );
  }
}
