"use client"

import { Users, UserCheck, UserX, Crown } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function UsersStats() {
  const stats = [
    {
      title: "Total Users",
      value: "1,234",
      change: "+12 this month",
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Active Users",
      value: "1,156",
      change: "93.7% active rate",
      icon: UserCheck,
      color: "text-green-600",
    },
    {
      title: "Blocked Users",
      value: "78",
      change: "6.3% blocked rate",
      icon: UserX,
      color: "text-red-600",
    },
    {
      title: "Premium Members",
      value: "234",
      change: "19% of total users",
      icon: Crown,
      color: "text-yellow-600",
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