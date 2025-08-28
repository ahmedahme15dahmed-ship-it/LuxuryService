"use client"

import { Crown, Gift, Star, TrendingUp } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useRTL } from "@/components/rtl-provider"

export function PointsTab() {
  const { isRTL } = useRTL()

  const currentPoints = 2450
  const currentLevel = "Gold"
  const nextLevel = "Platinum"
  const pointsToNextLevel = 550
  const totalPointsForNextLevel = 3000

  const pointsHistory = [
    {
      id: "1",
      type: "earned",
      points: 50,
      description: "Purchase: Advanced Anti-Cheat System",
      date: "2024-01-20T10:30:00Z",
    },
    {
      id: "2",
      type: "redeemed",
      points: -100,
      description: "Redeemed for $5 discount",
      date: "2024-01-19T15:45:00Z",
    },
    {
      id: "3",
      type: "earned",
      points: 80,
      description: "Purchase: Luxury Car Dealership",
      date: "2024-01-18T09:20:00Z",
    },
    {
      id: "4",
      type: "bonus",
      points: 200,
      description: "Level up bonus - Gold Member",
      date: "2024-01-15T14:10:00Z",
    },
  ]

  const rewardTiers = [
    { points: 100, reward: "$2 Discount", available: true },
    { points: 250, reward: "$5 Discount", available: true },
    { points: 500, reward: "$10 Discount", available: true },
    { points: 1000, reward: "$25 Discount", available: true },
    { points: 2000, reward: "$50 Discount", available: true },
    { points: 5000, reward: "$100 Discount", available: false },
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Bronze":
        return "text-amber-600"
      case "Silver":
        return "text-gray-400"
      case "Gold":
        return "text-yellow-500"
      case "Platinum":
        return "text-purple-500"
      default:
        return "text-gray-400"
    }
  }

  const progressPercentage = ((totalPointsForNextLevel - pointsToNextLevel) / totalPointsForNextLevel) * 100

  return (
    <div className="space-y-6">
      {/* Points Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5" />
            {isRTL ? "نقاط الولاء" : "Loyalty Points"}
          </CardTitle>
          <CardDescription>
            {isRTL ? "اكسب نقاط واستبدلها بخصومات" : "Earn points and redeem for discounts"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center mb-6">
            <div className="text-4xl font-bold text-accent mb-2">{currentPoints.toLocaleString()}</div>
            <Badge className={`${getLevelColor(currentLevel)} bg-transparent border-current`}>
              <Crown className="h-3 w-3 mr-1" />
              {currentLevel} {isRTL ? "عضو" : "Member"}
            </Badge>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span>
                {isRTL ? "التقدم إلى" : "Progress to"} {nextLevel}
              </span>
              <span>
                {pointsToNextLevel} {isRTL ? "نقطة متبقية" : "points to go"}
              </span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
            <p className="text-xs text-muted-foreground text-center">
              {isRTL ? "اكسب نقاط مع كل عملية شراء" : "Earn points with every purchase"}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Redeem Points */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Gift className="h-5 w-5" />
            {isRTL ? "استبدال النقاط" : "Redeem Points"}
          </CardTitle>
          <CardDescription>
            {isRTL ? "استبدل نقاطك بخصومات قيمة" : "Exchange your points for valuable discounts"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {rewardTiers.map((tier, index) => (
              <div
                key={index}
                className={`border rounded-lg p-4 ${
                  tier.available && currentPoints >= tier.points
                    ? "bg-accent/5 border-accent"
                    : "bg-muted/30 border-muted"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">{tier.reward}</span>
                  <Badge variant={tier.available && currentPoints >= tier.points ? "default" : "secondary"}>
                    {tier.points} {isRTL ? "نقطة" : "pts"}
                  </Badge>
                </div>
                <Button size="sm" className="w-full" disabled={!tier.available || currentPoints < tier.points}>
                  {isRTL ? "استبدال" : "Redeem"}
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Points History */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            {isRTL ? "سجل النقاط" : "Points History"}
          </CardTitle>
          <CardDescription>
            {isRTL ? "تتبع نقاطك المكتسبة والمستبدلة" : "Track your earned and redeemed points"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {pointsHistory.map((entry, index) => (
              <div key={entry.id}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{entry.description}</p>
                    <p className="text-sm text-muted-foreground">{new Date(entry.date).toLocaleDateString()}</p>
                  </div>
                  <div className={`font-semibold ${entry.points > 0 ? "text-green-600" : "text-red-600"}`}>
                    {entry.points > 0 ? "+" : ""}
                    {entry.points} {isRTL ? "نقطة" : "pts"}
                  </div>
                </div>
                {index < pointsHistory.length - 1 && <Separator className="mt-4" />}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
