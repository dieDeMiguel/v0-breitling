import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { WatchSalesChart } from "@/components/dashboard/watch-sales-chart"
import { RecentOrders } from "@/components/dashboard/recent-orders"
import { StatsCards } from "@/components/dashboard/stats-cards"
import { TopSellingWatches } from "@/components/dashboard/top-selling-watches"

export default function DashboardPage() {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <DashboardSidebar />
      <div className="flex-1 overflow-y-auto">
        <DashboardHeader />
        <main className="p-6">
          <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
          <StatsCards />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h2 className="text-lg font-semibold mb-4">Watch Sales Overview</h2>
              <WatchSalesChart />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h2 className="text-lg font-semibold mb-4">Top Selling Watches</h2>
              <TopSellingWatches />
            </div>
          </div>
          <div className="mt-6 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
            <RecentOrders />
          </div>
        </main>
      </div>
    </div>
  )
}
