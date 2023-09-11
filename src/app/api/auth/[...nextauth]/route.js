import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import User from "@/app/models/userModel";
import { connect } from "@/app/dbConfig/dbConfig";
import bcrypt from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";


const handler =  NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email" },
        password: { label: "password" },
      },
      async authorize(credentials, req) {
        try {
            connect();
          const { email, password } = credentials;
 
          const user = await User.findOne({ email });
          if (!user) {
            throw new Error("Invalid Email and Password");
          }
        const validatepassword = await bcrypt.compare(password, user.password);
       
        if (!validatepassword) {
            throw new Error("Invalid Password");
        }
        return { id: user._id, email: user.email };
        } catch (error) {
          console.log(error.message);
        }
      },
    }),
  ],
  secret:process.env.NEXTAUTH_SECRET,
  pages:{
    signIn:"/login",
  }
});

export { handler as GET, handler as POST };

