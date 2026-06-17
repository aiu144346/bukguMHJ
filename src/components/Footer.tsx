
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#1E3A8A] text-white py-12 sm:py-16 border-t border-blue-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top footer row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-8 border-b border-blue-800">
          <div className="flex items-center gap-3">
            <div>
              <span className="block text-lg font-bold text-white">
                부산광역시 북구청장 인수위원회
              </span>
              <span className="block text-xs text-blue-200">
                주민과 함께 여는 북구의 새로운 내일
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-base">
            <a
              href="/privacy"
              onClick={(e) => {
                e.preventDefault();
                if ((window as any).customNavigate) {
                  (window as any).customNavigate('/privacy');
                } else {
                  window.location.pathname = '/privacy';
                }
              }}
              className="text-white hover:text-blue-200 hover:underline transition font-semibold min-h-[44px] flex items-center"
            >
              개인정보처리방침
            </a>
            <a
              href="/terms"
              onClick={(e) => {
                e.preventDefault();
                if ((window as any).customNavigate) {
                  (window as any).customNavigate('/terms');
                } else {
                  window.location.pathname = '/terms';
                }
              }}
              className="text-white hover:text-blue-200 hover:underline transition font-semibold min-h-[44px] flex items-center"
            >
              이용약관
            </a>
            <a
              href="/map"
              onClick={(e) => {
                e.preventDefault();
                if ((window as any).customNavigate) {
                  (window as any).customNavigate('/map');
                } else {
                  window.location.pathname = '/map';
                }
              }}
              className="text-white hover:text-blue-200 hover:underline transition font-semibold min-h-[44px] flex items-center"
            >
              찾아오시는 길
            </a>
          </div>
        </div>

        {/* Bottom footer row (Details and Address) */}
        <div className="mt-8 flex flex-col md:flex-row md:items-start md:justify-between gap-8 text-sm">
          <div className="space-y-3 max-w-2xl leading-relaxed text-blue-100">
            <p>
              (46547) 부산 북구 금곡대로46번길 50 부산북구문화예술회관 2층 인수위원회 사무실
            </p>
            <p>
              전화: <a href="tel:051-309-5463" className="hover:text-white underline">051-309-5463</a> &nbsp;|&nbsp; 
              이메일: <a href="mailto:bluerain1026@gmail.com" className="hover:text-white underline">bluerain1026@gmail.com</a>
            </p>
            <p className="text-xs text-blue-200">
              본 웹사이트는 부산광역시 북구청장 당선인 및 인수위원회의 공식 온라인 소통 센터로, 구민 의견 수집 및 투명한 소식 공유를 목적으로 비영리 운영됩니다.
            </p>
            <p className="text-xs text-blue-250 mt-4 text-blue-200">
              &copy; {new Date().getFullYear()} Busan Buk-gu Mayor-elect & transition committee. All Rights Reserved.
            </p>
          </div>

          {/* Scroll to Top button */}
          <button
            onClick={scrollToTop}
            type="button"
            className="self-center md:self-auto flex items-center justify-center gap-2 px-5 py-3.5 bg-blue-800 text-white rounded-xl hover:bg-blue-700 transition cursor-pointer min-h-[48px] min-w-[120px] font-bold text-base border border-blue-700"
            aria-label="화면 맨 위로 스크롤 이동"
          >
            맨 위로 <ArrowUp className="h-5 w-5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
