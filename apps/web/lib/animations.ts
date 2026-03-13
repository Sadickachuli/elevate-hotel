import { MotionValue, useTransform } from 'framer-motion'

export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

export const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

export const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

export const staggerSlow = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export const clipReveal = {
  hidden: { clipPath: 'inset(100% 0% 0% 0%)' },
  visible: {
    clipPath: 'inset(0% 0% 0% 0%)',
    transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
  },
}

export const imageZoomContainer = {
  rest: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.6, ease: 'easeOut' } },
}

export const goldLineGrow = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.6, delay: 0.3, ease: 'easeOut' },
  },
}

export const trackingExpand = {
  hidden: { opacity: 0, letterSpacing: '0em' },
  visible: {
    opacity: 1,
    letterSpacing: '0.3em',
    transition: { duration: 0.8 },
  },
}

export const hoverLift = {
  rest: { y: 0 },
  hover: { y: -4, transition: { duration: 0.3, ease: 'easeOut' } },
}

export const revealContent = {
  rest: { height: 0, opacity: 0 },
  hover: {
    height: 'auto',
    opacity: 1,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
}

export function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance])
}
