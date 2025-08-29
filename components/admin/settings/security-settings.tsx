"use client"

import { useState } from "react"
import { Shield, Key, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function SecuritySettings() {
  const [settings, setSettings] = useState({
    sessionTimeout: "24",
    maxLoginAttempts: "5",
    lockoutDuration: "30",
    requireTwoFactor: false,
    allowPasswordReset: true,
    strongPasswordPolicy: true,
  })

  const handleChange = (field: string, value: string | boolean) => {
    setSettings(prev => ({ ...prev, [field]: value }))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5" />
          Security Settings
        </CardTitle>
        <CardDescription>Configure security and authentication settings</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="sessionTimeout">Session Timeout (hours)</Label>
            <Input
              id="sessionTimeout"
              type="number"
              value={settings.sessionTimeout}
              onChange={(e) => handleChange("sessionTimeout", e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="maxLoginAttempts">Max Login Attempts</Label>
            <Input
              id="maxLoginAttempts"
              type="number"
              value={settings.maxLoginAttempts}
              onChange={(e) => handleChange("maxLoginAttempts", e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="lockoutDuration">Lockout Duration (minutes)</Label>
            <Input
              id="lockoutDuration"
              type="number"
              value={settings.lockoutDuration}
              onChange={(e) => handleChange("lockoutDuration", e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Require Two-Factor Authentication</h4>
              <p className="text-sm text-muted-foreground">Force all users to enable 2FA</p>
            </div>
            <Switch
              checked={settings.requireTwoFactor}
              onCheckedChange={(checked) => handleChange("requireTwoFactor", checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Allow Password Reset</h4>
              <p className="text-sm text-muted-foreground">Enable password reset via email</p>
            </div>
            <Switch
              checked={settings.allowPasswordReset}
              onCheckedChange={(checked) => handleChange("allowPasswordReset", checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Strong Password Policy</h4>
              <p className="text-sm text-muted-foreground">Enforce strong password requirements</p>
            </div>
            <Switch
              checked={settings.strongPasswordPolicy}
              onCheckedChange={(checked) => handleChange("strongPasswordPolicy", checked)}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}