import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { login } from "@/service/auth-service";
import {
  encode as defaultEncode,
  decode as defaultDecode,
} from "next-auth/jwt";

const FIFTEEN_MINUTES = 60 * 15;
const SEVEN_DAYS = 60 * 60 * 24 * 7;

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
        rememberMe: { label: "Remember Me", type: "checkbox" },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          return null;
        }
        const rememberMe =
          credentials?.rememberMe === "true" ||
          credentials?.rememberMe === true ||
          credentials?.rememberMe === "on" ||
          credentials?.rememberMe === "1";
        try {
          const user = await login(
            credentials.username as string,
            credentials.password as string,
          );
          return {
            id: user.id,
            email: user.email,
            name: user.fullName,
            image: null,
            username: user.username,
            role: user.role,
            companyId: user.companyId,
            rememberMe,
          };
        } catch {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.username = user.username;
        token.companyId = user.companyId;
        if ("rememberMe" in user) {
          token.rememberMe = Boolean(user.rememberMe);
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (!token) return session;
      const now = Math.floor(Date.now() / 1000);
      if (token.exp && token.exp < now) {
        return session;
      }
      session.user.id = token.sub!;
      session.user.role = token.role as string;
      session.user.username = token.username as string;
      session.user.companyId = token.companyId as string;

      return session;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: SEVEN_DAYS,
  },
  jwt: {
    maxAge: SEVEN_DAYS,
    async encode(params) {
      const rememberMe = params.token?.rememberMe === true;
      const maxAge = rememberMe ? SEVEN_DAYS : FIFTEEN_MINUTES;
      return defaultEncode({ ...params, maxAge });
    },
    async decode(params) {
      return defaultDecode(params);
    },
  },
  secret: process.env.AUTH_SECRET,
});
