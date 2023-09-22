'use client';

import { setSortMethod } from '@/lib/actions/user.actions';

export default function Sort({ userId }: { userId: string }) {
  async function handleSortMethod(sortMethod: string) {
    await setSortMethod(userId, sortMethod, '/');
  }

  return (
    <>
      <div onClick={() => handleSortMethod('dueDate')}>Date</div>
      <div onClick={() => handleSortMethod('priority')}>Priority</div>
    </>
  );
}
