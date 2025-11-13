import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Section2() {
  const problems = [
    '신규 문의가 오면 수동으로 복사하여 스프레드시트에 입력합니다.',
    '고객에게 보내는 안내 메시지를 매번 직접 작성하여 발송합니다.',
    '월별 매출과 수강생 현황을 보려면 여러 파일을 열어 취합해야 합니다.',
    '고객이 늘어날수록, 관리에 쓰는 시간이 두 배, 세 배로 늘어납니다.'
  ];

  const [checkedItems, setCheckedItems] = useState<boolean[]>(new Array(problems.length).fill(false));

  const handleCheck = (index: number) => {
    const newChecked = [...checkedItems];
    newChecked[index] = !newChecked[index];
    setCheckedItems(newChecked);
  };

  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
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
            혹시, 대표님의 가장 비싼 자원인<br />
            <span className="text-primary font-bold">시간</span>이 새고 있진 않나요?
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-gray-500 font-normal px-2 sm:px-0">
            당신의 비즈니스를 진단해보세요
          </p>
        </motion.div>

        {/* 문제 체크리스트 */}
        <div className="space-y-3 md:space-y-4 mb-8 md:mb-12">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              onClick={() => handleCheck(index)}
              className="bg-primary/5 rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 cursor-pointer transition-all duration-300 hover:shadow-md hover:bg-primary/10"
            >
              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex-shrink-0 mt-0.5">
                  <div
                    className={`w-5 h-5 md:w-6 md:h-6 rounded border-2 flex items-center justify-center transition-all duration-300 ${
                      checkedItems[index]
                        ? 'bg-primary border-primary'
                        : 'border-neutral-gray-300 bg-white'
                    }`}
                  >
                    {checkedItems[index] && (
                      <svg
                        className="w-3 h-3 md:w-4 md:h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </div>
                </div>
                <p className="text-sm sm:text-base md:text-lg text-neutral-gray-700 leading-relaxed">
                  {problem}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 경고 메시지 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <p className="text-base sm:text-lg md:text-xl text-neutral-black font-semibold mb-2">
            위 항목에 하나라도 해당된다면,
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-3">
            당신은 이미 월 180만원 이상의<br className="sm:hidden" /> 가치를 놓치고 있습니다.
          </p>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-neutral-black">
            1년이면 <span className="text-primary">2,160만원</span>입니다.
          </p>
        </motion.div>

        {/* 계산식 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <p className="text-sm sm:text-base md:text-lg text-neutral-gray-500">
            (하루 3시간 × 시급 3만원 × 월 20일 = 180만원)
          </p>
        </motion.div>
      </div>
    </section>
  );
}
