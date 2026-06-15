import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/landing/HeroSection';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const programs = [
  { id: 1, title: 'Education for All', desc: 'Providing free quality education and study materials to underprivileged children in urban slums.', location: 'Kanpur, UP', date: 'Ongoing', image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop&q=80' },
  { id: 2, title: 'Health & Hygiene Camps', desc: 'Organizing free medical checkups, blood donation drives, and hygiene awareness workshops.', location: 'Ghaziabad, UP', date: 'Monthly', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80' },
  { id: 3, title: 'Skill Development', desc: 'Empowering youth with vocational training in computer literacy, tailoring, and handicrafts.', location: 'Multiple Cities', date: 'Ongoing', image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80' }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <section id="about" className="py-20 bg-white border-y border-stone-200">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&auto=format&fit=crop&q=80" alt="About NayePankh" className="rounded-2xl shadow-xl" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">Think Global, Act Local.</h2>
                <p className="text-lg text-stone-600 leading-relaxed mb-6">
                  "NayePankh Foundation" is a non-governmental organization with a strong desire to help society and make it a better place for all. By doing everything in our power, and with your vital support, we can make our vision successful. 
                </p>
                <p className="text-lg text-stone-600 leading-relaxed mb-8">
                  Service to mankind is the service to god. Let's revolutionise the society together!
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-800 rounded-lg font-bold">
                  UP Government, 80G & 12A Registered
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="programs" className="py-20 bg-stone-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">Our Core Programs</h2>
              <p className="text-stone-600">We are one of the biggest student-led NGOs in India, with operations extended in Kanpur, Ghaziabad, and various other cities.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {programs.map((p) => (
                <div key={p.id} className="np-card overflow-hidden flex flex-col">
                  <img src={p.image} alt={p.title} className="w-full h-48 object-cover" />
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-stone-900 mb-2">{p.title}</h3>
                    <p className="text-stone-600 text-sm mb-4 flex-1">{p.desc}</p>
                    <div className="space-y-2 mb-6 text-sm text-stone-500">
                      <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-emerald-700" /> {p.location}</div>
                      <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-emerald-700" /> {p.date}</div>
                    </div>
                    <Link href="/register" className="inline-flex items-center justify-center w-full rounded-full font-bold transition-all duration-200 h-10 px-4 text-sm bg-emerald-700 text-white hover:bg-emerald-800 group cursor-pointer">
                      Join this Cause <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-emerald-800 text-white text-center">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-relaxed">"If we all do something, then together there is no problem that we cannot solve!"</h2>
            <p className="text-emerald-100 mb-8 text-lg font-medium">- Prashant Shukla, Founder & President</p>
            <Link href="/register" className="inline-flex items-center justify-center rounded-full font-bold bg-amber-600 text-white hover:bg-amber-700 transition-all h-12 px-8 shadow-lg cursor-pointer">Join Our Team Today</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
