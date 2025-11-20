import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-neutral-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* 상단: 로고 및 링크 */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-8">
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

          {/* 법적 문서 링크 */}
          <div className="flex flex-col md:flex-row gap-4 text-sm">
            <Link
              to="/terms"
              className="text-neutral-gray-400 hover:text-white transition-colors"
            >
              이용약관
            </Link>
            <Link
              to="/privacy"
              className="text-neutral-gray-400 hover:text-white transition-colors"
            >
              개인정보처리방침
            </Link>
          </div>
        </div>

        {/* 구분선 */}
        <div className="border-t border-neutral-gray-800 my-6"></div>

        {/* 하단: 사업자 정보 */}
        <div className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-neutral-gray-400">
            <p>상호명: orot</p>
            <p>대표자명: 장새롬</p>
            <p>사업자등록번호: 837-11-02600</p>
            <p>이메일: miri@orot-ai.com</p>
            <p>전화번호: 010-5025-5933</p>
            <p>사업장 주소: 경기도 동두천시 동두천로 185</p>
          </div>

          <p className="text-xs text-neutral-gray-500 mt-4">
            © 2025 orot. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
