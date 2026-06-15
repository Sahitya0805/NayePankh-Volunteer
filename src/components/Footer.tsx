import Link from 'next/link';
import { Heart, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" fill="currentColor" />
              </div>
              <span className="text-lg font-bold text-white">Naye<span className="text-blue-400">Pankh</span></span>
            </div>
            <p className="text-sm leading-relaxed mb-4">UP Government, 80G & 12A Registered NGO. Uplifting underprivileged people and making society a better place for all.</p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-blue-400" /> contact@nayepankh.com</div>
              <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-blue-400" /> +91-8318500748</div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="/#programs" className="hover:text-blue-400 transition-colors">Our Programs</Link></li>
              <li><Link href="/donate" className="hover:text-blue-400 transition-colors">Donate</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-blue-400 transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/certificates" className="hover:text-blue-400 transition-colors">Our Certificates</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Join Our Team</h4>
            <p className="text-sm mb-4">"If we all do something, then together there is no problem that we cannot solve!"</p>
            <Link href="/register" className="inline-flex items-center text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors">
              Become a Volunteer <span className="ml-1">→</span>
            </Link>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} NayePankh Foundation. All rights reserved.
        </div>
      </div>
    </footer>
  );
}