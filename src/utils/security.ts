/**
 * 보안 유틸리티 함수
 */

/**
 * XSS 방지를 위한 텍스트 이스케이프
 */
export const escapeHtml = (text: string): string => {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
};

/**
 * 결제 금액 검증
 */
export const validatePaymentAmount = (amount: number): boolean => {
  return amount > 0 && amount <= 10000000 && Number.isInteger(amount);
};

/**
 * 주문번호 검증 (예측 불가능한 난수 포함)
 */
export const generateSecureOrderId = (): string => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const timestamp = now.getTime();
  const random = Math.random().toString(36).substring(2, 10);
  return `ORDER${year}${month}${day}${timestamp}${random}`;
};

/**
 * 민감한 정보 마스킹
 */
export const maskSensitiveData = (data: any): any => {
  const masked = { ...data };

  // 클라이언트 키 마스킹
  if (masked.clientKey) {
    masked.clientKey = masked.clientKey.substring(0, 8) + '****';
  }

  // 개인정보 마스킹
  if (masked.PCD_PAYER_HP) {
    masked.PCD_PAYER_HP = masked.PCD_PAYER_HP.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
  }

  if (masked.PCD_PAYER_EMAIL) {
    masked.PCD_PAYER_EMAIL = masked.PCD_PAYER_EMAIL.replace(/(.{3}).*@/, '$1***@');
  }

  return masked;
};

/**
 * 환경 변수에서 안전하게 값 가져오기
 */
export const getEnvVar = (key: string, defaultValue: string = ''): string => {
  return import.meta.env[key] || defaultValue;
};

/**
 * 프로덕션 환경 체크
 */
export const isProduction = (): boolean => {
  return import.meta.env.MODE === 'production';
};
