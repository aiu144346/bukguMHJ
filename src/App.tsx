import { useState, useEffect } from 'react';
import Header from './components/Header';
import Greeting from './components/Greeting';
import ActivityBoard from './components/ActivityBoard';
import SnsChannels from './components/SnsChannels';
import Footer from './components/Footer';
import ArticleDetail from './components/ArticleDetail';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import Directions from './components/Directions';
import PressDetail from './components/PressDetail';
import WelfareHealthDetail from './components/WelfareHealthDetail';
import MobileAppLayout from './components/MobileAppLayout';
import NewsDay4Detail from './components/NewsDay4Detail';
import NewsDay5Detail from './components/NewsDay5Detail';
import NewsDay6Detail from './components/NewsDay6Detail';
import CommitteeQA from './components/CommitteeQA';
import CommitteeProposals from './components/CommitteeProposals';
import CommitteeProposalsPart2 from './components/CommitteeProposalsPart2';
import CommitteeProposalsPart3 from './components/CommitteeProposalsPart3';
import CommitteeProposalsPart4 from './components/CommitteeProposalsPart4';
import SympathyMeetingDetail from './components/SympathyMeetingDetail';
import SympathyMeetingPopup from './components/SympathyMeetingPopup';


function VerticalTicker() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const notices = [
    "부산 북구의 도약을 위해 구민 정책 제안을 상시 접수하고 있습니다.",
    "전국 최초! '구민참여인수위원회'를 구성하여 주민 중심 구정을 실현합니다.",
    "인수위원회 공식 제막식 진행 및 분과별 업무보고 본격 가동!"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % notices.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#1E3A8A] text-white border-t border-blue-900 py-3 overflow-hidden shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-3">
        <span className="bg-red-500 text-white text-xs px-2.5 py-1 rounded font-extrabold animate-pulse shrink-0 shadow-md">공지</span>
        <div className="h-6 overflow-hidden relative flex-1">
          <div 
            className="absolute w-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateY(-${currentIndex * 24}px)` }}
          >
            {notices.map((notice, idx) => (
              <div key={idx} className="h-6 flex items-center text-sm sm:text-base font-semibold truncate text-blue-50">
                {notice}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [path, setPath] = useState(window.location.pathname);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleLocationChange = () => {
      setPath(window.location.pathname);
    };
    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const navigate = (to: string) => {
    window.history.pushState({}, '', to);
    setPath(to);
    window.scrollTo(0, 0);
  };

  // Expose navigation globally for React components
  (window as any).customNavigate = navigate;

  if (isMobile) {
    return <MobileAppLayout />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      {/* Accessibility Skip Nav Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-[100] focus:bg-yellow-400 focus:text-gray-950 focus:p-4 focus:font-bold focus:underline"
      >
        본문 바로가기
      </a>

      {/* Responsive Navigation Header */}
      <Header />

      {/* Main Content Sections */}
      <main id="main-content" className="flex-grow">
        <div key={path} className="route-fade-in-up">
          {path === '/news/insu-report-day2' ? (
            <ArticleDetail />
          ) : path === '/news/insu-welfare-health' ? (
            <WelfareHealthDetail />
          ) : path === '/news/insu-report-day4' ? (
            <NewsDay4Detail />
          ) : path === '/news/insu-report-day5' ? (
            <NewsDay5Detail />
          ) : path === '/news/insu-report-day6' ? (
            <NewsDay6Detail />
          ) : path === '/privacy' ? (
            <PrivacyPolicy />
          ) : path === '/terms' ? (
            <TermsOfService />
          ) : path === '/map' ? (
            <Directions />
          ) : path === '/press/insu-committee-launch' ? (
            <PressDetail />
          ) : path === '/committee/qa' ? (
            <CommitteeQA />
          ) : path === '/committee/proposals' ? (
            <CommitteeProposals />
          ) : path === '/committee/proposals-part2' ? (
            <CommitteeProposalsPart2 />
          ) : path === '/committee/proposals-part3' ? (
            <CommitteeProposalsPart3 />
          ) : path === '/committee/proposals-part4' ? (
            <CommitteeProposalsPart4 />
          ) : path === '/committee/sympathy-meeting' ? (
            <SympathyMeetingDetail />
          ) : (
            <>
              {/* Banner Announcement Bar */}
              <VerticalTicker />

              {/* 1. Greeting Section */}
              <Greeting />

              {/* 2. Real-time Activity Bulletin Board */}
              <ActivityBoard />

              {/* 3. Youtube Embed & SNS Link Cards */}
              <SnsChannels />
            </>
          )}
        </div>
      </main>

      {/* Footer Details */}
      <Footer />

      {/* Sympathy Meeting attendance survey popup modal */}
      {path === '/' && <SympathyMeetingPopup />}
    </div>
  );
}

export default App;
