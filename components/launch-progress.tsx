export default function LaunchProgress() {
  // Calculate progress percentage (example: 70%)
  const progressPercentage = 70

  return (
    <div className="mx-auto max-w-md rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-center text-lg font-semibold text-[#1D3557]">Launch Progress</h3>

      <div className="mb-2 flex justify-between text-sm">
        <span>Development</span>
        <span>July 2025</span>
      </div>

      <div className="mb-6 h-2 w-full rounded-full bg-gray-200">
        <div className="h-2 rounded-full bg-[#00BFA6]" style={{ width: `${progressPercentage}%` }}></div>
      </div>

      <div className="grid grid-cols-4 text-xs">
        <div className="flex flex-col items-center">
          <div className="mb-1 h-3 w-3 rounded-full bg-[#00BFA6]"></div>
          <span>Planning</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="mb-1 h-3 w-3 rounded-full bg-[#00BFA6]"></div>
          <span>Development</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="mb-1 h-3 w-3 rounded-full bg-[#F5F6FA] border border-[#00BFA6]"></div>
          <span>Testing</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="mb-1 h-3 w-3 rounded-full bg-[#F5F6FA] border border-gray-300"></div>
          <span>Launch</span>
        </div>
      </div>
    </div>
  )
}
