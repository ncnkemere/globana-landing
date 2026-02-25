"use client"

import { TrendingUp, CreditCard, PieChart, ArrowUpRight, ArrowDownRight } from "lucide-react"

export function TransferMockup() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-lg mx-auto w-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-[#1D3557]">Send Money</h3>
        <div className="w-8 h-8 bg-[#00BFA6]/10 rounded-full flex items-center justify-center">
          <ArrowUpRight className="w-4 h-4 text-[#00BFA6]" />
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between p-3 bg-[#F5F6FA] rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#1D3557] rounded-full flex items-center justify-center text-white font-semibold">
              US
            </div>
            <div>
              <p className="font-medium text-[#1D3557]">United States</p>
              <p className="text-sm text-gray-500">USD</p>
            </div>
          </div>
          <p className="font-bold text-[#1D3557]">$1,000.00</p>
        </div>

        <div className="flex justify-center">
          <ArrowDownRight className="w-5 h-5 text-[#00BFA6]" />
        </div>

        <div className="flex items-center justify-between p-3 bg-[#F5F6FA] rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#00BFA6] rounded-full flex items-center justify-center text-white font-semibold">
              NG
            </div>
            <div>
              <p className="font-medium text-[#1D3557]">Nigeria</p>
              <p className="text-sm text-gray-500">NGN</p>
            </div>
          </div>
          <p className="font-bold text-[#1D3557]">₦1,352,730.73</p>
        </div>

        <div className="bg-[#00BFA6]/10 rounded-lg p-3 mt-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Transfer fee</span>
            <span className="text-[#1D3557] font-medium">$2.99</span>
          </div>
          <div className="flex justify-between text-sm mt-1">
            <span className="text-gray-600">Exchange rate</span>
            <span className="text-[#1D3557] font-medium">1 USD = 1352.73 NGN</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function DashboardMockup() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-lg mx-auto w-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-[#1D3557]">Your Overview</h3>
        <TrendingUp className="w-5 h-5 text-[#00BFA6]" />
      </div>

      <div className="space-y-4">
        <div className="bg-[#1D3557] rounded-xl p-4 text-white">
          <p className="text-sm opacity-80">Total Balance</p>
          <p className="text-2xl font-bold">$12,847.32</p>
          <div className="flex items-center mt-2">
            <ArrowUpRight className="w-4 h-4 text-[#00BFA6]" />
            <span className="text-sm text-[#00BFA6] ml-1">+12.5% this month</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-[#F5F6FA] rounded-lg p-3">
            <p className="text-xs text-gray-500 uppercase tracking-wide">Saved</p>
            <p className="text-lg font-bold text-[#1D3557]">$3,240</p>
          </div>
          <div className="bg-[#F5F6FA] rounded-lg p-3">
            <p className="text-xs text-gray-500 uppercase tracking-wide">Spent</p>
            <p className="text-lg font-bold text-[#1D3557]">$1,890</p>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-medium text-[#1D3557]">Recent Transactions</h4>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-2">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#00BFA6]/10 rounded-full flex items-center justify-center">
                  <CreditCard className="w-4 h-4 text-[#00BFA6]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#1D3557]">Transfer to UK</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
              <p className="text-sm font-medium text-[#1D3557]">-$500.00</p>
            </div>
            <div className="flex items-center justify-between p-2">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#F4C542]/10 rounded-full flex items-center justify-center">
                  <PieChart className="w-4 h-4 text-[#F4C542]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#1D3557]">Salary Deposit</p>
                  <p className="text-xs text-gray-500">Yesterday</p>
                </div>
              </div>
              <p className="text-sm font-medium text-[#00BFA6]">+$2,500.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function SecurityMockup() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-lg mx-auto w-full">
      <div className="text-center mb-4">
        <div className="w-16 h-16 bg-[#00BFA6]/10 rounded-full flex items-center justify-center mx-auto mb-3">
          <div className="w-8 h-8 bg-[#00BFA6] rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
        </div>
        <h3 className="font-semibold text-[#1D3557]">Secure Transfer</h3>
      </div>

      <div className="space-y-3">
        <div className="flex items-center space-x-3 p-3 bg-[#F5F6FA] rounded-lg">
          <div className="w-2 h-2 bg-[#00BFA6] rounded-full"></div>
          <span className="text-sm text-[#1D3557]">256-bit encryption active</span>
        </div>
        <div className="flex items-center space-x-3 p-3 bg-[#F5F6FA] rounded-lg">
          <div className="w-2 h-2 bg-[#00BFA6] rounded-full"></div>
          <span className="text-sm text-[#1D3557]">Identity verified</span>
        </div>
        <div className="flex items-center space-x-3 p-3 bg-[#F5F6FA] rounded-lg">
          <div className="w-2 h-2 bg-[#00BFA6] rounded-full"></div>
          <span className="text-sm text-[#1D3557]">Fraud protection enabled</span>
        </div>
      </div>

      <div className="mt-4 p-3 bg-[#00BFA6]/10 rounded-lg">
        <p className="text-xs text-center text-[#1D3557]">Your money is protected with advanced security measures</p>
      </div>
    </div>
  )
}
