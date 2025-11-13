import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Window 인터페이스 확장
declare global {
  interface Window {
    PaypleCpayAuthCheck?: (obj: any) => void;
  }
}

export default function Section5_7() {
  const [sdkLoaded, setSdkLoaded] = useState(false);

  // SDK 로딩 상태 확인
  useEffect(() => {
    console.log('🔍 SDK 로딩 체크 시작');

    // 즉시 체크
    if (window.PaypleCpayAuthCheck) {
      console.log('✅ SDK 이미 로드됨');
      setSdkLoaded(true);
      return;
    }

    // 1초마다 SDK 로딩 확인 (최대 10초)
    let attempts = 0;
    const maxAttempts = 10;

    const checkSDK = setInterval(() => {
      attempts++;
      console.log(`🔄 SDK 로딩 체크 시도 ${attempts}/${maxAttempts}`);

      if (window.PaypleCpayAuthCheck) {
        console.log('✅ SDK 로드 완료!');
        setSdkLoaded(true);
        clearInterval(checkSDK);
      } else if (attempts >= maxAttempts) {
        console.error('❌ SDK 로딩 실패 (timeout)');
        clearInterval(checkSDK);
      }
    }, 1000);

    return () => clearInterval(checkSDK);
  }, []);

  // 주문번호 생성 함수
  const createOrderId = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const timestamp = now.getTime();
    return `ORDER${year}${month}${day}${timestamp}`;
  };

  // 결제 결과 콜백 함수
  const getPaymentResult = (result: any) => {
    console.log('결제 결과:', result);

    if (result.PCD_PAY_RST === 'success') {
      // 결제 성공
      alert(`결제가 완료되었습니다!\n\n주문번호: ${result.PCD_PAY_OID}\n금액: ${Number(result.PCD_PAY_TOTAL).toLocaleString()}원`);

      // 실제 구현시에는 여기서 서버로 결제 승인 요청을 보내야 합니다
      console.log('결제 완료 데이터:', result);
    } else {
      // 결제 취소/실패 - 별도 알림 없이 콘솔에만 로그
      console.log('결제 취소/실패:', result.PCD_PAY_MSG || '사용자 취소');
    }
  };

  // 페이플 결제 요청 함수
  const handlePayment = (amount: number, productName: string) => {
    console.log(`💳 결제 요청: ${productName} - ${amount}원`);
    console.log(`📊 SDK 로딩 상태: ${sdkLoaded}`);
    console.log(`🔍 window.PaypleCpayAuthCheck 존재: ${!!window.PaypleCpayAuthCheck}`);

    // 페이플 SDK가 로드되었는지 확인
    if (!window.PaypleCpayAuthCheck) {
      console.error('❌ SDK가 로드되지 않았습니다!');
      alert('결제 시스템을 불러오는 중입니다. 잠시 후 다시 시도해주세요.\n\n브라우저 콘솔(F12)에서 오류를 확인해주세요.');
      return;
    }

    console.log('✅ SDK 로드 확인 완료, 결제 진행');

    // 주문번호 생성
    const orderId = createOrderId();
    console.log(`📝 주문번호 생성: ${orderId}`);

    // 결제 파라미터 설정 (테스트 환경)
    const paymentParams = {
      // 파트너 인증 - 클라이언트 키 (테스트)
      clientKey: 'test_DF55F29DA654A8CBC0F0A9DD4B556486',

      // 결제창 방식 (POPUP)
      PCD_PAY_TYPE: 'card',           // 결제 방법
      PCD_PAY_WORK: 'PAY',            // PAY: 본인인증+계좌등록+결제완료
      PCD_CARD_VER: '02',             // 02: 앱카드 일반결제

      // 상품 정보
      PCD_PAY_GOODS: productName,     // 결제 상품
      PCD_PAY_TOTAL: amount,          // 결제 금액
      PCD_PAY_OID: orderId,           // 주문번호
      PCD_PAY_ISTAX: 'Y',             // 과세여부 (Y: 과세)

      // 결제자 정보 (선택)
      PCD_PAYER_NO: '1',
      PCD_PAYER_NAME: '홍길동',
      PCD_PAYER_HP: '01012345678',
      PCD_PAYER_EMAIL: 'test@example.com',

      // 결과 URL (팝업용 상대경로)
      PCD_RST_URL: '/payment/result',

      // SPA용 콜백 함수
      callbackFunction: getPaymentResult
    };

    // 페이플 결제창 호출
    console.log('🚀 결제 요청 파라미터:', paymentParams);
    console.log('🎯 PaypleCpayAuthCheck 함수 호출 중...');

    try {
      window.PaypleCpayAuthCheck(paymentParams);
      console.log('✅ PaypleCpayAuthCheck 함수 호출 완료');
    } catch (error) {
      console.error('❌ PaypleCpayAuthCheck 함수 호출 중 오류:', error);
      alert('결제 요청 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <section className="relative py-20 md:py-32 bg-neutral-gray-50 overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6">
        {/* 섹션 제목 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2
            className="text-[22px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[1.4] text-neutral-black mb-3 md:mb-4 px-4 sm:px-0"
            style={{
              fontFamily: "'Noto Sans KR', sans-serif",
              fontWeight: 600,
              letterSpacing: '-0.02em'
            }}
          >
            오늘을 놓치면 안 되는 이유
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-gray-500 font-normal px-2 sm:px-0">
            99만원에 평생 소유하는 마지막 기회입니다.<br />
            자정 이후 정가 129만원으로 변경되며, 월 구독료 없이 데이터는 영구 소유할 수 있습니다.
          </p>
        </motion.div>

        {/* 가격 카드 */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {/* 메인 패키지 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white border-2 border-primary rounded-2xl p-8 shadow-xl relative"
          >
            {/* 베스트 뱃지 */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-sm font-bold px-4 py-1 rounded-full shadow-lg" style={{ backgroundColor: '#FDB022', color: '#0A0A0A' }}>
              오늘 자정까지
            </div>

            {/* 가격 */}
            <div className="text-center mb-8 pt-4">
              <div className="text-sm text-neutral-gray-500 line-through mb-2">
                정가 129만원
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">
                99만원
              </div>
            </div>

            {/* 포함 내역 */}
            <div className="mb-8">
              <h4 className="text-lg font-bold text-neutral-black mb-4">포함 내역</h4>
              <ul className="space-y-3">
                {[
                  'Make Your CRM 시스템',
                  'Make.com 자동화 시나리오',
                  'VOD 구축 강의',
                  '시스템 설정 가이드',
                  '평생 소유'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-neutral-gray-700">
                    <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA 버튼 */}
            <button
              onClick={() => handlePayment(990000, 'Make Your CRM 시스템 (평생 소유)')}
              className="w-full group inline-flex items-center justify-center px-6 py-4 bg-primary text-white text-base sm:text-lg font-bold rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <span>오늘 자정까지 99만원에 시작하기</span>
              <svg
                className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>

          {/* 그룹 코칭 옵션 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white border-2 border-neutral-gray-200 rounded-2xl p-8 shadow-lg flex flex-col"
          >
            {/* 옵션 뱃지 */}
            <div className="self-start bg-neutral-gray-300 text-neutral-black text-sm font-bold px-4 py-1 rounded-full mb-6">
              그룹 코칭 옵션 포함 구매
            </div>

            {/* 제목 */}
            <div className="mb-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-black mb-2">
                그룹 코칭 포함
              </h3>
              <p className="text-lg font-bold text-primary">+19만원</p>
              <p className="text-sm text-neutral-gray-600 mt-2">혼자 구축하기 막막하다면</p>
            </div>

            {/* 포함 내역 */}
            <ul className="space-y-3 mb-8 flex-grow">
              {[
                '2시간 1회 그룹 코칭',
                '실시간 Q&A와 피드백'
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-neutral-gray-700">
                  <svg className="w-5 h-5 text-neutral-gray-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA 버튼 */}
            <button
              onClick={() => handlePayment(1180000, 'Make Your CRM 시스템 + 그룹 코칭')}
              className="w-full group inline-flex items-center justify-center px-6 py-4 bg-neutral-gray-700 text-white text-base sm:text-lg font-bold rounded-xl hover:bg-neutral-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <span>그룹 코칭 포함 118만원</span>
              <svg
                className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        </div>

        {/* 긴박감 포인트들 */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg"
          >
            {/* 번호 뱃지 */}
            <div className="inline-block bg-primary text-white text-sm font-bold px-3 py-1 rounded-full mb-4">
              01
            </div>

            {/* 제목 */}
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-black mb-3">
              30만원 절약
            </h3>

            {/* 서브타이틀 */}
            <p className="text-base sm:text-lg font-semibold text-primary mb-4">
              오늘 자정까지
            </p>

            {/* 설명 */}
            <p className="text-sm sm:text-base text-neutral-gray-600 leading-relaxed">
              자정 이후 정가 129만원
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg"
          >
            {/* 번호 뱃지 */}
            <div className="inline-block bg-primary text-white text-sm font-bold px-3 py-1 rounded-full mb-4">
              02
            </div>

            {/* 제목 */}
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-black mb-3">
              시스템 없이 버티면?
            </h3>

            {/* 설명 */}
            <ul className="space-y-2">
              <li className="text-sm sm:text-base text-neutral-gray-600 leading-relaxed">
                • 3개월 후 놓친 고객이 쌓입니다
              </li>
              <li className="text-sm sm:text-base text-neutral-gray-600 leading-relaxed">
                • 6개월 후 직원 뽑아도 소용없습니다
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg"
          >
            {/* 번호 뱃지 */}
            <div className="inline-block bg-primary text-white text-sm font-bold px-3 py-1 rounded-full mb-4">
              03
            </div>

            {/* 제목 */}
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-black mb-3">
              월 180만원 기회비용
            </h3>

            {/* 설명 */}
            <ul className="space-y-2">
              <li className="text-sm sm:text-base text-neutral-gray-600 leading-relaxed">
                • 하루만 미뤄도 6만원
              </li>
              <li className="text-sm sm:text-base text-neutral-gray-600 leading-relaxed">
                • 일주일이면 42만원
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
