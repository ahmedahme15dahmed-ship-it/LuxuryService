"use client"

import { useState } from "react"
import Image from "next/image"
import { Camera, Edit, Shield, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { useRTL } from "@/components/rtl-provider"

export function ProfileHeader() {
  const { isRTL } = useRTL()
  const [user] = useState({
    id: "1",
    name: "Ahmed Hassan",
    email: "ahmed@example.com",
    avatar: "/professional-avatar.png",
    balance: 125.5,
    points: 2450,
    level: "Gold" as const,
    isBlocked: false,
    createdAt: "2023-01-15",
    lastLogin: "2024-01-20T10:30:00Z",
    referralCode: "AHMED2024",
  })

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Bronze":
        return "bg-amber-600"
      case "Silver":
        return "bg-gray-400"
      case "Gold":
        return "bg-yellow-500"
      default:
        return "bg-gray-400"
    }
  }

  const getLevelIcon = (level: string) => {
    switch (level) {
      case "Gold":
        return Crown
      default:
        return Shield
    }
  }

  const LevelIcon = getLevelIcon(user.level)

  return (
    <Card className="mb-8">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Avatar Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="relative group">
              <Image
                src={user.avatar || "/placeholder.svg"}
                alt={user.name}
                width={120}
                height={120}
                className="rounded-full border-4 border-accent/20"
              />
              <Button
                size="icon"
                variant="secondary"
                className="absolute bottom-0 right-0 rounded-full h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Camera className="h-4 w-4" />
              </Button>
            </div>

            {/* Level Badge */}
            <Badge className={`mt-3 ${getLevelColor(user.level)} text-white`}>
              <LevelIcon className="h-3 w-3 mr-1" />
              {user.level} {isRTL ? "عضو" : "Member"}
            </Badge>
          </div>

          {/* User Info */}
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h1 className="text-2xl font-bold font-space-grotesk mb-1">{user.name}</h1>
                <p className="text-muted-foreground mb-2">{user.email}</p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span>
                    {isRTL ? "عضو منذ" : "Member since"}: {new Date(user.createdAt).toLocaleDateString()}
                  </span>
                  <span>
                    {isRTL ? "آخر دخول" : "Last login"}: {new Date(user.lastLogin).toLocaleDateString()}
                  </span>
                </div>
              </div>
              <Button variant="outline" className="mt-4 md:mt-0 bg-transparent">
                <Edit className="h-4 w-4 mr-2" />
                {isRTL ? "تعديل الملف الشخصي" : "Edit Profile"}
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-muted/30 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">${user.balance.toFixed(2)}</div>
                <div className="text-sm text-muted-foreground">{isRTL ? "رصيد المحفظة" : "Wallet Balance"}</div>
              </div>

              <div className="bg-muted/30 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-accent mb-1">{user.points.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">{isRTL ? "نقاط الولاء" : "Loyalty Points"}</div>
              </div>

              <div className="bg-muted/30 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-primary mb-1">{user.referralCode}</div>
                <div className="text-sm text-muted-foreground">{isRTL ? "كود الإحالة" : "Referral Code"}</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
