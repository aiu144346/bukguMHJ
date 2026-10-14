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
  Clock,
  AlertCircle
} from 'lucide-react';

import proposals3rdData from '../data/proposals3rdData.json';

interface Proposal3rd {
  id: number;
  excelRowNumber?: number;
  proposer: string;
  topic: string;
  detail: string;       // 제안내용
  tag: string;          // 분야 / 태그
  category?: string;    // 분류 (추진가능/장기검토/추진불가 등)
  department?: string;  // 소관부서
  answer: string;       // 3차 공식 답변 내용
}

const initialProposalsData: Proposal3rd[] = proposals3rdData as Proposal3rd[];

export default function CommitteeProposalsPhase3() {
  const [proposals] = useState<Proposal3rd[]>(initialProposalsData);
  const [currentProposalCard, setCurrentProposalCard] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTag, setActiveTag] = useState('전체');
  const [activeDepartment, setActiveDepartment] = useState('전체');
  const [expandedIds, setExpandedIds] = useState<Record<number, boolean>>({});

  const tags = ['전체', ...Array.from(new Set(proposals.map(p => p.tag).filter(Boolean)))];
  
  // Extract clean unique departments
  const rawDepts = proposals.flatMap(p => (p.department ? p.department.split(',').map(d => d.trim()) : []));
  const departments = ['전체', ...Array.from(new Set(rawDepts.filter(Boolean)))];

  const toggleExpand = (id: number) => {
    setExpandedIds(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredProposals = proposals.filter((item) => {
    const matchesTag = activeTag === '전체' || item.tag === activeTag;
    const matchesDept = activeDepartment === '전체' || (item.department && item.department.includes(activeDepartment));
    const matchesSearch = 
      item.proposer.includes(searchQuery) || 
      item.topic.includes(searchQuery) || 
      item.detail.includes(searchQuery) ||
      item.answer.includes(searchQuery) ||
      (item.department && item.department.includes(searchQuery));
    return matchesTag && matchesDept && matchesSearch;
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

  const getTagColor = (tag: string) => {
    switch (tag) {
      case '상권/경제': return 'bg-amber-50 text-amber-700 border-amber-200';
      case '돌봄/복지': return 'bg-rose-50 text-rose-700 border-rose-200';
      case '행정/소통': return 'bg-teal-50 text-teal-700 border-teal-200';
      case '교통/안전': return 'bg-sky-50 text-sky-700 border-sky-200';
      case '관광/문화': return 'bg-violet-50 text-violet-700 border-violet-200';
      default: return 'bg-indigo-50 text-indigo-800 border-indigo-200 font-extrabold';
    }
  };

  const renderCategoryBadge = (category?: string) => {
    if (!category) return null;
    if (category.includes('추진가능')) {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-black bg-emerald-100 text-emerald-900 border border-emerald-300">
          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
          {category.length > 20 ? category.substring(0, 18) + '...' : category}
        </span>
      );
    }
    if (category.includes('장기검토')) {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-black bg-amber-100 text-amber-900 border border-amber-300">
          <Clock className="h-3.5 w-3.5 text-amber-600" />
          {category.length > 20 ? category.substring(0, 18) + '...' : category}
        </span>
      );
    }
    if (category.includes('추진불가')) {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-bold bg-slate-200 text-slate-700 border border-slate-300">
          <AlertCircle className="h-3.5 w-3.5 text-slate-500" />
          {category.length > 20 ? category.substring(0, 18) + '...' : category}
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-bold bg-indigo-50 text-indigo-800 border border-indigo-200">
        {category.length > 20 ? category.substring(0, 18) + '...' : category}
      </span>
    );
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
          <span className="text-xs font-black text-indigo-800 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full">
            3차 공식 답변 완료
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
                <div className="inline-flex items-center gap-2 bg-indigo-600/90 text-white px-3.5 py-1.5 rounded-full text-xs font-black backdrop-blur-md">
                  <CheckCircle2 className="h-4 w-4" />
                  부산 북구 소관부서 공식 검토결과
                </div>
                <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                  구민 정책제안 소관부서 3차 답변 목록
                </h1>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                  구민참여위원분들께서 제출해 주신 소중한 정책제안에 대해 소관부서별 3차 면밀 검토 및 공식 추진 답변 사항(총 {proposals.length}건)을 안내해 드립니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Spotlight Carousel */}
        {proposals.length > 0 && (
          <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-violet-950 text-white p-6 sm:p-8 shadow-xl border border-indigo-900/40">
            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="bg-indigo-600 text-white text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                  3차 답변 하이라이트 ({currentProposalCard + 1} / {proposals.length})
                </span>
                {proposals[currentProposalCard].department && (
                  <span className="text-xs text-indigo-300 font-bold bg-white/10 px-3 py-1 rounded-lg">
                    소관부서: {proposals[currentProposalCard].department}
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
                <div className="text-indigo-300 font-bold mb-1 text-xs">💬 소관부서 3차 답변 요약:</div>
                <p className="whitespace-pre-wrap">{proposals[currentProposalCard].answer}</p>
              </div>

              {/* Navigation controls */}
              <div className="flex justify-between items-center pt-2">
                <button 
                  onClick={prevProposal}
                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-lg cursor-pointer"
                >
                  <ChevronLeft className="h-4 w-4" /> 이전 3차 답변
                </button>
                <button 
                  onClick={nextProposal}
                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-lg cursor-pointer"
                >
                  다음 3차 답변 <ChevronRight className="h-4 w-4" />
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
                <FileText className="h-5 w-5 text-indigo-700" />
                3차 답변 전체 목록 
                <span className="text-xs font-bold text-indigo-800 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-200">
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
                placeholder="제안자, 소관부서, 답변내용 검색..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>
          </div>

          {/* Department Filter Tabs */}
          {departments.length > 1 && (
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 flex items-center gap-1">
                <Building2 className="h-3.5 w-3.5" /> 소관부서별 필터:
              </label>
              <div className="flex flex-wrap gap-1.5">
                {departments.map((dept) => (
                  <button
                    key={dept || '미지정'}
                    onClick={() => setActiveDepartment(dept || '전체')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition ${
                      activeDepartment === dept
                        ? 'bg-indigo-800 text-white border-indigo-900 shadow-sm'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                    } cursor-pointer`}
                  >
                    {dept}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Category/Tag Filter Tabs */}
          {tags.length > 1 && (
            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`px-3 py-1 rounded-full text-xs font-bold border transition ${
                    activeTag === tag
                      ? 'bg-indigo-600 text-white border-indigo-700'
                      : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                  } cursor-pointer`}
                >
                  {tag}
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

                          {item.department && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-bold bg-indigo-50 text-indigo-900 border border-indigo-100">
                              <Building2 className="h-3.5 w-3.5" />
                              소관부서: {item.department}
                            </span>
                          )}

                          <span className={`px-2.5 py-0.5 rounded-md text-xs font-bold border ${getTagColor(item.tag)}`}>
                            {item.tag}
                          </span>

                          {renderCategoryBadge(item.category)}
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
                            <span>3차 답변 보기</span>
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
                            구민 정책제안 내용
                          </h5>
                          <div className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-wrap font-normal">
                            {item.detail}
                          </div>
                        </div>

                        {/* 2. Official Department 3rd Response */}
                        <div className="bg-gradient-to-br from-indigo-50 to-violet-50/60 p-5 rounded-2xl border border-indigo-200 space-y-2">
                          <h5 className="text-xs font-black text-indigo-900 uppercase tracking-wider flex items-center gap-1.5">
                            <MessageSquare className="h-4 w-4 text-indigo-600" />
                            소관부서 공식 3차 답변 ({item.department || '담당부서'})
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
                <p className="text-sm text-slate-700 font-extrabold">조건에 맞는 3차 답변 데이터가 없습니다.</p>
                <p className="text-xs text-slate-400">검색어를 변경해 보시기 바랍니다.</p>
              </div>
            )}
          </div>
        </section>

        {/* Bottom CTA section */}
        <section className="bg-gradient-to-br from-indigo-900 to-violet-950 text-white rounded-3xl p-6 sm:p-10 text-center shadow-lg space-y-6">
          <h3 className="text-xl sm:text-2xl font-black">구민참여위원들의 소중한 정책제안에 진심으로 감사드립니다!</h3>
          <p className="text-xs sm:text-sm text-indigo-200 max-w-xl mx-auto leading-relaxed break-keep">
            더 나은 북구를 만들기 위한 구민 정책제안 접수가 성황리에 종료되었습니다. 참여해주신 모든 구민 여러분께 깊이 감사드립니다.
          </p>
          <div>
            <span className="inline-flex items-center gap-2 rounded-xl bg-white/20 text-white/80 px-6 py-3.5 text-sm sm:text-base font-bold border border-white/20 shadow-inner">
              <CheckCircle2 className="h-5 w-5 text-indigo-300" />
              정책제안 접수 종료
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}
