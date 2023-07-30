'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { H1 } from '@/components/Typography';

const Intro = (): React.ReactElement => (
  <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 2, ease: 'easeIn' }}
    className="flex flex-col flex-1 justify-center items-center h-screen">
    <H1
      font="regular"
      className="!text-5xl md:!text-9xl pb-2 bg-gradient-to-r from-blue-700 to-red-100 bg-clip-text text-transparent">
      Stocks &amp; Crypto-Market
    </H1>
    <H1 font="thin" className="mt-10">
      Your space for investment!
    </H1>
  </motion.section>
);

export default Intro;
