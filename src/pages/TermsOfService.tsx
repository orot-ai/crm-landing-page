import { useNavigate } from 'react-router-dom';

export default function TermsOfService() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white pt-28 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate('/')}
          className="mb-6 flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          홈으로 돌아가기
        </button>
        <h1 className="text-3xl font-bold mb-8">이용약관</h1>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">제1조 (목적)</h2>
          <p className="text-gray-700 leading-relaxed">
            본 약관은 orot(이하 "회사")이 제공하는 Make Your CRM 서비스(이하 "서비스")의 이용과 관련하여 회사와 이용자의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">제2조 (정의)</h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            본 약관에서 사용하는 용어의 정의는 다음과 같습니다.
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>"서비스"란 회사가 제공하는 노션 기반 고객 관리 시스템 템플릿, 메이크(Make) 자동화 시나리오, 세팅 가이드 영상을 의미합니다.</li>
            <li>"이용자"란 본 약관에 따라 회사가 제공하는 서비스를 구매하고 이용하는 자를 의미합니다.</li>
            <li>"디지털 콘텐츠"란 노션 템플릿, 메이크 시나리오, 세팅 영상 등 회사가 제공하는 무형의 재화를 의미합니다.</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">제3조 (약관의 효력 및 변경)</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>본 약관은 서비스 화면에 게시하거나 기타의 방법으로 이용자에게 공지함으로써 효력이 발생합니다.</li>
            <li>회사는 필요한 경우 관련 법령을 위배하지 않는 범위에서 본 약관을 변경할 수 있습니다.</li>
            <li>약관이 변경되는 경우 회사는 변경사항을 시행일자 7일 전부터 공지합니다.</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">제4조 (서비스의 제공 및 변경)</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>회사는 다음과 같은 서비스를 제공합니다:
              <ul className="list-disc list-inside ml-6 mt-2">
                <li>노션 기반 고객 관리 시스템 템플릿</li>
                <li>메이크(Make) 자동화 시나리오</li>
                <li>시스템 세팅 가이드 영상</li>
                <li>기타 회사가 정하는 서비스</li>
              </ul>
            </li>
            <li>회사는 필요한 경우 서비스의 내용을 변경할 수 있으며, 이 경우 변경 내용을 사전에 공지합니다.</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">제5조 (서비스 이용계약의 성립)</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>이용계약은 이용자의 서비스 신청과 회사의 승낙으로 성립합니다.</li>
            <li>회사는 다음 각 호에 해당하는 경우 승낙을 거부하거나 유보할 수 있습니다:
              <ul className="list-disc list-inside ml-6 mt-2">
                <li>실명이 아니거나 타인의 명의를 이용한 경우</li>
                <li>허위 정보를 기재한 경우</li>
                <li>기타 회사가 정한 이용 조건에 맞지 않는 경우</li>
              </ul>
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">제6조 (이용자의 의무)</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>이용자는 다음 행위를 하여서는 안 됩니다:
              <ul className="list-disc list-inside ml-6 mt-2">
                <li>허위 정보 기재</li>
                <li>타인의 정보 도용</li>
                <li>회사의 저작권, 제3자의 저작권 등 기타 권리 침해</li>
                <li>공공질서 및 미풍양속에 위반되는 내용의 정보 유포</li>
                <li>범죄와 결부된다고 객관적으로 판단되는 행위</li>
                <li>기타 관련 법령에 위배되는 행위</li>
              </ul>
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">제7조 (서비스 이용의 제한 및 중지)</h2>
          <p className="text-gray-700 leading-relaxed">
            회사는 이용자가 본 약관의 의무를 위반하거나 서비스의 정상적인 운영을 방해한 경우, 경고, 일시정지, 영구이용정지 등의 단계로 서비스 이용을 제한할 수 있습니다.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">제8조 (면책조항)</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.</li>
            <li>회사는 이용자의 귀책사유로 인한 서비스 이용의 장애에 대하여 책임을 지지 않습니다.</li>
            <li>회사는 이용자가 서비스를 이용하여 기대하는 수익을 얻지 못한 것에 대하여 책임을 지지 않습니다.</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">제9조 (손해배상)</h2>
          <p className="text-gray-700 leading-relaxed">
            회사 또는 이용자가 본 약관을 위반하여 상대방에게 손해를 입힌 경우에는 그 손해를 배상할 책임이 있습니다.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">제10조 (분쟁의 해결)</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>회사와 이용자 간 발생한 분쟁에 관한 소송은 민사소송법상의 관할법원에 제기합니다.</li>
            <li>본 약관의 준거법은 대한민국 법령으로 합니다.</li>
          </ol>
        </section>

        <section className="mb-8">
          <p className="text-gray-600 text-sm">
            시행일자: 2025년 11월 21일
          </p>
        </section>
      </div>
    </div>
  );
}
