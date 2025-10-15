import Image from 'next/image';
import React from 'react';
import { logo } from '../../../public';
import { cn } from '@/lib/utils';

const Logo = ({ big = false }: { big?: boolean }) => {
  return <Image src={logo} alt='falamoi' className={cn('h-auto w-[45px] lg:w-[60px]', { "w-[120px] lg:w-[240px]": big })} />;
};

export default Logo;
