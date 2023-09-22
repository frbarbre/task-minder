'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Button({
  hasArrow,
  text,
  isLink,
  href,
  handleClick,
  maxWidth,
}: {
  hasArrow?: boolean;
  text: string;
  isLink?: boolean;
  href?: string;
  handleClick?: () => void;
  maxWidth?: string;
}) {
  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <>
      {isLink ? (
        <Link
          href={href || ''}
          className={`relative w-full block group ${maxWidth} ${
            maxWidth && 'mx-auto'
          }`}
          onMouseEnter={() => setIsMouseOver(true)}
          onMouseLeave={() => setIsMouseOver(false)}
        >
          <Image
            src={!isMouseOver ? '/button.png' : '/button-hover.png'}
            alt="button"
            width={600}
            height={53}
            className="h-[53px] w-full"
          />
          <strong className="absolute inset-0 flex items-center justify-center">
            <span className="text-[19px] text-white group-hover:text-primary font-semibold">
              {text}
            </span>
            {hasArrow && (
              <Image
                className="absolute right-[22px]"
                src={isMouseOver ? '/arrow-hover.svg' : '/arrow.svg'}
                alt="arrow icon"
                width={24}
                height={24}
              />
            )}
          </strong>
        </Link>
      ) : (
        <button
          onClick={handleClick}
          className={`relative w-full block group ${maxWidth} ${
            maxWidth && 'mx-auto'
          }`}
          onMouseEnter={() => setIsMouseOver(true)}
          onMouseLeave={() => setIsMouseOver(false)}
        >
          <Image
            src={!isMouseOver ? '/button.png' : '/button-hover.png'}
            alt="button"
            width={600}
            height={53}
            className="h-[53px] w-full"
          />
          <strong className="absolute inset-0 flex items-center justify-center">
            <span className="text-[19px] text-white group-hover:text-primary font-semibold">
              {text}
            </span>
            {hasArrow && (
              <Image
                className="absolute right-[22px]"
                src={isMouseOver ? '/arrow-hover.svg' : '/arrow.svg'}
                alt="arrow icon"
                width={24}
                height={24}
              />
            )}
          </strong>
        </button>
      )}
    </>
  );
}
