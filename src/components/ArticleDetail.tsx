import React from 'react';
import { ArrowLeft, Calendar, User, FileText } from 'lucide-react';

interface ArticleDetailProps {
  isBottomSheet?: boolean;
}

export default function ArticleDetail({ isBottomSheet = false }: ArticleDetailProps) {
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
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold bg-amber-50 text-amber-855 mb-4">
            <FileText className="h-4 w-4" />
            인수위 소식
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
            정명희 북구청장 당선인 인수위, ‘AI 대전환’ 및 ‘재정 건전성’ 해법 모색… 구정 혁신 시동
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm sm:text-base">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-5 w-5 text-gray-400" />
              작성일: 2026-06-15
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
            • 인수위 2일 차, 기획감사·미래전략 등 주요 부서 업무보고 청취
          </p>
          <p className="font-bold text-gray-800 text-base sm:text-lg">
            • 당선인, “AI 기반 행정체계 전환 및 세수 감소 따른 근본적 재정 대책 마련하라” 주문
          </p>
        </div>

        {/* Article Body */}
        <div className="text-gray-850 text-base sm:text-lg leading-relaxed space-y-6 whitespace-pre-wrap">
          <p>
            정명희 부산 북구청장 당선인의 ‘북구의 새로운 문을 여는 인수위원회’가 본격적인 업무 파악에 나섰다. 인수위 활동 2일 차인 15일, 기획감실과 총무국 등 주요 부서로부터 핵심 현안과 공약 사항을 보고받고 북구의 미래 비전을 위한 실질적 대안을 논의했다.
          </p>

          <p>
            이날 업무보고는 기획감사실을 시작으로 행정지원과, 미래전략과, 재무과, 세무 1·2과 순으로 진행됐다. 각 부서는 당선인의 주요 공약인 ‘북구형 행복기본권 보장’, ‘자원봉사 타임뱅크’, ‘금빛노을 강변 문화휴식 인프라 확충’ 등의 추진 로드맵을 보고했다. 특히 재무과에서는 생성형 AI를 활용한 업무 혁신 및 문자메시지 고도화를 통한 행정 서비스 강화 방안이 제시되어 눈길을 끌었다.
          </p>

          <h2 className="text-xl sm:text-2xl font-extrabold text-gray-950 border-l-4 border-blue-600 pl-4 py-1 mt-10 mb-4 bg-slate-50 rounded-r-md">
            AI 대전환 대비 부족 지적… “근본적인 재정 대책 수립” 강조
          </h2>

          <p>
            질의응답 시간에서 정명희 당선인은 현장의 보고 내용에 대해 예리한 비판과 함께 정책적 방향성을 제시했다.
          </p>

          <p>
            정 당선인은 “급변하는 행정 환경 속에서 ‘AI 대전환’에 대한 대비는 필수적임에도, 관련 보고 내용이 전무하다”며, “정부 및 부산시와 협력한 AI 연계 사업 등 시대 흐름에 맞춘 구체적인 대책을 즉각 논의하라”고 강력히 주문했다.
          </p>

          <p>
            또한, 최근 부동산 거래세(취득세) 및 부동산교부세 감소로 인해 약 200억 원 규모의 세수 결손이 예상되는 상황에 대해 깊은 우려를 표했다. 당선인은 “재정자립도 악화는 구정 운영의 발목을 잡는 핵심 문제”라며, 단순한 긴축을 넘어선 근본적인 재정 개선 대책 마련을 부서에 요구했다.
          </p>

          <h2 className="text-xl sm:text-2xl font-extrabold text-gray-950 border-l-4 border-blue-600 pl-4 py-1 mt-10 mb-4 bg-slate-50 rounded-r-md">
            “하드웨어 넘어선 ‘문화편의점’으로 구민 행복 실현”
          </h2>

          <p>
            신청사 건립 등 하드웨어 중심의 사업들에 대해서는 ‘주민 체감형 소프트웨어’ 접목을 강조했다. 정 당선인은 “청사는 단순히 행정 공간에 머물러선 안 된다”며, “지역 문화예술인과 소상공인이 참여하는 ‘문화편의점’을 청사 내에 도입해 강사 활동이나 카페 운영이 어우러진 ‘문화사랑방’ 형태의 공간으로 구성해야 한다”고 제안했다. 이는 지역 경제 활성화와 구민 편의를 동시에 잡겠다는 복안이다.
          </p>

          <p>
            한편, 남태우 위원 또한 신청사 건립과 관련해 기부채납 부지 활용 방안 등 세부적인 질의를 이어가며 효율적인 청사 건립을 위한 정책적 점검을 마쳤다.
          </p>

          <p>
            인수위 관계자는 “당선인의 강력한 의지에 따라 이번 업무보고는 단순히 현황을 듣는 자리를 넘어, 공약 실천 가능성을 검증하고 예산의 효율성을 극대화하는 ‘실무형 점검’에 초점을 맞추고 있다”고 밝혔다.
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 mt-12 shadow-sm">
            <h3 className="text-lg sm:text-xl font-bold text-gray-950 border-l-3 border-[#1E3A8A] pl-3 mb-4">
              [해설] 정명희호(號) 북구청, ‘디지털 행정’과 ‘민생 경제’ 투트랙 전략 예고
            </h3>
            <div className="space-y-4 text-slate-700 text-sm sm:text-base">
              <p>
                이번 2일 차 업무보고는 정명희 당선인이 추구하는 민선 9기 북구정의 ‘속도감’과 ‘실용성’을 잘 보여준다.
              </p>
              <p>
                <strong>첫째, ‘디지털 행정의 대전환’이다.</strong> 정 당선인은 단순히 생성형 AI 도입에 머무는 것이 아니라, 부산시 및 정부와 연계한 광역 단위의 AI 행정망 구축을 요구했다. 이는 행정 효율성을 높여 예산 절감 효과를 내고, 향후 발생할 재정 위기를 극복하기 위한 적극적인 대응 전략으로 해석된다.
              </p>
              <p>
                <strong>둘째, ‘현장 밀착형 재정·문화 정책’이다.</strong> 200억 규모의 세수 감소라는 위기 상황 속에서도 공약을 포기하는 대신, 자원을 효율적으로 재배치하겠다는 의지를 보였다. 특히 신청사를 ‘문화편의점’ 개념으로 전환하자는 제안은 구청을 행정 기관에서 구민의 일상적 쉼터이자 지역 경제의 거점으로 바꾸겠다는 ‘공감 행정’의 철학을 담고 있다.
              </p>
              <p>
                결국, 이번 인수위 업무보고는 정 당선인이 ‘약사 출신 행정가’로서 가진 꼼꼼한 예산 분석력과 과거 북구청장 시절의 경험을 바탕으로, 북구의 재정적 한계를 돌파하고 행정의 품격을 높이겠다는 강력한 신호탄으로 풀이된다.
              </p>
            </div>
          </div>
        </div>

        {/* Attached Images Section */}
        <section className="mt-16 border-t border-slate-100 pt-12">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-950 mb-8 flex items-center gap-2">
            📸 관련 현장 사진
          </h3>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-sm">
              <img
                src="/images/insu_meeting_day2_img1.png"
                alt="업무보고 현장 1"
                className="w-full h-64 object-cover hover:scale-102 transition duration-300"
              />
              <p className="text-xs sm:text-sm text-gray-500 p-3.5 text-center bg-white border-t border-gray-100">
                기획감사실 등 실국별 업무보고 주재 및 정책 조율
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-sm">
              <img
                src="/images/insu_meeting_day2_img2.jpg"
                alt="업무보고 현장 2"
                className="w-full h-64 object-cover hover:scale-102 transition duration-300"
              />
              <p className="text-xs sm:text-sm text-gray-500 p-3.5 text-center bg-white border-t border-gray-100">
                당선인의 주안점 메모 및 배부 자료 검토
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
