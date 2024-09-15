import { refreshAccessToken, createIssue } from "@/app/utils/zohoAuth";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const formData = await req.json();
        const access_token = await refreshAccessToken();
        const response = await createIssue(formData, access_token);
        console.log(response.data);
        return NextResponse.json(response.data);
    } catch (error) {
        console.error('Error creating issue:', error);
        return NextResponse.json('Error creating issue');
    }
}