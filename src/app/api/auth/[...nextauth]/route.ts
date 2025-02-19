import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
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

        // Dummy credentials
        const DUMMY_USER = {
          username: "admin",
          password: "123",
          id: "1",
          name: "Admin",
          email: "admin@example.com",
        };

        // Validate user
        if (credentials.username === DUMMY_USER.username && credentials.password === DUMMY_USER.password) {
          return { id: DUMMY_USER.id, name: DUMMY_USER.name, email: DUMMY_USER.email };
        }

        throw new Error("Invalid credentials"); // If authentication fails
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt" as "jwt", // Explicitly set the type
  },
  secret: "your-secret-key",
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
