"use client"

import { useState } from "react"
import { User, Lock, Bell, Shield } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { useRTL } from "@/components/rtl-provider"

export function SettingsTab() {
  const { isRTL } = useRTL()
  const [settings, setSettings] = useState({
    name: "Ahmed Hassan",
    email: "ahmed@example.com",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    emailNotifications: true,
    orderUpdates: true,
    promotionalEmails: false,
    twoFactorEnabled: false,
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setSettings((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="space-y-6">
      {/* Profile Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            {isRTL ? "معلومات الملف الشخصي" : "Profile Information"}
          </CardTitle>
          <CardDescription>{isRTL ? "تحديث معلوماتك الشخصية" : "Update your personal information"}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">{isRTL ? "الاسم الكامل" : "Full Name"}</Label>
              <Input id="name" value={settings.name} onChange={(e) => handleInputChange("name", e.target.value)} />
            </div>
            <div>
              <Label htmlFor="email">{isRTL ? "البريد الإلكتروني" : "Email Address"}</Label>
              <Input
                id="email"
                type="email"
                value={settings.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
            </div>
          </div>
          <Button>{isRTL ? "حفظ التغييرات" : "Save Changes"}</Button>
        </CardContent>
      </Card>

      {/* Password & Security */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lock className="h-5 w-5" />
            {isRTL ? "كلمة المرور والأمان" : "Password & Security"}
          </CardTitle>
          <CardDescription>
            {isRTL ? "إدارة كلمة المرور وإعدادات الأمان" : "Manage your password and security settings"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="current-password">{isRTL ? "كلمة المرور الحالية" : "Current Password"}</Label>
            <Input
              id="current-password"
              type="password"
              value={settings.currentPassword}
              onChange={(e) => handleInputChange("currentPassword", e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="new-password">{isRTL ? "كلمة المرور الجديدة" : "New Password"}</Label>
              <Input
                id="new-password"
                type="password"
                value={settings.newPassword}
                onChange={(e) => handleInputChange("newPassword", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="confirm-password">{isRTL ? "تأكيد كلمة المرور" : "Confirm Password"}</Label>
              <Input
                id="confirm-password"
                type="password"
                value={settings.confirmPassword}
                onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
              />
            </div>
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">{isRTL ? "المصادقة الثنائية" : "Two-Factor Authentication"}</h4>
              <p className="text-sm text-muted-foreground">
                {isRTL ? "أضف طبقة حماية إضافية لحسابك" : "Add an extra layer of security to your account"}
              </p>
            </div>
            <Switch
              checked={settings.twoFactorEnabled}
              onCheckedChange={(checked) => handleInputChange("twoFactorEnabled", checked)}
            />
          </div>

          <Button>{isRTL ? "تحديث كلمة المرور" : "Update Password"}</Button>
        </CardContent>
      </Card>

      {/* Notification Preferences */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            {isRTL ? "تفضيلات الإشعارات" : "Notification Preferences"}
          </CardTitle>
          <CardDescription>
            {isRTL ? "اختر كيف تريد أن نتواصل معك" : "Choose how you want us to communicate with you"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">{isRTL ? "إشعارات البريد الإلكتروني" : "Email Notifications"}</h4>
              <p className="text-sm text-muted-foreground">
                {isRTL ? "تلقي إشعارات عامة عبر البريد الإلكتروني" : "Receive general email notifications"}
              </p>
            </div>
            <Switch
              checked={settings.emailNotifications}
              onCheckedChange={(checked) => handleInputChange("emailNotifications", checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">{isRTL ? "تحديثات الطلبات" : "Order Updates"}</h4>
              <p className="text-sm text-muted-foreground">
                {isRTL ? "تلقي إشعارات حول حالة طلباتك" : "Get notified about your order status"}
              </p>
            </div>
            <Switch
              checked={settings.orderUpdates}
              onCheckedChange={(checked) => handleInputChange("orderUpdates", checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">{isRTL ? "رسائل ترويجية" : "Promotional Emails"}</h4>
              <p className="text-sm text-muted-foreground">
                {isRTL ? "تلقي عروض خاصة وأخبار المنتجات" : "Receive special offers and product news"}
              </p>
            </div>
            <Switch
              checked={settings.promotionalEmails}
              onCheckedChange={(checked) => handleInputChange("promotionalEmails", checked)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Account Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            {isRTL ? "إجراءات الحساب" : "Account Actions"}
          </CardTitle>
          <CardDescription>
            {isRTL ? "إجراءات مهمة متعلقة بحسابك" : "Important actions related to your account"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-destructive/20 rounded-lg">
            <div>
              <h4 className="font-medium text-destructive">{isRTL ? "حذف الحساب" : "Delete Account"}</h4>
              <p className="text-sm text-muted-foreground">
                {isRTL
                  ? "حذف حسابك نهائياً وجميع البيانات المرتبطة به"
                  : "Permanently delete your account and all associated data"}
              </p>
            </div>
            <Button variant="destructive" size="sm">
              {isRTL ? "حذف الحساب" : "Delete Account"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
