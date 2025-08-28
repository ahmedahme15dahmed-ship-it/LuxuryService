"use client"

import { Copy, Gift, Calendar, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useRTL } from "@/components/rtl-provider"
import { toast } from "@/hooks/use-toast"

export function CouponsTab() {
  const { isRTL } = useRTL()

  const availableCoupons = [
    {
      id: "1",
      code: "WELCOME20",
      type: "percentage",
      value: 20,
      minAmount: 25,
      expiresAt: "2024-02-28T23:59:59Z",
      description: "Welcome bonus for new customers",
    },
    {
      id: "2",
      code: "GOLD50",
      type: "fixed",
      value: 50,
      minAmount: 100,
      expiresAt: "2024-03-15T23:59:59Z",
      description: "Exclusive Gold member discount",
    },
  ]

  const usedCoupons = [
    {
      id: "3",
      code: "SUMMER15",
      type: "percentage",
      value: 15,
      usedAt: "2024-01-15T10:30:00Z",
      orderId: "ORD-001",
      savedAmount: 6.0,
    },
    {
      id: "4",
      code: "NEWUSER",
      type: "fixed",
      value: 10,
      usedAt: "2024-01-10T14:20:00Z",
      orderId: "ORD-002",
      savedAmount: 10.0,
    },
  ]

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code)
    toast({
      title: isRTL ? "تم النسخ!" : "Copied!",
      description: isRTL ? `تم نسخ الكود ${code}` : `Coupon code ${code} copied to clipboard`,
    })
  }

  const formatDiscount = (type: string, value: number) => {
    return type === "percentage" ? `${value}%` : `$${value}`
  }

  return (
    <div className="space-y-6">
      {/* Available Coupons */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Gift className="h-5 w-5" />
            {isRTL ? "الكوبونات المتاحة" : "Available Coupons"}
          </CardTitle>
          <CardDescription>{isRTL ? "الكوبونات التي يمكنك استخدامها" : "Coupons you can use"}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {availableCoupons.map((coupon) => (
              <div key={coupon.id} className="border rounded-lg p-4 bg-gradient-to-r from-accent/5 to-accent/10">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-accent text-accent-foreground px-3 py-1 rounded-md font-mono font-bold">
                      {coupon.code}
                    </div>
                    <Badge variant="secondary">
                      {formatDiscount(coupon.type, coupon.value)} {isRTL ? "خصم" : "OFF"}
                    </Badge>
                  </div>
                  <Button size="sm" variant="outline" onClick={() => copyToClipboard(coupon.code)}>
                    <Copy className="h-4 w-4 mr-2" />
                    {isRTL ? "نسخ" : "Copy"}
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground mb-2">{coupon.description}</p>

                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>
                      {isRTL ? "ينتهي في" : "Expires"}: {new Date(coupon.expiresAt).toLocaleDateString()}
                    </span>
                  </div>
                  {coupon.minAmount && (
                    <div>
                      {isRTL ? "الحد الأدنى" : "Min"}: ${coupon.minAmount}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {availableCoupons.length === 0 && (
            <div className="text-center py-8">
              <Gift className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">{isRTL ? "لا توجد كوبونات متاحة" : "No available coupons"}</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Used Coupons */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            {isRTL ? "الكوبونات المستخدمة" : "Used Coupons"}
          </CardTitle>
          <CardDescription>{isRTL ? "سجل الكوبونات التي استخدمتها" : "History of coupons you've used"}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {usedCoupons.map((coupon, index) => (
              <div key={coupon.id}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-muted px-3 py-1 rounded-md font-mono text-sm">{coupon.code}</div>
                    <div>
                      <p className="text-sm">
                        {isRTL ? "طلب رقم" : "Order"} #{coupon.orderId}
                      </p>
                      <p className="text-xs text-muted-foreground">{new Date(coupon.usedAt).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-green-600">-{formatDiscount(coupon.type, coupon.value)}</p>
                    <p className="text-xs text-muted-foreground">
                      {isRTL ? "وفرت" : "Saved"} ${coupon.savedAmount.toFixed(2)}
                    </p>
                  </div>
                </div>
                {index < usedCoupons.length - 1 && <Separator className="mt-4" />}
              </div>
            ))}
          </div>

          {usedCoupons.length === 0 && (
            <div className="text-center py-8">
              <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">{isRTL ? "لم تستخدم أي كوبونات بعد" : "No coupons used yet"}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
