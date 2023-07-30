'use client';

import { IClassName } from '@/types';
import { motion, useInView } from 'framer-motion';
import React, { ElementRef, useRef } from 'react';

type Direction = 'left' | 'right';

interface IMoveAnimationProps extends IClassName {
  children: React.ReactNode;
  direction: Direction;
}

const MoveAnimation = ({ children, direction, className }: IMoveAnimationProps) => {
  const ref = useRef<ElementRef<'section'>>(null);
  const isInView = useInView(ref);
  const x = direction === 'left' ? 'translateX(-200px)' : 'translateX(0)';

  return (
    <motion.section
      className={className}
      ref={ref}
      style={{
        transform: isInView ? 'none' : x,
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      }}>
      {children}
    </motion.section>
  );
};

export default MoveAnimation;
