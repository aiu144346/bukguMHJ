import React from 'react';
import { ArrowLeft, MapPin, Compass } from 'lucide-react';

export default function Directions() {
  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    if ((window as any).customNavigate) {
      (window as any).customNavigate('/');
    } else {
      window.location.pathname = '/';
    }
  };

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <a
            href="/"
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-[#1E3A8A] font-extrabold hover:underline group text-base sm:text-lg"
          >
            <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            홈으로 돌아가기
          </a>
        </div>

        {/* Header */}
        <header className="border-b border-slate-100 pb-8 mb-8 flex items-center gap-4">
          <div className="rounded-2xl bg-blue-50 p-3.5 text-[#1E3A8A]">
            <MapPin className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
              찾아오시는 길
            </h1>
            <p className="text-sm sm:text-base text-slate-400 mt-1">
              부산시 북구청장 인수위원회 사무실 안내
            </p>
          </div>
        </header>

        {/* Directions Content */}
        <div className="space-y-10">
          {/* Address Card */}
          <div className="bg-blue-50/50 rounded-2xl p-6 sm:p-8 border border-blue-100/50 flex flex-col sm:flex-row gap-5 items-start shadow-sm">
            <div className="rounded-xl bg-[#1E3A8A] text-white p-3 shadow-md shrink-0">
              <Compass className="h-6 w-6" />
            </div>
            <div className="space-y-2">
              <h2 className="text-lg font-black text-slate-900">사무실 주소</h2>
              <p className="text-lg sm:text-xl font-bold text-[#0B1E43] leading-relaxed">
                (46547) 부산 북구 금곡대로46번길 50, 부산북구문화예술회관 2층 인수위원회 사무실
              </p>
            </div>
          </div>

          {/* Map Image Section */}
          <section className="space-y-4">
            <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
              📍 주변 약도
            </h3>
            <div className="overflow-hidden rounded-3xl border border-slate-200/60 shadow-sm bg-slate-50 group">
              <div className="overflow-hidden">
                <img
                  src="/images/insu_office_map.png"
                  alt="인수위원회 사무실 위치 지도"
                  className="w-full object-contain max-h-[500px] transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                />
              </div>
              <div className="p-4 bg-white border-t border-slate-100 text-center text-sm text-slate-500 font-semibold">
                부산북구문화예술회관 2층 (금곡대로46번길 50)
              </div>
            </div>

            {/* Map Action Buttons */}
            <div className="flex flex-wrap gap-4 mt-4 justify-start">
              <a
                href="https://map.naver.com/v5/directions/-,/%EB%B6%80%EC%82%B0%EB%B6%85%EA%B5%AC%EB%AC%B8%ED%99%94%EC%98%88%EC%88%A0%ED%9A%8C%EA%B4%80,13554471,PLACE_POI"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#03C75A] text-white font-extrabold hover:bg-[#02b350] transition-all shadow-md hover:shadow-lg shadow-green-500/10 min-h-[46px] text-sm sm:text-base cursor-pointer"
              >
                <span>N</span> 네이버 지도 길찾기
              </a>
              <a
                href="https://map.kakao.com/link/to/부산북구문화예술회관,35.210515,129.006935"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#FEE500] text-[#191919] font-extrabold hover:bg-[#ebd300] transition-all shadow-md hover:shadow-lg shadow-yellow-500/10 min-h-[46px] text-sm sm:text-base cursor-pointer"
              >
                <span className="font-sans font-black">K</span> 카카오맵 길찾기
              </a>
            </div>
          </section>

          {/* Transport Info */}
          <section className="grid gap-6 sm:grid-cols-2 pt-4">
            <div className="border border-slate-200/80 rounded-3xl p-6 sm:p-8 space-y-5 shadow-sm bg-white">
              <h4 className="font-black text-lg text-slate-900 flex items-center gap-2">
                🚇 지하철 이용 시
              </h4>
              <ul className="space-y-4.5 text-slate-650 text-sm sm:text-base">
                <li className="flex items-start gap-3">
                  <span className="shrink-0 mt-0.5 px-3 py-1 rounded-full text-xs font-black bg-[#3CB44A] text-white shadow-md shadow-[#3CB44A]/10">부산 2호선</span>
                  <div>
                    <strong className="text-slate-900 font-extrabold">덕천역:</strong> 2번 출구로 나와 금곡대로 방향으로 도보 약 7분 (대중지구대 방향 우회전)
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="shrink-0 mt-0.5 px-3 py-1 rounded-full text-xs font-black bg-[#3CB44A] text-white shadow-md shadow-[#3CB44A]/10">부산 2호선</span>
                  <div>
                    <strong className="text-slate-900 font-extrabold">수정역:</strong> 1번 출구로 나와 만덕대로 방향으로 도보 약 10분
                  </div>
                </li>
              </ul>
            </div>

            <div className="border border-slate-200/80 rounded-3xl p-6 sm:p-8 space-y-5 shadow-sm bg-white">
              <h4 className="font-black text-lg text-slate-900 flex items-center gap-2">
                🚌 버스 이용 시
              </h4>
              <ul className="space-y-4.5 text-slate-650 text-sm sm:text-base">
                <li className="flex items-start gap-3">
                  <span className="shrink-0 mt-0.5 px-3 py-1 rounded-full text-xs font-black bg-blue-600 text-white shadow-md shadow-blue-600/10">일반 버스</span>
                  <div>
                    <strong className="text-slate-900 font-extrabold">덕천지구대 정류장 하차:</strong>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {['15', '59', '111', '126', '148-1', '200'].map(bus => (
                        <span key={bus} className="px-2 py-0.5 rounded-md text-xs font-extrabold bg-blue-50 text-blue-800 border border-blue-100">{bus}번</span>
                      ))}
                    </div>
                    <span className="text-xs text-slate-450 block mt-1">하차 후 도보 약 3분 소요</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="shrink-0 mt-0.5 px-3 py-1 rounded-full text-xs font-black bg-blue-600 text-white shadow-md shadow-blue-600/10">일반 버스</span>
                  <div>
                    <strong className="text-slate-900 font-extrabold">수정역 정류장 하차:</strong>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {['111', '126', '307'].map(bus => (
                        <span key={bus} className="px-2 py-0.5 rounded-md text-xs font-extrabold bg-blue-50 text-blue-800 border border-blue-100">{bus}번</span>
                      ))}
                    </div>
                    <span className="text-xs text-slate-455 block mt-1">하차 후 도보 약 8분 소요</span>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Parking / Car Info */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex gap-4 items-start text-sm sm:text-base text-slate-700 shadow-inner">
            <span className="text-2xl select-none">🚗</span>
            <div>
              <strong className="text-slate-900 font-extrabold">자가용 이용 및 주차안내:</strong> 부산북구문화예술회관 전용 야외 주차장(무료)을 임시 방문 시 편리하게 이용하실 수 있습니다.
            </div>
          </div>
        </div>

        {/* Bottom Back Button */}
        <div className="mt-16 pt-8 border-t border-slate-100 flex justify-center">
          <a
            href="/"
            onClick={handleBack}
            className="inline-flex items-center justify-center px-8 py-4 bg-[#1E3A8A] text-white font-extrabold rounded-2xl shadow-md hover:bg-blue-900 transition min-h-[48px]"
          >
            메인 홈페이지로 이동
          </a>
        </div>
      </div>
    </div>
  );
}
