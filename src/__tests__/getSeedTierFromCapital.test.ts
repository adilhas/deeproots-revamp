/* eslint-disable no-undef */
import { getSeedTierFromCapital } from '@/lib/getSeedTierFromCapital';

describe('getSeedTierFromCapital', () => {
  it('should return null for invalid capital strings', () => {
    expect(getSeedTierFromCapital('abc')).toBeNull();
    expect(getSeedTierFromCapital('')).toBeNull();
    expect(getSeedTierFromCapital('$')).toBeNull();
  });

  it('should return tier-1 for values between 5000 and 9999', () => {
    expect(getSeedTierFromCapital('5000')).toBe('tier-1');
    expect(getSeedTierFromCapital('7500')).toBe('tier-1');
    expect(getSeedTierFromCapital('9999')).toBe('tier-1');
    expect(getSeedTierFromCapital('$9,500')).toBe('tier-1');
  });

  it('should return tier-2 for values between 10000 and 99999', () => {
    expect(getSeedTierFromCapital('10000')).toBe('tier-2');
    expect(getSeedTierFromCapital('50000')).toBe('tier-2');
    expect(getSeedTierFromCapital('99999')).toBe('tier-2');
    expect(getSeedTierFromCapital('€25,000')).toBe('tier-2');
  });

  it('should return tier-3 for values >= 100000', () => {
    expect(getSeedTierFromCapital('100000')).toBe('tier-3');
    expect(getSeedTierFromCapital('250000')).toBe('tier-3');
    expect(getSeedTierFromCapital('1,000,000')).toBe('tier-3');
  });

  it('should return null for values less than 5000', () => {
    expect(getSeedTierFromCapital('4999')).toBeNull();
    expect(getSeedTierFromCapital('0')).toBeNull();
  });
});
