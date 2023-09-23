'use client';

import SortMenu from './SortMenu';
import ActionButton from '../shared/ActionButton';
import { useState } from 'react';

export default function Sort({
  userId,
  currentSortMethod,
}: {
  userId: string;
  currentSortMethod: string;
}) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className='relative'>
      <ActionButton
        activeIcon="/sort.svg"
        inactiveIcon="/sort.svg"
        isActive={isActive}
        handleClick={() => setIsActive(!isActive)}
        color="shadow-primary/40 bg-primary"
      />
      {isActive && (
        <SortMenu userId={userId} currentSortMethod={currentSortMethod} />
      )}
    </div>
  );
}
