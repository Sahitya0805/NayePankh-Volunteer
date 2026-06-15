import { NextResponse } from 'next/server';

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 800));
  
  return NextResponse.json({
    metrics: [
      { label: 'Total Volunteers', value: 2543, change: '+12%', icon: 'Users', color: 'text-emerald-700', bg: 'bg-emerald-50' },
      { label: 'Active This Month', value: 1892, change: '+8%', icon: 'UserCheck', color: 'text-amber-700', bg: 'bg-amber-50' },
      { label: 'Events Conducted', value: 48, change: '+24%', icon: 'Calendar', color: 'text-stone-700', bg: 'bg-stone-100' },
      { label: 'Pending Applications', value: 156, change: '-5%', icon: 'Clock', color: 'text-red-700', bg: 'bg-red-50' }
    ],
    recentApplications: [
      { id: 1, name: 'Rahul Sharma', event: 'Education for All', date: '2 hours ago', status: 'pending' },
      { id: 2, name: 'Priya Singh', event: 'Health Camp', date: '5 hours ago', status: 'approved' },
      { id: 3, name: 'Amit Kumar', event: 'Skill Dev', date: '1 day ago', status: 'rejected' }
    ]
  });
}
