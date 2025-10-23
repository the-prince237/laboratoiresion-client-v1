import { ToolCase } from "lucide-react";
import { ServiceCardProps } from "../types";
import { useEffect, useState } from "react";
import Image from "next/image";

const ServiceCard = ({
  title = 'LinkedIn',
  Icon = ToolCase,
  image = 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&',
  gradient = 'from-blue-600 to-blue-400',
  link = '#',
  description = 'Professional Network',
  index = 0,
}: ServiceCardProps & { index: number }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <a
      key={title}
      href={link}
      className={`group relative transition-all duration-700 ${
        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Card Container */}
      <div className='relative h-full overflow-hidden rounded-2xl border border-slate-700/20 bg-gradient-to-br from-white/50 to-gray-200/50 p-4 backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:border-slate-600/50 lg:p-8'>
        {/* Hover Gradient Effect */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
        ></div>

        <Image
          src={image}
          alt={title}
          className='absolute top-[calc(50%-100px)] left-[calc(50%-150px)] rounded-xl object-cover object-top opacity-0 blur-[30px] transition-opacity duration-500 group-hover:opacity-50'
          width={300}
          height={300}
        />

        {/* Content */}
        <div className='relative z-10 flex flex-col gap-4'>
          {/* Icon Container */}

          <div className='relative h-[150px] w-full'>
            <Image
              src={image}
              alt={title}
              className='absolute top-0 left-0 h-full w-full rounded-xl object-cover object-center'
              width={500}
              height={300}
            />
            <div className='absolute h-full w-full rounded-xl bg-black/50 group-hover:bg-black/40' />
            <div className='relative flex h-full w-full flex-col items-start justify-center gap-3 p-5'>
              <div
                className={`inline-flex rounded-xl bg-gradient-to-br p-3 ${gradient} transform text-white transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}
              >
                <Icon />
              </div>
              <h3 className='text-lg font-semibold text-white transition-colors duration-300'>
                {title}
              </h3>
            </div>
          </div>

          <div className='flex w-full flex-col items-end justify-between gap-5 overflow-visible rounded-xl px-3 py-4 pl-0  lg:flex-row'>
            {/* Text */}
            <p className='border-0 border-l-[1px] border-solid border-gray-300 pl-4 text-gray-500 transition-colors duration-300 group-hover:text-black text-sm'>
              {description}
            </p>

            {/* Arrow Icon */}
            <div className='flex items-center text-gray-600 transition-all duration-300 group-hover:text-black'>
              <span className='text-sm font-medium transition-all duration-300 group-hover:translate-x-0'>
                Connect
              </span>
              <svg
                className='ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M17 8l4 4m0 0l-4 4m4-4H3'
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Shimmer Effect */}
        <div className='absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-1000 group-hover:translate-x-full'></div>
      </div>
    </a>
  );
};

export default ServiceCard