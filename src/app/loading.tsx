export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="relative h-28 w-28">
        <div className="box1 absolute border-[16px] border-purple-300" />
        <div className="box2 absolute border-[16px] border-purple-300" />
        <div className="box3 absolute border-[16px] border-purple-300" />
      </div>
    </div>
  );
}