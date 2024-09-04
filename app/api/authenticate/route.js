import { refreshAccessToken, checkUsers } from "../../utils/zohoAuth";
import { NextResponse } from "next/server";

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const phone = searchParams.get('phone');
    const pin = searchParams.get('pin');
    try {
        const acccess_token = await refreshAccessToken();
        const record = await checkUsers(phone, pin, acccess_token);
        return NextResponse.json({ record });
    } catch (error) {
        console.error('Error fetching record:', error);
        return NextResponse.error();
    }
}