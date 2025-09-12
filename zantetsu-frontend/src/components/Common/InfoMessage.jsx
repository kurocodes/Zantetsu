export function InfoMessage({ icon, title, description, children }) {
  return (
    <div className="col-span-1 xs:col-span-3 xl:col-span-3 flex flex-col items-center justify-center text-center p-10 bg-bgSoft rounded-lg space-y-4">
      <div className="text-6xl text-highlight">{icon}</div>
      <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
      <p className="text-gray-600">{description}</p>
      {children}
    </div>
  );
}
