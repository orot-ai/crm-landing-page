import { useNavigate } from 'react-router-dom';

export default function PrivacyPolicy() {
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
        <h1 className="text-3xl font-bold mb-8">개인정보 처리방침</h1>

        <section className="mb-8">
          <p className="text-gray-700 leading-relaxed mb-4">
            orot(이하 "회사")는 개인정보 보호법 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">제1조 (개인정보의 처리 목적)</h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보 보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>서비스 제공 및 계약 이행
              <ul className="list-disc list-inside ml-6 mt-2">
                <li>서비스 제공, 본인인증, 고객상담 및 불만처리</li>
              </ul>
            </li>
            <li>마케팅 및 광고 활용
              <ul className="list-disc list-inside ml-6 mt-2">
                <li>신규 서비스 개발 및 맞춤 서비스 제공</li>
                <li>이벤트 및 광고성 정보 제공 및 참여기회 제공</li>
              </ul>
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">제2조 (개인정보의 처리 및 보유 기간)</h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>서비스 이용 관련 개인정보: 회원 탈퇴 시까지</li>
            <li>전자상거래 관련 기록
              <ul className="list-disc list-inside ml-6 mt-2">
                <li>계약 또는 청약철회 등에 관한 기록: 5년 (전자상거래법)</li>
                <li>대금결제 및 재화 등의 공급에 관한 기록: 5년 (전자상거래법)</li>
                <li>소비자의 불만 또는 분쟁처리에 관한 기록: 3년 (전자상거래법)</li>
              </ul>
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">제3조 (처리하는 개인정보의 항목)</h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            회사는 다음의 개인정보 항목을 처리하고 있습니다.
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>필수항목
              <ul className="list-disc list-inside ml-6 mt-2">
                <li>이름, 이메일, 전화번호, 회사명</li>
              </ul>
            </li>
            <li>선택항목
              <ul className="list-disc list-inside ml-6 mt-2">
                <li>서비스 이용 과정에서 자동으로 생성되는 정보 (IP주소, 쿠키, 서비스 이용 기록)</li>
              </ul>
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">제4조 (개인정보의 제3자 제공)</h2>
          <p className="text-gray-700 leading-relaxed">
            회사는 정보주체의 개인정보를 제1조(개인정보의 처리 목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등 개인정보 보호법 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">제5조 (개인정보처리의 위탁)</h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            회사는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.
          </p>
          <div className="bg-gray-50 p-4 rounded">
            <p className="text-gray-700">현재 개인정보 처리 위탁 업체 없음</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">제6조 (정보주체의 권리·의무 및 행사방법)</h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>개인정보 열람 요구</li>
            <li>오류 등이 있을 경우 정정 요구</li>
            <li>삭제 요구</li>
            <li>처리정지 요구</li>
          </ol>
          <p className="text-gray-700 leading-relaxed mt-4">
            상기 권리 행사는 회사에 대해 서면, 전화, 전자우편 등을 통하여 하실 수 있으며 회사는 이에 대해 지체 없이 조치하겠습니다.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">제7조 (개인정보의 파기)</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다.</li>
            <li>파기 절차 및 방법
              <ul className="list-disc list-inside ml-6 mt-2">
                <li>전자적 파일 형태: 복원이 불가능한 방법으로 영구 삭제</li>
                <li>기록물, 인쇄물, 서면 등: 분쇄 또는 소각</li>
              </ul>
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">제8조 (개인정보의 안전성 확보 조치)</h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>관리적 조치: 내부관리계획 수립·시행, 정기적 직원 교육</li>
            <li>기술적 조치: 개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치, 개인정보의 암호화</li>
            <li>물리적 조치: 전산실, 자료보관실 등의 접근통제</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">제9조 (개인정보 보호책임자)</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
          </p>
          <div className="bg-gray-50 p-6 rounded">
            <h3 className="font-bold mb-3">개인정보 보호책임자</h3>
            <ul className="space-y-1 text-gray-700">
              <li>성명: 장새롬</li>
              <li>직책: 대표</li>
              <li>이메일: miri@orot-ai.com</li>
              <li>전화번호: 010-5025-5933</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">제10조 (개인정보 열람청구)</h2>
          <p className="text-gray-700 leading-relaxed">
            정보주체는 개인정보 보호법 제35조에 따른 개인정보의 열람 청구를 아래의 부서에 할 수 있습니다. 회사는 정보주체의 개인정보 열람청구가 신속하게 처리되도록 노력하겠습니다.
          </p>
          <div className="bg-gray-50 p-4 rounded mt-4">
            <p className="text-gray-700">담당 부서: 고객지원팀</p>
            <p className="text-gray-700">이메일: miri@orot-ai.com</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">제11조 (권익침해 구제방법)</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            정보주체는 개인정보침해로 인한 구제를 받기 위하여 개인정보분쟁조정위원회, 한국인터넷진흥원 개인정보침해신고센터 등에 분쟁해결이나 상담 등을 신청할 수 있습니다.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>개인정보분쟁조정위원회: (국번없이) 1833-6972 (www.kopico.go.kr)</li>
            <li>개인정보침해신고센터: (국번없이) 118 (privacy.kisa.or.kr)</li>
            <li>대검찰청: (국번없이) 1301 (www.spo.go.kr)</li>
            <li>경찰청: (국번없이) 182 (ecrm.cyber.go.kr)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">제12조 (개인정보 처리방침 변경)</h2>
          <p className="text-gray-700 leading-relaxed">
            이 개인정보 처리방침은 2025년 11월 21일부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
          </p>
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
