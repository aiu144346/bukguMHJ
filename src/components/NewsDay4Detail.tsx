import React from 'react';
import { ArrowLeft, Calendar, User, FileText } from 'lucide-react';

interface NewsDay4DetailProps {
  isBottomSheet?: boolean;
}

export default function NewsDay4Detail({ isBottomSheet = false }: NewsDay4DetailProps) {
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
            정명희 북구청장 당선인 인수위, “행정 관성 타파하고 ‘북(Book)구’로 재도약하라”
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm sm:text-base">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-5 w-5 text-gray-400" />
              작성일: 2026-06-17
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
            • 인수위 4일 차, 문화교육국 등 5개 부서 업무보고… “현장 목소리 외면한 정책 지양”
          </p>
          <p className="font-bold text-gray-800 text-base sm:text-lg">
            • 당선인, “덕천 젊음의 거리 ‘차 없는 거리’ 민원 해결 등 현장 중심 행정 강력 주문”
          </p>
        </div>

        {/* Article Body */}
        <div className="text-gray-850 text-base sm:text-lg leading-relaxed space-y-6 whitespace-pre-wrap">
          <p>
            정명희 부산 북구청장 당선인의 ‘북구의 새로운 문을 여는 인수위원회’는 17일, 문화교육국(문화관광과, 도시창조과, 교육체육과, 도서관과) 및 민원여권과를 대상으로 업무보고를 받았다. 정 당선인은 이날 보고에서 “기존의 틀에 박힌 행정 관성에서 벗어나 구민이 체감할 수 있는 혁신적인 변화를 시도할 것”을 강력히 촉구했다.
          </p>

          <h2 className="text-xl sm:text-2xl font-extrabold text-gray-950 border-l-4 border-blue-600 pl-4 py-1 mt-10 mb-4 bg-slate-50 rounded-r-md">
            ■ 문화·교육 현장 파악 부족 지적… “전면적인 마인드셋 전환 필요”
          </h2>

          <p>
            이날 보고에서는 거점형 문화향유 플랫폼 운영, 초등학생 1인 1악기 지원, 로컬 크리에이터 육성 등 다양한 공약 사업이 제시됐다. 그러나 정 당선인은 부서별 업무보고가 실질적인 고민과 현장성 부족을 드러내자 날 선 비판을 쏟았다.
          </p>

          <p>
            문화관광과 보고에 대해 정 당선인은 “17억 원이라는 예산을 투입하면서도 구체적인 전략이 보이지 않는다”고 지적하며, 특히 덕천 젊음의 거리 핵심 민원인 ‘차 없는 거리’ 문제를 담당 과장이 인지하지 못하고 있는 점을 강하게 질타했다. 또한, ‘별바다 나이트 마켓’과 같이 성공적인 행사는 외부 업체 중심의 ‘턴키(Turn-key)’ 방식이 아닌 구가 직접 주도하는 방식으로 전환하여 역량을 내재화할 것을 주문했다.
          </p>

          <p>
            도시창조과의 ‘숙등 올림파크’ 사업에 대해서도 기존 도시재생 사업의 이름만 바꾼 ‘재탕 사업’이 아니냐며 사업의 실효성을 재검토할 것을 요구했다.
          </p>

          <h2 className="text-xl sm:text-2xl font-extrabold text-gray-950 border-l-4 border-blue-600 pl-4 py-1 mt-10 mb-4 bg-slate-50 rounded-r-md">
            ■ “교육은 시설 보수가 아닌 미래 가치 창출, 도서관은 ‘Book구’의 심장”
          </h2>

          <p>
            교육체육과에는 “교육 경비를 단순히 학교 시설물 보수에만 투입하는 행태를 멈춰야 한다”고 강조했다. 정 당선인은 특히 “AI 교육 관련 검토가 부족하며, 비용 절감이라는 좁은 시야를 넘어 아이들이 진정으로 필요한 미래형 교육 모델을 정립해야 한다”고 질책했다.
          </p>

          <p>
            도서관과를 향해서는 “조직의 존재 이유와 근거를 명확히 제시하라”며 쓴소리를 아끼지 않았다. 정 당선인은 “북구가 단순한 지역명을 넘어 책을 뜻하는 ‘북(Book)구’로 거듭나야 한다”며, 구의 자랑인 ‘맨발동무 도서관’과 같은 성공 사례를 시 행정에 적극적으로 녹여낼 것을 지시했다.
          </p>

          <p>
            한편, 민원여권과 보고에서는 홈페이지 민원 응답 지연 등 불통 행정을 지적하며, 구민과의 소통을 최우선으로 하는 신속한 민원 처리 시스템 구축을 강조했다.
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 mt-12 shadow-sm">
            <h3 className="text-lg sm:text-xl font-bold text-gray-950 border-l-3 border-[#1E3A8A] pl-3 mb-4">
              [해설] 정명희의 인수위, ‘현장성’과 ‘본질’을 묻다
            </h3>
            <div className="space-y-4 text-slate-700 text-sm sm:text-base">
              <p>
                이번 업무보고는 정명희 당선인이 차기 북구정을 이끌며 중요시하는 두 가지 원칙, ‘현장 중심’과 ‘본질 추구’가 가장 선명하게 드러난 자리였다.
              </p>
              <p>
                <strong>첫째, ‘현장을 모르면 정책도 없다’는 단호한 메시지다.</strong> 덕천 젊음의 거리 민원 사례에서 보듯, 주민들의 불편 사항조차 파악하지 못하는 행정은 어떤 거창한 공약도 실현할 수 없다는 당선인의 철학이 반영되었다. 이는 향후 모든 구정 사업이 책상 위 행정이 아닌, 철저히 현장 중심의 데이터와 민원 분석에 기반할 것임을 예고한다.
              </p>
              <p>
                <strong>둘째, ‘공공의 역할에 대한 본질적 질문’이다.</strong> 도서관과의 존재 이유를 묻고, 교육 경비의 투입 방식을 지적한 것은 정 당선인이 행정의 ‘효율성’과 ‘명분’을 동시에 챙기겠다는 의지다. 단순한 시설 지원을 넘어 ‘왜 이 사업을 하는가’라는 질문을 통해 행정의 마인드를 근본적으로 바꾸겠다는 의도다.
              </p>
              <p>
                결국 정명희 당선인은 이번 업무보고를 통해 공직사회에 경각심을 주는 동시에, 변화된 환경에 발맞춰 ‘북구형 혁신 행정’으로 체질을 완전히 개선하겠다는 강력한 리더십을 보여주고 있다.
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
                src="/images/insu_meeting_day4_1.jpg"
                alt="업무보고 현장 1"
                className="w-full h-64 object-cover hover:scale-102 transition duration-300"
              />
              <p className="text-xs sm:text-sm text-gray-500 p-3.5 text-center bg-white border-t border-gray-100">
                정명희 북구청장 당선인이 문화교육국 등 업무보고를 주재하며 지시하고 있다.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-sm">
              <img
                src="/images/insu_meeting_day4_2.jpg"
                alt="업무보고 현장 2"
                className="w-full h-64 object-cover hover:scale-102 transition duration-300"
              />
              <p className="text-xs sm:text-sm text-gray-500 p-3.5 text-center bg-white border-t border-gray-100">
                인수위원회 위원들이 부서별 업무보고를 청취하는 모습.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-sm">
              <img
                src="/images/insu_meeting_day4_3.jpg"
                alt="업무보고 현장 3"
                className="w-full h-64 object-cover hover:scale-102 transition duration-300"
              />
              <p className="text-xs sm:text-sm text-gray-500 p-3.5 text-center bg-white border-t border-gray-100">
                문화교육국 산하 부서들의 합동 업무보고 회의 전경.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-sm">
              <img
                src="/images/insu_meeting_day4_4.jpg"
                alt="업무보고 현장 4"
                className="w-full h-64 object-cover hover:scale-102 transition duration-300"
              />
              <p className="text-xs sm:text-sm text-gray-500 p-3.5 text-center bg-white border-t border-gray-100">
                업무보고 중 현장 중심 행정과 마인드셋 전환을 주문하는 정명희 당선인.
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
