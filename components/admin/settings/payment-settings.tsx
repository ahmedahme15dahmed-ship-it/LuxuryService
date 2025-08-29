"use client"

import { useState } from "react"
import { CreditCard, DollarSign } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export function PaymentSettings() {
  const [settings, setSettings] = useState({
    taxRate: "0",
    shippingFee: "0",
    enableWallet: true,
    minDeposit: "10",
    maxDeposit: "1000",
    minWithdraw: "5",
    maxWithdraw: "500",
  })

  const handleChange = (field: string, value: string | boolean) => {
    setSettings(prev => ({ ...prev, [field]: value }))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CreditCard className="h-5 w-5" />
          Payment Settings
        </CardTitle>
        <CardDescription>Configure payment and billing options</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="taxRate">Tax Rate (%)</Label>
            <Input
              id="taxRate"
              type="number"
              step="0.01"
              value={settings.taxRate}
              onChange={(e) => handleChange("taxRate", e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="shippingFee">Shipping Fee ($)</Label>
            <Input
              id="shippingFee"
              type="number"
              step="0.01"
              value={settings.shippingFee}
              onChange={(e) => handleChange("shippingFee", e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium">Enable Wallet System</h4>
            <p className="text-sm text-muted-foreground">Allow users to deposit and withdraw funds</p>
          </div>
          <Switch
            checked={settings.enableWallet}
            onCheckedChange={(checked) => handleChange("enableWallet", checked)}
          />
        </div>

        {settings.enableWallet && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="minDeposit">Minimum Deposit ($)</Label>
              <Input
                id="minDeposit"
                type="number"
                value={settings.minDeposit}
                onChange={(e) => handleChange("minDeposit", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="maxDeposit">Maximum Deposit ($)</Label>
              <Input
                id="maxDeposit"
                type="number"
                value={settings.maxDeposit}
                onChange={(e) => handleChange("maxDeposit", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="minWithdraw">Minimum Withdrawal ($)</Label>
              <Input
                id="minWithdraw"
                type="number"
                value={settings.minWithdraw}
                onChange={(e) => handleChange("minWithdraw", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="maxWithdraw">Maximum Withdrawal ($)</Label>
              <Input
                id="maxWithdraw"
                type="number"
                value={settings.maxWithdraw}
                onChange={(e) => handleChange("maxWithdraw", e.target.value)}
              />
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}