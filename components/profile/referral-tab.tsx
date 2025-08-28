"use client"
import { Copy, Users, Gift, Share2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { useRTL } from "@/components/rtl-provider"
import { toast } from "@/hooks/use-toast"

export function ReferralTab() {
  const { isRTL } = useRTL()

  const referralCode = "AHMED2024"
  const referralUrl = `https://luxuryservice.com/ref/${referralCode}`
  const totalReferrals = 12
  const totalEarnings = 180.0

  const referrals = [
    {
      id: "1",
      name: "Mohammed Ali",
      joinDate: "2024-01-18T10:30:00Z",
      status: "active",
      earnings: 25.0,
    },
    {
      id: "2",
      name: "Sarah Ahmed",
      joinDate: "2024-01-15T14:20:00Z",
      status: "active",
      earnings: 35.0,
    },
    {
      id: "3",
      name: "Omar Hassan",
      joinDate: "2024-01-12T09:45:00Z",
      status: "active",
      earnings: 20.0,
    },
    {
      id: "4",
      name: "Fatima Nour",
      joinDate: "2024-01-10T16:15:00Z",
      status: "pending",
      earnings: 0.0,
    },
  ]

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    toast({
      title: isRTL ? "تم النسخ!" : "Copied!",
      description: isRTL ? `تم نسخ ${type}` : `${type} copied to clipboard`,
    })
  }

  return (
    <div className="space-y-6">
      {/* Referral Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Share2 className="h-5 w-5" />
            {isRTL ? "برنامج الإحالة" : "Referral Program"}
          </CardTitle>
          <CardDescription>
            {isRTL ? "ادع أصدقاءك واكسب عمولة من مشترياتهم" : "Invite friends and earn commission from their purchases"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="text-2xl font-bold text-accent mb-1">{totalReferrals}</div>
              <div className="text-sm text-muted-foreground">{isRTL ? "إجمالي الإحالات" : "Total Referrals"}</div>
            </div>
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="text-2xl font-bold text-green-600 mb-1">${totalEarnings.toFixed(2)}</div>
              <div className="text-sm text-muted-foreground">{isRTL ? "إجمالي الأرباح" : "Total Earnings"}</div>
            </div>
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="text-2xl font-bold text-primary mb-1">15%</div>
              <div className="text-sm text-muted-foreground">{isRTL ? "نسبة العمولة" : "Commission Rate"}</div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="referral-code">{isRTL ? "كود الإحالة الخاص بك" : "Your Referral Code"}</Label>
              <div className="flex gap-2 mt-1">
                <Input id="referral-code" value={referralCode} readOnly className="font-mono" />
                <Button
                  variant="outline"
                  onClick={() => copyToClipboard(referralCode, isRTL ? "كود الإحالة" : "referral code")}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div>
              <Label htmlFor="referral-url">{isRTL ? "رابط الإحالة" : "Referral Link"}</Label>
              <div className="flex gap-2 mt-1">
                <Input id="referral-url" value={referralUrl} readOnly className="text-sm" />
                <Button
                  variant="outline"
                  onClick={() => copyToClipboard(referralUrl, isRTL ? "رابط الإحالة" : "referral link")}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* How it Works */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Gift className="h-5 w-5" />
            {isRTL ? "كيف يعمل البرنامج" : "How It Works"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-accent text-accent-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <h4 className="font-semibold mb-1">{isRTL ? "شارك رابطك" : "Share Your Link"}</h4>
                <p className="text-sm text-muted-foreground">
                  {isRTL ? "شارك كود الإحالة أو الرابط مع أصدقائك" : "Share your referral code or link with friends"}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-accent text-accent-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <h4 className="font-semibold mb-1">{isRTL ? "يسجلون ويشترون" : "They Sign Up & Purchase"}</h4>
                <p className="text-sm text-muted-foreground">
                  {isRTL ? "عندما يسجل أصدقاؤك ويشترون منتجات" : "When your friends sign up and make purchases"}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-accent text-accent-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <h4 className="font-semibold mb-1">{isRTL ? "تحصل على عمولة" : "You Earn Commission"}</h4>
                <p className="text-sm text-muted-foreground">
                  {isRTL ? "احصل على 15% عمولة من كل عملية شراء" : "Get 15% commission from every purchase they make"}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Referral History */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            {isRTL ? "المدعوون" : "Your Referrals"}
          </CardTitle>
          <CardDescription>
            {isRTL ? "قائمة الأشخاص الذين دعوتهم" : "People you've referred to our platform"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {referrals.map((referral, index) => (
              <div key={referral.id}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{referral.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {isRTL ? "انضم في" : "Joined"}: {new Date(referral.joinDate).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-green-600">${referral.earnings.toFixed(2)}</p>
                    <p className="text-sm text-muted-foreground">
                      {isRTL ? (referral.status === "active" ? "نشط" : "قيد الانتظار") : referral.status}
                    </p>
                  </div>
                </div>
                {index < referrals.length - 1 && <Separator className="mt-4" />}
              </div>
            ))}
          </div>

          {referrals.length === 0 && (
            <div className="text-center py-8">
              <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">{isRTL ? "لم تدع أحداً بعد" : "No referrals yet"}</p>
              <p className="text-sm text-muted-foreground mt-2">
                {isRTL ? "ابدأ بمشاركة رابط الإحالة الخاص بك" : "Start by sharing your referral link"}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
