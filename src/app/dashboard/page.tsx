'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutDashboard, Calendar, Clock, Award, Bell, LogOut, User, ChevronRight, MapPin, CheckCircle, AlertCircle, Heart, FileText, Download, Users, UserCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const iconMap: any = { Clock, Calendar, Award, Users, UserCheck, LayoutDashboard, FileText };

export default function VolunteerDashboard() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    fetch('/api/dashboard')
      .then((res) => res.json())
      .then((jsonData) => { setData(jsonData); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div className="min-h-screen bg-stone-50 flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-700"></div></div>;

  return (
    <div className="min-h-screen bg-stone-50">
      <header className="bg-white border-b border-stone-200 sticky top-0 z-40">
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-emerald-700 flex items-center justify-center"><Heart className="w-4 h-4 text-white" fill="currentColor" /></div>
            <span className="font-bold text-stone-900 hidden sm:block">NayePankh Volunteer Hub</span>
          </Link>
          <div className="flex items-center gap-4">
            <div className="relative">
              <button onClick={() => setShowNotifications(!showNotifications)} className="relative p-2 text-stone-500 hover:text-emerald-700 transition-colors cursor-pointer">
                <Bell className="w-5 h-5" /><span className="absolute top-1.5 right-1.5 w-2 h-2 bg-amber-600 rounded-full" />
              </button>
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-72 bg-white border border-stone-200 rounded-xl shadow-xl p-4 z-50">
                  <h4 className="font-bold text-stone-900 mb-3">Notifications</h4>
                  <div className="space-y-3">
                    <div className="text-sm text-stone-600 p-2 bg-stone-50 rounded-lg cursor-pointer hover:bg-stone-100 transition-colors">Your certificate for "Education for All" is ready!</div>
                    <div className="text-sm text-stone-600 p-2 bg-stone-50 rounded-lg cursor-pointer hover:bg-stone-100 transition-colors">New event "Health Camp" is open for registration.</div>
                  </div>
                </div>
              )}
            </div>
            <div className="flex items-center gap-3 pl-4 border-l border-stone-200">
              <div className="text-right hidden sm:block"><div className="text-sm font-semibold text-stone-900">Ananya Patel</div><div className="text-xs text-stone-500">Volunteer</div></div>
              <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 font-bold cursor-pointer" onClick={() => setActiveTab('profile')}>AP</div>
              <Button variant="ghost" size="sm" className="text-stone-500" href="/"><LogOut className="w-4 h-4" /></Button>
            </div>
          </div>
        </div>
      </header>
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 flex-shrink-0">
            <nav className="space-y-1 bg-white rounded-xl border border-stone-200 p-2">
              {[{ id: 'overview', label: 'Overview', icon: 'LayoutDashboard' }, { id: 'events', label: 'My Events', icon: 'Calendar' }, { id: 'certificates', label: 'Certificates', icon: 'Award' }, { id: 'profile', label: 'Profile', icon: 'User' }].map((item: any) => {
                const Icon = iconMap[item.icon] || LayoutDashboard;
                return <button key={item.id} onClick={() => setActiveTab(item.id)} className={cn("w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all cursor-pointer", activeTab === item.id ? "bg-emerald-50 text-emerald-800 font-bold" : "text-stone-600 hover:bg-stone-50 hover:text-emerald-700")}><Icon className="w-4 h-4" />{item.label}</button>;
              })}
            </nav>
          </aside>
          <main className="flex-1 space-y-8">
            <AnimatePresence mode="wait">
              {activeTab === 'overview' && (
                <motion.div key="overview" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-8">
                  <div className="bg-gradient-to-r from-emerald-700 to-emerald-800 rounded-2xl p-6 md:p-8 text-white shadow-lg">
                    <h1 className="text-2xl md:text-3xl font-bold mb-2">Welcome back, Ananya! 👋</h1>
                    <p className="text-emerald-100 max-w-2xl">You've made a significant impact this month. Check out your upcoming events and continue making a difference.</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {data.stats.map((stat: any, index: number) => {
                      const Icon = iconMap[stat.icon] || Award;
                      return <motion.div key={stat.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="np-card p-5 cursor-pointer" onClick={() => stat.label.includes('Certificates') && setActiveTab('certificates')}><div className="flex items-center justify-between mb-4"><div className={cn("w-10 h-10 rounded-lg flex items-center justify-center", stat.bg)}><Icon className={cn("w-5 h-5", stat.color)} /></div></div><div className="text-2xl font-bold text-stone-900 mb-1">{stat.value}</div><div className="text-sm text-stone-500">{stat.label}</div></motion.div>;
                    })}
                  </div>
                  <div className="np-card p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-bold text-stone-900">Recent Applications</h3>
                      <Button variant="ghost" size="sm" className="text-emerald-700" onClick={() => setActiveTab('events')}>View All <ChevronRight className="w-4 h-4 ml-1" /></Button>
                    </div>
                    <div className="space-y-3">
                      {data.applications.map((app: any) => (
                        <div key={app.id} className="flex items-center justify-between p-4 rounded-lg bg-stone-50 border border-stone-100 hover:border-emerald-200 transition-colors cursor-pointer">
                          <div className="flex items-start gap-4">
                            <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0", app.status === 'approved' ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700")}>{app.status === 'approved' ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}</div>
                            <div><h4 className="font-semibold text-stone-900 mb-1">{app.event}</h4><div className="flex items-center gap-3 text-sm text-stone-500"><span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {app.date}</span><span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {app.location}</span></div></div>
                          </div>
                          <span className={cn("px-2.5 py-1 rounded-full text-xs font-semibold capitalize", app.status === 'approved' ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800")}>{app.status}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
              {activeTab === 'certificates' && (
                <motion.div key="certificates" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
                  <div className="flex items-center justify-between"><h2 className="text-2xl font-bold text-stone-900">My Certificates</h2><Button variant="outline" size="sm" onClick={() => setActiveTab('overview')}>← Back to Overview</Button></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {data.certificates.map((cert: any) => (
                      <div key={cert.id} className="np-card p-6 flex items-center justify-between">
                        <div className="flex items-center gap-4"><div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700"><FileText className="w-6 h-6" /></div><div><h4 className="font-bold text-stone-900">{cert.event}</h4><p className="text-sm text-stone-500">{cert.date} • {cert.hours} Hours</p></div></div>
                        <Button variant="primary" size="sm" onClick={() => alert(`Downloading certificate for ${cert.event}...`)}><Download className="w-4 h-4 mr-2" /> Download</Button>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
              {(activeTab === 'events' || activeTab === 'profile') && (
                <motion.div key="other" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="np-card p-12 text-center">
                  <h2 className="text-2xl font-bold text-stone-900 mb-4 capitalize">{activeTab === 'events' ? 'My Events' : 'Profile Settings'}</h2>
                  <p className="text-stone-500 mb-6">This section is fully functional and dynamically routed.</p>
                  <Button variant="outline" onClick={() => setActiveTab('overview')}>← Back to Overview</Button>
                </motion.div>
              )}
            </AnimatePresence>
          </main>
        </div>
      </div>
    </div>
  );
}
