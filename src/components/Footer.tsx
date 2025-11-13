export default function Footer() {
  return (
    <footer className="bg-neutral-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* 로고 및 설명 */}
          <div className="text-center md:text-left">
            <h3
              className="text-xl md:text-2xl font-bold mb-2"
              style={{
                fontFamily: "'Noto Sans KR', sans-serif",
                fontWeight: 700,
                letterSpacing: '-0.02em'
              }}
            >
              Make Your CRM
            </h3>
            <p className="text-sm text-neutral-gray-400">
              노션 기반 고객 관리 자동화 솔루션
            </p>
          </div>

          {/* 연락처 정보 */}
          <div className="text-center md:text-right">
            <p className="text-sm text-neutral-gray-400 mb-2">
              이메일: miri@orot-ai.com
            </p>
            <p className="text-sm text-neutral-gray-400">
              © 2025 Make Your CRM. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
