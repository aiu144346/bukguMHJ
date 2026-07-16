import React, { useState, useEffect } from 'react';
import { X, ExternalLink, ClipboardCheck, MapPin } from 'lucide-react';

export default function SympathyMeetingPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hideUntil = localStorage.getItem('hideSympathyPopupUntil');
    const now = new Date().getTime();
    if (!hideUntil || now > parseInt(hideUntil, 10)) {
      // 500ms delay to make it feel smooth after page load
      const timer = setTimeout(() => setIsOpen(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleHide24h = () => {
    const now = new Date().getTime();
    const until = now + 24 * 60 * 60 * 1000; // 24 hours
    localStorage.setItem('hideSympathyPopupUntil', until.toString());
    setIsOpen(false);
  };

  const handleGoDetails = (e: React.MouseEvent) => {
    e.preventDefault();
    if ((window as any).customNavigate) {
      (window as any).customNavigate('/committee/sympathy-meeting');
    } else {
      window.history.pushState({}, '', '/committee/sympathy-meeting');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/50 backdrop-blur-xs md:bg-transparent md:backdrop-blur-none md:p-0 md:top-auto md:left-auto md:right-6 md:bottom-6 md:w-[380px] md:h-auto animate-fade-in-up">
      {/* Mobile-only backdrop click close */}
      <div className="absolute inset-0 md:hidden -z-10" onClick={handleClose} />

      {/* Popup Content Card */}
      <div className="relative bg-white rounded-3xl w-full max-w-sm md:max-w-none overflow-hidden shadow-2xl border border-slate-100 flex flex-col pointer-events-auto transform transition-all duration-300 scale-100">
        
        {/* Close Button Header */}
        <button 
          onClick={handleClose}
          aria-label="닫기"
          className="absolute top-4 right-4 z-20 p-2 bg-slate-950/40 hover:bg-slate-950/60 text-white rounded-full transition cursor-pointer"
        >
          <X className="h-4.5 w-4.5" />
        </button>

        {/* Thumbnail Image Section */}
        <div 
          onClick={handleGoDetails}
          className="relative aspect-[16/10] bg-slate-50 cursor-pointer overflow-hidden group shrink-0 border-b border-slate-100"
        >
          <img 
            src="/images/bukgu_map_thumbnail.png" 
            alt="공감간담회 안내 지도" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-violet-600/90 text-[10px] font-extrabold tracking-wide border border-violet-400/30 uppercase">
              구민참여인수위원회
            </span>
            <h4 className="text-base font-black leading-snug mt-2 text-white drop-shadow-sm">
              민선9기 북구청장 「공감간담회」 개최
            </h4>
          </div>
        </div>

        {/* Text Details Section */}
        <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <p className="text-xs font-extrabold text-[#1E3A8A] tracking-wider">
              📢 참석 수요조사 및 임명장 수여식 안내
            </p>
            <h3 className="text-sm font-black text-slate-800 leading-relaxed">
              구민의 목소리로 채워질 민선9기 부산 북구의 첫걸음에 위원님들의 많은 참여 부탁드립니다.
            </h3>
            
            {/* Event Info Bullet points */}
            <div className="mt-3 bg-slate-50 rounded-xl p-3 border border-slate-100 text-xs text-slate-650 space-y-1.5 font-bold">
              <div className="flex items-start gap-1.5 text-slate-800">
                <MapPin className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span>장소: <strong>구포2동 행정복지센터 4층 어울림터(강당)</strong></span>
                  <p className="text-[10px] text-slate-500 font-normal mt-0.5">부산광역시 북구 낙동북로681번길 23</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-slate-800">
                <ClipboardCheck className="h-3.5 w-3.5 text-[#1E3A8A] shrink-0" />
                <span>대상: 구민참여인수위원회 위원 전원</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2.5 pt-2">
            <button
              onClick={handleGoDetails}
              className="flex items-center justify-center py-3 bg-slate-100 hover:bg-slate-200/80 text-slate-800 font-extrabold text-xs sm:text-sm rounded-xl transition cursor-pointer"
            >
              상세 안내 보기
            </button>
            <a
              href="https://forms.gle/JoHh8GAgSiUJcn679"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1 py-3 bg-[#1E3A8A] hover:bg-blue-900 text-white font-extrabold text-xs sm:text-sm rounded-xl transition shadow-md shadow-blue-900/10"
            >
              참석 신청하기 <ExternalLink className="h-3.5 w-3.5 shrink-0" />
            </a>
          </div>
        </div>

        {/* Footer controls: 24h Hide / Close */}
        <div className="bg-slate-50 border-t border-slate-100 px-4 py-3 flex justify-between items-center text-xs font-bold text-slate-400 select-none">
          <button 
            onClick={handleHide24h}
            className="hover:text-slate-600 transition cursor-pointer flex items-center gap-1"
          >
            오늘 하루 보지 않기
          </button>
          <button 
            onClick={handleClose}
            className="hover:text-slate-600 transition cursor-pointer"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
