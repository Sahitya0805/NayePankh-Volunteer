import { NextResponse } from 'next/server';

export async function GET() {
  // Simulate database fetch delay
  await new Promise((resolve) => setTimeout(resolve, 800));
  
  return NextResponse.json({
    stats: [
      { label: 'Hours Contributed', value: 42, icon: 'Clock', color: 'text-emerald-700', bg: 'bg-emerald-50' },
      { label: 'Events Attended', value: 8, icon: 'Calendar', color: 'text-amber-700', bg: 'bg-amber-50' },
      { label: 'Certificates Earned', value: 3, icon: 'Award', color: 'text-stone-700', bg: 'bg-stone-100' }
    ],
    applications: [
      { id: 1, event: 'Education for All', date: 'Aug 15, 2026', status: 'approved', location: 'Kanpur' },
      { id: 2, event: 'Health & Hygiene Camp', date: 'Sep 5, 2026', status: 'pending', location: 'Ghaziabad' }
    ],
    certificates: [
      { id: 1, event: 'Education for All', date: 'Aug 20, 2026', hours: 25 },
      { id: 2, event: 'Tree Plantation Drive', date: 'Sep 10, 2026', hours: 12 }
    ]
  });
}
