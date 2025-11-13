import { motion } from 'framer-motion';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Notion을 처음 써보는데 가능한가요?',
      answer: [
        '네, 가능합니다! 다만 노션의 기본적인 사용법은 알고 계셔야 합니다.',
        '페이지 생성, 데이터베이스 항목 추가/삭제 정도만 하실 수 있으면 충분합니다.'
      ]
    },
    {
      question: 'Make.com이 어렵다고 들었는데요?',
      answer: [
        '걱정하지 않으셔도 됩니다. 완성된 자동화 시나리오를 그대로 드립니다.',
        '공유 링크를 클릭하면 자동으로 연동되며, 복잡한 설정은 필요 없습니다.',
        '영상 가이드가 포함되어 있어 단계별로 따라하시면 쉽게 구축하실 수 있습니다.'
      ]
    },
    {
      question: '우리 비즈니스에도 맞을까요?',
      answer: [
        '고객 접수 → 프로그램 운영 → 메시지 발송',
        '이 흐름이 있다면 100% 적용 가능합니다.',
        '',
        '실제로 코칭, 컨설팅, 클래스, 커뮤니티, 서비스업 등 다양한 업종에서 사용 중입니다.',
        '고객 관리가 필요한 모든 비즈니스에 적용할 수 있습니다.'
      ]
    }
  ];

  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[5%] w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[10%] left-[5%] w-96 h-96 bg-accent-yellow/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6">
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
            자주 묻는 질문
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-gray-500 font-normal px-2 sm:px-0">
            궁금하신 점을 확인해보세요
          </p>
        </motion.div>

        {/* FAQ 리스트 */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-neutral-gray-50 rounded-xl overflow-hidden"
            >
              {/* 질문 */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-6 sm:px-8 py-6 flex items-center justify-between gap-4 hover:bg-neutral-gray-100 transition-colors duration-300"
              >
                <span className="text-base sm:text-lg md:text-xl font-semibold text-neutral-black">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 flex-shrink-0 text-primary transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* 답변 */}
              <div
                className={`transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 sm:px-8 pb-6 pt-2">
                  {faq.answer.map((line, lineIndex) => (
                    line === '' ? (
                      <div key={lineIndex} className="h-3"></div>
                    ) : (
                      <p
                        key={lineIndex}
                        className="text-sm sm:text-base md:text-lg text-neutral-gray-600 leading-relaxed mb-2 last:mb-0"
                      >
                        {line}
                      </p>
                    )
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
