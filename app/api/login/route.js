// import { NextResponse } from "next/server"
// import {connect} from "../../../dbConfig/dbConfig.js"
// import {User} from "../../../models/User"
// import bcrypt from "bcrypt"
// import  jwt  from "jsonwebtoken"


// connect()
// export async function POST(request){
//     try {
//         const {email, password} = await request.json()
//         console.log("email:",email, password)
//         if(!email || password){
//             return NextResponse.json({error: "Email and password is required"},{status:400})
//         }
//         const user =await User.findOne({email})
//         if(!user){
//             return NextResponse.json({error:"user not found"}, {status:404})
//         }
//         const invalidPassword = await bcrypt.compare(password, user.password)

//         if(!invalidPassword){
//             return NextResponse.json({error: "Invalid credentials"}, {status:400})
//         }

//         const tokenPayload= {user: user._id}

//         const token = jwt.sign(tokenPayload, process.env.SECRET, {expiresIn: "1hr"})

//         const res = NextResponse.json({
//             message: "user found",
//             success: true
//         })

//         res.cookies.set("token",token, 
//         {httpOnly:true})

//         return res;
//     } catch (error) {
//         console.log("POST ERROR", error)
//             return NextResponse.json({ error: error.message }, { status: 500 });
//     }
// }

// import { NextResponse } from "next/server";
// import { connect } from "../../../dbConfig/dbConfig.js";
// import { User } from "../../../models/User";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

// connect();

// export async function POST(request) {
//     try {
//         const { email, password } = await request.json();
//         console.log("email:", email, password);
//         if (!email || !password) {
//             return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
//         }
//         const user = await User.findOne({ email });
//         if (!user) {
//             return NextResponse.json({ error: "User not found" }, { status: 404 });
//         }
//         const invalidPassword = await bcrypt.compare(password, user.password);

//         if (!invalidPassword) {
//             return NextResponse.json({ error: "Invalid credentials" }, { status: 400 });
//         }

//         const tokenPayload = { user: user._id };

//         const token = jwt.sign(tokenPayload, process.env.SECRET, { expiresIn: "1hr" });

//         const res = NextResponse.json({
//             message: "User found",
//             success: true
//         });

//         res.cookies.set("token", token, { httpOnly: true });

//         return res;
//     } catch (error) {
//         console.log("POST ERROR", error);
//         return NextResponse.json({ error: error.message }, { status: 500 });
//     }
// }


import { NextResponse } from "next/server";
import { connect } from "../../../dbConfig/dbConfig.js"; // Assuming a named export
import { User } from "../../../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(req) {
    try {
        await connect(); // Connect to database before proceeding

        const { email, password } = await req.json();
        console.log("Received data:", email, password); // Log received data

        // Input Validation (improved)
        if (!email || !password.trim()) { // Check for empty strings or whitespace in password
            return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        // Improved Password Comparison
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return NextResponse.json({ error: "Invalid credentials" }, { status: 400 });
        }

        const tokenPayload = { user: user._id };
        const token = jwt.sign(tokenPayload, process.env.SECRET, { expiresIn: "1hr" });
        console.log(token)
        const response = NextResponse.json({
            message: "Login successful",
            success: true,
            email:user.email,
            token:token,
        });

        response.cookies.set("token", token, {
            httpOnly: true, // Set HttpOnly flag for security
            secure: process.env.NODE_ENV === "production", // Set Secure flag only in production
            sameSite: "strict", // Set SameSite flag for better security
            maxAge: 3600, // Set cookie expiration to 1 hour in seconds
        });
        console.log(response)
        return response;
    } catch (error) {
        console.error("POST Error:", error);
        return NextResponse.json({ error: "An error occurred during login" }, { status: 500 });
    }
}

