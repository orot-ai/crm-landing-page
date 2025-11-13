import { motion } from 'framer-motion';

export default function Section1() {
  const problems = [
    {
      number: '01',
      period: '지금',
      title: '고객 50명이 넘으면',
      description: '응답이 느려지고, 고객을 놓치기 시작합니다'
    },
    {
      number: '02',
      period: '3개월 후',
      title: '70-80명이 되면',
      description: '더 이상 관리가 불가능합니다. 성장이 두려움이 됩니다'
    },
    {
      number: '03',
      period: '6개월 후',
      title: '동료들은 확장하는데',
      description: '나만 제자리. 시스템 없이는 직원을 뽑아도 소용없습니다'
    },
  ];

  return (
    <section className="relative py-20 md:py-32 bg-[#FAFAFA] overflow-hidden">
      {/* 배경 장식 도형 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[5%] w-64 h-64 sm:w-80 sm:h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[20%] left-[8%] w-56 h-56 sm:w-72 sm:h-72 bg-accent-pink/15 rounded-full blur-3xl"></div>
        <div className="absolute top-[50%] left-[15%] w-48 h-48 sm:w-60 sm:h-60 bg-accent-blue/10 rounded-full blur-3xl"></div>
      </div>

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
            고객 관리 시스템 없이 버티면<br />
            당신의 사업은 이렇게 무너집니다
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-gray-500 font-normal px-2 sm:px-0">
            지금은 괜찮아도, 시간이 지날수록 문제는 커집니다
          </p>
        </motion.div>

        {/* 문제 카드들 - 얇고 긴 가로 카드 */}
        <div className="space-y-4 md:space-y-6">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 hover:shadow-xl transition-all duration-300"
              style={{ boxShadow: '0 0 24px rgba(0, 0, 0, 0.08)' }}
            >
              <div className="flex items-start gap-3 sm:gap-4 md:gap-6">
                {/* 넘버 */}
                <div className="flex-shrink-0">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
                    {item.number}
                  </span>
                </div>

                {/* 내용 */}
                <div className="flex-1 pt-0.5 sm:pt-1 md:pt-2">
                  <div className="flex flex-col md:flex-row md:items-baseline gap-1 sm:gap-2 md:gap-4 mb-1.5 sm:mb-2 md:mb-3">
                    <span className="text-xs sm:text-sm md:text-base font-semibold text-primary">
                      {item.period}
                    </span>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-neutral-black">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
