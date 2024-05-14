// import { NextResponse } from "next/server";
// import { User } from "../../../models/User";
// import bcrypt from "bcrypt";
// import mongoose from "mongoose";

// export async function POST(req, res) {
//     await mongoose.connect(process.env.MONGODB_URI);
//     try {
//         const reqBody = await req.json();
       

//         const { email, password } = reqBody;
       
//         // Check if email and password are provided
//         if (!email) {
//             return NextResponse.json({ error: "Please provide an email" });
//         }
//         if (!password) {
//             return NextResponse.json({ error: "Please provide a password" });
//         }

//         const user = await User.findOne({ email });

//         if (!user) {
//             const pass = password;
            
//             if (!pass || pass.length < 5) {
//                 throw new Error("Password should be longer than 5", { cause: "SHORT_PASSWORD" });
//             }

//             const salt = bcrypt.genSaltSync(10);
//             const hashedPassword = bcrypt.hashSync(pass, salt);

//             const createUser = await User.create({ email, password: hashedPassword });
       
            
//             return NextResponse.json({
//                 message: "User account created successful"
//             });
//         }

//         return NextResponse.json("User already exists", { status: 409 });
//     } catch (error) {
//         console.log("Error in the POst:", error)
//         if (error === "SHORT_PASSWORD") {
//             return NextResponse.json({ error: error.message }, { status: 400 });
//         } else {
//             return NextResponse.json({ error: error.message }, { status: 500 });
//         }
//     }
// }

// export async function POST(req) {
//     await mongoose.connect(process.env.MONGODB_URI);
//     try {
//         const reqBody = await req.json();

//         const { email, password } = reqBody;

//         // Check if email and password are provided
//         if (!email) {
//             return NextResponse.json({ error: "Please provide an email" });
//         }
//         if (!password) {
//             return NextResponse.json({ error: "Please provide a password" });
//         }

//         const user = await User.findOne({ email });

//         if (!user) {
//             const pass = password;

//             if (!pass || pass.length < 5) {
//                 throw new Error("Password should be longer than 5", { cause: "SHORT_PASSWORD" });
//             }

//             const salt = bcrypt.genSaltSync(10);
//             const hashedPassword = bcrypt.hashSync(pass, salt);

//             const createUser = await User.create({ email, password: hashedPassword });

//             return NextResponse.json({
//                 message: "User account created successful"
//             });
//         }

//         return NextResponse.json("User already exists", { status: 409 });
//     } catch (error) {
//         console.log("Error in the POst:", error);
//         if (error.name === 'MongoError' && error.code === 11000) {
//             return NextResponse.json({ error: "Email already exists" }, { status: 409 });
//         } else if (error === "SHORT_PASSWORD") {
//             return NextResponse.json({ error: error.message }, { status: 400 });
//         } else {
//             console.error("Unexpected error:", error);
//             return NextResponse.json({ error: "An error occurred during registration. Please try again later." }, { status: 500 });
//         }
//     }
// }


import { NextResponse } from "next/server";
import { User } from "../../../models/User";
import bcrypt from "bcrypt";
import mongoose from "mongoose";

export async function POST(req, res) {
    await mongoose.connect(process.env.MONGODB_URI);
    try {
        const reqBody = await req.json();

        const { email, password } = reqBody;
       
        // Check if email and password are provided
        if (!email) {
            return NextResponse.json({ error: "Please provide an email" });
        }
        if (!password) {
            return NextResponse.json({ error: "Please provide a password" });
        }

        const user = await User.findOne({ email });

        if (!user) {
            const pass = password;
            
            if (!pass || pass.length < 5) {
                throw new Error("Password should be longer than 5", { cause: "SHORT_PASSWORD" });
            }

            const salt = bcrypt.genSaltSync(10);
            const hashedPassword = bcrypt.hashSync(pass, salt);

            const createUser = await User.create({ email, password: hashedPassword });
       
            return NextResponse.json({
                message: "User account created successful"
            });
        }

        return NextResponse.json({ error: "User already exists" }, { status: 409 });
    } catch (error) {
        console.log("Error in the POST:", error);
        if (error === "SHORT_PASSWORD") {
            return NextResponse.json({ error: error.message }, { status: 400 });
        } else {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
    }
}