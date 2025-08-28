"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Package, Users, Gift, Settings, Bell } from "lucide-react"
import Link from "next/link"

export function QuickActions() {
  const actions = [
    {
      title: "Add New Product",
      description: "Create a new script or mod",
      icon: Plus,
      href: "/admin/products/new",
      color: "bg-accent text-accent-foreground",
    },
    {
      title: "Manage Products",
      description: "Edit existing products",
      icon: Package,
      href: "/admin/products",
      color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    },
    {
      title: "View Users",
      description: "Manage customer accounts",
      icon: Users,
      href: "/admin/users",
      color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    },
    {
      title: "Create Coupon",
      description: "Add discount codes",
      icon: Gift,
      href: "/admin/coupons/new",
      color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    },
    {
      title: "Site Settings",
      description: "Configure your store",
      icon: Settings,
      href: "/admin/settings",
      color: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
    },
    {
      title: "Send Notification",
      description: "Notify all users",
      icon: Bell,
      href: "/admin/notifications/new",
      color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>Common tasks and shortcuts</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              className="h-auto p-4 justify-start bg-transparent hover:bg-muted"
              asChild
            >
              <Link href={action.href}>
                <div className="flex items-center gap-3 w-full">
                  <div className={`p-2 rounded-md ${action.color}`}>
                    <action.icon className="h-4 w-4" />
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-sm">{action.title}</div>
                    <div className="text-xs text-muted-foreground">{action.description}</div>
                  </div>
                </div>
              </Link>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
