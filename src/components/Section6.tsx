import { motion } from 'framer-motion';

export default function Section6() {
  const urgencyPoints = [
    {
      number: '01',
      title: '30만원 절약',
      subtitle: '오늘 자정까지',
      description: '자정 이후 정가 129만원'
    },
    {
      number: '02',
      title: '시스템 없이 버티면?',
      description: [
        '3개월 후 놓친 고객이 쌓입니다',
        '6개월 후 직원 뽑아도 소용없습니다'
      ]
    },
    {
      number: '03',
      title: '월 180만원 기회비용',
      description: [
        '하루만 미뤄도 6만원',
        '일주일이면 42만원'
      ]
    }
  ];

  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-accent-yellow/15 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6">
        {/* 메인 헤드라인 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2
            className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.3] text-neutral-black mb-6 px-4 sm:px-0"
            style={{
              fontFamily: "'Noto Sans KR', sans-serif",
              fontWeight: 700,
              letterSpacing: '-0.02em'
            }}
          >
            왜 하필 오늘이어야 할까요?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-neutral-gray-700 mb-6 px-4 sm:px-0 max-w-3xl mx-auto leading-relaxed">
            내일로 미루면 30만원을 더 내야 합니다.<br className="hidden sm:block" />
            하지만 진짜 문제는 그게 아닙니다.
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-2">
            오늘 자정까지만 99만원
          </p>
          <p className="text-base sm:text-lg text-neutral-gray-600">
            자정 이후 정가 129만원
          </p>
        </motion.div>

        {/* 긴박감 포인트들 */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {urgencyPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-neutral-gray-50 rounded-2xl p-6 sm:p-8"
            >
              {/* 번호 뱃지 */}
              <div className="inline-block bg-primary text-white text-sm font-bold px-3 py-1 rounded-full mb-4">
                {point.number}
              </div>

              {/* 제목 */}
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-black mb-3">
                {point.title}
              </h3>

              {/* 서브타이틀 (있는 경우) */}
              {point.subtitle && (
                <p className="text-base sm:text-lg font-semibold text-primary mb-4">
                  {point.subtitle}
                </p>
              )}

              {/* 설명 */}
              {Array.isArray(point.description) ? (
                <ul className="space-y-2">
                  {point.description.map((desc, descIndex) => (
                    <li
                      key={descIndex}
                      className="text-sm sm:text-base text-neutral-gray-600 leading-relaxed"
                    >
                      • {desc}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm sm:text-base text-neutral-gray-600 leading-relaxed">
                  {point.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA 버튼 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <button className="group inline-flex items-center justify-center px-8 sm:px-12 py-4 sm:py-5 bg-primary text-white text-base sm:text-lg md:text-xl font-bold rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
            <span>지금 99만원에 신청하기</span>
            <svg
              className="ml-2 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <p className="text-xs sm:text-sm text-neutral-gray-500 mt-4">
            * 2025년 11월 21일 자정 이후 정가 129만원으로 변경됩니다
          </p>
        </motion.div>
      </div>
    </section>
  );
}
