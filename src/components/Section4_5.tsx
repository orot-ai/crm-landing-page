import { motion } from 'framer-motion';
import { HiExclamationCircle, HiSparkles } from 'react-icons/hi2';
import { FaChartLine } from 'react-icons/fa';

export default function Section4_5() {
  const levels = [
    {
      level: 'Level 1',
      title: '수동 관리 한계',
      subtitle: '지금 시스템이 필요해요',
      description: [
        '설문 접수 → 수기 복붙 → 일일이 연락',
        '프로그램마다 다른 파일 사용',
        '고객 30-50명 단계'
      ],
      icon: <HiExclamationCircle className="w-16 h-16" />,
      bgColor: 'bg-white/10',
      borderColor: 'border-white/30 border-dashed',
      iconBg: 'from-neutral-gray-200/50 to-neutral-gray-100/30',
      textColor: 'text-white'
    },
    {
      level: 'Level 2',
      title: '부분 자동화',
      subtitle: '한계가 보이기 시작',
      description: [
        '구글폼은 쓰지만 데이터는 따로 정리',
        '일부는 자동, 전체 흐름은 수동',
        '고객 50-100명 단계'
      ],
      icon: <FaChartLine className="w-16 h-16" />,
      bgColor: 'bg-white/10',
      borderColor: 'border-white/30 border-dashed',
      iconBg: 'from-accent-yellow/30 to-accent-yellow/10',
      textColor: 'text-white'
    },
    {
      level: 'Level 3',
      title: '완전 자동화',
      subtitle: '이게 목표예요',
      description: [
        '설문 접수 즉시 DB 생성 & 자동 발송',
        '실시간 대시보드로 모든 지표 한눈에',
        '고객 100명+ 무제한 확장 가능'
      ],
      icon: <HiSparkles className="w-16 h-16" />,
      bgColor: 'bg-white/10',
      borderColor: 'border-white/50 border-dashed',
      iconBg: 'from-primary/20 to-primary/10',
      textColor: 'text-white'
    }
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden" style={{ backgroundColor: '#3d7dc4' }}>
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
            className="text-[22px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[1.4] text-white mb-3 md:mb-4 px-4 sm:px-0"
            style={{
              fontFamily: "'Noto Sans KR', sans-serif",
              fontWeight: 600,
              letterSpacing: '-0.02em'
            }}
          >
            지금 몇 단계인가요?
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 font-normal px-2 sm:px-0">
            당신의 비즈니스가 어느 단계에 있는지 확인해보세요
          </p>
        </motion.div>

        {/* Level 카드들 */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {levels.map((level, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group ${level.bgColor} ${level.borderColor} border-2 rounded-xl md:rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:scale-105 cursor-pointer`}
            >
              {/* Level 뱃지 */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm md:text-base font-semibold text-white/70 group-hover:text-white transition-colors duration-300">
                  {level.level}
                </span>
              </div>

              {/* 아이콘 */}
              <div className="mb-8 flex justify-center">
                <div className={`${level.textColor} transition-transform duration-300 group-hover:scale-110`}>
                  {level.icon}
                </div>
              </div>

              {/* 제목 */}
              <h3 className={`text-xl sm:text-2xl font-bold ${level.textColor} mb-2`}>
                {level.title}
              </h3>
              <p className="text-sm sm:text-base text-white/80 mb-6">
                {level.subtitle}
              </p>

              {/* 구분선 */}
              <div className="w-full h-px bg-white/20 mb-6"></div>

              {/* 설명 리스트 */}
              <ul className="space-y-3">
                {level.description.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start gap-2"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
                    </div>
                    <span className="text-sm sm:text-base text-white/90 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* 하단 CTA 메시지 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4">
            Level 1-2라면{' '}
            <span className="inline-block bg-white/90 px-1.5 py-0.5 rounded" style={{ padding: '2px 8px', color: '#2061ad' }}>
              더 무너지기 전에 전환하세요
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
