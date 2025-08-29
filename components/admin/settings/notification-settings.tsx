"use client"

import { useState } from "react"
import { Bell, Mail } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export function NotificationSettings() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    orderNotifications: true,
    userRegistrationNotifications: true,
    lowStockAlerts: true,
    smtpHost: "",
    smtpPort: "587",
    smtpUser: "",
    smtpPassword: "",
    fromEmail: "noreply@luxuryservice.com",
    fromName: "Luxury Service",
  })

  const handleChange = (field: string, value: string | boolean) => {
    setSettings(prev => ({ ...prev, [field]: value }))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bell className="h-5 w-5" />
          Notification Settings
        </CardTitle>
        <CardDescription>Configure email and notification preferences</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Email Notifications</h4>
              <p className="text-sm text-muted-foreground">Send email notifications to users</p>
            </div>
            <Switch
              checked={settings.emailNotifications}
              onCheckedChange={(checked) => handleChange("emailNotifications", checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Order Notifications</h4>
              <p className="text-sm text-muted-foreground">Notify admins about new orders</p>
            </div>
            <Switch
              checked={settings.orderNotifications}
              onCheckedChange={(checked) => handleChange("orderNotifications", checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">User Registration Notifications</h4>
              <p className="text-sm text-muted-foreground">Notify admins about new user registrations</p>
            </div>
            <Switch
              checked={settings.userRegistrationNotifications}
              onCheckedChange={(checked) => handleChange("userRegistrationNotifications", checked)}
            />
          </div>
        </div>

        {settings.emailNotifications && (
          <div className="space-y-4 border-t pt-6">
            <h4 className="font-medium flex items-center gap-2">
              <Mail className="h-4 w-4" />
              SMTP Configuration
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="smtpHost">SMTP Host</Label>
                <Input
                  id="smtpHost"
                  value={settings.smtpHost}
                  onChange={(e) => handleChange("smtpHost", e.target.value)}
                  placeholder="smtp.gmail.com"
                />
              </div>
              <div>
                <Label htmlFor="smtpPort">SMTP Port</Label>
                <Input
                  id="smtpPort"
                  type="number"
                  value={settings.smtpPort}
                  onChange={(e) => handleChange("smtpPort", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="smtpUser">SMTP Username</Label>
                <Input
                  id="smtpUser"
                  value={settings.smtpUser}
                  onChange={(e) => handleChange("smtpUser", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="smtpPassword">SMTP Password</Label>
                <Input
                  id="smtpPassword"
                  type="password"
                  value={settings.smtpPassword}
                  onChange={(e) => handleChange("smtpPassword", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="fromEmail">From Email</Label>
                <Input
                  id="fromEmail"
                  type="email"
                  value={settings.fromEmail}
                  onChange={(e) => handleChange("fromEmail", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="fromName">From Name</Label>
                <Input
                  id="fromName"
                  value={settings.fromName}
                  onChange={(e) => handleChange("fromName", e.target.value)}
                />
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}