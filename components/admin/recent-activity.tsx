"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CheckCircle, XCircle, Clock, DollarSign, User, Package } from "lucide-react"

export function RecentActivity() {
  const activities = [
    {
      id: "1",
      type: "order",
      title: "New order received",
      description: "Order #ORD-156 from Ahmed Hassan",
      amount: "$49.99",
      time: "2 minutes ago",
      status: "pending",
      icon: Clock,
      user: { name: "Ahmed Hassan", avatar: "/professional-avatar.png" },
    },
    {
      id: "2",
      type: "order",
      title: "Order approved",
      description: "Order #ORD-155 has been approved",
      amount: "$79.99",
      time: "15 minutes ago",
      status: "approved",
      icon: CheckCircle,
      user: { name: "Sarah Ahmed", avatar: null },
    },
    {
      id: "3",
      type: "user",
      title: "New user registered",
      description: "Mohammed Ali joined the platform",
      time: "1 hour ago",
      status: "new",
      icon: User,
      user: { name: "Mohammed Ali", avatar: null },
    },
    {
      id: "4",
      type: "order",
      title: "Order rejected",
      description: "Order #ORD-154 was rejected",
      amount: "$34.99",
      time: "2 hours ago",
      status: "rejected",
      icon: XCircle,
      user: { name: "Omar Hassan", avatar: null },
    },
    {
      id: "5",
      type: "product",
      title: "Product updated",
      description: "Anti-Cheat System v2.1 released",
      time: "3 hours ago",
      status: "updated",
      icon: Package,
    },
    {
      id: "6",
      type: "payment",
      title: "Payment received",
      description: "Wallet deposit from Fatima Nour",
      amount: "$100.00",
      time: "4 hours ago",
      status: "completed",
      icon: DollarSign,
      user: { name: "Fatima Nour", avatar: null },
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
      case "completed":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "pending":
      case "new":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "rejected":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      case "updated":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  const getIconColor = (status: string) => {
    switch (status) {
      case "approved":
      case "completed":
        return "text-green-600"
      case "pending":
      case "new":
        return "text-yellow-600"
      case "rejected":
        return "text-red-600"
      case "updated":
        return "text-blue-600"
      default:
        return "text-gray-600"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest actions and events in your store</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-3">
              <div className={`p-2 rounded-full ${getIconColor(activity.status)}`}>
                <activity.icon className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <p className="font-medium text-sm">{activity.title}</p>
                  <div className="flex items-center gap-2">
                    {activity.amount && <span className="text-sm font-semibold">{activity.amount}</span>}
                    <Badge className={getStatusColor(activity.status)}>{activity.status}</Badge>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-1">{activity.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                  {activity.user && (
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={activity.user.avatar || undefined} />
                        <AvatarFallback className="text-xs">
                          {activity.user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-xs text-muted-foreground">{activity.user.name}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
