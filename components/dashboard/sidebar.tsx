import Link from "next/link"
import { Home, ShoppingBag, Users, Watch, Briefcase, Settings, LogOut } from "lucide-react"

export function DashboardSidebar() {
  return (
    <div className="w-64 bg-[#072C54] text-white h-full flex flex-col">
      <div className="p-4 border-b border-white/10 flex items-center justify-center">
        <h1 className="text-2xl font-bold">BREITLING</h1>
      </div>
      <nav className="flex-1 overflow-y-auto py-4 px-3">
        <ul className="space-y-1">
          <li>
            <Link href="/dashboard" className="flex items-center p-3 text-white rounded-lg hover:bg-white/10">
              <Home className="w-5 h-5 mr-3" />
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/dashboard/products" className="flex items-center p-3 text-white rounded-lg hover:bg-white/10">
              <Watch className="w-5 h-5 mr-3" />
              Products
            </Link>
          </li>
          <li>
            <Link href="/dashboard/orders" className="flex items-center p-3 text-white rounded-lg hover:bg-white/10">
              <ShoppingBag className="w-5 h-5 mr-3" />
              Orders
            </Link>
          </li>
          <li>
            <Link href="/dashboard/customers" className="flex items-center p-3 text-white rounded-lg hover:bg-white/10">
              <Users className="w-5 h-5 mr-3" />
              Customers
            </Link>
          </li>
          <li>
            <Link href="/dashboard/boutiques" className="flex items-center p-3 text-white rounded-lg hover:bg-white/10">
              <Briefcase className="w-5 h-5 mr-3" />
              Boutiques
            </Link>
          </li>
        </ul>
      </nav>
      <div className="p-4 border-t border-white/10">
        <ul className="space-y-1">
          <li>
            <Link href="/dashboard/settings" className="flex items-center p-3 text-white rounded-lg hover:bg-white/10">
              <Settings className="w-5 h-5 mr-3" />
              Settings
            </Link>
          </li>
          <li>
            <button className="w-full flex items-center p-3 text-white rounded-lg hover:bg-white/10">
              <LogOut className="w-5 h-5 mr-3" />
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}
