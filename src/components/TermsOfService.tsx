import React from 'react';
import { ArrowLeft, FileText } from 'lucide-react';

export default function TermsOfService() {
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
            <FileText className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              이용약관
            </h1>
            <p className="text-sm sm:text-base text-gray-500 mt-1">
              시행일자: 2026년 6월 12일
            </p>
          </div>
        </header>

        {/* Contents */}
        <div className="text-gray-800 text-base sm:text-lg leading-relaxed space-y-8">
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-gray-950">제 1 조 (목적)</h2>
            <p className="text-gray-700">
              본 약관은 부산시 북구청 인수위원회(이하 '인수위')가 운영하는 공식 홈페이지 소통 서비스(이하 '서비스')의 이용 조건, 절차 및 구민 여러분과 인수위 간의 권리, 의무 등 필요한 사항을 규정함을 목적으로 합니다.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-gray-950">제 2 조 (용어의 정의)</h2>
            <p className="text-gray-700">
              본 약관에서 사용하는 용어의 정의는 다음과 같습니다:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-gray-700 text-sm sm:text-base">
              <li><strong>이용자:</strong> 웹사이트에 접속하여 제공되는 정보(보도자료, 인수위 소식, 일정 등)를 열람하고 구민 정책 건의 등의 서비스를 이용하는 모든 구민 및 사용자.</li>
              <li><strong>구민 제안:</strong> 이용자가 구정 발전을 목적으로 웹페이지 연계 양식을 통해 제출하는 의견 및 건의 사항.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-gray-950">제 3 조 (약관의 효력 및 변경)</h2>
            <ul className="list-disc pl-5 space-y-1.5 text-gray-700 text-sm sm:text-base">
              <li>본 약관은 웹사이트 서비스 화면에 게시함으로써 효력이 발생합니다.</li>
              <li>인수위는 필요한 경우 약관을 변경할 수 있으며, 변경된 약관은 적용일자 7일 전부터 웹사이트에 공지한 후 시행합니다.</li>
              <li>이용자는 변경된 약관에 동의하지 않을 경우 서비스 이용을 중단할 수 있으며, 공지 후 지속적인 이용은 변경 약관에 대한 동의로 간주됩니다.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-gray-950">제 4 조 (서비스의 제공 및 한계)</h2>
            <ul className="list-disc pl-5 space-y-1.5 text-gray-700 text-sm sm:text-base">
              <li>본 사이트는 비영리 목적의 공익적 소통 플랫폼으로, 인수위의 공식 활동 기간(민선 9기 출범 전후 행정 절차 종료 시점까지)에 한하여 소식 공유와 정책 의견 접수 서비스를 무료로 제공합니다.</li>
              <li>인수위는 시스템의 정기 점검, 긴급 보수 또는 기타 불가항력적인 사유로 인해 서비스 제공을 일시적으로 중단하거나 제한할 수 있습니다.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-gray-950">제 5 조 (이용자의 의무)</h2>
            <p className="text-gray-700">
              이용자는 웹사이트 및 정책 건의 서비스 이용 시 다음 각 호에 해당하는 행위를 해서는 안 됩니다:
            </p>
            <ol className="list-decimal pl-5 space-y-1.5 text-gray-700">
              <li>타인의 명의를 도용하거나 허위 사실을 기재하여 정책을 건의하는 행위</li>
              <li>공공질서, 미풍양속에 반하는 유해 정보를 게시하거나 타인의 명예를 훼손하는 행위</li>
              <li>시스템 오류를 악용하거나 비정상적인 방법으로 트래픽을 유발하여 사이트 운영을 방해하는 행위</li>
              <li>본 사이트에 게재된 저작물을 무단으로 변경 및 공익 외의 목적으로 상업적 도용하는 행위</li>
            </ol>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-gray-950">제 6 조 (제안 의견의 활용)</h2>
            <ul className="list-disc pl-5 space-y-1.5 text-gray-700 text-sm sm:text-base">
              <li>구민이 제출한 혁신 정책 제안은 민선 9기 북구청의 정책 수립 자료로만 성실히 검토 및 활용됩니다.</li>
              <li>개인식별정보를 제외한 우수 제안 사례 등은 투명한 소식 공유 목적으로 보도자료나 홈페이지 백서 등에 요약 소개될 수 있습니다.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-gray-950">제 7 조 (면책 조항)</h2>
            <ul className="list-disc pl-5 space-y-1.5 text-gray-700 text-sm sm:text-base">
              <li>인수위는 천재지변, 전시, 정전, 또는 디도스(DDoS) 공격 등 통제할 수 없는 기술적 불능 상태로 인하여 발생한 서비스 중단이나 정보 손실에 대하여 책임을 지지 않습니다.</li>
              <li>본 웹사이트에서 연결(링크)된 외부 언론사 기사 등 제3자가 독립적으로 제공하는 서비스 및 정보의 정확성에 대해서는 보증하지 않으며 책임을 지지 않습니다.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-gray-950">제 8 조 (관할 법원)</h2>
            <p className="text-gray-700">
              본 서비스 이용과 관련하여 발생한 분쟁에 대해서는 인수위 사무소 소재지를 관할하는 법원을 합의 관할 법원으로 합니다.
            </p>
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
