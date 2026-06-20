import { useState } from 'react';
import { Newspaper, Calendar, Info, Search, ExternalLink, Inbox } from 'lucide-react';

export interface BoardItem {
  id: number;
  category: 'press' | 'media' | 'news' | 'schedule';
  title: string;
  date: string;
  excerpt: string;
  badge?: string;
  location?: string;
  imageUrl?: string;
  linkUrl?: string;
}

export const mockData: BoardItem[] = [
  // 보도자료 (press)
  {
    id: 10,
    category: 'press',
    title: '정명희 부산 북구청장 당선인, 민선 9기 구민참여인수위원회 구성 전격 발표!',
    date: '2026-06-11',
    excerpt: '- 명칭 “북구의 새로운 문을 여는 인수위원회”,\n- 슬로건 “민생에 답하고, 미래를 여는 북구” 확정\n\n- 당선인 제1호 지시로 “구민참여인수위원회” 전격 도입… QR코드로 주민참여인수위원회 직접 선발\n- 개방형 온라인 플랫폼 및 과학적 소통 모형 결합… 관료주의 타파한 파격적 구조',
    badge: '인수위 출범',
    imageUrl: '/images/candidate_mic.jpg',
    linkUrl: '/press/insu-committee-launch'
  },
  {
    id: 1,
    category: 'press',
    title: '“부산 북구 미래는 주민 손으로” 정명희 구정 인수위, 구민참여인수위원회 구성',
    date: '2026-06-12',
    excerpt: '정책 워크숍·현안 진단 참여… 구민이 직접 구정 방향 제안\n취임 100일 비전 발표회서 ‘4개년 구정 마스터플랜’ 공개 예정',
    badge: '인수위 출범',
    imageUrl: '/images/insu_meeting.png',
    linkUrl: 'https://innerview.co.kr/View.aspx?No=4113323'
  },
  {
    id: 2,
    category: 'press',
    title: '인수위원회 공식 출범, "기본에 충실한 혁신 북구" 현판식 진행',
    date: '2026-06-10',
    excerpt: '각계 전문가 15명으로 구성된 북구청장 인수위원회가 공식 간담회를 열고 4년간의 주요 정책 추진 과제 기조를 마련했습니다.',
    badge: '인수위 출범'
  },
  {
    id: 3,
    category: 'media',
    title: '[6·3 지선] 정명희 부산 북구청장 당선인 "더 좋은 도시 만들겠다"',
    date: '2026-06-08',
    excerpt: '6·3 지방선거 부산 북구청장에 더불어민주당 정명희 후보가 당선되며 4년 만에 구청장직을 탈환했다.\n\n정 당선인은 약사 출신으로 2014년 지방선거에서 비례대표로 부산시의회에 입성해 주목받은 뒤 2018년 지방선거에서 북구청장에 당선돼 민선 7기 북구를 이끌었다.\n\n그는 북구의 핵심 현안으로 골목 경제 침체, 고령화와 돌봄 공백, 청년 유출을 꼽고 복지 행정을 대표 공약으로 내세웠다.',
    badge: '도시 문화',
    imageUrl: '/images/candidate_waving.jpg',
    linkUrl: 'https://www.yna.co.kr/view/AKR20260604154700051'
  },

  // 인수위 소식 (news)
  {
    id: 16,
    category: 'media',
    title: '부산 북구, 행정의 문을 주민에게 연다',
    date: '2026-06-11',
    excerpt: '"정책은 이제 주민이 만든다." 전국 최초 구민참여인수위 출범\n구민이나 사업자 누구나 참여..4개년 로드맵에 직접 목소리 담는다.\n정명희 당선인 "일방 행정 시대는 끝났다"',
    badge: '언론 보도',
    imageUrl: '/images/insu_recruit_media.png',
    linkUrl: 'https://www.onews.tv/news/articleView.html?idxno=281578'
  },
  {
    id: 9,
    category: 'media',
    title: '민선 9기 정명희 부산 북구청장 당선인 "북구의 새로운 문을 여는 인수위원회" 공식 출범',
    date: '2026-06-12',
    excerpt: '민선 9기 정명희 부산 북구청장 당선인의 \'북구의 새로운 문을 여는 인수위원회\'가 구정 핵심 가치를 구체화하고 미래 4개년 로드맵을 설계할 공식 출범했다.\n\n12일 정명희 북구청장 당선인은 부산 북구 덕천동 북구문화예술회관 내 인수위원회 사무실에서 인수위원회 현판 제막식 및 출범식을 열고 본격적인 구정 인수 업무에 돌입했다고 밝혔다.',
    badge: '인수위 출범',
    imageUrl: '/images/insu_committee_group.png',
    linkUrl: 'https://www.pressian.com/pages/articles/2026061218510572151'
  },
  {
    id: 4,
    category: 'media',
    title: '정명희 북구청장 당선인 인수위, 전국 첫 ‘구민참여인수위’ 출범…"북구 미래 직접 설계"',
    date: '2026-06-11',
    excerpt: '지방자치단체 인수위 제도 도입 이후 첫 주민 참여형 인수위원회 공개 모집\n북구민·북구 사업자 누구나 신청 가능…정책 제안부터 로드맵 수립 참여\n정책 워크숍·조율회의 통해 민선 9기 핵심 공약과 미래 비전 함께 구상\n정명희 당선인 "일방 행정 넘어 주민이 정책 만드는 구민주권 시대 열겠다"',
    badge: '주민 소통',
    imageUrl: '/images/insu_member_recruit.jpg',
    linkUrl: 'https://localsegye.co.kr/news/view/1065599939029304'
  },
  {
    id: 19,
    category: 'news',
    title: '정명희 북구청장 당선인 인수위, “안전하고 쾌적한 ‘생활밀착형 도시’ 기반 조성”',
    date: '2026-06-19',
    excerpt: '인수위 6일 차, 안전도시국 업무보고… “악취·교통·주차 등 주민 숙원사업 현장 해결사 나선다”\n당선인, “건설 공약의 현실적 이행 독려… 구민 체감형 스마트 도시 인프라 구축” 주문',
    badge: '업무 보고',
    imageUrl: '/images/insu_meeting_day6_card.png',
    linkUrl: '/news/insu-report-day6'
  },
  {
    id: 18,
    category: 'news',
    title: '정명희 북구청장 당선인 인수위, “지역 경제 살리기 총력… ‘자영업자 심폐소생’으로 민생 체감도 높인다”',
    date: '2026-06-18',
    excerpt: '인수위 5일 차, 경제환경국 등 5개 부서 업무보고… “N잡 지원센터 등 공약 사업 속도전”\n당선인, “행정 편의주의 탈피해 고향사랑기부금 활용 등 자영업자 실질 지원책 마련하라”',
    badge: '업무 보고',
    imageUrl: '/images/insu_meeting_day5_img1.png',
    linkUrl: '/news/insu-report-day5'
  },
  {
    id: 17,
    category: 'news',
    title: '정명희 북구청장 당선인 인수위, “행정 관성 타파하고 ‘북(Book)구’로 재도약하라”',
    date: '2026-06-17',
    excerpt: '인수위 4일 차, 문화교육국 등 5개 부서 업무보고… “현장 목소리 외면한 정책 지양”\n당선인, “덕천 젊음의 거리 ‘차 없는 거리’ 민원 해결 등 현장 중심 행정 강력 주문”',
    badge: '업무 보고',
    imageUrl: '/images/insu_meeting_day4_1.jpg',
    linkUrl: '/news/insu-report-day4'
  },
  {
    id: 11,
    category: 'news',
    title: '정명희 북구청장 당선인 인수위, ‘촘촘한 복지·보건 안전망’ 구축 박차',
    date: '2026-06-16',
    excerpt: '인수위 3일 차, 복지국·보건소 업무보고… “공공성 강화 및 복지-보건 연계 효율화” 강조\n당선인, “중앙정부·시 협력 강화 및 현장 중심의 실질적 돌봄 체계 마련” 주문',
    badge: '업무 보고',
    imageUrl: '/images/insu_meeting_day3_card.png',
    linkUrl: '/news/insu-welfare-health'
  },
  {
    id: 5,
    category: 'news',
    title: '정명희 북구청장 당선인 인수위, ‘AI 대전환’ 및 ‘재정 건전성’ 해법 모색… 구정 혁신 시동',
    date: '2026-06-15',
    excerpt: '인수위 2일 차, 기획감사·미래전략 등 주요 부서 업무보고 청취\n당선인, “AI 기반 행정체계 전환 및 세수 감소 따른 근본적 재정 대책 마련하라” 주문\n정명희 부산 북구청장 당선인의 ‘북구의 새로운 문을 여는 인수위원회’가 본격적인 업무 파악에 나섰다. 인수위 활동 2일 차인 15일, 기획감사실과 총무국 등 주요 부서로부터 핵심 현안과 공약 사항을 보고받고 북구의 미래 비전을 위한 실질적 대안을 논의했다.',
    badge: '업무 보고',
    imageUrl: '/images/insu_meeting_day2_card.png',
    linkUrl: '/news/insu-report-day2'
  },

  // 활동 일정 (schedule)
  {
    id: 12,
    category: 'schedule',
    title: '북구의 새로운 문을 여는 인수위원회, 힘찬 출범',
    date: '2026-06-12',
    excerpt: '민생에 답하고, 미래를 여는 새로운 북구가 힘찬 첫걸음을 내디뎠습니다.\n\n안정 속의 변화를 위해 전 북구청 총무국장이신 강재화 국장님을 인수위원장으로 모셨습니다.\n\n또한 AI, 법률, 언론, 교통, 문화, 교육, 지역 분야 전문가들을 인수위원으로, 도시계획·건축·토목·교통·문화 분야 전문가들을 자문위원으로 모셔 북구의 변화를 꼼꼼히 준비하겠습니다.\n\n민생은 더 가까이, 미래는 더 확실히.\n북구의 새로운 내일을 기대해 주십시오.',
    badge: '인수위 출범',
    imageUrl: '/images/insu_launch_instagram.png',
    linkUrl: 'https://www.instagram.com/p/DZfUzq-zfdO/'
  },
  {
    id: 13,
    category: 'schedule',
    title: '주민 여러분께 드리는 감사 아침 인사',
    date: '2026-06-09',
    excerpt: '오늘은 큰길이 아닌 아파트 단지 안으로 들어가 주민 여러분께 감사 아침 인사를 드렸습니다.\n\n많은 분들이 너무 반가워하십니다.\n\n”축하합니다.“\n”북구를 잘 부탁합니다.“\n라는 말씀을 가장 많이 주시네요.\n\n예, 잘하겠습니다!\n땀으로 적신 북구로 돌려드리겠습니다.\n\n감사합니다.',
    badge: '감사 인사',
    imageUrl: '/images/insu_greeting_instagram.png',
    linkUrl: 'https://www.instagram.com/p/DZWTL6tTl_L/'
  },
  {
    id: 14,
    category: 'schedule',
    title: '구민들의 응원과 격려, 제안을 경청합니다',
    date: '2026-06-15',
    excerpt: '응원도 받고\n격려도 받고\n당부도 받고\n제안도 받고\n\n빈틈없이 챙기겠습니다!',
    badge: '주민 소통',
    imageUrl: '/images/insu_cheer_instagram.png',
    linkUrl: 'https://www.instagram.com/p/DZm9UUlzOpi/'
  },
  {
    id: 15,
    category: 'schedule',
    title: '삼경장미아파트 주민들과의 설레는 만남',
    date: '2026-06-16',
    excerpt: '아파트 정문에 "정명희 북구청장 당선인의 방문을 환영합니다" 라는 현수막을 미리 내걸어 주시고 따뜻하게 맞아주신 삼경장미아파트 주민 김길후 대표님과 입주민 여러분께 깊이 감사드립니다.\n\n정이 넘치는 감사인사 자리에서 나눈 축하와 격려, 그리고 전해주신 소중한 숙제들을 가슴 깊이 새기며 기대에 어긋나지 않도록 성실히 수행하겠습니다.',
    badge: '주민 소통',
    imageUrl: '/images/insu_samgyeong_instagram.png',
    linkUrl: 'https://www.instagram.com/p/DZpkeyHzfAz/'
  }
];

export default function ActivityBoard() {
  const [activeTab, setActiveTab] = useState<'all' | 'press' | 'media' | 'news' | 'schedule'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = [
    { id: 'all', label: '전체 소식' },
    { id: 'press', label: '보도자료' },
    { id: 'media', label: '언론 보도' },
    { id: 'news', label: '인수위 소식' },
    { id: 'schedule', label: '활동 일정' }
  ];

  // Filtering
  const filteredData = mockData
    .filter((item) => {
      const matchesTab = activeTab === 'all' || item.category === activeTab;
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTab && matchesSearch;
    })
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <section id="activities" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl tracking-tight">
            실시간 활동 소식통
          </h2>
          <p className="text-base sm:text-lg text-slate-500">
            당선인과 인수위원회의 공정하고 투명한 북구 행정을 주민들께 실시간으로 전해 드립니다.
          </p>
        </div>

        {/* Filters and Search controls */}
        <div className="mt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6 bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-slate-100">
          
          {/* Segmented Control Tab Bar */}
          <div className="relative bg-slate-100/80 p-1 rounded-2xl flex w-full md:max-w-2xl border border-slate-200/40 shadow-inner">
            {/* Sliding Background Chip */}
            <div 
              className="absolute top-1 bottom-1 bg-white rounded-xl shadow-md transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                left: `calc(1px + (${tabs.findIndex(t => t.id === activeTab)} * (100% - 2px) / ${tabs.length}))`,
                width: `calc((100% - 2px) / ${tabs.length})`
              }}
            />
            {/* Tab Buttons */}
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                type="button"
                className={`relative z-10 flex-1 py-3.5 text-sm sm:text-base font-extrabold text-center transition-colors duration-300 min-h-[46px] cursor-pointer ${
                  activeTab === tab.id ? 'text-[#1E3A8A]' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:max-w-xs">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </span>
            <input
              type="text"
              placeholder="소식 검색..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 border border-slate-250 rounded-2xl text-sm sm:text-base focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-[#1E3A8A] transition-all duration-300 shadow-sm min-h-[48px]"
            />
          </div>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredData.length > 0 ? (
            filteredData.map((item) => {
              const CardComponent = item.linkUrl ? 'a' : 'article';
              const isLocalLink = item.linkUrl?.startsWith('/');
              const cardProps = item.linkUrl
                ? {
                    href: item.linkUrl,
                    ...(isLocalLink
                      ? {
                          onClick: (e: React.MouseEvent) => {
                            e.preventDefault();
                            if ((window as any).customNavigate) {
                              (window as any).customNavigate(item.linkUrl);
                            } else {
                              window.location.pathname = item.linkUrl!;
                            }
                          }
                        }
                      : {
                          target: '_blank',
                          rel: 'noopener noreferrer'
                        }
                     ),
                    className: "bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-slate-200/80 transition-all duration-300 flex flex-col border border-slate-100 cursor-pointer block text-inherit no-underline group"
                  }
                : {
                    className: "bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col border border-slate-100 group"
                  };

              return (
                <CardComponent key={item.id} {...(cardProps as any)}>
                  
                  {/* Thumbnail Image */}
                  {item.imageUrl && (
                    <div className="overflow-hidden bg-slate-50 relative aspect-[4/3] border-b border-slate-100">
                      <img 
                        src={item.imageUrl} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    </div>
                  )}

                  {/* Card Content block */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold ${
                          item.category === 'press' ? 'bg-blue-50 text-blue-800' :
                          item.category === 'media' ? 'bg-indigo-50 text-indigo-800' :
                          item.category === 'news' ? 'bg-amber-50 text-amber-800' : 'bg-emerald-50 text-emerald-800'
                        }`}>
                          {(item.category === 'press' || item.category === 'media') && <Newspaper className="h-4 w-4" />}
                          {item.category === 'news' && <Info className="h-4 w-4" />}
                          {item.category === 'schedule' && <Calendar className="h-4 w-4" />}
                          {item.category === 'press' ? '보도자료' : item.category === 'media' ? '언론 보도' : item.category === 'news' ? '인수위 소식' : '활동 일정'}
                        </span>
                        {item.badge && (
                          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-100">
                            {item.badge}
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug line-clamp-2 transition-colors duration-350 group-hover:text-[#1E3A8A]">
                        {item.title}
                      </h3>
                      <p className="text-slate-500 text-sm sm:text-base leading-relaxed line-clamp-3 whitespace-pre-line">
                        {item.excerpt}
                      </p>
                    </div>

                    {/* Location display if schedule category */}
                    {item.category === 'schedule' && item.location && (
                      <div className="mt-4 bg-emerald-50/50 border border-emerald-100/50 rounded-xl p-3 text-xs sm:text-sm text-emerald-800 font-semibold">
                        📍 장소: {item.location}
                      </div>
                    )}

                    {/* Footer date and button */}
                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm text-slate-400">
                      <span>{item.date}</span>
                      <span className="text-[#1E3A8A] hover:underline flex items-center gap-1 font-bold text-sm min-h-[44px] px-2 rounded-lg hover:bg-blue-50 transition">
                        자세히 보기 <ExternalLink className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </CardComponent>
              );
            })
          ) : (
            // Clean empty state illustration design
            <div className="col-span-full py-16 px-6 text-center bg-white rounded-3xl border border-slate-100 shadow-sm max-w-xl mx-auto my-6 space-y-5">
              <div className="inline-flex p-5 bg-slate-50 rounded-full text-slate-350">
                <Inbox className="h-12 w-12" />
              </div>
              <div className="space-y-1.5">
                <p className="text-lg text-slate-700 font-extrabold">검색 결과가 없습니다</p>
                <p className="text-sm text-slate-400">다른 키워드로 검색하거나 필터를 초기화해 보세요.</p>
              </div>
              <button 
                onClick={() => { setActiveTab('all'); setSearchQuery(''); }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1E3A8A] text-white font-extrabold rounded-xl shadow-md hover:bg-blue-900 transition min-h-[46px] cursor-pointer"
              >
                검색 조건 초기화
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
