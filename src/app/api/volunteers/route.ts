import { NextRequest, NextResponse } from 'next/server';
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    if (!body.name || !body.email || !body.phone) return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    await new Promise((resolve) => setTimeout(resolve, 800));
    return NextResponse.json({ message: 'Volunteer registered successfully!', data: { name: body.name, role: 'volunteer' } }, { status: 201 });
  } catch {
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
