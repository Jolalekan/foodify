import { MongoDBAdapter } from "@auth/mongodb-adapter"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import {User} from "../../../../models/User"
import bcrypt from "bcrypt"
import mongoose from "mongoose"
import clientPromise from "../../../lib/mongoConnect"
import jwt from 'jsonwebtoken';


// mongoose.connect(process.env.MONGODB_URI);


export const authOptions = {
    
    secret: process.env.NEXTAUTH_SECRET,
    adapter: MongoDBAdapter(clientPromise),
    providers: [
        CredentialsProvider({
            name: "Credentials",
            id: "credentials",
            credentials: {
                username: { label: "email", type: "email", placeholder: "test@example.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
              const email = credentials?.email;
              console.log("email:",email)
              const password = credentials?.password;
              console.log("password :",password)
              
              mongoose.connect(process.env.MONGODB_URI)
                const user = await User.findOne({ email });
                
                console.log("only useremail",user.email)
                const passwordOk = user && bcrypt.compareSync(password, user.password);
                if (!user) {
                    console.log("no user", !user)
                    return null
                }
                
                if (passwordOk) {
                  console.log("return user:",user)
                    return user
                }
                return null
            }
        })
    ],
    callbacks: {
      async jwt(token, user) {
        if (user) {
          token.id = user.id;
        }
        return token;
      },
      async session(session, token) {
        // Await the user data retrieval (assuming it's asynchronous)
        const user = await token; // Destructure directly from token
    
        console.log("session:", session);
        console.log("user:", user); // This should now log the user data
    
        session.user = user;
        return session;
      },
    },
}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }

