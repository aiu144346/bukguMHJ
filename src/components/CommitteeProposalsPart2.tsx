import { useState } from 'react';
import { 
  ArrowLeft, 
  ChevronLeft, 
  ChevronRight, 
  User, 
  Search, 
  FileText, 
  Lightbulb, 
  Award,
  CheckCircle2
} from 'lucide-react';

interface Proposal {
  id: number;
  proposer: string;
  topic: string;
  detail: string;
  tag: string;
}

const proposalsData: Proposal[] = [
  { id: 51, proposer: "김주영", topic: "낙동강 하구 어촌 전통을 살린 '한국민속어촌' 조성", detail: "화명생태공원 일대에 포구마을을 재현해 낮에는 돛배 체험과 전통 장터를 운영하고, 밤에는 디지털 미디어아트 분수쇼와 구포시장 연계 야시장을 운영해 체류형 관광 거점을 선점하자고 제안함.", tag: "관광/문화" },
  { id: 53, proposer: "김유정", topic: "구포3동 중심 안전 통학로 확보 및 청소년 진로 지원", detail: "등하교 스쿨버스 도입을 통해 구포3동 학생들의 안전한 통학로를 확보하고, 입시 설명회·컨설팅 지원 및 학부모-학생 간의 관계 회복을 도모하는 다채로운 교육 프로그램을 지원해야 함.", tag: "교육/안전" },
  { id: 54, proposer: "박승모", topic: "덕천로타리 상가 활성화를 위한 지하상가 주차장 할인 연계", detail: "터널 개통으로 지나치는 통로가 된 북구에 주말 유입 인구를 늘리기 위해, 주말 유휴 공간이 많은 덕천지하상가 주차장을 일반 로타리 상가 이용객도 할인받을 수 있도록 연계 조치를 제안함.", tag: "상권/경제" },
  { id: 57, proposer: "문봉영", topic: "침체된 덕천 젊음의 거리 상권 회생 대책 긴급 촉구", detail: "코로나19 이후 상권의 절반이 가게임대 상태에 놓여 고사 직전인 덕천 젊음의 거리 자영업자들을 외면하지 말고, 민선 9기에서 즉각적이고 실효성 있는 상권 활성화 대책을 수립해 주길 원함.", tag: "상권/경제" },
  { id: 58, proposer: "김주영", topic: "산성마을 중심 'BTS 지민 & 정국 기념관' 및 관광벨트 조성", detail: "두 멤버 고향의 경계인 산성마을에 보라색 한옥타운과 아미 순례성지를 짓고 전용 보라셔틀버스, 낙동강 아미 생태크루즈, 빛의 포구 드론쇼를 연계한 글로벌 자치구 상생 거버넌스를 제안함.", tag: "관광/문화" },
  { id: 60, proposer: "정현석", topic: "펀딩 도입 및 교육 환경 개선을 통한 북구 교육 격차 해소", detail: "민간 연계형 교육 펀딩 도입, 통합 늘봄 공간 확충 및 셔틀 셔틀버스 연계, 20년 이상 노후 학교 인프라의 전면 정비, 낙동강 지리적 강점을 활용한 자유학기제 진로 멘토링 확대를 건의함.", tag: "교육/안전" },
  { id: 62, proposer: "유창희", topic: "청년 유출 방지를 위한 양질의 문화 콘텐츠 개발 및 브랜딩", detail: "베드타운 인식을 전환하기 위해 천혜의 자연경관 및 매력적인 소상공인 공간과 연계한 전시·공연 콘텐츠를 기획하고, 이를 온라인 음악 콘텐츠로 제작해 다각적으로 홍보해야 함.", tag: "청년/문화" },
  { id: 63, proposer: "어우진", topic: "생성형 AI 지능형 민원 시스템 도입 및 레저·문화 벨트 조성", detail: "자연어 기반 24시간 '북구 AI 스마트 보좌관' 서비스와 AI 민원 자동 분류를 구축하고, 화명생태공원 내 크리에이터 컨테이너 파크 조성 및 사계절 친수 레저 축제 브랜딩을 제안함.", tag: "관광/AI" },
  { id: 65, proposer: "배상현", topic: "AI 기반 맞춤형 정책 전파 및 동물의료비 지원 조례 세분화", detail: "정보 취약계층용 AI 알림 체계를 구축하고, 동물병원 행정 부담 경감 및 부정수급 방지를 위해 보호자 직접 청구 방식, 진료과목별이 아닌 연간 총액 한도 설정, 북구민 선별 대책을 제안함.", tag: "관광/AI" },
  { id: 71, proposer: "함이로", topic: "서북권 청년 프로그램 인프라 확충 및 대중교통 접근성 향상", detail: "동부산에 쏠린 청년 구직·자기계발 프로그램을 화명·덕천권에 확충하고, 화명동 '무사이' 및 '여긴가배' 같은 독창적 문화 공간의 방문객 확대를 위해 대중교통 인프라를 강화해야 함.", tag: "청년/문화" },
  { id: 72, proposer: "윤성숙", topic: "AI 기반 주민참여 플랫폼 구축 및 세대통합 리빙랩 프로젝트", detail: "LLM을 활용한 주민 제안 자동 분류 챗봇을 만들고, 청소년이 어르신께 스마트폰·AI 활용법을 교육하는 등 지역 유휴공간을 거점으로 삼는 '스쿨-로컬-홈' 세대통합 정착 패키지를 제안함.", tag: "관광/AI" },
  { id: 78, proposer: "배재은", topic: "북구형 주민자치회 복귀 및 생애주기별 통합돌봄거점 마련", detail: "제대로 된 평가 없이 종료된 시범 주민자치회를 전면 활성화하고, 자원봉사은행 앱을 통한 돌봄 문화 구축 및 화명보건소 자리를 활용한 생애주기별 통합돌봄 거점공간 마련을 촉구함.", tag: "돌봄/복지" },
  { id: 80, proposer: "강화일", topic: "경부선 열차 공석 활용 교통 연계 및 구포3동 버스 노선 신설", detail: "경부선 하행 기차 공석을 활용해 단 15분 만에 북구와 부산역을 잇는 환승 교통망을 구축하고, 병목 정체 해소를 위해 구포3동 유림노르웨이 및 두산위브 경유 화명동 직통 노선 신설을 요청함.", tag: "교통/안전" },
  { id: 83, proposer: "이창환", topic: "낙후된 금곡동 교육 인프라 확충 및 지식산업센터 조기 완공", detail: "타 지역으로의 학생 유출이 심각한 금곡동 지하철역 주변에 교육 여건 시설을 대폭 신설하고, 유동 인구 유입 및 지역 상권 활성화를 위해 금곡 지식산업센터 조성을 가속해 줄 것을 건의함.", tag: "교육/안전" },
  { id: 85, proposer: "배호열", topic: "지능형 음향 분석(Acoustic AI) 기반 골목길 보행 안전망 구축", detail: "비탈진 이면도로 사각지대 전신주에 AI 음향 센서를 설치, 이륜차 엔진음을 분석해 바닥 LED 경고를 투사하고 비명·파손음 등 이상 음원을 감지해 관할 지구대로 실시간 전송하는 시스템을 제안함.", tag: "교통/안전" },
  { id: 88, proposer: "손준희", topic: "국비 지원을 활용한 생활권 청소년문화의집 확충 및 개방", detail: "전국 최하위 수준인 부산의 청소년 이용 시설 확충을 위해 국비·지특 예산 최대 88% 지원을 받아 동마다 청소년문화의집을 설치하고, 미사용 시간엔 주민 사랑방으로 공동 개방할 것을 건의함.", tag: "돌봄/복지" },
  { id: 94, proposer: "서윤경", topic: "노후 공동주택 재건축·재개발 인허가 절차 신속 추진", detail: "주차난과 아파트 노후화로 인한 세대 유출을 막기 위해 구청 내 전담 지원창구를 운영하여 심의 절차를 신속 처리하고, 단순 주택 공급을 넘어 공원·체육·돌봄시설을 통합 조성해야 함.", tag: "주거/상권" },
  { id: 97, proposer: "최민석", topic: "공공 통신 회선 전수 감사 및 스마트 망 전환을 통한 예산 절감", detail: "관내 CCTV 등의 패킷 수신 기록 대조를 통해 미사용 유령 회선을 즉각 해지하고 고가의 전용선을 국정원 인증 가상사설망(VPN) 기술로 대체하는 대기업식 통합 결합 입찰을 제안함.", tag: "행정/소통" }
];

export default function CommitteeProposalsPart2() {
  const [currentProposalCard, setCurrentProposalCard] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTag, setActiveTag] = useState('전체');

  const tags = ['전체', '관광/문화', '교육/안전', '상권/경제', '청년/문화', '관광/AI', '돌봄/복지', '교통/안전', '주거/상권', '행정/소통'];

  const filteredProposals = proposalsData.filter((item) => {
    const matchesTag = activeTag === '전체' || item.tag === activeTag;
    const matchesSearch = item.proposer.includes(searchQuery) || 
                          item.topic.includes(searchQuery) || 
                          item.detail.includes(searchQuery);
    return matchesTag && matchesSearch;
  });

  const nextProposal = () => {
    setCurrentProposalCard((prev) => (prev + 1) % proposalsData.length);
  };

  const prevProposal = () => {
    setCurrentProposalCard((prev) => (prev - 1 + proposalsData.length) % proposalsData.length);
  };

  const goBack = () => {
    if ((window as any).customNavigate) {
      (window as any).customNavigate('/');
    } else {
      window.location.pathname = '/';
    }
  };

  const getTagColor = (tag: string) => {
    switch (tag) {
      case '관광/문화': return 'bg-violet-50 text-violet-750 border-violet-100';
      case '교육/안전': return 'bg-green-50 text-green-700 border-green-100';
      case '상권/경제': return 'bg-orange-50 text-orange-700 border-orange-100';
      case '청년/문화': return 'bg-sky-50 text-sky-700 border-sky-100';
      case '관광/AI': return 'bg-blue-50 text-blue-700 border-blue-100';
      case '돌봄/복지': return 'bg-purple-50 text-purple-700 border-purple-100';
      case '교통/안전': return 'bg-rose-50 text-rose-700 border-rose-100';
      case '주거/상권': return 'bg-amber-50 text-amber-700 border-amber-100';
      case '행정/소통': return 'bg-teal-50 text-teal-700 border-teal-100';
      default: return 'bg-slate-50 text-slate-700 border-slate-100';
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Top Banner Header */}
      <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 text-white py-12 px-4 shadow-md">
        <div className="max-w-4xl mx-auto space-y-4">
          <button 
            onClick={goBack}
            className="flex items-center gap-2 text-xs sm:text-sm font-extrabold text-teal-200 hover:text-white transition duration-200 cursor-pointer min-h-[44px]"
          >
            <ArrowLeft className="h-4.5 w-4.5" /> 홈으로 돌아가기
          </button>
          
          <div className="flex items-center gap-3">
            <span className="bg-emerald-600 text-white text-xs px-3 py-1 rounded-full font-black uppercase tracking-wider">구민 정책 제안</span>
            <span className="text-slate-400 text-xs font-bold">민선 9기 부산 북구</span>
          </div>
          
          <h2 className="text-2xl sm:text-4xl font-extrabold leading-snug tracking-tight" style={{ fontFamily: "'Gowun Batang', serif" }}>
            「구민참여위원회」 위원 정책제안 Part II
          </h2>
          <p className="text-slate-350 text-xs sm:text-sm leading-relaxed max-w-2xl">
            지역 현장의 세밀한 관찰에서 잉태된 구민참여위원들의 한 차원 높은 아이디어입니다. 낙동강 민속어촌 조성부터 스마트 음향 안전망 구축까지, 혁신하는 북구의 대안들을 공개합니다.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-8 space-y-12">
        {/* Section 1: Card News Presentation with Generated Banner Image */}
        <section className="space-y-4">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-md aspect-[21/9] sm:aspect-[24/9]">
            <img 
              src="/images/proposals_part2_thumbnail.png" 
              alt="구민참여위원회 정책제안 Part II 썸네일" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/45 to-transparent flex items-center p-6 sm:p-10">
              <div className="max-w-md space-y-2 text-white">
                <span className="inline-block bg-emerald-600 text-white text-[9px] sm:text-xs font-black px-2.5 py-1 rounded-md uppercase tracking-wider">구민 혁신 제안</span>
                <h3 className="text-base sm:text-2xl font-black leading-tight">주민 주도형 정책제안 Part II</h3>
                <p className="text-[10px] sm:text-xs text-slate-300 leading-relaxed">
                  생성형 AI 민원 보좌관, BTS 지민&정국 기념관 등 북구의 비전과 브랜딩을 강화할 아이디어를 소개합니다.
                </p>
              </div>
            </div>
          </div>

          {/* Carousel Card News slider */}
          <div className="space-y-4">
            <div className="flex justify-between items-center px-1">
              <h3 className="text-lg font-black text-slate-800 flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-yellow-500 animate-pulse" />
                구민참여위원회 정책제안 카드뉴스
              </h3>
              <span className="text-xs font-bold text-slate-500 bg-slate-200 px-3 py-1 rounded-full">
                {currentProposalCard + 1} / {proposalsData.length}
              </span>
            </div>

            <div className="relative min-h-[340px] bg-gradient-to-br from-slate-900 to-teal-950 text-white border border-teal-900/40 rounded-3xl p-6 sm:p-10 shadow-xl flex flex-col justify-between overflow-hidden">
              <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
                <FileText className="h-64 w-64 translate-x-12 translate-y-12" />
              </div>

              <div className="space-y-5 relative z-10">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <User className="h-4.5 w-4.5 text-teal-300" />
                    <span className="text-sm font-black text-teal-200">{proposalsData[currentProposalCard].proposer} 위원</span>
                  </div>
                  <span className="bg-teal-950/80 border border-teal-700/50 text-teal-300 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full">
                    {proposalsData[currentProposalCard].tag}
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold text-teal-400 uppercase tracking-wide block">주요 제안 내용</span>
                  <h3 className="text-lg sm:text-2xl font-black leading-snug text-white">
                    {proposalsData[currentProposalCard].topic}
                  </h3>
                </div>

                <div className="h-px bg-white/10 my-2" />

                <div className="space-y-1.5">
                  <span className="text-xs font-bold text-teal-400 uppercase tracking-wide block">제안 상세 내용</span>
                  <p className="text-slate-350 text-xs sm:text-sm leading-relaxed whitespace-pre-line font-semibold">
                    {proposalsData[currentProposalCard].detail}
                  </p>
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="flex justify-between items-center mt-6 pt-5 border-t border-white/10 relative z-10">
                <button 
                  onClick={prevProposal}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white/10 text-white hover:bg-white/20 font-bold rounded-xl text-xs active:scale-95 transition cursor-pointer min-h-[40px]"
                >
                  <ChevronLeft className="h-4 w-4" /> 이전 제안
                </button>
                
                <div className="flex gap-1.5">
                  {proposalsData.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentProposalCard(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        currentProposalCard === idx ? 'w-5 bg-teal-400' : 'w-2 bg-white/30 hover:bg-white/50'
                      } cursor-pointer`}
                      aria-label={`제안 ${idx + 1}`}
                    />
                  ))}
                </div>

                <button 
                  onClick={nextProposal}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-teal-600 text-white hover:bg-teal-750 font-bold rounded-xl text-xs active:scale-95 transition cursor-pointer min-h-[40px]"
                >
                  다음 제안 <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Interactive Proposals search and grid */}
        <section className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h3 className="text-lg font-black text-slate-800 flex items-center gap-2">
              <FileText className="h-5 w-5 text-teal-650" />
              정책 제안 전체 리스트
            </h3>

            {/* Search bar */}
            <div className="relative w-full md:max-w-xs">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-4.5 w-4.5 text-slate-400" />
              </span>
              <input
                type="text"
                placeholder="제안자 또는 키워드 검색..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-[#0D9488] transition shadow-sm placeholder-slate-400"
              />
            </div>
          </div>

          {/* Tags filters */}
          <div className="overflow-x-auto scrollbar-none flex gap-1.5 pb-2">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-2 rounded-full text-xs font-bold shrink-0 border transition-all ${
                  activeTag === tag
                    ? 'bg-teal-600 text-white border-teal-700 shadow-sm'
                    : 'bg-white text-slate-650 border-slate-100 hover:bg-slate-50'
                } cursor-pointer`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {filteredProposals.length > 0 ? (
              filteredProposals.map((item) => (
                <div 
                  key={item.id}
                  className="bg-white border border-slate-200/60 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md hover:border-slate-350 transition duration-300 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-7 w-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                          <User className="h-4 w-4" />
                        </div>
                        <span className="text-sm font-extrabold text-slate-800">{item.proposer} 위원</span>
                      </div>
                      <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold border ${getTagColor(item.tag)}`}>
                        {item.tag}
                      </span>
                    </div>

                    <h5 className="text-sm sm:text-base font-extrabold text-slate-900 leading-snug">
                      {item.topic}
                    </h5>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                      {item.detail}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-50 flex justify-between items-center text-[10px] text-slate-350 font-bold">
                    <span>북구 민선 9기 구민참여위원회</span>
                    <span>제안 번호 [{item.id}]</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-16 text-center bg-white rounded-2xl border border-slate-150">
                <Search className="h-8 w-8 text-slate-300 mx-auto mb-2" />
                <p className="text-sm text-slate-700 font-extrabold">검색 조건에 맞는 제안이 없습니다.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA section */}
        <section className="bg-gradient-to-br from-teal-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-10 text-center shadow-lg space-y-6">
          <h3 className="text-xl sm:text-2xl font-black">북구의 새로운 미래, 당신의 참여로 시작됩니다!</h3>
          <p className="text-xs sm:text-sm text-teal-200 max-w-xl mx-auto leading-relaxed">
            주민이 정책의 주인이 되어 더 나은 북구를 함께 설계하는 '구민참여인수위원회'에 구민 여러분의 값진 의견과 참여를 보태어 주십시오.
          </p>
          <div>
            <a
              href="https://forms.gle/QMTcmjm9YZscTMav6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white text-teal-900 px-6 py-3.5 text-sm sm:text-base font-black shadow-lg hover:bg-slate-100 transition duration-300 min-h-[46px]"
            >
              <CheckCircle2 className="h-5 w-5 text-teal-650" />
              구민참여인수위원회 신청하기
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
