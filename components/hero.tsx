"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, Zap, Headphones } from "lucide-react"
import { useRTL } from "@/components/rtl-provider"

export function Hero() {
  const { isRTL } = useRTL()

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/5 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <Badge variant="secondary" className="mb-6 px-4 py-2">
            <Zap className="mr-2 h-4 w-4" />
            {isRTL ? "خدمة فاخرة | تطوير لوا" : "Luxury Service | Lua Development"}
          </Badge>

          {/* Main Heading */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance font-space-grotesk lg:text-6xl">
            {isRTL ? (
              <>
                سكربتات متميزة، مودات حصرية،
                <br />
                <span className="text-accent">وواجهة عصرية لخادمك</span>
              </>
            ) : (
              <>
                Premium Scripts, Exclusive Mods,
                <br />
                <span className="text-accent">And Modern UI For Your Server</span>
              </>
            )}
          </h1>

          {/* Description */}
          <p className="mb-8 text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            {isRTL
              ? "كود نظيف ومحسن، حماية متقدمة ضد الغش، دعم سريع وتسليم احترافي"
              : "Clean & Optimized Code, Advanced Anti-Cheat, Fast Support & Pro Delivery"}
          </p>

          {/* Features */}
          <div className="mb-10 flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-accent" />
              <span>{isRTL ? "كود نظيف ومحسن" : "Clean & Optimized Code"}</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-accent" />
              <span>{isRTL ? "حماية متقدمة ضد الغش" : "Advanced Anti-Cheat"}</span>
            </div>
            <div className="flex items-center gap-2">
              <Headphones className="h-4 w-4 text-accent" />
              <span>{isRTL ? "دعم سريع وتسليم احترافي" : "Fast Support & Pro Delivery"}</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              {isRTL ? "تصفح السكربتات" : "Browse Scripts"}
              <ArrowRight className={`ml-2 h-5 w-5 ${isRTL ? "rtl:rotate-180" : ""}`} />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
              {isRTL ? "انضم إلى Discord" : "Join Discord"}
            </Button>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      </div>
    </section>
  )
}
