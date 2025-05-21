import { Clock } from "lucide-react"

interface Order {
  id: string
  customer: string
  date: string
  amount: string
  status: "pending" | "processing" | "shipped" | "delivered"
  products: string[]
}

export function RecentOrders() {
  const orders: Order[] = [
    {
      id: "ORD-7352",
      customer: "John Davidson",
      date: "June 15, 2023",
      amount: "8,300",
      status: "delivered",
      products: ["Premier B01 Chronograph 42"]
    },
    {
      id: "ORD-7351",
      customer: "Sarah Miller",
      date: "June 14, 2023",
      amount: "4,750",
      status: "shipped",
      products: ["Superocean Automatic 42"]
    },
    {
      id: "ORD-7350",
      customer: "Robert Chen",
      date: "June 14, 2023",
      amount: "17,700",
      status: "processing",
      products: ["Navitimer B01 Chronograph 46", "Superocean Automatic 42"]
    },
    {
      id: "ORD-7349",
      customer: "Emma Thompson",
      date: "June 13, 2023",
      amount: "9,600",
      status: "pending",
      products: ["Navitimer B01 Chronograph 46"]
    },
    {
      id: "ORD-7348",
      customer: "Michael Patel",
      date: "June 13, 2023",
      amount: "8,100",
      status: "processing",
      products: ["Chronomat B01 42"]
    }
  ]

  const getStatusColor = (status: Order["status"]) => {
    switch (status) {
      case "delivered":
        return "bg-green-100 text-green-800"
      case "shipped":
        return "bg-blue-100 text-blue-800"
      case "processing":
        return "bg-yellow-100 text-yellow-800"
      case "pending":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Products</th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {orders.map((order) => (
            <tr key={order.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.customer}</td>
              <td className="px-6 py-4 text-sm text-gray-500">
                <div className="max-w-xs overflow-hidden">
                  {order.products.map((product, index) => (
                    <span key={index} className="block truncate">{product}</span>
                  ))}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1 text-gray-400" />
                  {order.date}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{order.amount} CHF</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(order.status)}`}>
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
} 