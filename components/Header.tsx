import { UserButton, currentUser } from '@clerk/nextjs';

export default async function Header() {
  const user = await currentUser();

  return (
    <header className="flex gap-[10px] items-center my-[24px] md:my-[50px]">
      <UserButton
        appearance={{ elements: { avatarBox: 'w-[35px] h-[35px]' } }}
        afterSignOutUrl="/"
      />
      <section className="font-medium">
        <h2 className="text-[10px]">Hello</h2>
        <h1 className="text-[14px]">
          {user?.firstName} {user?.lastName}
        </h1>
      </section>
    </header>
  );
}
