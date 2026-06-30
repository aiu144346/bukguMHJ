

import { useState, useEffect } from 'react';
import { Compass, Target } from 'lucide-react';

export default function Greeting() {
  const [imageError, setImageError] = useState(false);
  const [animateText, setAnimateText] = useState(false);
  const [animateBg, setAnimateBg] = useState(false);

  useEffect(() => {
    // Trigger background image animation immediately on mount
    setAnimateBg(true);
    // Smooth delay before triggering the text animation
    const timer = setTimeout(() => {
      setAnimateText(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="greeting" className="relative overflow-hidden bg-white py-16 sm:py-24">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">

          {/* Left: Greeting and Slogans */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3.5 py-1 text-sm font-semibold text-[#1E3A8A] border border-blue-100">
              <span className="h-1.5 w-1.5 rounded-full bg-[#1E3A8A] animate-pulse" />
              부산광역시 북구의 힘찬 도약
            </span>

            <h2
              className="text-3xl font-black tracking-tight text-slate-900 sm:text-5xl lg:leading-tight animate-fade-in"
              style={{ fontFamily: "'Pretendard', sans-serif" }}
            >
              구민과 함께,<br />
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-[#1E3A8A] to-indigo-700 mt-2 font-black">
                미래를 여는 북구
                <span className="absolute bottom-1.5 left-0 w-full h-3 bg-blue-100/40 -z-10 rounded-lg" />
              </span>
            </h2>

            {/* Premium Greeting Card Container with Background Image and Slow Floating Effect */}
            <div className={`relative overflow-hidden rounded-3xl border border-blue-100/60 p-6 sm:p-8 bg-white shadow-xl transition-all duration-[2000ms] ease-out transform ${animateText ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
              {/* Background image of Buk-gu inside the card */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-3xl">
                <img
                  src="/images/bukgu_bg.png"
                  alt="부산 북구 낙동강 전경"
                  className={`w-full h-full object-cover object-center transition-all duration-[4000ms] ease-out transform ${animateBg ? 'scale-100 opacity-[0.12]' : 'scale-110 opacity-0'
                    }`}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/80 to-white/95" />
              </div>

              {/* Greeting Text Content */}
              <div className="relative z-10 space-y-5 text-base text-gray-700 leading-relaxed sm:text-lg text-left">
                <p className="font-bold text-lg sm:text-xl text-[#0B1E43] border-b border-gray-200/50 pb-4 leading-relaxed">
                  존경하는 북구 구민 여러분! 반갑습니다.<br />
                  민선 9기 부산 북구청장 <span className="underline decoration-blue-500 decoration-3 underline-offset-4 font-black">정명희</span>입니다.
                </p>
                <p className="text-gray-650 font-medium">
                  우리 북구는 부산의 대표적 주거도시이면서 낙동강과 금정산, 화명생태공원 등 뛰어난 자연환경을 자랑하는 데다 김해공항이 가깝고 도시 내외곽으로 오가기 쉬운 교통망을 가진 매력적인 지역입니다.
                </p>
                <p className="text-gray-650 font-medium">
                  민선 9기는 북구의 장점을 살리고 단점을 보완해 새로운 도약의 길을 열어 나가겠습니다. ‘구민과 함께, 미래를 여는 북구’를 구정 방향으로 삼고, ‘소통으로 여는 참여행정, 민생을 살리는 지역경제, 미래를 준비하는 혁신성장, 함께 누리는 포용복지, 안전하고 품격 있는 도시’를 구정 방침으로 추진하겠습니다.
                </p>
                <p className="text-gray-650 font-medium">
                  아이 키우기 좋은 북구, 청년이 꿈을 펼칠 수 있는 북구, 어르신이 행복하고 복지가 든든한 북구, 소상공인이 힘을 얻는 북구, 문화와 관광 그리고 자연이 어우러진 활력도시 북구를 만들기 위해 성큼성큼 나아가겠습니다.
                </p>
                <p className="text-gray-650 font-medium">
                  북구의 미래는 구청 행정만으로 만들 수 없습니다. 구민이 곧 북구의 주인이고, 북구 발전의 가장 큰 힘입니다. 구민의 목소리를 구정의 출발점으로 삼고, 현장에서 답을 찾고, 정책 결정 과정에 구민 참여를 확대하는 소통행정을 실천하겠습니다.
                </p>
                <p className="text-gray-650 font-medium">
                  언제나 구민 곁에서 함께 고민하고 함께 해결하는 구청장이 되겠습니다. 새로운 희망, 새로운 도약의 길을 구민 여러분과 함께 걷겠습니다. 감사합니다.
                </p>
              </div>
            </div>

            <div className="pt-6 space-y-6">
              {/* 구정 목표 Card */}
              <a 
                href="/committee/proposals"
                onClick={(e) => {
                  e.preventDefault();
                  if ((window as any).customNavigate) {
                    (window as any).customNavigate('/committee/proposals');
                  } else {
                    window.location.pathname = '/committee/proposals';
                  }
                }}
                className="block group rounded-3xl bg-gradient-to-r from-blue-50 to-[#EEF2FF] border border-blue-150 p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-[#1E3A8A] p-3 text-white shadow-md shadow-blue-900/10 group-hover:scale-105 transition-transform">
                    <Compass className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-[#1E3A8A] block mb-1 uppercase tracking-wider">구정 목표</span>
                    <strong className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-[#1E3A8A] transition-colors">
                      구민과 함께, 미래를 여는 북구
                    </strong>
                  </div>
                </div>
              </a>

              {/* 5대 구정방침 Card */}
              <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4 mb-4">
                  <div className="rounded-2xl bg-emerald-600 p-2.5 text-white shadow-md shadow-emerald-900/10">
                    <Target className="h-5.5 w-5.5" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-slate-900">5대 구정방침</h3>
                    <p className="text-xs text-slate-400 font-semibold mt-0.5">원하시는 항목을 클릭하시면 정책 제안 플랫폼으로 연결됩니다</p>
                  </div>
                </div>

                <div className="grid gap-3.5 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
                  {[
                    {
                      num: "1",
                      title: "소통으로 여는 참여행정",
                      bullets: ["주민 정책 제안 및 결정 참여", "현장에서 답을 찾는 열린 구정", "구민참여인수위원회, 플랫폼 운영"],
                      color: "border-blue-100 bg-blue-50/20 text-blue-900"
                    },
                    {
                      num: "2",
                      title: "민생을 살리는 지역경제",
                      bullets: ["골목상권과 소상공인 지원", "청년 일자리와 경제 활성화", "지역상권과 관광자원 연계"],
                      color: "border-emerald-100 bg-emerald-50/20 text-emerald-950"
                    },
                    {
                      num: "3",
                      title: "미래를 준비하는 혁신성장",
                      bullets: ["AI·디지털 기반 스마트 행정", "미래산업 및 교육 인프라 확대", "데이터 기반 정책 추진"],
                      color: "border-indigo-100 bg-indigo-50/20 text-indigo-900"
                    },
                    {
                      num: "4",
                      title: "함께 누리는 포용복지",
                      bullets: ["아이부터 어르신 촘촘한 돌봄", "장애와 차별 없는 무장애 도시", "생활밀착형 복지 강화"],
                      color: "border-purple-100 bg-purple-50/20 text-purple-900"
                    },
                    {
                      num: "5",
                      title: "안전하고 품격있는 생활도시",
                      bullets: ["재난·교통·생활안전 강화", "쾌적한 도시환경 조성", "문화와 자연이 어우러진 북구"],
                      color: "border-amber-100 bg-amber-50/20 text-amber-950",
                      span: "sm:col-span-2 lg:col-span-1"
                    }
                  ].map((item) => (
                    <a
                      key={item.num}
                      href="https://forms.gle/QMTcmjm9YZscTMav6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block rounded-2xl border p-4 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 cursor-pointer ${item.color} ${item.span || ''}`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-white font-extrabold text-[10px]">
                          <span>{item.num}</span>
                        </span>
                        <h4 className="font-extrabold text-sm sm:text-base text-slate-900">{item.title}</h4>
                      </div>
                      <ul className="space-y-1 text-xs text-slate-500 font-medium list-disc list-inside">
                        {item.bullets.map((b, idx) => (
                          <li key={idx} className="truncate">{b}</li>
                        ))}
                      </ul>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Candidate Image Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer decorative box */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-[#1E3A8A] to-blue-400 opacity-20 blur-lg" />

              <div className="relative overflow-hidden rounded-2xl border-4 border-white bg-gray-100 shadow-xl aspect-[4/5] flex items-center justify-center">
                {!imageError ? (
                  <div className="relative w-full h-full group overflow-hidden">
                    <img
                      src="/images/candidate.png"
                      alt="정명희 당선인"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      onError={() => setImageError(true)}
                    />
                    {/* Wording Overlay with animations */}
                    <div className={`absolute inset-x-0 bottom-0 bg-white/95 backdrop-blur-sm p-5 border-t border-gray-200/50 text-left transition-all duration-[2000ms] ease-out transform ${animateText ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                      }`}>
                      <p className="text-base sm:text-lg font-black text-[#1E3A8A] tracking-wide mb-1.5">
                        정명희 북구청장
                      </p>
                      <p
                        className="text-xl sm:text-2xl font-bold text-gray-800 leading-relaxed"
                        style={{ fontFamily: '"Nanum Pen Script", cursive' }}
                      >
                        "구민 여러분께서 보내주신 뜨거운 열망을 가슴에 품고,<br />
                        언제나 현장에서 소통하며 주민이 주인이 되는 자랑스러운 북구의 시대를 열어가겠습니다."
                      </p>
                    </div>
                  </div>
                ) : (
                  /* Visual placeholder if image is missing or fails to load */
                  <div className="absolute inset-0 bg-[#1E3A8A]/5 flex flex-col items-center justify-center p-6 text-center">
                    <div className="mb-4 rounded-full bg-[#1E3A8A]/10 p-5">
                      <svg className="h-16 w-16 text-[#1E3A8A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <span className="text-2xl font-bold text-[#1E3A8A]">정명희 당선인</span>
                    <span className="mt-1 text-sm text-gray-500 font-medium">제8대 부산광역시 북구청장 당선인</span>
                    <div className="mt-6 border-t border-gray-200 pt-4 w-full text-xs text-gray-400">
                      * 구민들의 생생한 의견 수렴을 위한 공식 소상공인/민생 현장 행보 진행 중
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
