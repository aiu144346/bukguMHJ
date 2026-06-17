import React from 'react';
import { ArrowLeft, Shield } from 'lucide-react';

export default function PrivacyPolicy() {
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
            className="inline-flex items-center gap-2 text-[#1E3A8A] font-bold hover:underline group text-lg"
          >
            <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            홈으로 돌아가기
          </a>
        </div>

        {/* Header */}
        <header className="border-b border-gray-200 pb-8 mb-8 flex items-center gap-4">
          <div className="rounded-2xl bg-blue-50 p-3.5 text-[#1E3A8A]">
            <Shield className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              개인정보처리방침
            </h1>
            <p className="text-sm sm:text-base text-gray-500 mt-1">
              시행일자: 2026년 6월 12일
            </p>
          </div>
        </header>

        {/* Contents */}
        <div className="text-gray-800 text-base sm:text-lg leading-relaxed space-y-8">
          <p className="text-gray-600">
            부산시 북구청 인수위원회(이하 '인수위')는 구민의 개인정보를 중요시하며, 「개인정보 보호법」 등 관련 법령에 따라 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보처리방침을 수립·공개합니다.
          </p>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-gray-950">1. 개인정보의 처리 목적</h2>
            <p className="text-gray-700">
              인수위는 구민 여러분이 제안하는 구정 혁신 제안의 접수·처리, 구민참여인수위원회 신청 접수, 그리고 정보주체와의 원활한 의사소통 및 고충 처리를 목적으로 최소한의 개인정보를 처리합니다. 처리하고 있는 개인정보는 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 관련 법령에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-gray-950">2. 처리하는 개인정보의 항목 및 수집방법</h2>
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-150 space-y-2">
              <p><strong>[수집 항목]</strong></p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm sm:text-base">
                <li>필수항목: 성명, 연락처(휴대전화번호), 이메일 주소</li>
                <li>선택항목: 거주지(동 단위), 제안 첨부 파일 및 기타 제안내용에 기재된 개인정보</li>
              </ul>
              <p className="pt-2"><strong>[수집 방법]</strong></p>
              <p className="text-gray-700 text-sm sm:text-base">웹사이트 내 연계된 구글 폼(Google Forms) 온라인 접수, 대변인실 또는 인수위 사무실을 통한 오프라인 서면 제출을 통해 정보주체가 직접 자발적으로 제공하는 방식으로 수집합니다.</p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-gray-950">3. 개인정보의 보유 및 이용 기간</h2>
            <p className="text-gray-700">
              인수위가 수집한 구민의 개인정보는 원칙적으로 <strong>민선 9기 부산시 북구청장 당선인의 인수위원회 활동 기간 및 후속 행정 조치(백서 제작 등)가 종료되는 시점까지</strong> 보유 및 이용합니다. 본 목적이 달성되거나 보유 기간이 만료된 개인정보는 즉시 안전하게 파기됩니다.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-gray-950">4. 개인정보의 제3자 제공 및 위탁</h2>
            <p className="text-gray-700">
              인수위는 정보주체의 개인정보를 제1조(개인정보의 처리 목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 사전 동의 없이는 동 범위를 초과하여 이용하거나 제3자에게 제공하지 않습니다. 또한 수집된 개인정보 처리를 외부 업체에 위탁하지 않습니다. 단, 정보주체의 동의가 있거나 법령의 규정에 의거한 경우는 제외됩니다.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-gray-950">5. 정보주체의 권리·의무 및 그 행사방법</h2>
            <p className="text-gray-700">
              구민(정보주체)은 인수위에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다:
            </p>
            <ol className="list-decimal pl-5 space-y-1.5 text-gray-700">
              <li>개인정보 열람 요구</li>
              <li>오류 등이 있을 경우 정정 요구</li>
              <li>삭제 및 처리정지 요구</li>
            </ol>
            <p className="text-gray-750 text-sm sm:text-base">
              권리 행사는 서면, 전화, 전자우편 등을 통하여 하실 수 있으며 인수위는 이에 대해 지체 없이 조치하겠습니다.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-gray-950">6. 개인정보의 파기절차 및 방법</h2>
            <p className="text-gray-700">
              보유기간 만료 또는 처리목적 달성 등으로 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm sm:text-base">
              <li><strong>전자적 파일 형태:</strong> 기록을 재생할 수 없는 기술적 방법을 사용하여 영구 삭제합니다.</li>
              <li><strong>종이 문서 형태:</strong> 분쇄기로 분쇄하거나 소각하여 파기합니다.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-gray-950">7. 개인정보의 안전성 확보 조치</h2>
            <p className="text-gray-700">
              인수위는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm sm:text-base">
              <li><strong>관리적 조치:</strong> 개인정보 취급 직원의 최소화 및 정기적 교육 이행</li>
              <li><strong>기술적 조치:</strong> SSL 보안 서버 인증서를 활용한 웹사이트 암호화 통신 적용, 안전한 비밀번호 일회성 토큰화 적용</li>
              <li><strong>물리적 조치:</strong> 개인정보가 포함된 문서 보관함의 잠금 장치 및 통제</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-gray-950">8. 개인정보 보호책임자 및 고충 처리</h2>
            <p className="text-gray-700">
              개인정보 처리에 관한 문의, 불만 처리, 피해 구제 등에 관한 사항은 아래의 연락처로 문의해 주시기 바랍니다:
            </p>
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-150 text-sm sm:text-base text-gray-700 space-y-1">
              <p><strong>부서:</strong> 부산시 북구청 인수위원회 사무국</p>
              <p><strong>전화번호:</strong> 051-309-5463</p>
              <p><strong>이메일:</strong> bluerain1026@gmail.com</p>
            </div>
          </section>
        </div>

        {/* Bottom Back Button */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex justify-center">
          <a
            href="/"
            onClick={handleBack}
            className="inline-flex items-center justify-center px-8 py-4 bg-[#1E3A8A] text-white font-bold rounded-2xl shadow-md hover:bg-blue-900 transition min-h-[48px]"
          >
            메인 홈페이지로 이동
          </a>
        </div>
      </div>
    </div>
  );
}
