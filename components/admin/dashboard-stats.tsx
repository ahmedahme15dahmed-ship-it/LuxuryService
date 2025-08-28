"use client"

import { DollarSign, TrendingUp, ShoppingCart, Users, Package, AlertCircle, CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function DashboardStats() {
  const stats = [
    {
      title: "Total Sales",
      value: "$12,450.00",
      change: "+12.5%",
      changeType: "positive" as const,
      icon: DollarSign,
      description: "Revenue this month",
    },
    {
      title: "Net Profit",
      value: "$8,915.00",
      change: "+8.2%",
      changeType: "positive" as const,
      icon: TrendingUp,
      description: "Profit after expenses",
    },
    {
      title: "Total Orders",
      value: "156",
      change: "+23.1%",
      changeType: "positive" as const,
      icon: ShoppingCart,
      description: "Orders this month",
    },
    {
      title: "Active Customers",
      value: "89",
      change: "+5.4%",
      changeType: "positive" as const,
      icon: Users,
      description: "Active users",
    },
    {
      title: "Successful Orders",
      value: "142",
      change: "91.0%",
      changeType: "neutral" as const,
      icon: CheckCircle,
      description: "Success rate",
    },
    {
      title: "Pending Orders",
      value: "8",
      change: "-15.2%",
      changeType: "positive" as const,
      icon: AlertCircle,
      description: "Awaiting approval",
    },
    {
      title: "Rejected Orders",
      value: "6",
      change: "-25.0%",
      changeType: "positive" as const,
      icon: AlertCircle,
      description: "Rejected this month",
    },
    {
      title: "Total Products",
      value: "24",
      change: "+2",
      changeType: "positive" as const,
      icon: Package,
      description: "Active products",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.description}</p>
            <div className="flex items-center mt-2">
              <span
                className={`text-xs font-medium ${
                  stat.changeType === "positive"
                    ? "text-green-600"
                    : stat.changeType === "negative"
                      ? "text-red-600"
                      : "text-muted-foreground"
                }`}
              >
                {stat.change}
              </span>
              <span className="text-xs text-muted-foreground ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
