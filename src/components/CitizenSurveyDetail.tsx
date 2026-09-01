import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Calendar, 
  User, 
  ClipboardCheck, 
  Clock, 
  Users, 
  ShieldCheck, 
  ExternalLink, 
  Copy, 
  Check, 
  FileText, 
  Sparkles
} from 'lucide-react';

interface CitizenSurveyDetailProps {
  isBottomSheet?: boolean;
}

export default function CitizenSurveyDetail({ isBottomSheet = false }: CitizenSurveyDetailProps) {
  const [copied, setCopied] = useState(false);
  const surveyUrl = "https://forms.gle/at4AoEjSRCQmTGaf8";

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    if ((window as any).customNavigate) {
      (window as any).customNavigate('/');
    } else {
      window.location.pathname = '/';
    }
  };

  const handleCopyLink = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(surveyUrl);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = surveyUrl;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      window.prompt("아래 설문조사 링크 주소를 복사하세요:", surveyUrl);
    }
  };

  return (
    <article className={`bg-white ${isBottomSheet ? 'py-2 sm:py-4' : 'py-12 sm:py-24'}`}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        
        {/* Back Button (Desktop/Standard Page View) */}
        {!isBottomSheet && (
          <div className="mb-6 sm:mb-8">
            <a
              href="/"
              onClick={handleBack}
              className="inline-flex items-center gap-2 text-[#1E3A8A] font-extrabold hover:underline group text-base sm:text-lg"
            >
              <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
              목록으로 돌아가기
            </a>
          </div>
        )}

        {/* Article Header */}
        <header className="border-b border-slate-150 pb-6 sm:pb-8 mb-6 sm:mb-8">
          <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm font-extrabold bg-violet-100/80 text-violet-800 border border-violet-200 shadow-sm">
              <ClipboardCheck className="h-4 w-4" />
              구민참여인수위원회
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-black bg-emerald-100 text-emerald-800 border border-emerald-200">
              <Sparkles className="h-3.5 w-3.5" />
              구민 설문조사
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-snug sm:leading-tight mb-4 sm:mb-6" style={{ wordBreak: 'keep-all' }}>
            부산광역시 북구 공약사업 구민 체감도 및 필요성 조사
          </h1>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-slate-500 text-xs sm:text-sm font-semibold">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4.5 w-4.5 text-slate-400" />
              작성일: 2026.08.26
            </span>
            <span className="flex items-center gap-1.5">
              <User className="h-4.5 w-4.5 text-slate-400" />
              민선9기 부산 북구 구민참여인수위원회
            </span>
          </div>
        </header>

        {/* Poster Visual Image Container */}
        <div className="rounded-3xl overflow-hidden border border-slate-200 bg-slate-50 shadow-md mb-8 sm:mb-10 group relative">
          <img
            src="/images/citizen-participation-notice-01.png"
            onError={(e) => {
              // Fallback to committee-notice.jpg if PNG load fails
              (e.target as HTMLImageElement).src = "/images/committee-notice.jpg";
            }}
            alt="부산광역시 북구 공약사업 구민 체감도 및 필요성 조사 안내 포스터"
            className="w-full h-auto object-contain max-h-[600px] mx-auto transition-transform duration-500 group-hover:scale-[1.01]"
          />
        </div>

        {/* Salutation & Introduction Box */}
        <div className="bg-gradient-to-br from-blue-50/80 via-indigo-50/40 to-slate-50 border border-blue-150 p-5 sm:p-7 rounded-3xl mb-8 sm:mb-10 space-y-4 shadow-sm">
          <h3 className="font-extrabold text-blue-950 text-base sm:text-xl flex items-center gap-2">
            📢 안녕하십니까, 부산시 북구 주민 여러분.
          </h3>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
            본 조사는 부산광역시 북구가 추진 중인 주요 공약 사업에 대한 구민 여러분의 의견을 듣고, 향후 구정 운영 및 정책 수립에 반영하기 위해 실시되는 주민 체감도 및 우선 추진 필요성 조사입니다.
          </p>
          <div className="bg-white/90 border border-blue-200/60 p-4 rounded-2xl text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
            💡 (본 조사는 민선9기 공약의 구체적 계획 수립에 앞서 주민의 정책 수요와 의견을 확인하기 위한 것으로, 사업의 내용, 규모, 추진시기 등이 조정될 수 있습니다.)
          </div>
          <p className="text-[#1E3A8A] font-extrabold text-sm sm:text-base pt-1">
            여러분들의 소중한 참여로, 부산시 북구발전을 위한 자료로 활용될 예정입니다.
          </p>
        </div>

        {/* Key Survey Information Cards */}
        <section className="space-y-4 mb-8 sm:mb-10">
          <h2 className="text-lg sm:text-2xl font-extrabold text-slate-900 border-l-4 border-[#1E3A8A] pl-3 sm:pl-4 py-0.5 bg-slate-50 rounded-r-md">
            📋 조사 개요 안내
          </h2>

          <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
            {/* Card 1: Time */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-sm flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-amber-50 text-amber-600 shrink-0">
                <Clock className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs text-slate-400 font-extrabold block">소요시간</span>
                <p className="text-sm sm:text-base font-extrabold text-slate-900">약 5분 ~ 7분 내외</p>
              </div>
            </div>

            {/* Card 2: Participants */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-sm flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-blue-50 text-[#1E3A8A] shrink-0">
                <Users className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs text-slate-400 font-extrabold block">참여대상</span>
                <p className="text-sm sm:text-base font-extrabold text-slate-900">북구 주민 누구나</p>
              </div>
            </div>

            {/* Card 3: Survey Content */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-sm flex items-start gap-3.5 sm:col-span-2">
              <div className="p-2.5 rounded-xl bg-purple-50 text-purple-600 shrink-0">
                <FileText className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs text-slate-400 font-extrabold block">조사내용</span>
                <p className="text-sm sm:text-base font-extrabold text-slate-900">
                  북구 공약사업에 대한 체감도, 우선순위, 개선 의견 등
                </p>
              </div>
            </div>

            {/* Card 4: Survey Period */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-sm flex items-start gap-3.5 sm:col-span-2">
              <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 shrink-0">
                <Calendar className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs text-slate-400 font-extrabold block">참여기간</span>
                <p className="text-sm sm:text-base font-black text-emerald-700">
                  2026.8.26(수) ~ 2026.9.10(목)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Confidentiality Notice */}
        <div className="bg-slate-900 text-white p-5 sm:p-6 rounded-3xl mb-8 sm:mb-10 space-y-2 shadow-md">
          <div className="flex items-center gap-2 text-amber-400 font-extrabold text-sm sm:text-base">
            <ShieldCheck className="h-5 w-5 shrink-0" />
            <span>🔒 비밀 보장 안내</span>
          </div>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-medium">
            개인정보보호법 제15조 및 통계법 제33조에 따라 응답 내용은 완벽히 보호됩니다.
          </p>
        </div>

        {/* Primary Action Buttons / Survey Link */}
        <section className="bg-gradient-to-r from-blue-900 via-[#1E3A8A] to-indigo-900 p-6 sm:p-8 rounded-3xl text-center space-y-5 text-white shadow-xl">
          <div className="space-y-1.5">
            <span className="inline-block bg-white/20 text-blue-100 text-xs px-3 py-1 rounded-full font-bold">
              온라인 설문지 (Google Forms)
            </span>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
              북구 공약사업 설문조사에 참여해 주세요!
            </h3>
            <p className="text-xs sm:text-sm text-blue-100 font-medium">
              아래 버튼을 누르시면 구글 설문 조사 페이지로 바로 연결됩니다.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            {/* Primary Button */}
            <a
              href={surveyUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.stopPropagation();
                window.open(surveyUrl, '_blank', 'noopener,noreferrer');
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-slate-950 text-base font-black rounded-2xl shadow-lg transition transform active:scale-98 min-h-[52px]"
            >
              <ExternalLink className="h-5 w-5" />
              설문조사 참여하기 (구글 폼)
            </a>

            {/* Copy Link Button */}
            <button
              type="button"
              onClick={handleCopyLink}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-4 bg-white/10 hover:bg-white/20 text-white text-sm font-extrabold rounded-2xl border border-white/20 transition min-h-[52px]"
            >
              {copied ? (
                <>
                  <Check className="h-4.5 w-4.5 text-emerald-400" />
                  <span>링크 복사 완료!</span>
                </>
              ) : (
                <>
                  <Copy className="h-4.5 w-4.5" />
                  <span>설문 링크 복사</span>
                </>
              )}
            </button>
          </div>
        </section>

        {/* Outro Footer text */}
        <div className="text-center py-8 border-t border-slate-200 mt-10 space-y-2">
          <p className="text-[#1E3A8A] font-extrabold text-base sm:text-lg">
            "구민과 함께, 미래를 여는 북구를 만들어 가겠습니다."
          </p>
          <p className="text-slate-400 text-xs sm:text-sm font-bold">
            민선9기 부산 북구 구민참여인수위원회
          </p>
        </div>

        {/* Bottom Back Button */}
        {!isBottomSheet && (
          <div className="mt-8 flex justify-center">
            <a
              href="/"
              onClick={handleBack}
              className="inline-flex items-center justify-center px-8 py-4 bg-[#1E3A8A] text-white font-extrabold rounded-2xl shadow-md hover:bg-blue-900 transition min-h-[48px]"
            >
              전체 소식 목록보기
            </a>
          </div>
        )}
      </div>
    </article>
  );
}
