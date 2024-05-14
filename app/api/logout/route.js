import { NextResponse } from "next/server"

export async function GET(){
    try {
        const res = NextResponse.json({
            message:""
        })
    } catch (error) {
        console.log("Delete", error)
    }
}