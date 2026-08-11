import { useState } from 'react';
import * as XLSX from 'xlsx';
import { 
  ArrowLeft, 
  ChevronLeft, 
  ChevronRight, 
  User, 
  Search, 
  FileText, 
  Lightbulb, 
  CheckCircle2,
  Upload,
  Building2,
  MessageSquare,
  FileSpreadsheet,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

import excelProposalsData from '../data/proposalsData.json';

interface Proposal {
  id: number;
  proposer: string;
  topic?: string;
  detail: string;      // 제안내용
  tag: string;         // 비고
  answer?: string;     // 홈페이지 답변내용
  department?: string; // 소관부서
}

const initialProposalsData: Proposal[] = excelProposalsData as Proposal[];

export default function CommitteeProposals() {
  const [proposals, setProposals] = useState<Proposal[]>(initialProposalsData);
  const [currentProposalCard, setCurrentProposalCard] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTag, setActiveTag] = useState('전체');
  const [activeDepartment, setActiveDepartment] = useState('전체');
  const [expandedIds, setExpandedIds] = useState<Record<number, boolean>>({});
  const [uploadNotice, setUploadNotice] = useState<string | null>(null);

  const tags = ['전체', ...Array.from(new Set(proposals.map(p => p.tag).filter(Boolean)))];
  const departments = ['전체', ...Array.from(new Set(proposals.map(p => p.department).filter(Boolean)))];

  const handleExcelUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const data = evt.target?.result;
        const workbook = XLSX.read(data, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const rawJson: any[] = XLSX.utils.sheet_to_json(worksheet);

        if (!rawJson || rawJson.length === 0) {
          alert('엑셀 파일에 데이터가 없습니다.');
          return;
        }

        const parsedProposals: Proposal[] = rawJson.map((row, idx) => {
          const getVal = (possibleKeys: string[]) => {
            for (const key of possibleKeys) {
              const matchedKey = Object.keys(row).find(k => k.trim() === key.trim() || k.replaceAll(' ', '').includes(key.replaceAll(' ', '')));
              if (matchedKey && row[matchedKey] !== undefined) {
                return String(row[matchedKey]).trim();
              }
            }
            return '';
          };

          const proposer = getVal(['제안자', '제안자명', '이름']);
          const detail = getVal(['제안내용', '정책제안내용', '제안']);
          const tag = getVal(['비고', '카테고리', '분야', '유형']) || '구민제안';
          const answer = getVal(['홈페이지 답변내용', '답변내용', '홈페이지답변내용', '답변', '소관부서답변']);
          const department = getVal(['소관부서', '담당부서', '부서명', '부서']) || '미지정';
          const topic = getVal(['제목', '제안제목', '주제']) || (detail.length > 35 ? detail.substring(0, 35) + '...' : detail);

          return {
            id: idx + 1,
            proposer: proposer || `제안자 ${idx + 1}`,
            topic,
            detail: detail || '제안 내용이 없습니다.',
            tag,
            answer,
            department
          };
        });

        setProposals(parsedProposals);
        setCurrentProposalCard(0);
        setUploadNotice(`✅ 엑셀 파일에서 총 ${parsedProposals.length}건의 정책제안 및 답변 데이터를 성공적으로 업로드했습니다!`);
        setTimeout(() => setUploadNotice(null), 7000);
      } catch (err) {
        console.error('Excel upload error:', err);
        alert('엑셀 파일을 읽는 도중 오류가 발생했습니다. 파일 서식이 정상적인지 확인해 주세요.');
      }
    };
    reader.readAsBinaryString(file);
  };

  const toggleExpand = (id: number) => {
    setExpandedIds(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredProposals = proposals.filter((item) => {
    const matchesTag = activeTag === '전체' || item.tag === activeTag;
    const matchesDept = activeDepartment === '전체' || item.department === activeDepartment;
    const matchesSearch = 
      item.proposer.includes(searchQuery) || 
      (item.topic && item.topic.includes(searchQuery)) || 
      item.detail.includes(searchQuery) ||
      (item.answer && item.answer.includes(searchQuery)) ||
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
      case '생활밀착': return 'bg-sky-50 text-sky-700 border-sky-100';
      case '평생학습': return 'bg-emerald-50 text-emerald-700 border-emerald-100';
      case '돌봄/복지': return 'bg-rose-50 text-rose-700 border-rose-100';
      case '교통/안전': return 'bg-amber-50 text-amber-700 border-amber-100';
      case '주거/상권': return 'bg-indigo-50 text-indigo-700 border-indigo-100';
      default: return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Navigation Bar & File Upload */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm">
          <button 
            onClick={goBack}
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 font-extrabold text-sm transition cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            메인 페이지로 돌아가기
          </button>
          
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <label className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1E3A8A] hover:bg-blue-900 text-white px-4 py-2.5 rounded-xl font-extrabold text-xs sm:text-sm shadow-md transition cursor-pointer active:scale-95">
              <Upload className="h-4 w-4 text-yellow-400" />
              <span>엑셀 파일(.xlsx) 업로드 / 업데이트</span>
              <input 
                type="file" 
                accept=".xlsx, .xls, .csv" 
                onChange={handleExcelUpload}
                className="hidden" 
              />
            </label>
          </div>
        </div>

        {/* Upload Status Banner Notification */}
        {uploadNotice && (
          <div className="p-4 bg-emerald-50 border-2 border-emerald-300 rounded-2xl text-emerald-800 text-sm font-extrabold flex items-center justify-between shadow-md">
            <span>{uploadNotice}</span>
            <button onClick={() => setUploadNotice(null)} className="text-emerald-600 hover:text-emerald-900 cursor-pointer">✕</button>
          </div>
        )}

        {/* Hero Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-[#1E3A8A] px-3.5 py-1.5 rounded-full text-xs font-black">
            <Lightbulb className="h-4 w-4" />
            부산 북구 민선 9기 구민참여인수위원회
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            구민 정책제안 & 소관부서 답변 목록
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto font-medium">
            인수위원회 위원들과 구민들께서 작성해주신 정책제안과 이에 대한 소관부서의 공식 검토 및 답변 내용을 투명하게 안내해 드립니다.
          </p>
        </div>

        {/* Highlight Spotlight Carousel */}
        {proposals.length > 0 && (
          <section className="relative overflow-hidden rounded-3xl bg-slate-900 text-white p-6 sm:p-8 shadow-xl">
            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="bg-indigo-600 text-white text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                  주요 제안 하이라이트 ({currentProposalCard + 1} / {proposals.length})
                </span>
                {proposals[currentProposalCard].department && (
                  <span className="text-xs text-indigo-300 font-bold bg-white/10 px-3 py-1 rounded-lg">
                    소관부서: {proposals[currentProposalCard].department}
                  </span>
                )}
              </div>

              <div className="space-y-2">
                <h3 className="text-lg sm:text-2xl font-black text-white leading-snug">
                  "{proposals[currentProposalCard].topic || proposals[currentProposalCard].proposer + ' 위원의 정책제안'}"
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-semibold">
                  제안자: {proposals[currentProposalCard].proposer} 위원
                </p>
              </div>

              <div className="bg-white/10 rounded-2xl p-4 text-xs sm:text-sm text-slate-200 leading-relaxed max-h-40 overflow-y-auto">
                <p className="whitespace-pre-wrap">{proposals[currentProposalCard].detail}</p>
              </div>

              {/* Navigation controls */}
              <div className="flex justify-between items-center pt-2">
                <button 
                  onClick={prevProposal}
                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-lg cursor-pointer"
                >
                  <ChevronLeft className="h-4 w-4" /> 이전
                </button>
                <button 
                  onClick={nextProposal}
                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-lg cursor-pointer"
                >
                  다음 <ChevronRight className="h-4 w-4" />
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
                <FileText className="h-5 w-5 text-[#1E3A8A]" />
                정책 제안 및 부서 답변 전체 목록 
                <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full">
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
                placeholder="제안자, 소관부서, 내용 검색..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
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
                        ? 'bg-[#1E3A8A] text-white border-blue-900 shadow-sm'
                        : 'bg-white text-slate-650 border-slate-200 hover:bg-slate-50'
                    } cursor-pointer`}
                  >
                    {dept}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Tag Filter Tabs */}
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
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-bold bg-blue-50 text-[#1E3A8A] border border-blue-100">
                              <Building2 className="h-3.5 w-3.5" />
                              소관부서: {item.department}
                            </span>
                          )}

                          <span className={`px-2.5 py-0.5 rounded-md text-xs font-bold border ${getTagColor(item.tag)}`}>
                            {item.tag}
                          </span>
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
                            <span>상세 및 답변 보기</span>
                            <ChevronDown className="h-4 w-4" />
                          </>
                        )}
                      </button>
                    </div>

                    {/* Expanded Content Box (Full 3000+ char Text & Answer) */}
                    {isExpanded && (
                      <div className="px-5 pb-6 pt-2 border-t border-slate-100 space-y-5 bg-slate-50/50">
                        {/* 1. Full Proposal Text */}
                        <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2 shadow-inner">
                          <h5 className="text-xs font-black text-[#1E3A8A] uppercase tracking-wider flex items-center gap-1.5">
                            <Lightbulb className="h-4 w-4 text-amber-500" />
                            구민 정책제안 전문 (3,000자 이상 원본)
                          </h5>
                          <div className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-wrap font-normal">
                            {item.detail}
                          </div>
                        </div>

                        {/* 2. Official Department Response */}
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50/50 p-5 rounded-2xl border border-blue-200/80 space-y-2">
                          <h5 className="text-xs font-black text-[#1E3A8A] uppercase tracking-wider flex items-center gap-1.5">
                            <MessageSquare className="h-4 w-4 text-blue-600" />
                            소관부서 공식 답변 사항 ({item.department || '담당부서'})
                          </h5>
                          {item.answer ? (
                            <div className="text-xs sm:text-sm text-slate-800 leading-relaxed whitespace-pre-wrap font-medium">
                              {item.answer}
                            </div>
                          ) : (
                            <p className="text-xs text-slate-400 italic">
                              현재 해당 정책제안에 대한 소관부서의 공식 검토 및 홈페이지 답변 사항이 등록 준비 중입니다.
                            </p>
                          )}
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
                <p className="text-sm text-slate-700 font-extrabold">조건에 맞는 정책제안 데이터가 없습니다.</p>
                <p className="text-xs text-slate-400">검색어를 변경하시거나 상단의 엑셀 파일 업로드 버튼을 눌러주세요.</p>
              </div>
            )}
          </div>
        </section>

        {/* Bottom CTA section */}
        <section className="bg-gradient-to-br from-violet-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-10 text-center shadow-lg space-y-6">
          <h3 className="text-xl sm:text-2xl font-black">구민참여위원들의 소중한 정책제안에 진심으로 감사드립니다!</h3>
          <p className="text-xs sm:text-sm text-violet-200 max-w-xl mx-auto leading-relaxed break-keep">
            더 나은 북구를 만들기 위한 구민 여러분의 정책 제안은 상시로 계속해서 접수하고 있으니 소중한 정책제안 신청을 부탁드립니다.
          </p>
          <div>
            <a
              href="https://forms.gle/QMTcmjm9YZscTMav6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white text-violet-900 px-6 py-3.5 text-sm sm:text-base font-black shadow-lg hover:bg-slate-100 transition duration-300 min-h-[46px]"
            >
              <CheckCircle2 className="h-5 w-5 text-violet-600" />
              정책제안 신청하기
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
