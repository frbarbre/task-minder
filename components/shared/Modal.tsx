export default function Modal({
  children,
  layer,
  setIsActive,
  isActive,
}: {
  children: React.ReactNode;
  layer: "middle" | "top";
  setIsActive: (isActive: boolean) => void;
  isActive: boolean;
}) {
  return (
    <>
      {isActive && (
        <>
          <div
            className={`fixed inset-0 bg-white/5 backdrop-blur-[25px] ${
              layer === "middle" ? "z-10" : "z-30"
            }`}
            onClick={() => setIsActive(false)}
          ></div>
          <div className={`absolute inset-0 flex items-center justify-center`}>
            <div
              className={`relative ${
                layer === "middle" ? "z-20" : "z-40"
              } max-w-[520px] w-full`}
            >
              {children}
            </div>
          </div>
        </>
      )}
    </>
  );
}
