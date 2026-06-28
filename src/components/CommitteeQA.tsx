import { useState } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight, HelpCircle, Info, Sparkles, CheckCircle2 } from 'lucide-react';

interface QAPair {
  q: string;
  a: string;
  category: string;
}

const qaData: QAPair[] = [
  {
    q: "'구민참여인수위원회'는 어떤 기구이며 왜 만들어졌나요?",
    a: "과거에는 행정이 단독으로 정책을 결정하고 집행해 왔으나, 민선 9기에는 정책 형성 초기 단계부터 주민이 직접 참여하는 실질적인 민주주의를 구현하고자 합니다. 이에 따라 '북구의 새로운 문을 여는 인수위원회'(위원장 강재화)의 전문적인 활동과 구민 여러분의 생생한 현장 경험 및 정책 제안을 결합하기 위해 출범한 기구입니다.",
    category: "기구 안내"
  },
  {
    q: "이전의 다른 인수위원회와 비교해 어떤 점이 특별한가요?",
    a: "2022년 「지방자치법」 개정으로 지방자치단체 인수위원회 제도가 명문화된 이후, 지역 주민이 직접 참여하는 최초의 인수위원회를 구성한다는 점에서 선도적인 자치 분권 혁신 모델입니다. 구민이 단순히 정책을 일방적으로 받아들이는 수혜자 역할에 머무는 것이 아니라, 북구의 미래 정책을 함께 만드는 '공동 설계자(Co-Designer)'로 격상된다는 점이 가장 큰 특징입니다.",
    category: "특별한 점"
  },
  {
    q: "북구 주민이면 누구나 신청할 수 있나요? 신청 자격이 궁금합니다.",
    a: "부산시 북구에 주민등록이 되어 있는 구민 전체가 대상입니다. 더불어, 북구 내에 사업체나 사무실을 두고 상주하고 있는 운영자 및 종사자분들도 폭넓게 참여하실 수 있습니다.",
    category: "신청 자격"
  },
  {
    q: "스마트폰이나 컴퓨터를 잘 다루지 못해도 신청할 수 있나요?",
    a: "물론입니다. 참여의 문턱을 낮추기 위해 다각적인 신청 방식을 지원합니다. 지정된 구글폼 양식을 활용한 비대면 온라인 접수와 유선 전화 접수가 모두 가능합니다. 특히 스마트폰 활용이 어려운 취약계층 구민분들을 위해서는 인근 주민센터 방문 시 대면으로 신청을 대행해 주는 서비스를 제공하여 정보 격차 없이 참여하실 수 있도록 돕습니다.",
    category: "신청 방법"
  },
  {
    q: "모집 기간은 언제까지이며, 선발 규모는 어떻게 되나요?",
    a: "모집은 2026년 6월 15일(월)부터 시작되었으며, 구청장 취임 후 50일까지 수시 모집 및 단계별 선발 방식으로 진행됩니다. 모집 규모는 1차 부문별로 100명 내외를 선발할 예정입니다.",
    category: "모집 일정"
  },
  {
    q: "위원은 어떤 기준으로 선발되나요?",
    a: "'북구의 새로운 문을 여는 인수위원회' 소속 심사위원단이 신청서에 기재된 [인수위 제안사항(정책 아이디어)]을 중심으로 정밀 심사를 수행합니다. 심사 시 아래의 기준과 특징을 엄격히 적용합니다.\n\n• 참신성 및 독창성: 기존의 행정 관행을 탈피한 새로운 시각의 대안인지 평가합니다.\n• 실현 가능성: 북구의 재정적·제도적 환경 내에서 실질적으로 추진할 수 있는지 검토합니다.\n• 공익성 및 파급효과: 특정 계층이 아닌 북구 구민 전체의 복리 증진에 기여하는지 확인합니다.\n• 인구통계학적 균형 배분: 구민 대표성을 확보하기 위해 최종 선발 시 특정 권역, 성별, 연령대에 편중되지 않도록 비율 안배를 최우선으로 고려합니다.",
    category: "선발 기준"
  },
  {
    q: "위원으로 선발되면 구체적으로 어떤 활동을 하게 되나요?",
    a: "구민위원들은 향후 4년간 북구가 나아갈 마스터플랜을 짜는 핵심 활동에 동참하며, 일정은 다음과 같습니다.\n\n• 7월 1일(수) 발대식: 정명희 북구청장 취임식에 공식 참석하며 구민위원 위촉 관련 기본 조율을 진행합니다.\n• 7월 16일(목) 간담회: 분과별 정책 워크숍을 통해 접수된 구민 정책 아이디어를 종합 심의하고, 구정 4개년 마스터플랜을 함께 조율합니다.\n• 10월 8일(목) 비전발표회: 취임 100일 비전발표회 행사에 참석하여, 구청장과 구민위원이 함께 무대에 올라 주민 주도로 완성한 4개년 구정 마스터플랜을 공식 선포하는 뜻깊은 순간을 맞이합니다.",
    category: "주요 활동"
  },
  {
    q: "구민참여인수위원회를 통해 우리 북구는 어떻게 변화될까요?",
    a: "구민의 생생한 아이디어가 구정에 즉각 반영되어 주민이 진짜로 체감하는 행정이 구현되고 정책 실패 비용이 최소화됩니다. 또한, 주민과 행정이 함께하는 민관 협치(Governance) 선도 도시로 도약하는 동시에, 주민 합의를 바탕으로 수립된 미래 비전을 통해 민선 9기 북구청의 강력한 구정 동력을 조기에 확보하게 될 것입니다.",
    category: "기대 효과"
  }
];

export default function CommitteeQA() {
  const [currentCard, setCurrentCard] = useState(0);

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % qaData.length);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + qaData.length) % qaData.length);
  };

  const goBack = () => {
    if ((window as any).customNavigate) {
      (window as any).customNavigate('/');
    } else {
      window.location.pathname = '/';
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Top Banner Header */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white py-12 px-4 shadow-md">
        <div className="max-w-4xl mx-auto space-y-4">
          <button 
            onClick={goBack}
            className="flex items-center gap-2 text-xs sm:text-sm font-extrabold text-blue-200 hover:text-white transition duration-200 cursor-pointer min-h-[44px]"
          >
            <ArrowLeft className="h-4.5 w-4.5" /> 홈으로 돌아가기
          </button>
          
          <div className="flex items-center gap-3">
            <span className="bg-violet-600 text-white text-xs px-3 py-1 rounded-full font-black uppercase tracking-wider">주민안내 Q&A</span>
            <span className="text-slate-400 text-xs font-bold">민선 9기 부산 북구</span>
          </div>
          
          <h2 className="text-2xl sm:text-4xl font-extrabold leading-snug tracking-tight" style={{ fontFamily: "'Gowun Batang', serif" }}>
            「구민참여인수위원회」 주민 안내 Q&A
          </h2>
          <p className="text-slate-350 text-xs sm:text-sm leading-relaxed max-w-2xl">
            구민이 주인이 되는 북구를 실현하기 위한 전국 최초 구민참여인수위원회의 신청 자격, 선발 과정, 활동 혜택 및 주요 일정을 카드뉴스와 함께 상세히 안내해 드립니다.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-8 space-y-12">
        {/* Section 1: Interactive Card News Carousel */}
        <section className="space-y-4">
          <div className="flex justify-between items-center px-1">
            <h3 className="text-lg font-black text-slate-800 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-violet-600" />
              한 눈에 보는 카드 뉴스
            </h3>
            <span className="text-xs font-bold text-slate-500 bg-slate-200 px-3 py-1 rounded-full">
              {currentCard + 1} / {qaData.length}
            </span>
          </div>

          <div className="relative min-h-[380px] bg-gradient-to-br from-white to-slate-50 border border-slate-200/60 rounded-3xl p-6 sm:p-10 shadow-xl flex flex-col justify-between overflow-hidden group">
            {/* Visual background accents */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-50 rounded-full blur-2xl opacity-70 group-hover:scale-110 transition duration-500 pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-50 rounded-full blur-2xl opacity-70 pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="flex justify-between items-start gap-4">
                <span className="bg-indigo-50 text-indigo-800 text-[10px] sm:text-xs font-black px-3.5 py-1.5 rounded-xl border border-indigo-100">
                  {qaData[currentCard].category}
                </span>
                <HelpCircle className="h-8 w-8 text-indigo-200 shrink-0" />
              </div>

              {/* Question */}
              <div className="space-y-2">
                <span className="block text-3xl font-black text-indigo-650">Q.</span>
                <h4 className="text-lg sm:text-2xl font-black text-slate-850 leading-snug">
                  {qaData[currentCard].q}
                </h4>
              </div>

              {/* Divider */}
              <div className="h-px bg-slate-200/60 my-4" />

              {/* Answer */}
              <div className="space-y-2">
                <span className="block text-3xl font-black text-emerald-600">A.</span>
                <p className="text-slate-650 text-sm sm:text-base leading-relaxed whitespace-pre-line font-medium font-semibold">
                  {qaData[currentCard].a}
                </p>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-100 relative z-10">
              <button 
                onClick={prevCard}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-slate-100 text-slate-600 hover:bg-slate-200 font-extrabold rounded-xl text-xs sm:text-sm active:scale-95 transition cursor-pointer min-h-[44px]"
              >
                <ChevronLeft className="h-4.5 w-4.5" /> 이전 질문
              </button>
              
              <div className="flex gap-1.5">
                {qaData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentCard(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      currentCard === idx ? 'w-6 bg-indigo-600' : 'w-2.5 bg-slate-200 hover:bg-slate-350'
                    } cursor-pointer`}
                    aria-label={`슬라이드 ${idx + 1}`}
                  />
                ))}
              </div>

              <button 
                onClick={nextCard}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-indigo-650 text-white hover:bg-indigo-750 font-extrabold rounded-xl text-xs sm:text-sm active:scale-95 transition cursor-pointer min-h-[44px]"
              >
                다음 질문 <ChevronRight className="h-4.5 w-4.5" />
              </button>
            </div>
          </div>
        </section>

        {/* Section 2: Full List of Q&A (Accordions) */}
        <section className="space-y-5">
          <h3 className="text-lg font-black text-slate-800 flex items-center gap-2 px-1">
            <Info className="h-5 w-5 text-indigo-600" />
            자주 묻는 질문 전체 보기
          </h3>

          <div className="space-y-4">
            {qaData.map((qa, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-200/60 rounded-2xl shadow-sm overflow-hidden"
              >
                {/* Header */}
                <div className="bg-slate-50/50 p-5 flex items-start gap-4">
                  <span className="h-7 w-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-black text-sm shrink-0 border border-indigo-100">
                    Q{idx + 1}
                  </span>
                  <h4 className="text-base font-extrabold text-slate-900 leading-snug">
                    {qa.q}
                  </h4>
                </div>

                {/* Body */}
                <div className="p-5 border-t border-slate-100 bg-white flex items-start gap-4">
                  <span className="h-7 w-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-black text-sm shrink-0 border border-emerald-100">
                    A
                  </span>
                  <p className="text-slate-650 text-sm sm:text-base leading-relaxed whitespace-pre-line font-medium flex-1">
                    {qa.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-gradient-to-br from-indigo-900 to-[#1E3A8A] text-white rounded-3xl p-6 sm:p-10 text-center shadow-lg space-y-6">
          <h3 className="text-xl sm:text-2xl font-black">북구의 새로운 미래, 당신의 참여로 시작됩니다!</h3>
          <p className="text-xs sm:text-sm text-blue-200 max-w-xl mx-auto leading-relaxed">
            주민이 정책의 주인이 되어 더 나은 북구를 함께 설계하는 '구민참여인수위원회'에 구민 여러분의 값진 의견과 참여를 보태어 주십시오.
          </p>
          <div>
            <a
              href="https://forms.gle/QMTcmjm9YZscTMav6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white text-indigo-900 px-6 py-3.5 text-sm sm:text-base font-black shadow-lg hover:bg-slate-100 transition duration-300 min-h-[46px]"
            >
              <CheckCircle2 className="h-5 w-5 text-indigo-600" />
              구민참여인수위원회 신청하기
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
