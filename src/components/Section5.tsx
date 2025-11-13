import { motion } from 'framer-motion';

export default function Section5() {

  const comparisonData = [
    {
      feature: '초기 비용',
      basic: '월 10만원',
      ourProduct: '99만원 (얼리버드)\n정가 120만원',
      premium: '500만원~',
      isOurBetter: true
    },
    {
      feature: '2년 총비용',
      basic: '240만원',
      ourProduct: '99만원',
      premium: '500만원+',
      isOurBetter: true
    },
    {
      feature: '관리 고객 수',
      basic: '50명까지 무료\n이후 인당 추가 비용',
      ourProduct: '무제한',
      premium: '무제한',
      isOurBetter: true
    },
    {
      feature: '데이터 소유',
      basic: '구독 끊으면 날아감',
      ourProduct: '영구 소유',
      premium: '영구 소유',
      isOurBetter: true
    },
    {
      feature: '레이아웃 자유도',
      basic: '고정 템플릿',
      ourProduct: '완전 자유',
      premium: '완전 (추가 비용)',
      isOurBetter: true
    },
    {
      feature: '커스터마이징',
      basic: '제한적',
      ourProduct: '완전 자유',
      premium: '완전 (추가 비용)',
      isOurBetter: true
    },
    {
      feature: '유지보수',
      basic: '구독 필수',
      ourProduct: '불필요',
      premium: '별도 계약',
      isOurBetter: true
    }
  ];

  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-64 h-64 sm:w-80 sm:h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[15%] left-[8%] w-56 h-56 sm:w-72 sm:h-72 bg-accent-yellow/15 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
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
            가격 비교해보면<br />
            답이 나옵니다
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-gray-500 font-normal px-2 sm:px-0">
            월 구독료 없이 평생 소유하는 시스템
          </p>
        </motion.div>

        {/* 비교 테이블 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-hidden rounded-2xl"
          style={{ boxShadow: '0 0 32px rgba(0, 0, 0, 0.08)' }}
        >
          {/* 헤더 */}
          <div className="grid grid-cols-4 bg-gradient-to-r from-primary to-primary/90">
            <div className="p-4 sm:p-6 text-center">
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-white">항목</h3>
            </div>
            <div className="p-4 sm:p-6 text-center">
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-white/80">기존 CRM</h3>
            </div>
            <div className="p-4 sm:p-6 text-center bg-white/10">
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-white">Make Your CRM</h3>
            </div>
            <div className="p-4 sm:p-6 text-center">
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-white/80">맞춤 외주</h3>
            </div>
          </div>

          {/* 비교 항목들 */}
          {comparisonData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
              className={`grid grid-cols-4 border-b border-neutral-gray-200 last:border-b-0 ${
                index % 2 === 0 ? 'bg-white' : 'bg-neutral-gray-50'
              }`}
            >
              {/* 항목명 */}
              <div className="p-4 sm:p-6 flex items-center">
                <span className="text-sm sm:text-base md:text-lg font-semibold text-neutral-black">
                  {item.feature}
                </span>
              </div>

              {/* 기존 CRM */}
              <div className="p-4 sm:p-6 flex items-center justify-center">
                <span className="text-xs sm:text-sm md:text-base text-neutral-gray-600 text-center whitespace-pre-line">
                  {item.basic}
                </span>
              </div>

              {/* Make Your CRM */}
              <div className="p-4 sm:p-6 flex items-center justify-center bg-primary/5">
                {item.feature === '초기 비용' || item.feature === '2년 총비용' ? (
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-xs sm:text-sm text-neutral-gray-400 line-through">
                      정가 120만원
                    </span>
                    <span className="text-sm sm:text-base md:text-lg text-primary font-bold">
                      99만원
                    </span>
                    <span className="text-xs text-accent-yellow font-semibold">
                      (얼리버드)
                    </span>
                  </div>
                ) : (
                  <span className="text-xs sm:text-sm md:text-base text-primary font-bold text-center whitespace-pre-line">
                    {item.ourProduct}
                  </span>
                )}
              </div>

              {/* 맞춤 외주 */}
              <div className="p-4 sm:p-6 flex items-center justify-center">
                <span className="text-xs sm:text-sm md:text-base text-neutral-gray-600 text-center">
                  {item.premium}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
