import { useState, useEffect, useRef } from 'react';
import type { MouseEvent } from 'react';
import { Menu, X, ClipboardCheck } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const observerRef = useRef<IntersectionObserver | null>(null);

  const navItems = [
    { label: '당선인 인사말', href: '#greeting' },
    { label: '활동 소식통', href: '#activities' },
    { label: '소통 채널', href: '#sns' },
  ];

  useEffect(() => {
    // Setup Intersection Observer for Scroll Spy
    const sections = ['greeting', 'activities', 'sns'];
    const elements = sections.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    }, {
      rootMargin: '-80px 0px -60% 0px', // Trigger when section occupies the upper-middle of viewport
      threshold: 0.1
    });

    elements.forEach(el => observerRef.current?.observe(el));

    // Fallback: Check scroll position if scroll hits top
    const handleScrollFallback = () => {
      if (window.scrollY < 100) {
        setActiveSection('');
      }
    };
    window.addEventListener('scroll', handleScrollFallback);

    return () => {
      elements.forEach(el => observerRef.current?.unobserve(el));
      window.removeEventListener('scroll', handleScrollFallback);
    };
  }, []);

  const handleScroll = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
      setActiveSection(href);
    }
  };

  return (
    <header className="sticky top-0 z-45 w-full bg-white/95 backdrop-blur-md text-gray-800 border-b border-slate-100/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        
        {/* Logo and Brand Title */}
        <div
          onClick={(e) => {
            e.preventDefault();
            if ((window as any).customNavigate) {
              (window as any).customNavigate('/');
            } else {
              window.location.pathname = '/';
            }
          }}
          className="flex items-center gap-3 cursor-pointer select-none group"
        >
          <div>
            <h1 
              className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl leading-tight transition duration-300 group-hover:text-[#1E3A8A]"
              style={{ fontFamily: "'Gowun Batang', serif" }}
            >
              정명희 부산 북구청장 당선인
            </h1>
            <p 
              className="text-xs text-[#1E3A8A] sm:text-sm font-bold tracking-wide mt-0.5"
              style={{ fontSize: '1.15em', fontFamily: "'Gowun Batang', serif" }}
            >
              인수위원회 소통 홈페이지
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className={`px-5 py-2.5 text-base font-extrabold transition-all duration-300 ease-out relative group ${
                activeSection === item.href
                  ? 'text-[#1E3A8A]'
                  : 'text-slate-600 hover:text-[#1E3A8A]'
              }`}
            >
              {item.label}
              {/* Sliding / Expanding Underline Accent */}
              <span className={`absolute bottom-0 left-0 h-0.5 bg-[#1E3A8A] transition-all duration-300 ease-out ${
                activeSection === item.href 
                  ? 'w-full opacity-100' 
                  : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-50'
              }`} />
            </a>
          ))}
          <a
            href="https://forms.gle/QMTcmjm9YZscTMav6"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-6 flex items-center gap-2 rounded-xl bg-[#1E3A8A] text-white px-5 py-3 text-base font-extrabold transition-all duration-300 min-h-[44px] shadow-lg shadow-blue-900/10 hover:bg-[#152a64] hover:shadow-xl hover:shadow-blue-900/20 active:scale-98 animate-soft-pulse"
          >
            <ClipboardCheck className="h-4.5 w-4.5" />
            구민참여인수위원회 신청
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(true)}
            type="button"
            className="inline-flex items-center justify-center rounded-xl p-2.5 text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition focus:outline-none min-w-[44px] min-h-[44px] border border-slate-200"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">메뉴 열기</span>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Backdrop Overlay */}
      <div 
        className={`fixed inset-0 z-50 bg-slate-950/50 backdrop-blur-md transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Sliding Drawer */}
      <div 
        className={`fixed top-0 right-0 z-50 h-full w-[300px] bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] transform md:hidden flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        id="mobile-menu"
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
          <span className="text-lg font-black text-slate-950">소통 메뉴</span>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-xl hover:bg-slate-100 text-slate-500 hover:text-slate-950 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="flex-1 space-y-2 px-5 py-6 overflow-y-auto">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className={`block rounded-xl px-4 py-3.5 text-lg font-bold transition-all duration-150 min-h-[48px] ${
                activeSection === item.href
                  ? 'text-[#1E3A8A] bg-blue-50/70'
                  : 'text-slate-700 hover:text-[#1E3A8A] hover:bg-slate-50'
              }`}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-6 border-t border-slate-100 mt-4">
            <a
              href="https://forms.gle/QMTcmjm9YZscTMav6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#1E3A8A] text-white py-4 text-base font-extrabold transition-all shadow-lg shadow-blue-900/10 hover:bg-[#152a64] min-h-[48px] animate-soft-pulse"
            >
              <ClipboardCheck className="h-5 w-5" />
              구민참여인수위원회 신청
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
