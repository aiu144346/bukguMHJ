import React from 'react';
import { ArrowLeft, Calendar, User, Newspaper } from 'lucide-react';

interface PressDetailProps {
  isBottomSheet?: boolean;
}

export default function PressDetail({ isBottomSheet = false }: PressDetailProps) {
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
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        {/* Back Button */}
        {!isBottomSheet && (
          <div className="mb-8">
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
        <header className="border-b border-gray-200 pb-8 mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold bg-blue-50 text-blue-800 mb-4">
            <Newspaper className="h-4 w-4" />
            보도자료
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
            정명희 부산 북구청장 당선인, 민선 9기 구민참여인수위원회 구성 전격 발표!
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm sm:text-base">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-5 w-5 text-gray-400" />
              작성일: 2026-06-11
            </span>
            <span className="flex items-center gap-1.5">
              <User className="h-5 w-5 text-gray-400" />
              부산시 북구청 인수위원회
            </span>
          </div>
        </header>

        {/* Highlight Bullets */}
        <div className="bg-slate-50 border-l-4 border-[#1E3A8A] p-5 rounded-r-xl mb-10 space-y-3">
          <p className="font-bold text-gray-800 text-base sm:text-lg">
            • 명칭 “북구의 새로운 문을 여는 인수위원회”, 슬로건 “민생에 답하고, 미래를 여는 북구” 확정
          </p>
          <p className="font-bold text-gray-800 text-base sm:text-lg">
            • 당선인 제1호 지시로 “구민참여인수위원회” 전격 도입… QR코드로 주민참여인수위원회 직접 선발
          </p>
          <p className="font-bold text-gray-800 text-base sm:text-lg">
            • 개방형 온라인 플랫폼 및 과학적 소통 모형 결합… 관료주의 타파한 파격적 구조
          </p>
        </div>

        {/* Article Body */}
        <div className="text-gray-850 text-base sm:text-lg leading-relaxed space-y-6 whitespace-pre-wrap">
          <p className="font-bold text-gray-900 text-lg border-l-3 border-[#1E3A8A] pl-3 py-0.5">
            민선 9기 부산 북구청장 인수위원회
          </p>
          
          <p>
            민선 9기 정명희 부산 북구청장 당선인의 구정 청사진을 설계할 인수위원회가 대대적인 행정 거버넌스 혁신을 예고하며 그 구체적인 구성 특징을 공개했다.
          </p>
          
          <p>
            정명희 북구청장 당선인 측은 2026년 6월 11일(목), 본격적인 구정 전환 작업을 전담할 인수위원회의 조직 인선과 체계 구축을 완료했다고 발표했다.
          </p>
          
          <p>
            이번에 확정된 인수위의 공식 명칭은 <strong>『북구의 새로운 문을 여는 인수위원회』</strong>이며, 구정 운영 슬로건은 <strong>『민생에 답하고, 미래를 여는 북구』</strong>이다. 관료주의적 관행의 문을 닫고 구민을 향한 소통의 문을 열어 민생 현안에 실시간으로 처방하겠다는 구조적 정체성을 명확히 한 것이다.
          </p>

          <p>
            이번 민선 9기 북구청장 인수위원회 구성의 가장 주요한 특징은 다음과 같이 세 가지 혁신 축으로 집약된다.
          </p>

          <h3 className="text-lg sm:text-xl font-extrabold text-gray-950 border-l-4 border-blue-600 pl-4 py-0.5 mt-10 mb-4 bg-slate-50 rounded-r-md">
            첫째, 제1호 사안 『구민참여인수위원회』 구성을 통한 직접 참여제 도입
          </h3>
          <p>
            정명희 당선인은 인수위 조직 구성과 동시에 『구민참여인수위원회 구성 및 운영』을 제1호 사안으로 전격 지시했다. 구민이 정책의 단순한 수혜자가 아니라 구정의 마스터플랜을 직접 설계하는 주체가 되어야 한다는 행정 철학에 따른 조치다.
          </p>
          <p>
            북구 주민을 대상으로 위원을 공개 모집하며, 참여 의지가 높은 구민들을 중심으로 주민인수위를 구성한다. 또한 인수위 활동기부터 취임 후 비전 제시 기간까지 전 과정을 구민에게 실시간으로 홍보하고 투명하게 공유할 전용 홈페이지를 개설·운영하여 소통의 단절을 차단한다.
          </p>

          <h3 className="text-lg sm:text-xl font-extrabold text-gray-950 border-l-4 border-blue-600 pl-4 py-0.5 mt-10 mb-4 bg-slate-50 rounded-r-md">
            둘째, 인수위원회의 전문성과 구민참여인수위원회와의 협력을 통한 정책 고도화
          </h3>
          <p>
            단순 나열식 공약 배치의 한계를 극복하기 위해 전문가들 위주로 구성된 인수위원회와 구민참여인수위원회와의 협력체계를 구축할 예정이다. 구민인수위원들은 활동 기간 중 정책 워크숍과 회의를 통해 공간 및 복지 과제를 직접 토론하고 디자인하게 된다.
          </p>
          <p>
            이렇게 구성된 구민인수위원들은 향후 개최될 『취임 후 100일 북구 비전 발표회』에 당선인과 함께 무대에 올라, 주민의 손으로 완성한 민선 9기 4개년 구정 마스터플랜을 대외에 공표하는 숙의 거버넌스의 핵심 주역으로 활약할 예정이다.
          </p>

          <p className="bg-blue-50/40 p-6 rounded-2xl border border-blue-100 font-semibold text-slate-800 my-6 shadow-sm">
            정명희 북구청장 당선인은 “인수위원회 구성의 핵심은 ‘구민의 아이디어’가 즉시 정책이 되는 혁신적 구조를 통해, 복지 안심망을 다듬고 북구의 공간 가치를 상향시키는 미래 지도를 주민과 함께 그려내겠다.”라고 강력한 시정 의지를 표명했다.
          </p>

          <p>
            한편, 인선 및 조직 구성을 명확히 확정한 『북구의 새로운 문을 여는 인수위원회』는 12일(금) 공식 사무실 제막식을 가질 예정이며, 이를 기점으로 실무 중심의 분과별 업무보고와 현장 진단, 7월 1일 취임식 행사 기획 등의 과업을 본격적으로 전개할 방침이다.
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
                src="/images/insu_committee_group_2.jpg"
                alt="민선 9기 인수위원회 기념 촬영"
                className="w-full h-64 object-cover hover:scale-102 transition duration-300"
              />
              <p className="text-xs sm:text-sm text-gray-500 p-3.5 text-center bg-white border-t border-gray-100">
                민선 9기 출범 『북구의 새로운 문을 여는 인수위원회』 기념 촬영
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-sm">
              <img
                src="/images/insu_session.jpg"
                alt="인수위 회의 전경"
                className="w-full h-64 object-cover hover:scale-102 transition duration-300"
              />
              <p className="text-xs sm:text-sm text-gray-500 p-3.5 text-center bg-white border-t border-gray-100">
                북구의 발전과 구민 소통 방안에 관하여 논의 중인 인수위원회 위원들
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
