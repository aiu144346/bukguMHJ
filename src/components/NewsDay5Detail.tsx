import React from 'react';
import { ArrowLeft, Calendar, User, FileText } from 'lucide-react';

interface NewsDay5DetailProps {
  isBottomSheet?: boolean;
}

export default function NewsDay5Detail({ isBottomSheet = false }: NewsDay5DetailProps) {
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
            정명희 북구청장 당선인 인수위, “지역 경제 살리기 총력… ‘자영업자 심폐소생’으로 민생 체감도 높인다”
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm sm:text-base">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-5 w-5 text-gray-400" />
              작성일: 2026-06-18
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
            • 인수위 5일 차, 경제환경국 등 5개 부서 업무보고… “N잡 지원센터 등 공약 사업 속도전”
          </p>
          <p className="font-bold text-gray-800 text-base sm:text-lg">
            • 당선인, “행정 편의주의 탈피해 고향사랑기부금 활용 등 자영업자 실질 지원책 마련하라”
          </p>
        </div>

        {/* Article Body */}
        <div className="text-gray-850 text-base sm:text-lg leading-relaxed space-y-6 whitespace-pre-wrap">
          <p>
            [부산=인수위 공동취재단] 정명희 부산 북구청장 당선인의 ‘북구의 새로운 문을 여는 인수위원회’는 18일, 경제환경국(일자리경제과, 자원순환과, 환경위생과, 공원녹지과, 토지정보과)을 대상으로 업무보고를 받았다. 정명희 당선인은 현장의 위기감을 반영한 실질적인 ‘민생 경제 회복’ 정책 추진을 강력히 주문했다.
          </p>

          <h2 className="text-xl sm:text-2xl font-extrabold text-gray-950 border-l-4 border-blue-600 pl-4 py-1 mt-10 mb-4 bg-slate-50 rounded-r-md">
            ■ 자영업자 위한 ‘심폐소생’ 프로젝트 및 스마트 일자리 창출
          </h2>

          <p>
            일자리경제과 보고에서는 시장 공약 사항인 ‘N잡 지원센터’ 운영과 ‘자영업자 심폐소생기금’ 운영 등 소상공인과 자영업자를 위한 파격적인 지원책이 핵심 의제로 다뤄졌다. 정 당선인은 “일본의 사례 등을 벤치마킹하여 N잡 지원센터를 즉시 운영할 수 있도록 로드맵을 구축하라”며 사업의 속도감을 강조했다.
          </p>

          <p>
            특히 신중년 인력을 활용해 영세 자영업자의 일손을 돕고, 디지털 마케팅 교육을 지원하는 등 ‘신중년 사회공헌’과 ‘영세사업자 지원’을 결합한 복합적인 일자리 정책 모델을 제시했다. 또한, 폐업을 희망하는 자영업자를 위해 600만 원을 지원하는 서비스가 제대로 알려지지 않았음을 지적하며, 보다 적극적인 홍보 방안 마련을 지시했다.
          </p>

          <h2 className="text-xl sm:text-2xl font-extrabold text-gray-950 border-l-4 border-blue-600 pl-4 py-1 mt-10 mb-4 bg-slate-50 rounded-r-md">
            ■ ‘구포시장’을 ‘다크투어리즘’과 ‘야시장’ 거점으로
          </h2>

          <p>
            정 당선인은 북구의 경제 엔진인 구포시장의 활성화를 위해 기존의 틀을 깬 테마 상권 조성을 주문했다. 특히 구포시장의 역사적 가치를 살린 ‘다크투어리즘’ 활성화 방안과 야시장 운영을 통해 외부 관광객을 유입할 수 있는 전략적 접근을 강조했다.
          </p>

          <p>
            이와 함께 반려동물과 공존하는 북구를 위해 서울 마포구의 성공 사례를 벤치마킹한 ‘반려동물 공제조합’ 설립과 취약계층 반려동물 지원 사업을 추진하겠다는 의지를 보였다.
          </p>

          <h2 className="text-xl sm:text-2xl font-extrabold text-gray-950 border-l-4 border-blue-600 pl-4 py-1 mt-10 mb-4 bg-slate-50 rounded-r-md">
            ■ “고향사랑기부금 적극 활용, 행정의 일방향성 타파하라”
          </h2>

          <p>
            재정 건전성 확보와 예산 활용을 위한 당선인의 주문도 이어졌다. 정 당선인은 “고향사랑기부금을 자영업자 지원 사업 등 목적에 맞게 지정 기탁 방식으로 운용하고, 행정안전부와의 소통을 통해 긍정적인 운용 방안을 이끌어내야 한다”고 강조했다.
          </p>

          <p>
            정 당선인은 보고 내내 “행정이 일방적으로 사업을 추진하는 방식은 지양해야 한다”며, 구민들이 체감할 수 있는 현장 중심의 행정으로의 근본적인 변화를 요구했다. 또한, 업무보고 내용 전반에 대해 공약 사항과의 정합성을 다시 점검하여 재보고할 것을 지시했다.
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 mt-12 shadow-sm">
            <h3 className="text-lg sm:text-xl font-bold text-gray-950 border-l-3 border-[#1E3A8A] pl-3 mb-4">
              [해설] 정명희호(號) 경제 전략, ‘민생 밀착’과 ‘전략적 재원 운용’
            </h3>
            <div className="space-y-4 text-slate-700 text-sm sm:text-base">
              <p>
                이번 5일 차 업무보고는 정명희 당선인이 침체된 지역 경제를 돌파하기 위해 ‘민생 밀착형 정책’과 ‘전략적 재원 운용’이라는 두 가지 카드를 꺼내 들었음을 시사한다.
              </p>
              <p>
                <strong>첫째, ‘현장형 자영업자 지원 체계’다.</strong> 자영업자 심폐소생기금, N잡 지원센터 등은 당선인의 민생 최우선 철학이 반영된 정책이다. 단순한 보조금 지급을 넘어 마케팅 지원, 일손 지원, 폐업 지원 등 자영업자의 생애주기에 맞춘 촘촘한 지원망을 설계하겠다는 것이 핵심이다.
              </p>
              <p>
                <strong>둘째, ‘지역 자원과 재원의 재발견’이다.</strong> 구포시장을 다크투어리즘과 야시장이라는 콘텐츠로 연결하려는 시도는 북구가 가진 지역 자산을 관광 상품화하겠다는 전략이다. 또한, 고향사랑기부금을 단순한 일반 회계가 아닌 정책 사업의 종잣돈으로 활용하겠다는 것은 부족한 재정 환경 속에서도 공약을 실천하겠다는 당선인의 의지를 보여준다.
              </p>
              <p>
                결국 이번 업무보고는 정 당선인이 행정의 일방향성을 깨고, 주민의 삶에 실질적인 도움이 되는 ‘현장 중심의 경제 정책’을 펼치겠다는 강력한 의지를 표명한 것으로 풀이된다.
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-500 mt-6">
            [문의] 북구청장 당선인 인수위원회 대변인실
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
                src="/images/insu_meeting_day5_img1.png"
                alt="업무보고 현장 1"
                className="w-full h-64 object-cover hover:scale-102 transition duration-300"
              />
              <p className="text-xs sm:text-sm text-gray-500 p-3.5 text-center bg-white border-t border-gray-100">
                정명희 북구청장 당선인이 경제환경국 업무보고에서 '민생 경제 회복' 정책 추진을 지시하고 있다.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-sm">
              <img
                src="/images/insu_meeting_day5_img2.png"
                alt="업무보고 현장 2"
                className="w-full h-64 object-cover hover:scale-102 transition duration-300"
              />
              <p className="text-xs sm:text-sm text-gray-500 p-3.5 text-center bg-white border-t border-gray-100">
                경제환경국 등 부서별 실무 업무보고를 경청하는 정명희 당선인과 인수위원회 위원들.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-sm">
              <img
                src="/images/insu_meeting_day5_img3.jpg"
                alt="업무보고 현장 3"
                className="w-full h-64 object-cover hover:scale-102 transition duration-300"
              />
              <p className="text-xs sm:text-sm text-gray-500 p-3.5 text-center bg-white border-t border-gray-100">
                인수위원회 5일 차 업무보고 회의 전경.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-sm">
              <img
                src="/images/insu_meeting_day5_img4.png"
                alt="업무보고 현장 4"
                className="w-full h-64 object-cover hover:scale-102 transition duration-300"
              />
              <p className="text-xs sm:text-sm text-gray-500 p-3.5 text-center bg-white border-t border-gray-100">
                인수위 회의에서 지역 경제 활성화 방안을 다각도로 검토하는 위원들.
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
