"use client"
import Image from "next/image"
import Link from "next/link"
import { Download, Eye, Star, Clock, CheckCircle, XCircle, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useRTL } from "@/components/rtl-provider"

export function OrdersTab() {
  const { isRTL } = useRTL()

  const orders = [
    {
      id: "ORD-001",
      items: [
        {
          productId: "1",
          name: "Advanced Anti-Cheat System",
          image: "/gaming-anticheat-system.png",
          price: 39.99,
          quantity: 1,
        },
      ],
      total: 39.99,
      status: "delivered",
      createdAt: "2024-01-19T15:45:00Z",
      deliveredAt: "2024-01-19T16:30:00Z",
      downloadUrl: "#",
    },
    {
      id: "ORD-002",
      items: [
        {
          productId: "2",
          name: "Luxury Car Dealership",
          image: "/luxury-car-dealership-ui.png",
          price: 79.99,
          quantity: 1,
        },
      ],
      total: 79.99,
      status: "approved",
      createdAt: "2024-01-18T10:20:00Z",
      deliveredAt: "2024-01-18T11:00:00Z",
      downloadUrl: "#",
    },
    {
      id: "ORD-003",
      items: [
        {
          productId: "3",
          name: "Banking System Pro",
          image: "/banking-system-interface.png",
          price: 44.99,
          quantity: 1,
        },
      ],
      total: 44.99,
      status: "processing",
      createdAt: "2024-01-17T14:30:00Z",
    },
    {
      id: "ORD-004",
      items: [
        {
          productId: "4",
          name: "MTA Race System",
          image: "/mta-racing-system.png",
          price: 34.99,
          quantity: 1,
        },
      ],
      total: 34.99,
      status: "rejected",
      createdAt: "2024-01-16T09:15:00Z",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "delivered":
      case "approved":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "processing":
        return <Clock className="h-4 w-4 text-yellow-600" />
      case "rejected":
        return <XCircle className="h-4 w-4 text-red-600" />
      default:
        return <Package className="h-4 w-4" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered":
      case "approved":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "processing":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "rejected":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  const getStatusText = (status: string) => {
    if (isRTL) {
      switch (status) {
        case "delivered":
          return "تم التسليم"
        case "approved":
          return "تمت الموافقة"
        case "processing":
          return "قيد المعالجة"
        case "rejected":
          return "مرفوض"
        default:
          return status
      }
    }
    return status.charAt(0).toUpperCase() + status.slice(1)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="h-5 w-5" />
            {isRTL ? "طلباتي" : "My Orders"}
          </CardTitle>
          <CardDescription>
            {isRTL ? "تتبع طلباتك وتحميل المنتجات" : "Track your orders and download products"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {orders.map((order, index) => (
              <div key={order.id}>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div className="flex items-center gap-3 mb-2 lg:mb-0">
                    {getStatusIcon(order.status)}
                    <div>
                      <h3 className="font-semibold">
                        {isRTL ? "طلب رقم" : "Order"} #{order.id}
                      </h3>
                      <p className="text-sm text-muted-foreground">{new Date(order.createdAt).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className={getStatusColor(order.status)}>{getStatusText(order.status)}</Badge>
                    <span className="font-semibold">${order.total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Order Items */}
                <div className="space-y-3">
                  {order.items.map((item) => (
                    <div key={item.productId} className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={60}
                        height={60}
                        className="rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {isRTL ? "الكمية" : "Quantity"}: {item.quantity} × ${item.price.toFixed(2)}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        {(order.status === "delivered" || order.status === "approved") && (
                          <>
                            <Button size="sm" asChild>
                              <Link href={order.downloadUrl || "#"}>
                                <Download className="h-4 w-4 mr-2" />
                                {isRTL ? "تحميل" : "Download"}
                              </Link>
                            </Button>
                            <Button size="sm" variant="outline" asChild>
                              <Link href={`/product/${item.productId}`}>
                                <Star className="h-4 w-4 mr-2" />
                                {isRTL ? "تقييم" : "Review"}
                              </Link>
                            </Button>
                          </>
                        )}
                        <Button size="sm" variant="ghost" asChild>
                          <Link href={`/product/${item.productId}`}>
                            <Eye className="h-4 w-4 mr-2" />
                            {isRTL ? "عرض" : "View"}
                          </Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                {order.deliveredAt && (
                  <p className="text-sm text-muted-foreground mt-2">
                    {isRTL ? "تم التسليم في" : "Delivered on"}: {new Date(order.deliveredAt).toLocaleDateString()}
                  </p>
                )}

                {index < orders.length - 1 && <Separator className="mt-6" />}
              </div>
            ))}
          </div>

          {orders.length === 0 && (
            <div className="text-center py-8">
              <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">{isRTL ? "لا توجد طلبات بعد" : "No orders yet"}</p>
              <Button className="mt-4" asChild>
                <Link href="/">{isRTL ? "تصفح السكربتات" : "Browse Scripts"}</Link>
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
