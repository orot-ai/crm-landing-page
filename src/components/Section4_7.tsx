import { motion } from 'framer-motion';
import { HiSparkles } from 'react-icons/hi2';
import { MdPalette } from 'react-icons/md';
import { FaLock } from 'react-icons/fa';

export default function Section4_7() {
  const differences = [
    {
      title: '관리 고객 수 무제한',
      description: [
        '고객 50명이든 5000명이든\n추가 비용 없음',
        '노션이 허용하는 만큼 무제한'
      ],
      icon: <HiSparkles className="w-16 h-16" />
    },
    {
      title: '레이아웃 완전 자유',
      description: [
        '고정 템플릿 없음',
        '비즈니스에 맞게 자유롭게 구성',
        '대시보드, 보기, 필터 모두 커스텀'
      ],
      icon: <MdPalette className="w-16 h-16" />
    },
    {
      title: '데이터 영구 소유',
      description: [
        '구독 끊어도 데이터는 내 것',
        '노션에 영구 보관'
      ],
      icon: <FaLock className="w-16 h-16" />
    }
  ];

  return (
    <section className="relative py-20 md:py-32 bg-[#FAFAFA] overflow-hidden">
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
            Make Your CRM이<br />
            기존 SaaS와 다른 점이 뭘까요?
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-gray-500 font-normal px-2 sm:px-0 max-w-3xl mx-auto">
            월 구독료 없이 평생 소유하고, 데이터는 영구 보관하며,<br />
            고객 수 제한 없이 자유롭게 확장할 수 있습니다.
          </p>
        </motion.div>

        {/* 차이점 리스트 */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {differences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center"
            >
              {/* 아이콘 */}
              <div className="mb-6 flex justify-center">
                <div className="text-primary">
                  {item.icon}
                </div>
              </div>

              {/* 제목 */}
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-black mb-6 leading-tight">
                {item.title}
              </h3>

              {/* 설명 리스트 */}
              <ul className="space-y-2 text-center">
                {item.description.map((desc, descIndex) => (
                  <motion.li
                    key={descIndex}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 + descIndex * 0.05 }}
                    className="text-sm sm:text-base text-neutral-gray-600 leading-relaxed"
                  >
                    ✓ {desc.split('\n').map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < desc.split('\n').length - 1 && <br />}
                      </span>
                    ))}
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
