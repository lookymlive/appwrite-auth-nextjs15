import { signUp } from "@/actions/auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const formData = new FormData();
    
    // Add the form fields from the request body
    formData.append("username", body.username);
    formData.append("email", body.email);
    formData.append("password", body.password);

    const result = await signUp(formData);
    
    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Something went wrong" },
      { status: 500 }
    );
  }
}
