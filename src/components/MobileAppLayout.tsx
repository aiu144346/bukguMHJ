import { useState, useEffect } from 'react';
import { 
  Home, 
  Newspaper, 
  Share2, 
  MapPin, 
  ChevronRight, 
  Search, 
  X, 
  ExternalLink, 
  Video, 
  BookOpen, 
  MessageSquare, 
  Heart, 
  Compass, 
  Target, 
  ClipboardCheck, 
  Clock
} from 'lucide-react';
import { mockData } from './ActivityBoard';
import ArticleDetail from './ArticleDetail';
import WelfareHealthDetail from './WelfareHealthDetail';
import PressDetail from './PressDetail';
import NewsDay4Detail from './NewsDay4Detail';
import NewsDay5Detail from './NewsDay5Detail';
import NewsDay6Detail from './NewsDay6Detail';
import CommitteeQA from './CommitteeQA';
import CommitteeProposals from './CommitteeProposals';
import CommitteeProposalsPart2 from './CommitteeProposalsPart2';
import CommitteeProposalsPart3 from './CommitteeProposalsPart3';


export default function MobileAppLayout() {
  const [activeTab, setActiveTab] = useState<'home' | 'news' | 'sns' | 'map'>('home');
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<'all' | 'press' | 'media' | 'news' | 'committee' | 'schedule'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showGreeting, setShowGreeting] = useState(false);

  // Handle deep-linking on mount
  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/map') {
      setActiveTab('map');
    } else if (path === '/news/insu-report-day2') {
      setActiveTab('news');
      setSelectedItemId(5); // mockData ID for insu-report-day2
    } else if (path === '/news/insu-welfare-health') {
      setActiveTab('news');
      setSelectedItemId(11); // mockData ID for insu-welfare-health
    } else if (path === '/news/insu-report-day4') {
      setActiveTab('news');
      setSelectedItemId(17); // mockData ID for insu-report-day4
    } else if (path === '/news/insu-report-day5') {
      setActiveTab('news');
      setSelectedItemId(18); // mockData ID for insu-report-day5
    } else if (path === '/news/insu-report-day6') {
      setActiveTab('news');
      setSelectedItemId(19); // mockData ID for insu-report-day6
    } else if (path === '/press/insu-committee-launch') {
      setActiveTab('news');
      setSelectedItemId(10); // mockData ID for insu-committee-launch
    } else if (path === '/committee/qa') {
      setActiveTab('news');
      setSelectedItemId(101);
    } else if (path === '/committee/proposals') {
      setActiveTab('news');
      setSelectedItemId(100); // mockData ID for committee-proposals
    } else if (path === '/committee/proposals-part2') {
      setActiveTab('news');
      setSelectedItemId(102); // mockData ID for committee-proposals-part2
    } else if (path === '/committee/proposals-part3') {
      setActiveTab('news');
      setSelectedItemId(103); // mockData ID for committee-proposals-part3
    }
  }, []);

  // Listen to popstate for handling browser back/forward button natively
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/' || path === '') {
        setSelectedItemId(null);
      } else if (path === '/map') {
        setActiveTab('map');
        setSelectedItemId(null);
      } else if (path === '/news/insu-report-day2') {
        setSelectedItemId(5);
      } else if (path === '/news/insu-welfare-health') {
        setSelectedItemId(11);
      } else if (path === '/news/insu-report-day4') {
        setSelectedItemId(17);
      } else if (path === '/news/insu-report-day5') {
        setSelectedItemId(18);
      } else if (path === '/news/insu-report-day6') {
        setSelectedItemId(19);
      } else if (path === '/press/insu-committee-launch') {
        setSelectedItemId(10);
      } else if (path === '/committee/qa') {
        setSelectedItemId(101);
      } else if (path === '/committee/proposals') {
        setSelectedItemId(100);
      } else if (path === '/committee/proposals-part2') {
        setSelectedItemId(102);
      } else if (path === '/committee/proposals-part3') {
        setSelectedItemId(103);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const openItemDetails = (id: number) => {
    const item = mockData.find(i => i.id === id);
    if (item && item.linkUrl && !item.linkUrl.startsWith('/')) {
      window.open(item.linkUrl, '_blank', 'noopener,noreferrer');
      return;
    }
    setSelectedItemId(id);
    // If it's a local route, update history without reload
    if (item && item.linkUrl && item.linkUrl.startsWith('/')) {
      window.history.pushState({}, '', item.linkUrl);
    }
  };

  const closeItemDetails = () => {
    setSelectedItemId(null);
    window.history.pushState({}, '', '/');
  };

  // Get selected item
  const selectedItem = mockData.find((item) => item.id === selectedItemId);

  // Filtered news for News Tab
  const filteredNews = mockData
    .filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => b.date.localeCompare(a.date));

  const latestNews = [...mockData]
    .filter(item => item.category !== 'schedule')
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 5);

  // Announcement Rolling Ticker state
  const [noticeIndex, setNoticeIndex] = useState(0);
  const notices = [
    "부산 북구의 도약을 위해 구민 정책 제안을 상시 접수합니다.",
    "전국 최초! '구민참여인수위원회' 주민 모집을 실시합니다.",
    "인수위원회 현판 제막식 진행 및 부서별 실무보고 본격 개시!"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setNoticeIndex((prev) => (prev + 1) % notices.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // SNS links
  const socialLinks = [
    { name: '공식 유튜브 채널', desc: '인수위원회 공식 브리핑 영상', icon: Video, color: 'bg-red-50 text-red-600 border-red-100', hoverBg: 'bg-red-600 text-white', href: 'https://www.youtube.com/@tv5493' },
    { name: '네이버 블로그', desc: '일일 의정 및 현장 행보 스케치', icon: BookOpen, color: 'bg-emerald-50 text-emerald-600 border-emerald-100', hoverBg: 'bg-emerald-600 text-white', href: 'https://blog.naver.com/bukgu_jmh' },
    { name: '공식 페이스북', desc: '주민 소통용 메시지 및 사진', icon: MessageSquare, color: 'bg-blue-50 text-blue-600 border-blue-100', hoverBg: 'bg-blue-600 text-white', href: 'https://www.facebook.com/profile.php?id=61580792288586' },
    { name: '공식 인스타그램', desc: '친근한 대구민 비주얼 공유', icon: Heart, color: 'bg-pink-50 text-pink-600 border-pink-100', hoverBg: 'bg-pink-600 text-white', href: 'https://www.instagram.com/myeonghyi.j?igsh=bWhtdW41NXZmOG5o' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pb-20 select-none">
      {/* Sticky Top Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 px-4 py-3 shadow-[0_1px_8px_rgba(0,0,0,0.03)] flex justify-between items-center">
        <div>
          <h1 className="text-base font-black text-slate-900 tracking-tight" style={{ fontFamily: "'Gowun Batang', serif" }}>
            정명희 부산 북구청장
          </h1>
          <p className="text-[10px] text-[#1E3A8A] font-bold tracking-wider" style={{ fontFamily: "'Gowun Batang', serif" }}>
            인수위원회 모바일 소통관
          </p>
        </div>
        <a 
          href="https://forms.gle/QMTcmjm9YZscTMav6"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs bg-[#1E3A8A] text-white px-3 py-1.5 rounded-lg font-bold flex items-center gap-1 shadow-sm shadow-blue-900/10 active:scale-95 transition-all"
        >
          <ClipboardCheck className="h-3.5 w-3.5" />
          신청하기
        </a>
      </header>

      {/* Main Tab Views */}
      <main className="flex-1 overflow-x-hidden animate-fade-in-up">
        {/* TAB 1: HOME */}
        {activeTab === 'home' && (
          <div className="space-y-5 px-4 py-4">
            {/* Notice Rolling Ticker */}
            <div className="bg-[#1E3A8A] text-white py-2 px-3 rounded-xl flex items-center gap-2.5 shadow-sm">
              <span className="bg-red-500 text-[10px] text-white px-2 py-0.5 rounded font-black shrink-0 animate-pulse">공지</span>
              <div className="h-5 overflow-hidden relative flex-1">
                <div 
                  className="absolute w-full transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateY(-${noticeIndex * 20}px)` }}
                >
                  {notices.map((n, idx) => (
                    <div key={idx} className="h-5 flex items-center text-xs font-bold truncate text-blue-50">
                      {n}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Hero Vision Widget */}
            <div className="bg-gradient-to-br from-[#1E3A8A] to-blue-900 text-white rounded-2xl p-5 shadow-md relative overflow-hidden">
              <div className="absolute right-0 bottom-0 opacity-15 pointer-events-none">
                <Compass className="h-32 w-32 translate-x-6 translate-y-6" />
              </div>
              <span className="text-[10px] font-bold tracking-widest text-blue-200 uppercase bg-blue-950/40 px-2.5 py-1 rounded-full border border-blue-800/30">제9대 부산광역시 북구청장 정명희</span>
              <h2 className="text-xl font-black mt-3 leading-snug">
                "구민과 함께,<br />미래를 여는 북구"
              </h2>
              <p className="text-xs text-blue-100/80 mt-2 font-medium leading-relaxed">
                민선 9기는 북구의 장점을 살리고 단점을 보완해 새로운 도약의 길을 열어 나가겠습니다. 구민의 목소리를 구정의 출발점으로 삼고 소통과 신뢰의 행정을 펼치겠습니다.
              </p>
              <div className="mt-4 flex gap-4 pt-2 border-t border-white/10 text-[11px] text-blue-200 font-bold">
                <span className="flex items-center gap-1"><Compass className="h-3.5 w-3.5 text-yellow-400" /> 내 삶이 힘이 되는 북구</span>
                <span className="flex items-center gap-1"><Target className="h-3.5 w-3.5 text-emerald-400" /> 일자리·교육·복지 혁신</span>
              </div>
            </div>

            {/* Quick Actions Grid */}
            <div className="grid grid-cols-2 gap-3.5">
              <a 
                href="https://forms.gle/QMTcmjm9YZscTMav6"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-slate-100 p-4 rounded-2xl flex flex-col justify-between shadow-sm active:scale-98 transition"
              >
                <div className="h-9 w-9 bg-blue-50 rounded-xl flex items-center justify-center text-[#1E3A8A]">
                  <ClipboardCheck className="h-5 w-5" />
                </div>
                <div className="mt-4">
                  <span className="block text-xs text-slate-400 font-bold">인수위 동참</span>
                  <span className="block text-sm font-black text-slate-800 mt-0.5">구민참여단 신청</span>
                </div>
              </a>
              <button 
                onClick={() => setActiveTab('map')}
                className="bg-white border border-slate-100 p-4 rounded-2xl flex flex-col justify-between shadow-sm active:scale-98 transition text-left"
              >
                <div className="h-9 w-9 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="mt-4">
                  <span className="block text-xs text-slate-400 font-bold">오시는 길</span>
                  <span className="block text-sm font-black text-slate-800 mt-0.5">사무실 위치 안내</span>
                </div>
              </button>
            </div>

            {/* Quick Welcome Banner with Photo */}
            <div 
              onClick={() => setShowGreeting(true)}
              className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm flex items-center gap-4 cursor-pointer active:scale-98 transition mt-2"
            >
              <div className="h-14 w-14 rounded-full overflow-hidden shrink-0 border border-slate-200">
                <img 
                  src="/images/candidate.png" 
                  alt="정명희 당선인" 
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="flex-1 min-w-0">
                <span className="block text-xs text-slate-400 font-bold">인사말씀</span>
                <p className="text-xs font-bold text-slate-700 leading-relaxed mt-0.5 line-clamp-2" style={{ fontFamily: '"Nanum Pen Script", cursive', fontSize: '1.4em' }}>
                  "언제나 현장에서 구민과 함께 호흡하는 자랑스러운 북구 시대를 열겠습니다."
                </p>
              </div>
            </div>

            {/* Latest News Snapshot Widget */}
            <div className="space-y-3 mt-5">
              <div className="flex justify-between items-center px-1">
                <h3 className="text-base font-black text-slate-900">최신 인수위 소식</h3>
                <button 
                  onClick={() => setActiveTab('news')}
                  className="text-xs text-[#1E3A8A] font-bold flex items-center"
                >
                  전체보기 <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              <div className="space-y-3">
                {latestNews.map((item) => (
                  <div 
                    key={item.id}
                    onClick={() => openItemDetails(item.id)}
                    className="bg-white border border-slate-100 p-4 rounded-2xl flex gap-3 shadow-sm active:bg-slate-50 transition cursor-pointer"
                  >
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <span className="inline-block bg-blue-50 text-blue-800 text-[10px] px-2 py-0.5 rounded-md font-bold mb-1.5">
                          {item.category === 'press' ? '보도자료' : '인수위 소식'}
                        </span>
                        <h4 className="text-sm font-black text-slate-900 leading-snug truncate">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                          {item.excerpt}
                        </p>
                      </div>
                      <span className="block text-[10px] text-slate-350 mt-2 flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {item.date}
                      </span>
                    </div>
                    {item.imageUrl && (
                      <div className="h-16 w-16 rounded-xl overflow-hidden shrink-0 border border-slate-100">
                        <img src={item.imageUrl} alt="" className="h-full w-full object-cover" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: NEWS BOARD */}
        {activeTab === 'news' && (
          <div className="space-y-4 py-4">
            {/* Search inputs */}
            <div className="px-4">
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="h-4.5 w-4.5 text-slate-400" />
                </span>
                <input
                  type="text"
                  placeholder="소식 검색..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm transition-all focus:outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-[#2563EB] placeholder-slate-400"
                />
              </div>
            </div>

            {/* Category Segmented Scroller */}
            <div className="overflow-x-auto scrollbar-none px-4 flex gap-1.5 pb-2">
              {[
                { id: 'all', label: '전체' },
                { id: 'press', label: '보도자료' },
                { id: 'media', label: '언론보도' },
                { id: 'news', label: '인수위 소식' },
                { id: 'committee', label: '구민참여인수위원회' },
                { id: 'schedule', label: '일정' }
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as any)}
                  className={`px-4.5 py-2 rounded-full text-xs font-extrabold shrink-0 border transition-all ${
                    activeCategory === cat.id
                      ? 'bg-[#1E3A8A] text-white border-blue-900 shadow-sm shadow-blue-900/10'
                      : 'bg-white text-slate-650 border-slate-100 hover:bg-slate-50'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Cards Feed */}
            <div className="space-y-3.5 px-4">
              {filteredNews.length > 0 ? (
                filteredNews.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => openItemDetails(item.id)}
                    className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm active:bg-slate-50 transition cursor-pointer flex flex-col"
                  >
                    {item.imageUrl && (
                      <div className="h-40 overflow-hidden border-b border-slate-50">
                        <img src={item.imageUrl} alt="" className="w-full h-full object-cover" />
                      </div>
                    )}
                    <div className="p-4 space-y-2.5">
                      <div className="flex justify-between items-center">
                        <span className={`inline-block text-[10px] px-2 py-0.5 rounded font-black ${
                          item.category === 'press' ? 'bg-blue-50 text-blue-800' :
                          item.category === 'media' ? 'bg-indigo-50 text-indigo-850' :
                          item.category === 'news' ? 'bg-amber-50 text-amber-800' :
                          item.category === 'committee' ? 'bg-violet-50 text-violet-850' : 'bg-emerald-50 text-emerald-800'
                        }`}>
                          {item.category === 'press' ? '보도자료' : item.category === 'media' ? '언론 보도' : item.category === 'news' ? '인수위 소식' : item.category === 'committee' ? '구민참여인수위원회' : '활동 일정'}
                        </span>
                        <span className="text-[10px] text-slate-350">{item.date}</span>
                      </div>
                      <h4 className="text-sm font-black text-slate-900 leading-snug line-clamp-2">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                        {item.excerpt}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="py-16 text-center bg-white rounded-2xl border border-slate-100">
                  <Search className="h-6 w-6 text-slate-300 mx-auto mb-2" />
                  <p className="text-sm text-slate-700 font-extrabold">검색 결과가 없습니다.</p>
                  <button 
                    onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
                    className="mt-3 text-xs bg-slate-100 text-slate-600 px-4 py-2 rounded-lg font-bold"
                  >
                    초기화
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 3: SNS PORTAL */}
        {activeTab === 'sns' && (
          <div className="space-y-5 px-4 py-4">
            {/* Embedded Youtube Card */}
            <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm space-y-3">
              <h3 className="text-sm font-black text-slate-900 flex items-center gap-1.5">
                <span className="h-2 w-2 bg-red-650 rounded-full animate-pulse" />
                인수위원회 공식 브리핑 영상
              </h3>
              <a 
                href="https://www.youtube.com/@tv5493"
                target="_blank"
                rel="noopener noreferrer"
                className="relative block w-full overflow-hidden rounded-xl bg-black aspect-video shadow-md group"
              >
                <img 
                  src="/images/youtube_sumnail_02.png" 
                  alt="인수위 브리핑 영상" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                  <div className="h-12 w-12 rounded-full bg-red-650 text-white flex items-center justify-center shadow-lg transform active:scale-95 transition">
                    <svg className="h-6 w-6 fill-current ml-0.5" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </a>
            </div>

            {/* Social Links List */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-extrabold text-slate-400 px-1">공식 SNS 바로가기</h4>
              <div className="grid gap-2.5">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 bg-white border border-slate-100 p-3 rounded-2xl shadow-sm active:bg-slate-50 transition"
                    >
                      <div className={`p-2.5 rounded-xl border ${link.color}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="block text-sm font-black text-slate-900">{link.name}</span>
                        <span className="block text-[10px] text-slate-400 truncate">{link.desc}</span>
                      </div>
                      <ChevronRight className="h-4.5 w-4.5 text-slate-300" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: DIRECTIONS & MAP */}
        {activeTab === 'map' && (
          <div className="space-y-5 px-4 py-4">
            {/* Address Widget */}
            <div className="bg-blue-50/40 border border-blue-100/50 rounded-2xl p-4 shadow-sm flex gap-3.5">
              <div className="h-9 w-9 rounded-xl bg-[#1E3A8A] text-white flex items-center justify-center shadow-sm shrink-0">
                <Compass className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <span className="block text-xs font-bold text-[#1E3A8A]">사무실 주소</span>
                <p className="text-sm font-bold text-slate-800 leading-relaxed">
                  부산 북구 금곡대로46번길 50, 부산북구문화예술회관 2층 인수위 사무실
                </p>
              </div>
            </div>

            {/* Map Widget with Hover/Tap indication */}
            <div className="space-y-3">
              <h4 className="text-xs font-extrabold text-slate-400 px-1">📍 주변 약도</h4>
              <div className="overflow-hidden rounded-2xl border border-slate-150 bg-slate-50 shadow-sm">
                <img 
                  src="/images/insu_office_map.png" 
                  alt="인수위 주소 지도" 
                  className="w-full object-cover max-h-[280px]"
                />
              </div>
              <div className="grid grid-cols-2 gap-3 mt-2">
                <a
                  href="https://map.naver.com/v5/search/부산북구문화예술회관"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#03C75A] text-white font-extrabold text-xs active:bg-[#02a350] transition shadow-sm"
                >
                  네이버 길찾기
                </a>
                <a
                  href="https://map.kakao.com/?q=부산북구문화예술회관"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#FEE500] text-[#191919] font-extrabold text-xs active:bg-[#ebd300] transition shadow-sm"
                >
                  카카오 길찾기
                </a>
              </div>
            </div>

            {/* Subway & Bus Cards */}
            <div className="space-y-3.5">
              <h4 className="text-xs font-extrabold text-slate-400 px-1">🚍 대중교통 이용 안내</h4>
              
              <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm space-y-3">
                <span className="block text-xs font-black text-slate-900">🚇 지하철 노선</span>
                <div className="space-y-2">
                  <div className="flex gap-2 text-xs text-slate-600">
                    <span className="shrink-0 px-2 py-0.5 rounded-md text-[9px] font-black bg-[#22C55E] text-white shadow-sm shadow-[#22C55E]/10">2호선</span>
                    <p><strong>덕천역:</strong> 2번 출구에서 도보 약 7분</p>
                  </div>
                  <div className="flex gap-2 text-xs text-slate-600">
                    <span className="shrink-0 px-2 py-0.5 rounded-md text-[9px] font-black bg-[#22C55E] text-white shadow-sm shadow-[#22C55E]/10">2호선</span>
                    <p><strong>수정역:</strong> 1번 출구에서 도보 약 10분</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm space-y-3">
                <span className="block text-xs font-black text-slate-900">🚌 버스 노선</span>
                <div className="space-y-2">
                  <div className="flex gap-2 text-xs text-slate-600">
                    <span className="shrink-0 px-2 py-0.5 rounded-md text-[9px] font-black bg-blue-600 text-white">일반</span>
                    <p><strong>덕천지구대 정류장:</strong> 15, 59, 111, 126, 148-1번 (도보 3분)</p>
                  </div>
                  <div className="flex gap-2 text-xs text-slate-600">
                    <span className="shrink-0 px-2 py-0.5 rounded-md text-[9px] font-black bg-blue-600 text-white">일반</span>
                    <p><strong>수정역 정류장:</strong> 111, 126, 307번 (도보 8분)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Sticky Bottom Navigation Tab Bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-100 flex justify-around py-3 shadow-[0_-2px_12px_rgba(0,0,0,0.04)]">
        {[
          { id: 'home', label: '홈', icon: Home },
          { id: 'news', label: '소식통', icon: Newspaper },
          { id: 'sns', label: '소통채널', icon: Share2 },
          { id: 'map', label: '오시는길', icon: MapPin }
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id as any);
                window.scrollTo(0, 0);
              }}
              className="flex flex-col items-center gap-1.5 focus:outline-none shrink-0"
              style={{ width: '64px' }}
            >
              <div className={`p-1 rounded-xl transition-all duration-300 ${
                isActive ? 'text-[#1E3A8A]' : 'text-slate-400'
              }`}>
                <Icon className="h-5 w-5" />
              </div>
              <span className={`text-[10px] font-black transition-all ${
                isActive ? 'text-[#1E3A8A]' : 'text-slate-400'
              }`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Bottom Sheet Drawer for Detail Views */}
      {selectedItemId !== null && selectedItem && (
        <>
          {/* Backdrop overlay */}
          <div 
            className="fixed inset-0 z-50 bg-slate-950/40 backdrop-blur-sm transition-opacity"
            onClick={closeItemDetails}
          />

          {/* Bottom Sheet Drawer */}
          <div className="fixed bottom-0 left-0 right-0 z-50 max-h-[90vh] bg-white rounded-t-[32px] shadow-[0_-12px_36px_rgba(0,0,0,0.12)] flex flex-col transform transition-transform duration-300 translate-y-0 ease-out">
            {/* Grab Bar Header */}
            <div 
              className="flex-shrink-0 cursor-pointer"
              onClick={closeItemDetails}
            >
              <div className="h-1.5 w-12 bg-slate-200 rounded-full mx-auto my-3.5" />
              <div className="flex items-center justify-between px-5 pb-2">
                <span className="text-xs text-slate-400 font-extrabold flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" /> {selectedItem.date}
                </span>
                <button 
                  onClick={closeItemDetails}
                  className="p-1 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Content wrapper */}
            <div className="flex-grow overflow-y-auto px-5 pb-10">
              {selectedItem.linkUrl === '/news/insu-report-day2' ? (
                <ArticleDetail isBottomSheet={true} />
              ) : selectedItem.linkUrl === '/news/insu-welfare-health' ? (
                <WelfareHealthDetail isBottomSheet={true} />
              ) : selectedItem.linkUrl === '/news/insu-report-day4' ? (
                <NewsDay4Detail isBottomSheet={true} />
              ) : selectedItem.linkUrl === '/news/insu-report-day5' ? (
                <NewsDay5Detail isBottomSheet={true} />
              ) : selectedItem.linkUrl === '/news/insu-report-day6' ? (
                <NewsDay6Detail isBottomSheet={true} />
              ) : selectedItem.linkUrl === '/press/insu-committee-launch' ? (
                <PressDetail isBottomSheet={true} />
              ) : selectedItem.linkUrl === '/committee/qa' ? (
                <CommitteeQA />
              ) : selectedItem.linkUrl === '/committee/proposals' ? (
                <CommitteeProposals />
              ) : selectedItem.linkUrl === '/committee/proposals-part2' ? (
                <CommitteeProposalsPart2 />
              ) : selectedItem.linkUrl === '/committee/proposals-part3' ? (
                <CommitteeProposalsPart3 />
              ) : (
                /* Fallback renderer for other schedules or links */
                <div className="space-y-5 py-4">
                  <header className="border-b border-slate-100 pb-5">
                    <span className="inline-block bg-emerald-50 text-emerald-800 text-[10px] px-2.5 py-0.5 rounded font-black mb-2">
                      {selectedItem.category === 'schedule' ? '활동 일정' : '소식'}
                    </span>
                    <h3 className="text-lg font-black text-slate-900 leading-snug">
                      {selectedItem.title}
                    </h3>
                  </header>
                  
                  {selectedItem.imageUrl && (
                    <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm max-h-56">
                      <img src={selectedItem.imageUrl} alt="" className="w-full h-full object-cover" />
                    </div>
                  )}

                  {selectedItem.category === 'schedule' && selectedItem.location && (
                    <div className="bg-emerald-50 border border-emerald-100/50 rounded-xl p-3 text-xs sm:text-sm text-emerald-800 font-bold">
                      📍 장소: {selectedItem.location}
                    </div>
                  )}

                  <p className="text-slate-650 text-sm leading-relaxed whitespace-pre-line">
                    {selectedItem.excerpt}
                  </p>

                  {selectedItem.linkUrl && (
                    <div className="pt-4 flex justify-center">
                      <a 
                        href={selectedItem.linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-6 py-3 bg-[#1E3A8A] text-white text-xs font-black rounded-xl shadow-md hover:bg-blue-900 transition"
                      >
                        원문 출처 바로가기 <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </>
      )}
      {/* Bottom Sheet Drawer for Greeting */}
      {showGreeting && (
        <>
          {/* Backdrop overlay */}
          <div 
            className="fixed inset-0 z-50 bg-slate-950/40 backdrop-blur-sm transition-opacity"
            onClick={() => setShowGreeting(false)}
          />

          {/* Bottom Sheet Drawer */}
          <div className="fixed bottom-0 left-0 right-0 z-50 max-h-[90vh] bg-white rounded-t-[32px] shadow-[0_-12px_36px_rgba(0,0,0,0.12)] flex flex-col transform transition-transform duration-300 translate-y-0 ease-out">
            {/* Grab Bar Header */}
            <div 
              className="flex-shrink-0 cursor-pointer"
              onClick={() => setShowGreeting(false)}
            >
              <div className="h-1.5 w-12 bg-slate-200 rounded-full mx-auto my-3.5" />
              <div className="flex items-center justify-between px-5 pb-2">
                <span className="text-xs text-[#1E3A8A] font-extrabold flex items-center gap-1">
                  북구청장 인사말씀
                </span>
                <button 
                  onClick={() => setShowGreeting(false)}
                  className="p-1 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Content wrapper */}
            <div className="flex-grow overflow-y-auto px-6 pb-12 space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base">
              <div className="text-center pb-4 border-b border-slate-100">
                <div className="h-20 w-20 rounded-full overflow-hidden mx-auto border-2 border-blue-100 mb-3">
                  <img src="/images/candidate.png" alt="정명희 당선인" className="w-full h-full object-cover object-top" />
                </div>
                <h3 className="text-lg font-black text-slate-900">정명희 부산 북구청장</h3>
                <p className="text-xs text-blue-800 font-bold mt-1">"내 삶이 힘이 되는 북구"</p>
              </div>

              <div className="space-y-4 text-slate-650 text-sm">
                <p className="font-extrabold text-base text-[#0B1E43] leading-relaxed border-b border-slate-100 pb-3">
                  존경하는 북구 구민 여러분! 반갑습니다.<br />
                  민선 9기 부산 북구청장 정명희입니다.
                </p>
                <p>
                  우리 북구는 부산의 대표적 주거도시이면서 낙동강과 금정산, 화명생태공원 등 뛰어난 자연환경을 자랑하는 데다 김해공항이 가깝고 도시 내외곽으로 오가기 쉬운 교통망을 가진 매력적인 지역입니다.
                </p>
                <p>
                  민선 9기는 북구의 장점을 살리고 단점을 보완해 새로운 도약의 길을 열어 나가겠습니다. ‘구민과 함께, 미래를 여는 북구’를 구정 방향으로 삼고, ‘소통으로 여는 참여행정, 민생을 살리는 지역경제, 미래를 준비하는 혁신성장, 함께 누리는 포용복지, 안전하고 품격 있는 도시’를 구정 방침으로 추진하겠습니다.
                </p>
                <p>
                  아이 키우기 좋은 북구, 청년이 꿈을 펼칠 수 있는 북구, 어르신이 행복하고 복지가 든든한 북구, 소상공인이 힘을 얻는 북구, 문화와 관광 그리고 자연이 어우러진 활력도시 북구를 만들기 위해 성큼성큼 나아가겠습니다.
                </p>
                <p>
                  북구의 미래는 구청 행정만으로 만들 수 없습니다. 구민이 곧 북구의 주인이고, 북구 발전의 가장 큰 힘입니다. 구민의 목소리를 구정의 출발점으로 삼고, 현장에서 답을 찾고, 정책 결정 과정에 구민 참여를 확대하는 소통행정을 실천하겠습니다.
                </p>
                <p>
                  언제나 구민 곁에서 함께 고민하고 함께 해결하는 구청장이 되겠습니다. 새로운 희망, 새로운 도약의 길을 구민 여러분과 함께 걷겠습니다. 감사합니다.
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
