export const COUPON_CODES = {
  BERRY: "BERRY",
  NEW_YEAR: "NEW_YEAR",
} as const;

export type CouponCode = keyof typeof COUPON_CODES;
