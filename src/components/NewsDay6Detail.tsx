import React from 'react';
import { ArrowLeft, Calendar, User, FileText } from 'lucide-react';

interface NewsDay6DetailProps {
  isBottomSheet?: boolean;
}

export default function NewsDay6Detail({ isBottomSheet = false }: NewsDay6DetailProps) {
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
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold bg-amber-50 text-amber-800 mb-4">
            <FileText className="h-4 w-4" />
            인수위 소식
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
            정명희 북구청장 당선인 인수위, “안전하고 쾌적한 ‘생활밀착형 도시’ 기반 조성”
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm sm:text-base">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-5 w-5 text-gray-400" />
              작성일: 2026-06-19
            </span>
            <span className="flex items-center gap-1.5">
              <User className="h-5 w-5 text-gray-400" />
              부산시 북구청 인수위원회
            </span>
          </div>
        </header>

        {/* Sub-headlines */}
        <div className="bg-slate-50 border-l-4 border-[#1E3A8A] p-5 rounded-r-xl mb-10 space-y-2">
          <p className="font-bold text-gray-800 text-base sm:text-lg">
            • 인수위 6일 차, 안전도시국 업무보고… “악취·교통·주차 등 주민 숙원사업 현장 해결사 나선다”
          </p>
          <p className="font-bold text-gray-800 text-base sm:text-lg">
            • 당선인, “건설 공약의 현실적 이행 독려… 구민 체감형 스마트 도시 인프라 구축” 주문
          </p>
        </div>

        {/* Article Body */}
        <div className="text-gray-850 text-base sm:text-lg leading-relaxed space-y-6 whitespace-pre-wrap">
          <p>
            [부산 북구청 인수위원회] 정명희 부산 북구청장 당선인의 ‘북구의 새로운 문을 여는 인수위원회’는 19일, 안전도시국(안전총괄과, 교통행정과, 도시관리과, 건설과, 건축과)을 대상으로 업무보고를 받았다. 이번 보고에서는 구민의 안전과 직결된 재난 대응 체계 점검과 함께, 교통 및 주거 환경 개선을 위한 주요 공약 이행 전략이 집중 논의됐다.
          </p>

          <h2 className="text-xl sm:text-2xl font-extrabold text-gray-950 border-l-4 border-blue-600 pl-4 py-1 mt-10 mb-4 bg-slate-50 rounded-r-md">
            ■ 생활 불편 해소 위한 ‘현장형 안전도시’ 구축
          </h2>

          <p>
            안전도시국은 이날 자연·사회 재난 관리와 시설물 안전 예방, 그리고 지역 현안 해결을 위한 공약 추진 계획을 보고했다. 특히 교통행정과는 ‘공유주차 실시간 플랫폼 구축’과 ‘덕천역 1번 출구 에스컬레이터 조기 완공’을 통해 주민들의 이동 편의성을 획기적으로 개선하겠다는 의지를 밝혔다.
          </p>

          <p>
            건설 분야에서는 ▲덕천천 악취 해결 ▲만덕 3터널 방음 시설 확충 ▲강변도로 과선교 구간 회차로 조기 준공 ▲상록한신 주공 3단지 우회도로 신설 등 주민들의 오랜 숙원 사업들이 대거 포함되었다. 당선인은 건설과의 공약 준비 과정이 매우 현실적이고 구체적이라며 그간의 노력을 격려했다.
          </p>

          <h2 className="text-xl sm:text-2xl font-extrabold text-gray-950 border-l-4 border-blue-600 pl-4 py-1 mt-10 mb-4 bg-slate-50 rounded-r-md">
            ■ “행정의 잣대가 아닌, 구민의 접근성 우선하라”
          </h2>

          <p>
            정명희 당선인은 구체적인 사업 실행에 있어 ‘주민 중심’의 사고를 거듭 강조했다. 당선인은 영세 자영업자를 위한 홍보 게시대 설치와 관련해, 단순한 게시대 확충을 넘어 현장에서 실질적인 광고 효과를 낼 수 있는 ‘구체적인 구현 방안’을 마련할 것을 지시했다.
          </p>

          <p>
            주차난 해소와 관련해서도 “주차장 건설 부지가 행정 편의적인 위치 선정에 머물지 않도록 해야 한다”며, “주민들의 실제 접근성과 현장 상황을 고려하여 최적의 부지를 선정했는지 종합적으로 보고하라”고 엄격한 검토를 주문했다.
          </p>

          <h2 className="text-xl sm:text-2xl font-extrabold text-gray-950 border-l-4 border-blue-600 pl-4 py-1 mt-10 mb-4 bg-slate-50 rounded-r-md">
            ■ 스마트 관제 및 재난 안전 상황실 고도화
          </h2>

          <p>
            건축과는 통합관제센터 및 재난안전상황실 운영 계획을 보고했다. 정 당선인은 방범용 CCTV 설치 등 안전 인프라를 확충하는 과정에서 정보통신기술을 접목해 재난 발생 시 골든타임을 놓치지 않는 ‘스마트 안전망’을 구축할 것을 당부했다.
          </p>

          <p>
            인수위 관계자는 “안전도시국 업무는 구민의 일상과 가장 밀접한 분야”라며, “이번 보고를 통해 당선인은 단순히 시설을 확충하는 것을 넘어, 주민들이 피부로 느낄 수 있는 ‘체감도 높은 안전 정책’을 펼치는 데 방점을 두고 있다”고 밝혔다.
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 mt-12 shadow-sm">
            <h3 className="text-lg sm:text-xl font-bold text-gray-950 border-l-3 border-[#1E3A8A] pl-3 mb-4">
              [해설] 정명희의 도시 전략, ‘실용’과 ‘섬세함’으로 완성하는 안전망
            </h3>
            <div className="space-y-4 text-slate-700 text-sm sm:text-base">
              <p>
                이번 안전도시국 업무보고는 정명희 당선인의 ‘실용주의 행정’이 도시 인프라 분야에서 어떻게 구체화되는지를 잘 보여준다.
              </p>
              <p>
                <strong>첫째, ‘주민 체감형 숙원 해결’이다.</strong> 건설과가 보고한 덕천천 악취 제거, 우회도로 신설 등은 거창한 구호보다 주민들이 겪는 실제 불편을 직접 해소하겠다는 의지다. 정 당선인이 건설과 공약의 현실성을 높이 평가한 것은, 정책의 본질이 ‘주민의 고충 해결’에 있음을 확인한 것이다.
              </p>
              <p>
                <strong>둘째, ‘현장 밀착형 디테일’이다.</strong> 주차장 부지 선정이나 홍보 게시대 운영 방안에 대해 세부적인 검토를 지시한 것은, 정책이 현장에서 작동하지 않는 ‘탁상행정’이 되는 것을 경계하기 위함이다. 행정적 절차보다 주민의 접근성을 우선하는 정 당선인의 세심함이 돋보이는 대목이다.
              </p>
              <p>
                결국, 정명희 당선인이 그려 나가는 북구의 미래는, 첨단 기술 and 세밀한 현장 관리가 조화를 이뤄 구민 모두가 안전하고 쾌적한 환경에서 생활할 수 있는 ‘실질적 스마트 도시’로 요약된다.
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-500 mt-6">
            [문의] 부산시 북구인수위원회
          </p>
        </div>

        {/* Attached Images Section */}
        <section className="mt-16 border-t border-slate-100 pt-12">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-950 mb-8 flex items-center gap-2">
            📸 관련 현장 사진
          </h3>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-sm">
              <img
                src="/images/insu_meeting_day6_img2.jpg"
                alt="업무보고 현장 1"
                className="w-full h-64 object-cover hover:scale-102 transition duration-300"
              />
              <p className="text-xs sm:text-sm text-gray-500 p-3.5 text-center bg-white border-t border-gray-100">
                안전도시국 부서별 업무보고를 주재하며 주민 중심 도시 인프라 구축을 설명하고 경청하는 인수위원회 회의 모습.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-sm">
              <img
                src="/images/insu_meeting_day6_img3.jpg"
                alt="업무보고 현장 2"
                className="w-full h-64 object-cover hover:scale-102 transition duration-300"
              />
              <p className="text-xs sm:text-sm text-gray-500 p-3.5 text-center bg-white border-t border-gray-100">
                도시 계획 도면과 지도를 펼쳐 놓고 현안 문제를 분석하는 보고 모습.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-sm sm:col-span-2">
              <img
                src="/images/insu_meeting_day6_img4.jpg"
                alt="업무보고 현장 3"
                className="w-full h-64 object-cover hover:scale-102 transition duration-300"
              />
              <p className="text-xs sm:text-sm text-gray-500 p-3.5 text-center bg-white border-t border-gray-100">
                안전도시국(안전총괄과, 교통행정과, 도시관리과 등) 업무보고에 참여한 각 분야 인수위원 및 공무원 전경.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom Back Button */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex justify-center">
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
