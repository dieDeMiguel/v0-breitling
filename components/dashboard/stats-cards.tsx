import { ArrowUp, ArrowDown, ShoppingBag, User, DollarSign, Watch } from "lucide-react"

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-gray-500 mb-1">Total Sales</p>
            <h3 className="text-2xl font-bold">$582,800</h3>
            <div className="flex items-center mt-2">
              <span className="text-green-500 flex items-center text-sm">
                <ArrowUp className="h-3 w-3 mr-1" /> 12.5%
              </span>
              <span className="text-xs text-gray-500 ml-2">from last month</span>
            </div>
          </div>
          <div className="bg-blue-100 p-3 rounded-full">
            <DollarSign className="h-5 w-5 text-blue-600" />
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-gray-500 mb-1">Total Orders</p>
            <h3 className="text-2xl font-bold">1,342</h3>
            <div className="flex items-center mt-2">
              <span className="text-green-500 flex items-center text-sm">
                <ArrowUp className="h-3 w-3 mr-1" /> 8.2%
              </span>
              <span className="text-xs text-gray-500 ml-2">from last month</span>
            </div>
          </div>
          <div className="bg-amber-100 p-3 rounded-full">
            <ShoppingBag className="h-5 w-5 text-amber-600" />
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-gray-500 mb-1">Watches Sold</p>
            <h3 className="text-2xl font-bold">967</h3>
            <div className="flex items-center mt-2">
              <span className="text-red-500 flex items-center text-sm">
                <ArrowDown className="h-3 w-3 mr-1" /> 3.1%
              </span>
              <span className="text-xs text-gray-500 ml-2">from last month</span>
            </div>
          </div>
          <div className="bg-purple-100 p-3 rounded-full">
            <Watch className="h-5 w-5 text-purple-600" />
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-gray-500 mb-1">New Customers</p>
            <h3 className="text-2xl font-bold">385</h3>
            <div className="flex items-center mt-2">
              <span className="text-green-500 flex items-center text-sm">
                <ArrowUp className="h-3 w-3 mr-1" /> 18.7%
              </span>
              <span className="text-xs text-gray-500 ml-2">from last month</span>
            </div>
          </div>
          <div className="bg-green-100 p-3 rounded-full">
            <User className="h-5 w-5 text-green-600" />
          </div>
        </div>
      </div>
    </div>
  )
}
