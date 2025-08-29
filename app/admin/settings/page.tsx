import { SettingsHeader } from "@/components/admin/settings/settings-header"
import { GeneralSettings } from "@/components/admin/settings/general-settings"
import { SecuritySettings } from "@/components/admin/settings/security-settings"
import { PaymentSettings } from "@/components/admin/settings/payment-settings"
import { NotificationSettings } from "@/components/admin/settings/notification-settings"

export default function AdminSettingsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <SettingsHeader />
        <div className="space-y-8">
          <GeneralSettings />
          <SecuritySettings />
          <PaymentSettings />
          <NotificationSettings />
        </div>
      </div>
    </div>
  )
}