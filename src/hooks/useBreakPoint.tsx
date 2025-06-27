import { useEffect, useState } from 'react';

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

export type Breakpoint = keyof typeof breakpoints;

export const useBreakpoint = () => {
  const [width, setWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  const getBreakpoint = (w: number): Breakpoint => {
    if (w >= breakpoints['2xl']) return '2xl';
    if (w >= breakpoints.xl) return 'xl';
    if (w >= breakpoints.lg) return 'lg';
    if (w >= breakpoints.md) return 'md';
    if (w >= breakpoints.sm) return 'sm';
    return 'sm';
  };

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const current = getBreakpoint(width);

  const is = (bp: Breakpoint) => current === bp;
  const isBelow = (bp: Breakpoint) => width < breakpoints[bp];
  const isAbove = (bp: Breakpoint) => width >= breakpoints[bp];

  return {
    breakpoint: current,
    is,
    isBelow,
    isAbove,
    width,
  };
};
