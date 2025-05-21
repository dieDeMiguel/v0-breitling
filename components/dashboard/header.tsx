import { Bell, Search, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DashboardHeader() {
  return (
    <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6">
      <div className="relative w-64">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFCC33] focus:border-transparent"
        />
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
        </Button>
        <div className="h-8 w-8 rounded-full bg-[#072C54] flex items-center justify-center text-white">
          <User className="h-4 w-4" />
        </div>
      </div>
    </header>
  )
}
