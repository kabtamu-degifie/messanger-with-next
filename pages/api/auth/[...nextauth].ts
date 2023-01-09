// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";

export default NextAuth({
  secret: process.env.SECRET,
  providers: [
    FacebookProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
});
