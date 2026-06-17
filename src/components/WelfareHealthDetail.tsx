import React from 'react';
import { ArrowLeft, Calendar, User, FileText } from 'lucide-react';

interface WelfareHealthDetailProps {
  isBottomSheet?: boolean;
}

export default function WelfareHealthDetail({ isBottomSheet = false }: WelfareHealthDetailProps) {
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
            정명희 북구청장 당선인 인수위, ‘촘촘한 복지·보건 안전망’ 구축 박차
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm sm:text-base">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-5 w-5 text-gray-400" />
              작성일: 2026-06-16
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
            • 인수위 3일 차, 복지국·보건소 업무보고… “공공성 강화 및 복지-보건 연계 효율화” 강조
          </p>
          <p className="font-bold text-gray-800 text-base sm:text-lg">
            • 당선인, “중앙정부·시 협력 강화 및 현장 중심의 실질적 돌봄 체계 마련” 주문
          </p>
        </div>

        {/* Article Body */}
        <div className="text-gray-850 text-base sm:text-lg leading-relaxed space-y-6 whitespace-pre-wrap">
          <p>
            <strong>[부산 북구청 인수위원회]</strong> 정명희 부산 북구청장 당선인의 ‘북구의 새로운 문을 여는 인수위원회’는 16일, 복지국과 보건소를 대상으로 업무보고를 받으며 ‘행복한 북구’를 위한 본격적인 복지 공약 다듬기에 나섰다.
          </p>

          <p>
            이날 업무보고는 7월 시행을 앞둔 ‘돌봄SOS센터’ 구축을 비롯해 ▲365 AI 디지털 돌봄 ▲디지털 돌봄 전문가 양성 ▲아이맘 택시 및 하교 안심지원 도우미 등 생애주기별 맞춤형 복지 서비스의 실효성을 점검하는 데 집중됐다.
          </p>

          <h2 className="text-xl sm:text-2xl font-extrabold text-gray-950 border-l-4 border-blue-600 pl-4 py-1 mt-10 mb-4 bg-slate-50 rounded-r-md">
            AI와 디지털 결합한 ‘스마트 돌봄’으로 복지 사각지대 해소
          </h2>

          <p>
            복지국은 AI를 활용한 디지털 인지훈련 프로그램과 60명의 정예 디지털 돌봄 전문가 양성 등 기술 기반의 돌봄 체계 고도화 계획을 보고했다. 특히 어르신 일자리 무한책임제, 발달장애인 세이프가드, 청년 주거 부담 완화 등 민생 현안에 대해 즉시 시행 가능 여부와 추가 예산 소요를 중심으로 심도 있는 논의가 진행되었다.
          </p>

          <p>
            보건소는 야간 및 주말 상시 진료 체계 구축을 통해 구민의 의료 접근성을 획기적으로 개선하겠다는 방침을 밝혔다.
          </p>

          <h2 className="text-xl sm:text-2xl font-extrabold text-gray-950 border-l-4 border-blue-600 pl-4 py-1 mt-10 mb-4 bg-slate-50 rounded-r-md">
            정명희 당선인, “공공성 담보 및 정책 전문성 강화하라”
          </h2>

          <p>
            정명희 당선인은 현안 보고를 받는 자리에서 복지 서비스의 ‘질적 내실화’를 강하게 주문했다. 정 당선인은 “중앙정부 및 부산시와 긴밀히 협력해 고향사랑기부제와 사회공헌 사업을 확대하고, 가용 재원을 효율적으로 배분해야 한다”고 강조했다.
          </p>

          <p>
            특히 복지관의 수탁 평가와 관련해 “공공성을 담보할 수 있는 실질적인 대안을 조례 개정 등을 통해 마련하라”고 지시했다. 또한, 연 4~5회에 그치는 지역사회보장협의체의 운영 방식을 비판하며, 임기 만료된 위원들의 재정비와 실질적인 활동 체계 마련을 촉구했다. 정 당선인은 “보건과 복지를 유기적으로 연결해 행정의 효율성을 극대화하고, 정책 전문가들을 적극적으로 활용하는 시스템을 갖춰야 한다”고 덧붙였다.
          </p>

          <p>
            인수위원들 역시 서비스 통합을 제언했다. 박미영 위원은 분산된 돌봄 애플리케이션을 통합하여 주민 접근성을 높일 것을 제안했고, 김부련 위원은 소셜 믹스(Social Mix) 형태의 일자리 사업 추진을 강조했다.
          </p>

          {/* Highlight Box for Explanations */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 mt-12 shadow-sm">
            <h3 className="text-lg sm:text-xl font-bold text-gray-950 border-l-3 border-[#1E3A8A] pl-3 mb-4">
              [해설] 정명희의 복지 철학, ‘디지털 전환’과 ‘공공 책임성’에 방점
            </h3>
            <div className="space-y-4 text-slate-700 text-sm sm:text-base">
              <p>
                이번 업무보고는 정명희 당선인이 추구하는 차기 북구 복지 정책의 핵심 기조를 명확히 보여준다.
              </p>
              <p>
                <strong>첫째, ‘디지털 기술을 활용한 돌봄의 표준화’다.</strong> 단순히 사람의 손길에만 의존하던 기존 복지에서 벗어나, AI와 디지털 플랫폼을 적극 도입해 돌봄의 질을 높이고 새로운 일자리까지 창출하겠다는 전략이다. 이는 정 당선인의 ‘AI 행정 대전환’ 철학이 복지 분야까지 관통하고 있음을 시사한다.
              </p>
              <p>
                <strong>둘째, ‘행정의 공공성과 체감도 제고’다.</strong> 정 당선인이 비수탁 복지관의 공공성과 지역사회보장협의체의 내실화를 강조한 것은, 복지 예산이 투입되는 곳마다 ‘보여주기식’이 아닌 ‘주민이 체감할 수 있는 실질적 혜택’으로 돌아와야 한다는 강력한 의지다.
              </p>
              <p>
                <strong>마지막으로, ‘보건-복지 통합 플랫폼 구축’이다.</strong> 보건소의 진료 기능과 복지 서비스의 연계는 고령화 시대에 필수적인 정책이다. 인수위의 이번 활동은 파편화된 복지 서비스를 하나로 묶어 주민들이 체감할 수 있는 ‘원스톱 서비스’로 진화시키겠다는 정명희호의 정책적 로드맵을 선명하게 드러내고 있다.
              </p>
            </div>
          </div>
        </div>

        {/* Attached Images Section */}
        <section className="mt-16 border-t border-slate-100 pt-12">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-950 mb-8 flex items-center gap-2">
            📸 관련 현장 사진
          </h3>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-sm flex flex-col">
              <img
                src="/images/insu_meeting_day3_img1.png"
                alt="업무보고 기록 검토 중인 정명희 당선인"
                className="w-full h-40 object-cover hover:scale-105 transition duration-300"
              />
              <p className="text-xs text-gray-500 p-3 text-center bg-white border-t border-gray-100 flex-grow">
                업무보고 내용을 메모하고 꼼꼼히 검토 중인 정명희 당선인
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-sm flex flex-col">
              <img
                src="/images/insu_meeting_day3_img2.jpg"
                alt="복지국·보건소 업무보고 현장 전경"
                className="w-full h-40 object-cover hover:scale-105 transition duration-300"
              />
              <p className="text-xs text-gray-500 p-3 text-center bg-white border-t border-gray-100 flex-grow">
                인수위원회 위원들이 참석한 복지국 및 보건소 업무보고 현장 전경
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-sm flex flex-col">
              <img
                src="/images/insu_meeting_day3_img3.jpg"
                alt="인수위와 부서 실무진 질의답변"
                className="w-full h-40 object-cover hover:scale-105 transition duration-300"
              />
              <p className="text-xs text-gray-500 p-3 text-center bg-white border-t border-gray-100 flex-grow">
                실효성 있는 복지 정책 수립을 위한 질의답변 및 의견 교환
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
