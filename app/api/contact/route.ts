import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  console.log('Contact submission', data); // Placeholder for future integration
  return NextResponse.json({ ok: true });
}
