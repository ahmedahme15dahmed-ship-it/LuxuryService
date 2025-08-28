"use client"

import { useState } from "react"
import { Bell, Mail, Check, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { useRTL } from "@/components/rtl-provider"

export function NotificationsTab() {
  const { isRTL } = useRTL()
  const [notifications, setNotifications] = useState([
    {
      id: "1",
      type: "order",
      title: "Order Approved",
      message: "Your order #ORD-001 has been approved and is ready for download.",
      isRead: false,
      createdAt: "2024-01-20T10:30:00Z",
    },
    {
      id: "2",
      type: "system",
      title: "Welcome to Gold Level",
      message: "Congratulations! You've reached Gold member status and unlocked exclusive benefits.",
      isRead: false,
      createdAt: "2024-01-19T15:45:00Z",
    },
    {
      id: "3",
      type: "promotion",
      title: "New Coupon Available",
      message: "You've received a new 20% discount coupon. Check your coupons tab to use it.",
      isRead: true,
      createdAt: "2024-01-18T09:20:00Z",
    },
    {
      id: "4",
      type: "order",
      title: "Order Processing",
      message: "Your order #ORD-002 is being processed. You'll be notified once it's ready.",
      isRead: true,
      createdAt: "2024-01-17T14:10:00Z",
    },
    {
      id: "5",
      type: "referral",
      title: "Referral Bonus",
      message: "You earned $15 commission from your referral Ahmed's purchase.",
      isRead: true,
      createdAt: "2024-01-15T11:00:00Z",
    },
  ])

  const unreadCount = notifications.filter((n) => !n.isRead).length

  const markAsRead = (id: string) => {
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, isRead: true } : n)))
  }

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })))
  }

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "order":
        return <Check className="h-4 w-4 text-green-600" />
      case "system":
        return <Bell className="h-4 w-4 text-blue-600" />
      case "promotion":
        return <Mail className="h-4 w-4 text-purple-600" />
      case "referral":
        return <Clock className="h-4 w-4 text-orange-600" />
      default:
        return <Bell className="h-4 w-4" />
    }
  }

  const getTypeText = (type: string) => {
    if (isRTL) {
      switch (type) {
        case "order":
          return "طلب"
        case "system":
          return "نظام"
        case "promotion":
          return "عرض"
        case "referral":
          return "إحالة"
        default:
          return type
      }
    }
    return type.charAt(0).toUpperCase() + type.slice(1)
  }

  const unreadNotifications = notifications.filter((n) => !n.isRead)
  const readNotifications = notifications.filter((n) => n.isRead)

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                {isRTL ? "الإشعارات" : "Notifications"}
                {unreadCount > 0 && (
                  <Badge variant="destructive" className="ml-2">
                    {unreadCount}
                  </Badge>
                )}
              </CardTitle>
              <CardDescription>
                {isRTL ? "تتبع التحديثات والإشعارات المهمة" : "Stay updated with important notifications"}
              </CardDescription>
            </div>
            {unreadCount > 0 && (
              <Button variant="outline" size="sm" onClick={markAllAsRead}>
                {isRTL ? "تحديد الكل كمقروء" : "Mark All Read"}
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="unread" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="unread">
                {isRTL ? "غير مقروءة" : "Unread"} ({unreadCount})
              </TabsTrigger>
              <TabsTrigger value="all">
                {isRTL ? "جميع الإشعارات" : "All"} ({notifications.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="unread" className="mt-6">
              <div className="space-y-4">
                {unreadNotifications.map((notification, index) => (
                  <div key={notification.id}>
                    <div className="flex items-start gap-3 p-3 bg-accent/5 rounded-lg border border-accent/20">
                      {getNotificationIcon(notification.type)}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-1">
                          <h4 className="font-semibold">{notification.title}</h4>
                          <Badge variant="secondary" className="text-xs">
                            {getTypeText(notification.type)}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{notification.message}</p>
                        <div className="flex items-center justify-between">
                          <p className="text-xs text-muted-foreground">
                            {new Date(notification.createdAt).toLocaleDateString()}{" "}
                            {new Date(notification.createdAt).toLocaleTimeString()}
                          </p>
                          <Button size="sm" variant="ghost" onClick={() => markAsRead(notification.id)}>
                            <Check className="h-3 w-3 mr-1" />
                            {isRTL ? "تحديد كمقروء" : "Mark Read"}
                          </Button>
                        </div>
                      </div>
                    </div>
                    {index < unreadNotifications.length - 1 && <Separator className="mt-4" />}
                  </div>
                ))}

                {unreadNotifications.length === 0 && (
                  <div className="text-center py-8">
                    <Check className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      {isRTL ? "لا توجد إشعارات غير مقروءة" : "No unread notifications"}
                    </p>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="all" className="mt-6">
              <div className="space-y-4">
                {notifications.map((notification, index) => (
                  <div key={notification.id}>
                    <div
                      className={`flex items-start gap-3 p-3 rounded-lg ${
                        notification.isRead ? "bg-muted/30" : "bg-accent/5 border border-accent/20"
                      }`}
                    >
                      {getNotificationIcon(notification.type)}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-1">
                          <h4 className={`font-semibold ${notification.isRead ? "text-muted-foreground" : ""}`}>
                            {notification.title}
                          </h4>
                          <Badge variant="secondary" className="text-xs">
                            {getTypeText(notification.type)}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{notification.message}</p>
                        <p className="text-xs text-muted-foreground">
                          {new Date(notification.createdAt).toLocaleDateString()}{" "}
                          {new Date(notification.createdAt).toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                    {index < notifications.length - 1 && <Separator className="mt-4" />}
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
