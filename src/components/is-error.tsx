export default function IsError({ error }: { error: string }) {
  return (
    <div className="bg-white/60 rounded-lg shadow-xl p-8 space-y-6 max-w-md w-full">
      <div className="text-6xl text-center animate-pulse text-red-500">⚠️</div>
      <p className="text-gray-800 text-center text-lg font-medium">{error}</p>
      <button
        onClick={() => window.location.reload()}
        className="w-full py-3 px-6 bg-red-500 hover:bg-red-600 text-white rounded-full transition-all cursor-pointer"
      >
        다시 시도
      </button>
    </div>
  );
}
