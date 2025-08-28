"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { WalletTab } from "./wallet-tab"
import { OrdersTab } from "./orders-tab"
import { ReviewsTab } from "./reviews-tab"
import { CouponsTab } from "./coupons-tab"
import { PointsTab } from "./points-tab"
import { ReferralTab } from "./referral-tab"
import { NotificationsTab } from "./notifications-tab"
import { SettingsTab } from "./settings-tab"
import { useRTL } from "@/components/rtl-provider"

export function ProfileTabs() {
  const { isRTL } = useRTL()

  return (
    <Tabs defaultValue="wallet" className="w-full">
      <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8">
        <TabsTrigger value="wallet">{isRTL ? "المحفظة" : "Wallet"}</TabsTrigger>
        <TabsTrigger value="orders">{isRTL ? "طلباتي" : "Orders"}</TabsTrigger>
        <TabsTrigger value="reviews">{isRTL ? "تقييماتي" : "Reviews"}</TabsTrigger>
        <TabsTrigger value="coupons">{isRTL ? "الكوبونات" : "Coupons"}</TabsTrigger>
        <TabsTrigger value="points">{isRTL ? "النقاط" : "Points"}</TabsTrigger>
        <TabsTrigger value="referral">{isRTL ? "الإحالة" : "Referral"}</TabsTrigger>
        <TabsTrigger value="notifications">{isRTL ? "الإشعارات" : "Notifications"}</TabsTrigger>
        <TabsTrigger value="settings">{isRTL ? "الإعدادات" : "Settings"}</TabsTrigger>
      </TabsList>

      <TabsContent value="wallet" className="mt-6">
        <WalletTab />
      </TabsContent>

      <TabsContent value="orders" className="mt-6">
        <OrdersTab />
      </TabsContent>

      <TabsContent value="reviews" className="mt-6">
        <ReviewsTab />
      </TabsContent>

      <TabsContent value="coupons" className="mt-6">
        <CouponsTab />
      </TabsContent>

      <TabsContent value="points" className="mt-6">
        <PointsTab />
      </TabsContent>

      <TabsContent value="referral" className="mt-6">
        <ReferralTab />
      </TabsContent>

      <TabsContent value="notifications" className="mt-6">
        <NotificationsTab />
      </TabsContent>

      <TabsContent value="settings" className="mt-6">
        <SettingsTab />
      </TabsContent>
    </Tabs>
  )
}
