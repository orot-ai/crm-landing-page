import { motion } from 'framer-motion';
import { HiCircleStack, HiPaperAirplane, HiChartBar } from 'react-icons/hi2';

export default function Section4() {
  const features = [
    {
      number: '01',
      title: '설문 → DB 자동 생성',
      items: [
        'Tally 설문 제출 즉시',
        '노션 DB 자동 생성',
        '이름/연락처/날짜 자동 매핑',
        '복붙 제로, 실수 제로'
      ],
      icon: <HiCircleStack className="w-16 h-16" />
    },
    {
      number: '02',
      title: '메시지 자동 발송',
      items: [
        '카카오톡 + 이메일 자동 발송',
        '고객 여정별 맞춤 메시지',
        '수동 메시지/메일 발송도 가능',
        '일일이 보내던 시간 완전 절약'
      ],
      icon: <HiPaperAirplane className="w-16 h-16" />
    },
    {
      number: '03',
      title: '실시간 대시보드',
      items: [
        '오늘 접수 현황 실시간 확인',
        '의사결정에 필요한 데이터 즉시 파악'
      ],
      icon: <HiChartBar className="w-16 h-16" />
    }
  ];

  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      {/* 배경 장식 도형 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] left-[5%] w-64 h-64 sm:w-80 sm:h-80 bg-accent-yellow/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[10%] right-[8%] w-56 h-56 sm:w-72 sm:h-72 bg-primary/10 rounded-full blur-3xl"></div>
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
            복잡한 기능 다 빼고,<br />
            핵심 3가지만 남겼습니다
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-gray-500 font-normal px-2 sm:px-0">
            설문 접수부터 고객 관리까지, 실제로 쓰는 기능만 담았습니다
          </p>
        </motion.div>

        {/* 기능 카드들 */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-8 sm:p-10 hover:shadow-xl transition-all duration-300 text-center"
              style={{ boxShadow: '0 0 24px rgba(0, 0, 0, 0.08)' }}
            >
              {/* 아이콘 */}
              <div className="mb-8 flex justify-center">
                <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
              </div>

              {/* 제목 */}
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-black mb-6 leading-tight">
                {feature.title}
              </h3>

              {/* 설명 리스트 */}
              <ul className="space-y-2 text-center">
                {feature.items.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 + itemIndex * 0.05 }}
                    className="flex items-center justify-center gap-2 text-sm sm:text-base text-neutral-gray-600 leading-relaxed"
                  >
                    <svg
                      className="w-5 h-5 text-primary flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
