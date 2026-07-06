import { useState } from 'react';
import { 
  ArrowLeft, 
  ChevronLeft, 
  ChevronRight, 
  User, 
  Search, 
  FileText, 
  Lightbulb, 
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
  { id: 108, proposer: "김O만", topic: "낙동강 국가정원 지정 및 구포나루 연계 글로벌 관광 벨트 구축", detail: "화명생태공원 유역의 낙동강 국가정원 승격을 추진하고, 구포역·구포시장과 낙동강을 연결하는 보행교 활성화, 야간 미디어아트쇼 및 로컬 푸드 결합 식도락 여행 코스 개발을 건의함.", tag: "관광/문화" },
  { id: 111, proposer: "권O", topic: "구민 역량 강화를 위한 영유아·노년 특화 '고전 인문 교육' 제공", detail: "정책 수용력을 높이기 위해 교육 인프라를 활용하여 자라나는 세대에게는 깊이 있는 인성과 창의력을, 노년층에게는 지혜를 바탕으로 지역 사회 발전에 기여하는 적극적 주체성을 길러주자고 제안함.", tag: "교육/학습" },
  { id: 121, proposer: "박O수", topic: "구체적 로드맵 기반의 미래형 도시전략 및 덕천근린공원 조기 개발", detail: "AI 데이터센터 유치, 스마트 물류산업 육성 등 실질적 비전을 수립하고, 화명3동 코오롱하늘채 도로변 활용 및 덕천근린공원에 잔디광장과 낙동강 전망대를 조성해 대표 명소로 개발할 것을 요청함.", tag: "주거/상권" },
  { id: 126, proposer: "정O주", topic: "'아빠 육아휴직 장려금 지원 조례' 예산 편성 및 조속한 집행", detail: "이미 의회에서 통과된 조례가 예산 부족을 이유로 수개월째 미뤄져 구민들의 실망감을 낳고 있으므로, 추경예산을 통해 일부라도 우선 편성하거나 구체적인 지급 로드맵을 투명하게 공개하길 촉구함.", tag: "돌봄/복지" },
  { id: 132, proposer: "장O찬", topic: "덕천동 일대 재개발 공사와 지자체 지중화 공사의 병행 추진", detail: "덕천 1·2·3구역 재개발로 땅을 파는 시점을 활용해 전선 지중화, 도로 확장, 보도 신설 등을 병행 조치하면 별도 공사 시보다 예산과 민원을 절반 이하로 대폭 절감할 수 있다고 실무 제안함.", tag: "주거/상권" },
  { id: 147, proposer: "성O영", topic: "고령층 원주민 이탈 방지를 위한 구획 지정 '순차적 재개발' 도입", detail: "무분별한 재정비로 인해 수입이 없는 고령 원주민들이 쫓겨나는 것을 막기 위해 구획별로 순차 개발을 진행하고, 완공된 아파트에 임대 주택 우선 배정 등의 실질적인 복지 시스템을 연계해야 함.", tag: "주거/상권" }
];

export default function CommitteeProposalsPart3() {
  const [currentProposalCard, setCurrentProposalCard] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTag, setActiveTag] = useState('전체');

  const tags = ['전체', '관광/문화', '교육/학습', '주거/상권', '돌봄/복지'];

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
      case '관광/문화': return 'bg-violet-50 text-violet-700 border-violet-100';
      case '교육/학습': return 'bg-green-50 text-green-700 border-green-100';
      case '주거/상권': return 'bg-amber-50 text-amber-700 border-amber-100';
      case '돌봄/복지': return 'bg-purple-50 text-purple-700 border-purple-100';
      default: return 'bg-slate-50 text-slate-700 border-slate-100';
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Top Banner Header */}
      <div className="bg-gradient-to-r from-amber-900 via-yellow-900 to-slate-900 text-white py-12 px-4 shadow-md">
        <div className="max-w-4xl mx-auto space-y-4">
          <button 
            onClick={goBack}
            className="flex items-center gap-2 text-xs sm:text-sm font-extrabold text-yellow-250 hover:text-white transition duration-200 cursor-pointer min-h-[44px]"
          >
            <ArrowLeft className="h-4.5 w-4.5" /> 홈으로 돌아가기
          </button>
          
          <div className="flex items-center gap-3">
            <span className="bg-amber-600 text-white text-xs px-3 py-1 rounded-full font-black uppercase tracking-wider">구민 정책 제안</span>
            <span className="text-slate-400 text-xs font-bold">민선 9기 부산 북구</span>
          </div>
          
          <h2 className="text-2xl sm:text-4xl font-extrabold leading-snug tracking-tight" style={{ fontFamily: "'Gowun Batang', serif" }}>
            「구민참여위원회」 위원 정책제안 Part III
          </h2>
          <p className="text-slate-350 text-xs sm:text-sm leading-relaxed max-w-2xl">
            북구의 가치를 높이는 전략적인 아이디어가 돋보이는 제안들입니다. 낙동강 국가정원 조성, 고령 원주민을 배려하는 순차적 재개발 등 지혜로운 구정 대안들을 소개합니다.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-8 space-y-12">
        {/* Section 1: Card News Presentation with Generated Banner Image */}
        <section className="space-y-4">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-md aspect-[21/9] sm:aspect-[24/9]">
            <img 
              src="/images/proposals_part3_thumbnail.png" 
              alt="구민참여위원회 정책제안 Part III 썸네일" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/45 to-transparent flex items-center p-6 sm:p-10">
              <div className="max-w-md space-y-2 text-white">
                <span className="inline-block bg-amber-600 text-white text-[9px] sm:text-xs font-black px-2.5 py-1 rounded-md uppercase tracking-wider">구민 미래 제안</span>
                <h3 className="text-base sm:text-2xl font-black leading-tight">주민 주도형 정책제안 Part III</h3>
                <p className="text-[10px] sm:text-xs text-slate-300 leading-relaxed">
                  낙동강 국가정원, 아빠 육아휴직 조례 등 우리 가족과 지역의 현실을 바꾸는 핵심 대안들을 확인해 보세요.
                </p>
              </div>
            </div>
          </div>

          {/* Carousel Card News slider */}
          <div className="space-y-4">
            <div className="flex justify-between items-center px-1">
              <h3 className="text-lg font-black text-slate-800 flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-amber-550 animate-pulse" />
                구민참여위원회 정책제안 카드뉴스
              </h3>
              <span className="text-xs font-bold text-slate-500 bg-slate-200 px-3 py-1 rounded-full">
                {currentProposalCard + 1} / {proposalsData.length}
              </span>
            </div>

            <div className="relative min-h-[340px] bg-gradient-to-br from-slate-900 to-amber-950/90 text-white border border-amber-900/40 rounded-3xl p-6 sm:p-10 shadow-xl flex flex-col justify-between overflow-hidden">
              <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
                <FileText className="h-64 w-64 translate-x-12 translate-y-12" />
              </div>

              <div className="space-y-5 relative z-10">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <User className="h-4.5 w-4.5 text-amber-300" />
                    <span className="text-sm font-black text-amber-200">{proposalsData[currentProposalCard].proposer} 위원</span>
                  </div>
                  <span className="bg-amber-950/80 border border-amber-700/50 text-amber-300 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full">
                    {proposalsData[currentProposalCard].tag}
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wide block">주요 제안 내용</span>
                  <h3 className="text-lg sm:text-2xl font-black leading-snug text-white">
                    {proposalsData[currentProposalCard].topic}
                  </h3>
                </div>

                <div className="h-px bg-white/10 my-2" />

                <div className="space-y-1.5">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wide block">제안 상세 내용</span>
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
                        currentProposalCard === idx ? 'w-5 bg-amber-450' : 'w-2 bg-white/30 hover:bg-white/50'
                      } cursor-pointer`}
                      aria-label={`제안 ${idx + 1}`}
                    />
                  ))}
                </div>

                <button 
                  onClick={nextProposal}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-amber-600 text-white hover:bg-amber-700 font-bold rounded-xl text-xs active:scale-95 transition cursor-pointer min-h-[40px]"
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
              <FileText className="h-5 w-5 text-amber-600" />
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
                className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-4 focus:ring-amber-500/5 focus:border-[#D97706] transition shadow-sm placeholder-slate-400"
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
                    ? 'bg-amber-600 text-white border-amber-700 shadow-sm'
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
        <section className="bg-gradient-to-br from-amber-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-10 text-center shadow-lg space-y-6">
          <h3 className="text-xl sm:text-2xl font-black">구민참여위원들의 소중한 정책제안에 진심으로 감사드립니다!</h3>
          <p className="text-xs sm:text-sm text-amber-200 max-w-xl mx-auto leading-relaxed">
            민선 9기 부산 북구 구민참여인수위원회 위원 모집은 마감되었습니다. 참여해주신 모든 분들께 깊이 감사드리며, 더 나은 북구를 만들기 위한 구민 여러분의 정책 제안은 상시로 계속해서 접수하고 있으니 소중한 정책제안 신청을 부탁드립니다.
          </p>
          <div>
            <a
              href="https://forms.gle/QMTcmjm9YZscTMav6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white text-amber-900 px-6 py-3.5 text-sm sm:text-base font-black shadow-lg hover:bg-slate-100 transition duration-300 min-h-[46px]"
            >
              <CheckCircle2 className="h-5 w-5 text-amber-600" />
              정책제안 신청하기
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
