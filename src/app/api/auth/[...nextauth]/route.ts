import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Enter username" },
        password: { label: "Password", type: "password", placeholder: "Enter password" },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          throw new Error("Invalid credentials");
        }

        const DUMMY_USER = {
          id: "1",
          name: "Admin",
          email: "admin@example.com",
          username: "admin",
          password: "123",
        };

        if (credentials.username === DUMMY_USER.username && credentials.password === DUMMY_USER.password) {
          return { id: DUMMY_USER.id, name: DUMMY_USER.name, email: DUMMY_USER.email };
        }

        throw new Error("Invalid credentials");
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET || "your-secret-key",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
