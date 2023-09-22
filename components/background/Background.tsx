import Circles from './Circles';

export default function Background() {
  return (
    <div className="fixed inset-0 z-[-10]">
      <div className="absolute bg-white/10 backdrop-blur-[100px] inset-0 z-[-5]" />
      <div className="opacity-50 z-[-10] relative w-full h-full">
        <Circles
          color="from-grad-green"
          position="top-[30px] left-[45px]"
          size="w-[321px]"
        />
        <Circles
          color="from-grad-yellow"
          position="top-[-40%] right-[100px]"
          size="w-[621px]"
        />
        <Circles
          color="from-grad-light-blue"
          position="bottom-[-20%] left-[100px]"
          size="w-[420px]"
        />
        <Circles
          color="from-grad-dark-blue"
          position="bottom-[20px] right-[20px]"
          size="w-[428px]"
        />
      </div>
    </div>
  );
}
