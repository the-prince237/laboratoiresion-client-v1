'use client';
import React from 'react';
import classNames from 'classnames';
import { TogglerListItem } from '@/domain/types';

export function CustomToggler<TogglerEnum>({
  initialToggleType,
  togglerItems,
}: {
  initialToggleType: TogglerEnum;
  togglerItems: TogglerListItem<TogglerEnum>[];
}) {
  const [toggleType, setToggleType] = React.useState<TogglerEnum>(initialToggleType);
  return (
    <>
      <div className='relative flex h-[61px] bg-white/50 backdrop-blur-xl w-[300px] max-w-full cursor-pointer rounded-[10px] border-[1px] border-solid border-gray p-2.5 xl:h-[75px] '>
        {togglerItems.map(({ title, tag, Icon }, index) => (
          <div
            key={index}
            onClick={() => setToggleType(tag)}
            className='relative flex w-1/2 items-center justify-center overflow-hidden rounded-lg px-5 py-3 lg:px-6 lg:py-3.5'
          >
            <div
              className={classNames('bg-primary absolute right-0 h-full w-full', {
                'translate-full': index === 0 && toggleType !== tag,
                '-translate-full': index === 1 && toggleType !== tag,
              })}
            />
            <Icon
              size={24}
              className={classNames('absolute text-white', { 'scale-0': toggleType !== tag })}
            />
            <h3 className={classNames('absolute text-black font-bold', { 'scale-0': toggleType === tag })}>
              {title}
            </h3>
          </div>
        ))}
      </div>
      {togglerItems.find(({ tag }) => tag === toggleType )?.content}
    </>
  );
}
