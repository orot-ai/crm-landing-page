/**
 * 애니메이션 유틸리티
 * 모바일에서 깜빡임 방지를 위한 최적화된 애니메이션 설정
 */

import type { Variants } from 'framer-motion';

/**
 * 모바일 기기 감지
 */
export const isMobile = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768;
};

/**
 * 페이드인 애니메이션 (모바일 최적화)
 * 모바일에서는 초기 opacity를 0.3으로 설정하여 깜빡임 방지
 */
export const fadeInUp: Variants = {
  hidden: {
    opacity: isMobile() ? 0.3 : 0,
    y: isMobile() ? 10 : 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: isMobile() ? 0.3 : 0.6,
      ease: 'easeOut'
    }
  }
};

/**
 * 스태거 컨테이너 (자식 요소 순차 애니메이션)
 */
export const staggerContainer: Variants = {
  hidden: { opacity: isMobile() ? 0.5 : 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: isMobile() ? 0.05 : 0.1,
      delayChildren: isMobile() ? 0.05 : 0.1
    }
  }
};

/**
 * 스태거 아이템
 */
export const staggerItem: Variants = {
  hidden: {
    opacity: isMobile() ? 0.3 : 0,
    y: isMobile() ? 5 : 10
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: isMobile() ? 0.2 : 0.4
    }
  }
};

/**
 * 공통 viewport 설정
 * once: true로 설정하여 한 번만 애니메이션 실행
 * amount: 0.2로 설정하여 요소의 20%만 보여도 트리거
 */
export const defaultViewport = {
  once: true,
  amount: 0.2,
  margin: '-50px'
};

/**
 * 모바일용 viewport 설정
 */
export const mobileViewport = {
  once: true,
  amount: 0.1,
  margin: '-20px'
};

/**
 * 현재 환경에 맞는 viewport 반환
 */
export const getViewport = () => {
  return isMobile() ? mobileViewport : defaultViewport;
};
