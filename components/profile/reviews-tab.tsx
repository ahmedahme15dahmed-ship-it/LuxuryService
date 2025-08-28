"use client"
import Image from "next/image"
import { Star, Clock, CheckCircle, XCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useRTL } from "@/components/rtl-provider"

export function ReviewsTab() {
  const { isRTL } = useRTL()

  const reviews = [
    {
      id: "1",
      productId: "1",
      productName: "Advanced Anti-Cheat System",
      productImage: "/gaming-anticheat-system.png",
      orderId: "ORD-001",
      rating: 5,
      comment: "Excellent anti-cheat system! Works perfectly on our FiveM server. Great support from the developer.",
      status: "approved",
      createdAt: "2024-01-20T10:30:00Z",
    },
    {
      id: "2",
      productId: "2",
      productName: "Luxury Car Dealership",
      productImage: "/luxury-car-dealership-ui.png",
      orderId: "ORD-002",
      rating: 4,
      comment: "Good script with nice UI. Could use some more customization options but overall satisfied.",
      status: "pending",
      createdAt: "2024-01-19T15:45:00Z",
    },
    {
      id: "3",
      productId: "3",
      productName: "Banking System Pro",
      productImage: "/banking-system-interface.png",
      orderId: "ORD-003",
      rating: 3,
      comment: "The script has some bugs that need to be fixed. Support was slow to respond.",
      status: "rejected",
      createdAt: "2024-01-18T09:20:00Z",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "pending":
        return <Clock className="h-4 w-4 text-yellow-600" />
      case "rejected":
        return <XCircle className="h-4 w-4 text-red-600" />
      default:
        return null
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "pending":
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
        case "approved":
          return "مقبول"
        case "pending":
          return "قيد المراجعة"
        case "rejected":
          return "مرفوض"
        default:
          return status
      }
    }
    return status.charAt(0).toUpperCase() + status.slice(1)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
    ))
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5" />
            {isRTL ? "تقييماتي" : "My Reviews"}
          </CardTitle>
          <CardDescription>
            {isRTL ? "تقييماتك للمنتجات المشتراة" : "Your reviews for purchased products"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {reviews.map((review, index) => (
              <div key={review.id}>
                <div className="flex items-start gap-4">
                  <Image
                    src={review.productImage || "/placeholder.svg"}
                    alt={review.productName}
                    width={80}
                    height={80}
                    className="rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold">{review.productName}</h3>
                        <p className="text-sm text-muted-foreground">
                          {isRTL ? "طلب رقم" : "Order"} #{review.orderId}
                        </p>
                      </div>
                      <Badge className={getStatusColor(review.status)}>
                        {getStatusIcon(review.status)}
                        <span className="ml-1">{getStatusText(review.status)}</span>
                      </Badge>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex">{renderStars(review.rating)}</div>
                      <span className="text-sm text-muted-foreground">
                        {review.rating}/5 {isRTL ? "نجوم" : "stars"}
                      </span>
                    </div>

                    <p className="text-sm mb-3">{review.comment}</p>

                    <p className="text-xs text-muted-foreground">
                      {isRTL ? "تم النشر في" : "Posted on"}: {new Date(review.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                {index < reviews.length - 1 && <Separator className="mt-6" />}
              </div>
            ))}
          </div>

          {reviews.length === 0 && (
            <div className="text-center py-8">
              <Star className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">{isRTL ? "لا توجد تقييمات بعد" : "No reviews yet"}</p>
              <p className="text-sm text-muted-foreground mt-2">
                {isRTL ? "يمكنك تقييم المنتجات بعد شرائها" : "You can review products after purchasing them"}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
