export default function Profile({ color, name }) {
  return (
    <div className="flex flex-col items-center gap-1 border border-black">
      <div
        className={`w-20 h-20 rounded-full border-2 border-black`}
        style={{
          background: color,
        }}
      />
      <h2 className="text-2xl">{name}</h2>
    </div>
  );
}
