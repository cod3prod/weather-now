export default function IsLoading({ message }: { message: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center min-h-screen backdrop-blur-xl:">
      <div className="relative w-40 h-40 flex items-center justify-center">
        {/* spinner */}
        <div className="absolute w-36 h-36 border-8 border-gray-300 border-t-purple-500 rounded-full animate-spin" />
        <p className="w-full text-center text-2xl text-white font-bold">{message}</p>
      </div>
    </div>
  );
}
