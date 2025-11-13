import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Section5_5() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2025-11-21T00:00:00').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 md:py-32 overflow-hidden" style={{ backgroundColor: '#3d7dc4' }}>
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-8">
            500만원짜리 시스템을<br className="sm:hidden" /> 99만원에 평생 소유하세요
          </p>

          {/* 타이머 */}
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 mb-4 shadow-xl border border-white/20">
            <p className="text-base sm:text-lg md:text-xl font-bold text-white mb-6">
              얼리버드 할인 종료까지
            </p>
            <div className="flex gap-2 sm:gap-3 md:gap-4">
              {[
                { value: timeLeft.days, label: 'DAYS' },
                { value: timeLeft.hours, label: 'HOURS' },
                { value: timeLeft.minutes, label: 'MINS' },
                { value: timeLeft.seconds, label: 'SECS' }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="bg-white rounded-lg px-4 py-3 sm:px-5 sm:py-4 md:px-6 md:py-5 w-[70px] sm:w-[80px] md:w-[90px] h-[60px] sm:h-[70px] md:h-[80px] flex items-center justify-center shadow-lg">
                    <span className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-primary to-primary/70 bg-clip-text text-transparent tabular-nums">
                      {String(item.value).padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-[10px] sm:text-xs md:text-sm font-semibold text-white/90 mt-2 tracking-wider">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-sm sm:text-base md:text-lg text-white/80">
            월 구독료 없이 데이터는 영구 소유할 수 있습니다
          </p>
        </motion.div>
      </div>
    </section>
  );
}
