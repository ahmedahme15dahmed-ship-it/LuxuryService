"use client"

import { Package, Eye, DollarSign, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ProductsStats() {
  const stats = [
    {
      title: "Total Products",
      value: "24",
      change: "+2 this month",
      icon: Package,
      color: "text-blue-600",
    },
    {
      title: "Total Views",
      value: "12,450",
      change: "+15.3% from last month",
      icon: Eye,
      color: "text-green-600",
    },
    {
      title: "Revenue",
      value: "$8,915",
      change: "+8.2% from last month",
      icon: DollarSign,
      color: "text-purple-600",
    },
    {
      title: "Avg. Rating",
      value: "4.8",
      change: "+0.2 from last month",
      icon: TrendingUp,
      color: "text-orange-600",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className={`h-4 w-4 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.change}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
