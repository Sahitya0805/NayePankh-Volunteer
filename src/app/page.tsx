import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/landing/HeroSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        
        {/* About Section */}
        <section id="about" className="py-20 bg-slate-50 border-y border-slate-100">
          <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Think Global, Act Local</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              "NayePankh Foundation" is a non-governmental organization with a strong desire to help society and make it a better place for all. Service to mankind is the service to god. Let's revolutionize the society together!
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg font-semibold">
              UP Government, 80G & 12A Registered
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}