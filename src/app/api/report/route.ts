import { NextRequest, NextResponse } from 'next/server';
export async function POST() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return NextResponse.json({ message: 'Report generated successfully', data: { totalVolunteers: 2543, eventsConducted: 48 } }, { status: 200 });
}
