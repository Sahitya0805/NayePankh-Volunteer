'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, Users, Calendar, FileText, Settings, LogOut, TrendingUp, UserCheck, Clock, Download, Sparkles, CheckCircle, XCircle, Heart } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const iconMap: any = { Users, UserCheck, Calendar, Clock, LayoutDashboard, FileText, Settings };

export default function AdminDashboard() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);

  useEffect(() => {
    fetch('/api/admin')
      .then((res) => res.json())
      .then((jsonData) => {
        setData(jsonData);
        setLoading(false);
      });
  }, []);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => { setIsGenerating(false); setGenerated(true); setTimeout(() => setGenerated(false), 3000); }, 2000);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-700"></div>
          <p className="text-stone-500 font-medium">Loading organizational metrics...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <header className="bg-white border-b border-stone-200 sticky top-0 z-40">
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-emerald-700 flex items-center justify-center"><Heart className="w-4 h-4 text-white" fill="currentColor" /></div>
            <span className="font-bold text-stone-900 hidden sm:block">NayePankh Admin Portal</span>
          </Link>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 pl-4 border-l border-stone-200">
              <div className="text-right hidden sm:block"><div className="text-sm font-semibold text-stone-900">Admin User</div><div className="text-xs text-stone-500">Super Admin</div></div>
              <div className="w-9 h-9 rounded-full bg-stone-200 flex items-center justify-center text-stone-700 font-bold cursor-pointer">AD</div>
              <Button variant="ghost" size="sm" className="text-stone-500" href="/"><LogOut className="w-4 h-4" /></Button>
            </div>
          </div>
        </div>
      </header>
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 flex-shrink-0">
            <nav className="space-y-1 bg-white rounded-xl border border-stone-200 p-2">
              {[{ id: 'overview', label: 'Overview', icon: 'LayoutDashboard' }, { id: 'volunteers', label: 'Volunteers', icon: 'Users' }, { id: 'events', label: 'Events', icon: 'Calendar' }, { id: 'reports', label: 'Reports', icon: 'FileText' }, { id: 'settings', label: 'Settings', icon: 'Settings' }].map((item: any) => {
                const Icon = iconMap[item.icon] || LayoutDashboard;
                return (
                  <button key={item.id} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all cursor-pointer text-stone-600 hover:bg-stone-50 hover:text-emerald-700">
                    <Icon className="w-4 h-4" />{item.label}
                  </button>
                );
              })}
            </nav>
          </aside>
          <main className="flex-1 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div><h1 className="text-2xl font-bold text-stone-900">Dashboard Overview</h1><p className="text-stone-500">Monitor volunteer activity and organizational metrics.</p></div>
              <Button variant="primary" onClick={handleGenerate} isLoading={isGenerating} className="shadow-emerald-500/20">
                <Sparkles className="w-4 h-4 mr-2" />{generated ? 'Report Generated!' : 'Generate AI Monthly Report'}
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {data.metrics.map((metric: any, index: number) => {
                const Icon = iconMap[metric.icon] || Users;
                return (
                  <motion.div key={metric.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="np-card p-5 cursor-pointer">
                    <div className="flex items-center justify-between mb-4">
                      <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center", metric.bg)}><Icon className={cn("w-5 h-5", metric.color)} /></div>
                      <span className={cn("text-xs font-semibold flex items-center gap-1", metric.change.startsWith('+') ? "text-emerald-700" : "text-red-700")}>
                        <TrendingUp className={cn("w-3 h-3", metric.change.startsWith('-') && "rotate-180")} />{metric.change}
                      </span>
                    </div>
                    <div className="text-2xl font-bold text-stone-900 mb-1">{metric.value.toLocaleString()}</div>
                    <div className="text-sm text-stone-500">{metric.label}</div>
                  </motion.div>
                );
              })}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 np-card p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-stone-900">Volunteer Growth</h3>
                  <select className="bg-stone-50 border border-stone-200 rounded-lg px-3 py-1.5 text-sm text-stone-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 cursor-pointer">
                    <option>Last 6 Months</option><option>Last Year</option>
                  </select>
                </div>
                <div className="h-64 flex items-end justify-between gap-2 px-2">
                  {[40, 65, 45, 80, 55, 90, 75, 95, 85, 100, 90, 110].map((height, i) => (
                    <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${height}%` }} transition={{ duration: 0.5, delay: i * 0.05 }} className="flex-1 bg-emerald-100 hover:bg-emerald-200 rounded-t-sm transition-colors cursor-pointer relative group">
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-stone-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">{height * 25} volunteers</div>
                    </motion.div>
                  ))}
                </div>
                <div className="flex justify-between mt-4 text-xs text-stone-500 px-2"><span>Jan</span><span>Mar</span><span>May</span><span>Jul</span><span>Sep</span><span>Nov</span></div>
              </div>
              <div className="np-card p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-stone-900">Recent Applications</h3>
                  <Button variant="ghost" size="sm" className="text-emerald-700">View All</Button>
                </div>
                <div className="space-y-3">
                  {data.recentApplications.map((app: any) => (
                    <div key={app.id} className="p-3 rounded-lg bg-stone-50 border border-stone-100">
                      <div className="flex items-start justify-between mb-2">
                        <div><h4 className="font-semibold text-stone-900 text-sm">{app.name}</h4><p className="text-xs text-stone-500">{app.event}</p></div>
                        <span className={cn("px-2 py-0.5 rounded-full text-xs font-semibold capitalize", app.status === 'approved' ? "bg-emerald-100 text-emerald-800" : app.status === 'rejected' ? "bg-red-100 text-red-800" : "bg-amber-100 text-amber-800")}>{app.status}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-stone-500">{app.date}</span>
                        {app.status === 'pending' && (
                          <div className="flex gap-1">
                            <button className="p-1 rounded hover:bg-emerald-100 text-emerald-700 transition-colors cursor-pointer"><CheckCircle className="w-4 h-4" /></button>
                            <button className="p-1 rounded hover:bg-red-100 text-red-700 transition-colors cursor-pointer"><XCircle className="w-4 h-4" /></button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {generated && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} className="fixed bottom-6 right-6 z-50 bg-white border border-emerald-200 rounded-xl p-4 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center"><FileText className="w-5 h-5 text-emerald-700" /></div>
                <div><h4 className="font-semibold text-stone-900 text-sm">Monthly Report Generated</h4><p className="text-xs text-stone-500">AI analysis complete. Ready for download.</p></div>
                <Button variant="outline" size="sm" className="ml-4 cursor-pointer"><Download className="w-4 h-4 mr-1" />PDF</Button>
              </motion.div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
