import { useState } from 'react';
import { 
  ArrowLeft, 
  ChevronLeft, 
  ChevronRight, 
  User, 
  Search, 
  FileText, 
  Lightbulb, 
  CheckCircle2,
  Building2,
  MessageSquare,
  FileSpreadsheet,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  HelpCircle,
  CheckCircle
} from 'lucide-react';

import proposals3rdData from '../data/proposals3rdData.json';

interface Proposal3rd {
  id: number;
  excelRowNumber?: number;
  proposer: string;
  topic: string;
  detail: string;       // 제안내용
  tag: string;          // 검토 상태 (답변 제외 대상, 검토 생략 대상, 추가 검토 대상 등)
  category?: string;    // 분야 (상권/경제, 돌봄/복지 등)
  answer: string;       // 3차 검토 사유 및 안내
}

const initialProposalsData: Proposal3rd[] = proposals3rdData as Proposal3rd[];

export default function CommitteeProposalsPhase3() {
  const [proposals] = useState<Proposal3rd[]>(initialProposalsData);
  const [currentProposalCard, setCurrentProposalCard] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTag, setActiveTag] = useState('전체');
  const [activeCategory, setActiveCategory] = useState('전체');
  const [expandedIds, setExpandedIds] = useState<Record<number, boolean>>({});

  const tags = ['전체', ...Array.from(new Set(proposals.map(p => p.tag).filter(Boolean)))];
  const categories = ['전체', ...Array.from(new Set(proposals.map(p => p.category).filter(Boolean)))];

  const toggleExpand = (id: number) => {
    setExpandedIds(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredProposals = proposals.filter((item) => {
    const matchesTag = activeTag === '전체' || item.tag === activeTag;
    const matchesCat = activeCategory === '전체' || item.category === activeCategory;
    const matchesSearch = 
      item.proposer.includes(searchQuery) || 
      item.topic.includes(searchQuery) || 
      item.detail.includes(searchQuery) ||
      item.answer.includes(searchQuery);
    return matchesTag && matchesCat && matchesSearch;
  });

  const nextProposal = () => {
    setCurrentProposalCard((prev) => (prev + 1) % proposals.length);
  };

  const prevProposal = () => {
    setCurrentProposalCard((prev) => (prev - 1 + proposals.length) % proposals.length);
  };

  const goBack = () => {
    if ((window as any).customNavigate) {
      (window as any).customNavigate('/');
    } else {
      window.location.pathname = '/';
    }
  };

  const getTagBadge = (tag: string) => {
    switch (tag) {
      case '답변 제외 대상':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-bold bg-purple-100 text-purple-900 border border-purple-300">
            <AlertCircle className="h-3.5 w-3.5 text-purple-600" />
            답변 제외 대상
          </span>
        );
      case '검토 생략 대상':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-bold bg-slate-200 text-slate-800 border border-slate-300">
            <HelpCircle className="h-3.5 w-3.5 text-slate-500" />
            검토 생략 대상
          </span>
        );
      case '추가 검토 대상':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
            <CheckCircle className="h-3.5 w-3.5 text-amber-600" />
            추가 검토 진행 중
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-bold bg-blue-50 text-blue-800 border border-blue-200">
            {tag}
          </span>
        );
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Navigation Bar */}
        <div className="flex justify-between items-center bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm">
          <button 
            onClick={goBack}
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 font-extrabold text-sm transition cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            메인 페이지로 돌아가기
          </button>
          <span className="text-xs font-black text-purple-800 bg-purple-50 border border-purple-200 px-3 py-1 rounded-full">
            3차 답변 (답변제외대상 검토)
          </span>
        </div>

        {/* Hero Header Banner */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
          <div className="relative aspect-[21/9] sm:aspect-[25/8] w-full overflow-hidden bg-slate-900">
            <img 
              src="/images/proposals_phase3_thumbnail.png" 
              alt="구민 정책제안 3차 답변 썸네일" 
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-transparent flex items-center p-6 sm:p-12">
              <div className="max-w-2xl space-y-3 text-white">
                <div className="inline-flex items-center gap-2 bg-purple-600/90 text-white px-3.5 py-1.5 rounded-full text-xs font-black backdrop-blur-md">
                  <AlertCircle className="h-4 w-4" />
                  부산 북구 소관부서 3차 검토안내
                </div>
                <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                  구민 정책제안 3차 답변 (답변제외대상 검토) 목록
                </h1>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                  구민참여인수위원회 제출 제안 중 인사말, 단순 응원, 기존 추진 사업 또는 답변 제외·추가검토 대상으로 분류된 총 {proposals.length}건의 안내 내역입니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Spotlight Carousel */}
        {proposals.length > 0 && (
          <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 text-white p-6 sm:p-8 shadow-xl border border-purple-900/40">
            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="bg-purple-600 text-white text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                  3차 주요 제안 검토 ({currentProposalCard + 1} / {proposals.length})
                </span>
                {proposals[currentProposalCard].category && (
                  <span className="text-xs text-purple-300 font-bold bg-white/10 px-3 py-1 rounded-lg">
                    분야: {proposals[currentProposalCard].category}
                  </span>
                )}
              </div>

              <div className="space-y-2">
                <h3 className="text-lg sm:text-2xl font-black text-white leading-snug">
                  "{proposals[currentProposalCard].topic}"
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-semibold">
                  제안자: {proposals[currentProposalCard].proposer} 위원
                </p>
              </div>

              <div className="bg-white/10 rounded-2xl p-4 text-xs sm:text-sm text-slate-200 leading-relaxed max-h-44 overflow-y-auto">
                <div className="text-purple-300 font-bold mb-1 text-xs">💬 3차 검토 사유 및 안내:</div>
                <p className="whitespace-pre-wrap">{proposals[currentProposalCard].answer}</p>
              </div>

              {/* Navigation controls */}
              <div className="flex justify-between items-center pt-2">
                <button 
                  onClick={prevProposal}
                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-lg cursor-pointer"
                >
                  <ChevronLeft className="h-4 w-4" /> 이전 항목
                </button>
                <button 
                  onClick={nextProposal}
                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold rounded-lg cursor-pointer"
                >
                  다음 항목 <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Interactive List Section */}
        <section className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div>
              <h3 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
                <FileText className="h-5 w-5 text-purple-700" />
                3차 답변 (답변제외대상) 전체 목록 
                <span className="text-xs font-bold text-purple-800 bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-200">
                  총 {filteredProposals.length}건
                </span>
              </h3>
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:max-w-xs">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-4 w-4 text-slate-400" />
              </span>
              <input
                type="text"
                placeholder="제안자, 내용, 검토사유 검색..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              />
            </div>
          </div>

          {/* Status Filter Tabs */}
          {tags.length > 1 && (
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 flex items-center gap-1">
                <AlertCircle className="h-3.5 w-3.5" /> 검토 상태별 필터:
              </label>
              <div className="flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setActiveTag(tag)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold border transition ${
                      activeTag === tag
                        ? 'bg-purple-900 text-white border-purple-950 shadow-sm'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                    } cursor-pointer`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Category Filter Tabs */}
          {categories.length > 1 && (
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat || '미지정'}
                  onClick={() => setActiveCategory(cat || '전체')}
                  className={`px-3 py-1 rounded-full text-xs font-bold border transition ${
                    activeCategory === cat
                      ? 'bg-indigo-600 text-white border-indigo-700'
                      : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                  } cursor-pointer`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

          {/* Expandable Accordion List Items */}
          <div className="space-y-4">
            {filteredProposals.length > 0 ? (
              filteredProposals.map((item) => {
                const isExpanded = !!expandedIds[item.id];

                return (
                  <div 
                    key={item.id}
                    className="bg-white border border-slate-200/90 rounded-2xl shadow-sm hover:shadow-md transition duration-200 overflow-hidden"
                  >
                    {/* Header Card */}
                    <div 
                      onClick={() => toggleExpand(item.id)}
                      className="p-5 sm:p-6 cursor-pointer hover:bg-slate-50/80 transition flex items-start justify-between gap-4"
                    >
                      <div className="space-y-2 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-black bg-slate-100 text-slate-800">
                            <User className="h-3.5 w-3.5 text-slate-500" />
                            {item.proposer} 위원
                          </span>

                          {item.category && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-bold bg-indigo-50 text-indigo-900 border border-indigo-100">
                              <Building2 className="h-3.5 w-3.5" />
                              분야: {item.category}
                            </span>
                          )}

                          {getTagBadge(item.tag)}
                        </div>

                        <h4 className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug">
                          {item.topic}
                        </h4>

                        {!isExpanded && (
                          <p className="text-slate-500 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                            {item.detail}
                          </p>
                        )}
                      </div>

                      {/* Expand / Collapse Indicator */}
                      <button 
                        className="mt-1 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1 shrink-0 transition"
                        aria-label="상세보기 토글"
                      >
                        {isExpanded ? (
                          <>
                            <span>접기</span>
                            <ChevronUp className="h-4 w-4" />
                          </>
                        ) : (
                          <>
                            <span>상세 내용 보기</span>
                            <ChevronDown className="h-4 w-4" />
                          </>
                        )}
                      </button>
                    </div>

                    {/* Expanded Content Box */}
                    {isExpanded && (
                      <div className="px-5 pb-6 pt-2 border-t border-slate-100 space-y-5 bg-slate-50/50">
                        {/* 1. Full Proposal Text */}
                        <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2 shadow-inner">
                          <h5 className="text-xs font-black text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                            <Lightbulb className="h-4 w-4 text-amber-500" />
                            제안 제출 내용
                          </h5>
                          <div className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-wrap font-normal">
                            {item.detail}
                          </div>
                        </div>

                        {/* 2. Official 3rd Stage Review Reason */}
                        <div className="bg-gradient-to-br from-purple-50 to-indigo-50/60 p-5 rounded-2xl border border-purple-200 space-y-2">
                          <h5 className="text-xs font-black text-purple-900 uppercase tracking-wider flex items-center gap-1.5">
                            <MessageSquare className="h-4 w-4 text-purple-600" />
                            소관부서 3차 검토 사유 및 처리 안내
                          </h5>
                          <div className="text-xs sm:text-sm text-slate-800 leading-relaxed whitespace-pre-wrap font-medium">
                            {item.answer}
                          </div>
                        </div>

                        <div className="text-right">
                          <button 
                            onClick={() => toggleExpand(item.id)}
                            className="text-xs text-slate-500 hover:text-slate-800 font-bold underline cursor-pointer"
                          >
                            ▲ 위로 접기
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="py-16 text-center bg-white rounded-2xl border border-slate-200 space-y-3">
                <FileSpreadsheet className="h-10 w-10 text-slate-300 mx-auto" />
                <p className="text-sm text-slate-700 font-extrabold">조건에 맞는 3차 답변(답변제외) 데이터가 없습니다.</p>
                <p className="text-xs text-slate-400">검색어를 변경해 보시기 바랍니다.</p>
              </div>
            )}
          </div>
        </section>

        {/* Bottom CTA section */}
        <section className="bg-gradient-to-br from-purple-900 to-slate-950 text-white rounded-3xl p-6 sm:p-10 text-center shadow-lg space-y-6">
          <h3 className="text-xl sm:text-2xl font-black">구민참여위원들의 소중한 정책제안에 진심으로 감사드립니다!</h3>
          <p className="text-xs sm:text-sm text-purple-200 max-w-xl mx-auto leading-relaxed break-keep">
            더 나은 북구를 만들기 위한 구민 여러분의 정책 제안은 상시로 계속해서 접수하고 있으니 소중한 정책제안 신청을 부탁드립니다.
          </p>
          <div>
            <a
              href="https://forms.gle/QMTcmjm9YZscTMav6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white text-purple-900 px-6 py-3.5 text-sm sm:text-base font-black shadow-lg hover:bg-slate-100 transition duration-300 min-h-[46px]"
            >
              <CheckCircle2 className="h-5 w-5 text-purple-600" />
              정책제안 신청하기
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
