"use client"

import { useState } from "react"
import { Plus, Minus, CreditCard, DollarSign, TrendingUp, TrendingDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useRTL } from "@/components/rtl-provider"

export function WalletTab() {
  const { isRTL } = useRTL()
  const [depositAmount, setDepositAmount] = useState("")
  const [withdrawAmount, setWithdrawAmount] = useState("")

  const balance = 125.5
  const transactions = [
    {
      id: "1",
      type: "deposit",
      amount: 50.0,
      status: "completed",
      date: "2024-01-20T10:30:00Z",
      description: "PayPal Deposit",
    },
    {
      id: "2",
      type: "purchase",
      amount: -29.99,
      status: "completed",
      date: "2024-01-19T15:45:00Z",
      description: "Advanced Anti-Cheat System",
    },
    {
      id: "3",
      type: "refund",
      amount: 39.99,
      status: "completed",
      date: "2024-01-18T09:20:00Z",
      description: "Order #12345 Refund",
    },
    {
      id: "4",
      type: "withdrawal",
      amount: -25.0,
      status: "pending",
      date: "2024-01-17T14:10:00Z",
      description: "Bank Transfer",
    },
    {
      id: "5",
      type: "deposit",
      amount: 100.0,
      status: "completed",
      date: "2024-01-15T11:00:00Z",
      description: "Credit Card Deposit",
    },
  ]

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case "deposit":
      case "refund":
        return <TrendingUp className="h-4 w-4 text-green-600" />
      case "purchase":
      case "withdrawal":
        return <TrendingDown className="h-4 w-4 text-red-600" />
      default:
        return <DollarSign className="h-4 w-4" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "failed":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  return (
    <div className="space-y-6">
      {/* Balance Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            {isRTL ? "رصيد المحفظة" : "Wallet Balance"}
          </CardTitle>
          <CardDescription>
            {isRTL ? "إدارة رصيدك وتتبع المعاملات" : "Manage your balance and track transactions"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center mb-6">
            <div className="text-4xl font-bold text-green-600 mb-2">${balance.toFixed(2)}</div>
            <p className="text-muted-foreground">{isRTL ? "الرصيد المتاح" : "Available Balance"}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Deposit */}
            <div className="space-y-3">
              <Label htmlFor="deposit">{isRTL ? "إيداع" : "Deposit"}</Label>
              <div className="flex gap-2">
                <Input
                  id="deposit"
                  type="number"
                  placeholder="0.00"
                  value={depositAmount}
                  onChange={(e) => setDepositAmount(e.target.value)}
                />
                <Button className="shrink-0">
                  <Plus className="h-4 w-4 mr-2" />
                  {isRTL ? "إيداع" : "Deposit"}
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">{isRTL ? "الحد الأدنى: $10.00" : "Minimum: $10.00"}</p>
            </div>

            {/* Withdraw */}
            <div className="space-y-3">
              <Label htmlFor="withdraw">{isRTL ? "سحب" : "Withdraw"}</Label>
              <div className="flex gap-2">
                <Input
                  id="withdraw"
                  type="number"
                  placeholder="0.00"
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(e.target.value)}
                />
                <Button variant="outline" className="shrink-0 bg-transparent">
                  <Minus className="h-4 w-4 mr-2" />
                  {isRTL ? "سحب" : "Withdraw"}
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">{isRTL ? "الحد الأدنى: $5.00" : "Minimum: $5.00"}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Transaction History */}
      <Card>
        <CardHeader>
          <CardTitle>{isRTL ? "سجل المعاملات" : "Transaction History"}</CardTitle>
          <CardDescription>
            {isRTL ? "تتبع جميع معاملاتك المالية" : "Track all your financial transactions"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {transactions.map((transaction, index) => (
              <div key={transaction.id}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {getTransactionIcon(transaction.type)}
                    <div>
                      <p className="font-medium">{transaction.description}</p>
                      <p className="text-sm text-muted-foreground">
                        {new Date(transaction.date).toLocaleDateString()}{" "}
                        {new Date(transaction.date).toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`font-semibold ${transaction.amount > 0 ? "text-green-600" : "text-red-600"}`}>
                      {transaction.amount > 0 ? "+" : ""}${Math.abs(transaction.amount).toFixed(2)}
                    </div>
                    <Badge className={getStatusColor(transaction.status)}>
                      {isRTL
                        ? transaction.status === "completed"
                          ? "مكتمل"
                          : transaction.status === "pending"
                            ? "قيد الانتظار"
                            : "فاشل"
                        : transaction.status}
                    </Badge>
                  </div>
                </div>
                {index < transactions.length - 1 && <Separator className="mt-4" />}
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Button variant="outline">{isRTL ? "تحميل المزيد" : "Load More"}</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
