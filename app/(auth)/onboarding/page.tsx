import Button from '@/components/shared/Button';
import { updateUser } from '@/lib/actions/user.actions';
import { currentUser } from '@clerk/nextjs';
import Image from 'next/image';

export default async function Onboarding() {
  const user = await currentUser();
  if (!user) return null;

  await updateUser({
    username: user.username || '',
    userId: user.id,
    firstName: user.firstName || '',
    lastName: user.lastName || '',
    image: user.imageUrl || '',
    onboarded: true,
  });

  return (
    <section className="w-full max-w-[402px] shadow-dark bg-white mx-auto p-[32px] rounded-[15px]">
      <div className="flex flex-col gap-[30px]">
        <div className="flex gap-[14px]">
          <Image
            src={user.imageUrl}
            alt="profile photo"
            width={120}
            height={120}
            className="rounded-full aspect-square object-cover w-[65px]"
          />
          <section>
            <h2 className="font-medium text-[18px]">Hello</h2>
            <h1 className="font-medium text-[26px]">
              {user.firstName !== ''
                ? user.firstName
                : user.username !== ''
                ? user.username
                : ''}
            </h1>
          </section>
        </div>
        <p className="font-medium text-[12px]">
          Thank you for signing up to{' '}
          <span className="text-primary">TaskMinder</span>, let’s get started!
        </p>
        <Button text="Get Started" hasArrow isLink href="/" />
      </div>
    </section>
  );
}
