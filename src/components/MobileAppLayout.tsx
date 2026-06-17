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

export default function MobileAppLayout() {
  const [activeTab, setActiveTab] = useState<'home' | 'news' | 'sns' | 'map'>('home');
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<'all' | 'press' | 'media' | 'news' | 'schedule'>('all');
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
    } else if (path === '/press/insu-committee-launch') {
      setActiveTab('news');
      setSelectedItemId(10); // mockData ID for insu-committee-launch
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
      } else if (path === '/press/insu-committee-launch') {
        setSelectedItemId(10);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const openItemDetails = (id: number) => {
    setSelectedItemId(id);
    const item = mockData.find(i => i.id === id);
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
  const filteredNews = mockData.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const latestNews = mockData.filter(item => item.category !== 'schedule').slice(0, 3);

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
            정명희 부산 북구청장 당선인
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
              <span className="text-[10px] font-bold tracking-widest text-blue-200 uppercase bg-blue-950/40 px-2.5 py-1 rounded-full border border-blue-800/30">제8대 부산 북구청장 당선인</span>
              <h2 className="text-xl font-black mt-3 leading-snug" style={{ fontFamily: "'Gowun Batang', serif" }}>
                "주민과 함께 여는<br />북구의 새로운 내일"
              </h2>
              <p className="text-xs text-blue-100/80 mt-2 font-medium leading-relaxed">
                구민 한 분 한 분의 목소리를 경청하며 약속드린 공약들을 투명하게 다듬겠습니다. 언제나 초심을 잃지 않겠습니다.
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

            {/* Latest News Snapshot Widget */}
            <div className="space-y-3">
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
                { id: 'news', label: '인수위' },
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
                          item.category === 'news' ? 'bg-amber-50 text-amber-800' : 'bg-emerald-50 text-emerald-800'
                        }`}>
                          {item.category === 'press' ? '보도자료' : item.category === 'media' ? '언론 보도' : item.category === 'news' ? '인수위 소식' : '활동 일정'}
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
                  href="https://map.naver.com/v5/search/%EB%B6%80%EC%82%B0%EB%B6%85%EA%B5%AC%EB%AC%B8%ED%99%94%EC%98%88%EC%88%A0%ED%9A%8C%EA%B4%80"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#03C75A] text-white font-extrabold text-xs active:bg-[#02a350] transition shadow-sm"
                >
                  네이버 길찾기
                </a>
                <a
                  href="https://map.kakao.com/?q=%EB%B6%80%EC%82%B0%EB%B6%85%EA%B5%AC%EB%AC%B8%ED%99%94%EC%98%88%EC%88%A0%ED%9A%8C%EA%B4%80"
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
              ) : selectedItem.linkUrl === '/press/insu-committee-launch' ? (
                <PressDetail isBottomSheet={true} />
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
                  당선인 인사말씀
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
                <h3 className="text-lg font-black text-slate-900">정명희 부산 북구청장 당선인</h3>
                <p className="text-xs text-blue-800 font-bold mt-1">"내 삶이 힘이 되는 북구"</p>
              </div>

              <div className="space-y-4">
                <p className="font-extrabold text-base text-[#0B1E43] leading-relaxed">
                  존경하고 사랑하는 부산 북구 주민 여러분, 안녕하십니까!<br />
                  북구청장 당선인 정명희입니다.
                </p>
                <p>
                  주민 여러분께서 보내주신 뜨거운 신뢰와 변화를 향한 열망에 깊이 머리 숙여 감사드립니다. 
                  낙동강의 유려한 역사와 구포나루의 상생 정신을 이어받아, 우리 북구를 주민이 주인 되는 따뜻하고 활기찬 도시로 재창조하겠습니다.
                </p>
                <p>
                  '북구의 새로운 문을 여는 인수위원회' 활동 기간 동안 구민 한 분 한 분의 목소리를 경청하며, 약속드린 공약들을 면밀하고 투명하게 다듬겠습니다. 언제나 초심을 잃지 않고 소통하며 혁신하는 구정을 이끌어 가겠습니다.
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
