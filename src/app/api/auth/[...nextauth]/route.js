import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import connectToDatabase from "app/lib/utils";
import User from "app/lib/models/User";

export const authOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Connect to the database
        await connectToDatabase();

        // Find the user by email
        const user = await User.findOne({ email: credentials.email });
        if (!user) {
          throw new Error("No user found with this email");
        }

        // Compare passwords (the stored password should be hashed)
        const isValid = await compare(credentials.password, user.password);
        if (!isValid) {
          throw new Error("Incorrect password");
        }

        // Return a user object that will be saved in the token
        return { id: user._id.toString(), email: user.email, name: user.username };
      }
    })
  ],
  secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET, // Set this in your .env file
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
      }
      return session;
    }
  }
};

// NextAuth in the app directory requires you to export HTTP method handlers.
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
