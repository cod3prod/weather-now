export default function IsLoading() {
  return (
    <div className="absolute inset-0 flex items-center justify-center min-h-screen backdrop-blur-xl:">
      <div className="flex items-center justify-center">
        <div className="w-16 h-16 border-8 border-gray-300 border-t-purple-500 rounded-full animate-spin"></div>
      </div>
    </div>
  );
}
