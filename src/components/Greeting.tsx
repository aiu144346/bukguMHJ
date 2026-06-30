

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
              className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:leading-tight animate-fade-in"
              style={{ fontFamily: '"Gowun Batang", serif' }}
            >
              "주민과 함께 여는<br />
              <span className="relative inline-block text-[#1E3A8A] mt-2">
                북구의 새로운 내일
                <span className="absolute bottom-1.5 left-0 w-full h-2 bg-yellow-400/25 -z-10" />
              </span>"
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
                <p className="font-bold text-lg sm:text-xl text-[#0B1E43] border-b border-gray-200/50 pb-4">
                  존경하고 사랑하는 부산 북구 주민 여러분, 안녕하십니까!<br />
                  북구청장 당선인 <span className="underline decoration-blue-500 decoration-3 underline-offset-4 font-black">정명희</span>입니다.
                </p>
                <p className="text-gray-600 font-medium">
                  주민 여러분께서 보내주신 뜨거운 신뢰와 변화를 향한 열망에 깊이 머리 숙여 감사드립니다.
                  낙동강의 유려한 역사와 구포나루의 상생 정신을 이어받아, 우리 북구를 주민이 주인 되는 따뜻하고 활기찬 도시로 재창조하겠습니다.
                </p>
                <p className="text-gray-600 font-medium">
                  '북구의 새로운 문을 여는 인수위원회' 활동 기간 동안 구민 한 분 한 분의 목소리를 경청하며, 약속드린 공약들을 면밀하고 투명하게 다듬겠습니다. 언제나 초심을 잃지 않고 소통하며 혁신하는 구정을 이끌어 가겠습니다.
                </p>
              </div>
            </div>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-blue-50/50 border border-blue-200/50 p-4.5 flex items-start gap-3.5 transition-all duration-300 hover:bg-blue-50 hover:border-blue-200">
                <div className="rounded-xl bg-[#1E3A8A] p-2 text-white shadow-md shadow-blue-900/10">
                  <Compass className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <span className="text-xs font-extrabold text-[#1E3A8A] block mb-0.5 uppercase tracking-wider">구정 비전</span>
                  <strong className="text-base font-black text-gray-900">
                    내 삶이 힘이 되는 북구
                  </strong>
                </div>
              </div>

              <div className="rounded-2xl bg-emerald-50/40 border border-emerald-200/40 p-4.5 flex items-start gap-3.5 transition-all duration-300 hover:bg-emerald-50 hover:border-emerald-200">
                <div className="rounded-xl bg-emerald-600 p-2 text-white shadow-md shadow-emerald-900/10">
                  <Target className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <span className="text-xs font-extrabold text-emerald-600 block mb-0.5 uppercase tracking-wider">3대 약속</span>
                  <strong className="text-base font-black text-gray-900">
                    일자리 · 교육 · 복지 혁신
                  </strong>
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
