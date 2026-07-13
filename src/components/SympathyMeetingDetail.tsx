import React from 'react';
import { ArrowLeft, Calendar, User, MapPin, Users, ClipboardCheck, Phone, CheckCircle, ExternalLink } from 'lucide-react';

interface SympathyMeetingDetailProps {
  isBottomSheet?: boolean;
}

export default function SympathyMeetingDetail({ isBottomSheet = false }: SympathyMeetingDetailProps) {
  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    if ((window as any).customNavigate) {
      (window as any).customNavigate('/');
    } else {
      window.location.pathname = '/';
    }
  };

  return (
    <article className={`bg-white ${isBottomSheet ? 'py-4' : 'py-16 sm:py-24'}`}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        {!isBottomSheet && (
          <div className="mb-8">
            <a
              href="/"
              onClick={handleBack}
              className="inline-flex items-center gap-2 text-[#1E3A8A] font-bold hover:underline group text-lg"
            >
              <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
              목록으로 돌아가기
            </a>
          </div>
        )}

        {/* Article Header */}
        <header className="border-b border-gray-200 pb-8 mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold bg-violet-50 text-violet-800 mb-4 border border-violet-100">
            <ClipboardCheck className="h-4 w-4" />
            구민참여인수위원회
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-6" style={{ wordBreak: 'keep-all' }}>
            민선9기 부산 북구 구민참여인수위원회 「공감간담회」 개최 및 참석 수요조사 안내
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm sm:text-base">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-5 w-5 text-gray-400" />
              작성일: 2026-07-13
            </span>
            <span className="flex items-center gap-1.5">
              <User className="h-5 w-5 text-gray-400" />
              민선9기 부산 북구 구민참여인수위원회
            </span>
          </div>
        </header>

        {/* Key Theme Visual Image */}
        <div className="rounded-3xl overflow-hidden border border-gray-150 bg-slate-50 shadow-md mb-10 aspect-[16/9]">
          <img
            src="/images/bukgu_map_thumbnail.png"
            alt="부산 북구 지도"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Introduction */}
        <div className="text-gray-800 text-base sm:text-lg leading-relaxed mb-10 font-medium">
          <p className="mb-4">
            부산 북구의 발전과 구민 중심의 행정을 위해 늘 애써주시는 위원님들의 노고에 깊은 감사의 말씀을 드립니다.
          </p>
          <p>
            민선9기 부산 북구는 <strong>"구민과 함께, 미래를 여는 북구"</strong>라는 슬로건 아래, 위원님들의 현장 목소리를 구정에 적극 반영하고자 합니다. 이에 구청장과 위원님들이 직접 대면하여 북구의 핵심 현안을 함께 고민하고 격의 없이 소통하는 <strong>「공감간담회」</strong>를 개최하오니 바쁘시더라도 자리를 빛내어 주시기 바랍니다.
          </p>
        </div>

        {/* Highlight Feature Box */}
        <div className="bg-gradient-to-br from-blue-550/5 to-indigo-50/70 border border-blue-100 p-6 rounded-2xl mb-10 space-y-3 shadow-inner">
          <h3 className="font-extrabold text-blue-900 text-lg flex items-center gap-2">
            💡 이번 공감간담회는 무엇이 다른가요?
          </h3>
          <ul className="list-disc pl-5 space-y-1.5 text-gray-700 text-sm sm:text-base">
            <li><strong>타운홀 미팅 형태:</strong> 권위주의적 관행을 탈피하고 밀착형 소통을 실현하기 위해, 구청장이 직접 위원님들의 테이블을 찾아가 임명장을 수여하고 현장 제안에 즉석 피드백을 드립니다.</li>
            <li><strong>분과별 지정 좌석제(라운드테이블):</strong> 동일한 지역 현안에 관심을 가진 위원님들이 자연스럽게 교류하실 수 있도록 희망 분과별로 좌석이 매칭되어 운영됩니다.</li>
          </ul>
        </div>

        {/* Section 1: Event Summary */}
        <section className="space-y-6 mb-12">
          <h2 className="text-xl sm:text-2xl font-extrabold text-gray-950 border-l-4 border-[#1E3A8A] pl-4 py-1 bg-slate-50 rounded-r-md">
            ■ 행사 개요
          </h2>
          
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="bg-white border border-gray-150 rounded-xl p-5 shadow-sm flex items-start gap-4">
              <ClipboardCheck className="h-6 w-6 text-[#1E3A8A] shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="text-xs text-gray-400 font-bold">행사명</span>
                <p className="text-base font-extrabold text-gray-800">민선9기 부산 북구 구민참여인수위원회 「공감간담회」</p>
              </div>
            </div>

            <div className="bg-white border border-gray-150 rounded-xl p-5 shadow-sm flex items-start gap-4">
              <MapPin className="h-6 w-6 text-emerald-600 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="text-xs text-gray-400 font-bold">장소</span>
                <p className="text-base font-extrabold text-gray-800">북구청 지하강당</p>
              </div>
            </div>

            <div className="bg-white border border-gray-150 rounded-xl p-5 shadow-sm flex items-start gap-4 sm:col-span-2">
              <Users className="h-6 w-6 text-indigo-600 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="text-xs text-gray-400 font-bold">참석 대상</span>
                <p className="text-base font-extrabold text-gray-800">구민참여인수위원회 위원, 부산 북구청장, 구청 간부 공무원 등</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-gray-200 rounded-xl p-6 space-y-4">
            <h4 className="font-extrabold text-slate-900 text-base">📌 주요 내용 및 타임테이블</h4>
            <ul className="space-y-2.5 text-gray-700 text-sm sm:text-base">
              <li className="flex items-start gap-2">
                <span className="bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded text-xs shrink-0 mt-0.5">1단계</span>
                <span>경과보고 및 현장 밀착형 임명장 수여식</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded text-xs shrink-0 mt-0.5">2단계</span>
                <span>구청장과 함께하는 북구 공감 간담회 (5대 핵심 현안* 중심 즉문즉답)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded text-xs shrink-0 mt-0.5">3단계</span>
                <span>민선9기 성공 기원 비전 선포 퍼포먼스 및 기념촬영</span>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <h5 className="font-bold text-slate-800 text-sm mb-2">⭐ 5대 핵심 현안 분과</h5>
              <div className="flex flex-wrap gap-2">
                {['① 교통·보행', '② 복지·돌봄', '③ 경제·자영업', '④ 문화·교육', '⑤ 행정·AI'].map((item) => (
                  <span key={item} className="bg-white border border-gray-250 px-3 py-1 rounded-lg text-xs sm:text-sm font-semibold text-slate-700 shadow-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Demand Survey & Application */}
        <section className="space-y-6 mb-12">
          <h2 className="text-xl sm:text-2xl font-extrabold text-gray-950 border-l-4 border-emerald-600 pl-4 py-1 bg-slate-50 rounded-r-md">
            ■ 참석 수요조사 및 신청 방법
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            효율적인 공간 배치와 안전한 행사 진행을 위해 간담회는 총 2회로 분산하여 진행됩니다. 위원님께서는 양일 중 참석이 가능한 일정 하나를 선택하여 설문을 제출해 주시기 바랍니다.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="bg-gradient-to-br from-emerald-50/50 to-white border border-emerald-100 rounded-xl p-5 shadow-sm space-y-2">
              <span className="bg-emerald-100 text-emerald-800 font-extrabold px-2.5 py-1 rounded-md text-xs">1차 일정 (택1)</span>
              <p className="text-base font-black text-gray-800">2026년 7월 23일(목) 15:30 ~ 17:00</p>
              <p className="text-xs text-gray-400 font-semibold">선착순 100명 제한</p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50/50 to-white border border-emerald-100 rounded-xl p-5 shadow-sm space-y-2">
              <span className="bg-emerald-100 text-emerald-800 font-extrabold px-2.5 py-1 rounded-md text-xs">2차 일정 (택1)</span>
              <p className="text-base font-black text-gray-800">2026년 7월 25일(토) 15:00 ~ 16:30</p>
              <p className="text-xs text-gray-400 font-semibold">선착순 100명 제한</p>
            </div>
          </div>

          <div className="bg-slate-50 border border-gray-200 rounded-xl p-5 space-y-3.5">
            <p className="text-sm sm:text-base text-gray-700">
              <strong>조사 기간:</strong> 즉시 운영 ~ 차수별 인원 마감 시까지
            </p>
            <p className="text-sm sm:text-base text-gray-700">
              <strong>신청 방법:</strong> 아래의 온라인 설문지(구글폼) 링크를 클릭하여 답변 작성 후 제출해 주세요.
            </p>
            <div className="pt-2 flex justify-center">
              <a
                href="https://forms.gle/JoHh8GAgSiUJcn679"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-extrabold rounded-2xl shadow-md hover:from-emerald-700 hover:to-teal-700 transition active:scale-98 min-h-[48px]"
              >
                <CheckCircle className="h-5 w-5" />
                공감간담회 참석 신청하기 (구글폼)
                <ExternalLink className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>
        </section>

        {/* Section 3: Notes & Contact */}
        <section className="space-y-6 mb-12">
          <h2 className="text-xl sm:text-2xl font-extrabold text-gray-950 border-l-4 border-amber-500 pl-4 py-1 bg-slate-50 rounded-r-md">
            ■ 안내 및 유의사항
          </h2>

          <div className="bg-white border border-gray-150 rounded-xl p-5 space-y-4 shadow-sm text-sm sm:text-base text-gray-700">
            <ul className="list-disc pl-5 space-y-2">
              <li>본 간담회는 위원님들께서 공모 신청 시 작성해주신 데이터를 분석하여 희망 분야(분과)를 기준으로 좌석이 매칭되는 <strong>지정좌석제</strong>로 운영됩니다.</li>
              <li>대리 참석은 불가하오니 양해 부탁드립니다.</li>
              <li>행사 당일 원활한 진행 및 등록을 위해 <strong>행사 시작 20분 전</strong>까지 도착하여 주시기 바랍니다.</li>
            </ul>

            <div className="pt-4 border-t border-gray-150 space-y-2">
              <span className="text-xs text-gray-400 font-bold block mb-1">📞 관련 문의사항 연락처</span>
              <div className="flex flex-col sm:flex-row sm:gap-6 text-sm text-gray-800">
                <span className="flex items-center gap-2"><Phone className="h-4.5 w-4.5 text-gray-400" /> 문의처 1: 010-3616-2140</span>
                <span className="flex items-center gap-2"><Phone className="h-4.5 w-4.5 text-gray-400" /> 문의처 2: 010-4155-8048</span>
              </div>
            </div>
          </div>
        </section>

        {/* Outro text */}
        <div className="text-center py-6 border-t border-gray-200">
          <p className="text-[#1E3A8A] font-extrabold text-lg mb-2">
            구민의 목소리로 채워질 민선9기 부산 북구의 첫걸음에 위원님들의 많은 관심과 참여를 부탁드립니다.
          </p>
          <p className="text-slate-500 text-sm font-bold">
            민선9기 부산 북구 구민참여인수위원회
          </p>
        </div>

        {/* Bottom Back Button */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex justify-center">
          <a
            href="/"
            onClick={handleBack}
            className="inline-flex items-center justify-center px-8 py-4 bg-[#1E3A8A] text-white font-bold rounded-2xl shadow-md hover:bg-blue-900 transition min-h-[48px]"
          >
            전체 소식 목록보기
          </a>
        </div>
      </div>
    </article>
  );
}
