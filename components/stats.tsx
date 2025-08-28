"use client"

import { Users, Star, Package } from "lucide-react"
import { useRTL } from "@/components/rtl-provider"

export function Stats() {
  const { isRTL } = useRTL()

  const stats = [
    {
      icon: Users,
      value: "2,500+",
      label: isRTL ? "عميل راضي" : "Happy Customers",
    },
    {
      icon: Star,
      value: "4.9/5",
      label: isRTL ? "تقييم العملاء" : "Customer Rating",
    },
    {
      icon: Package,
      value: "150+",
      label: isRTL ? "سكربت متاح" : "Available Scripts",
    },
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                <stat.icon className="h-8 w-8 text-accent" />
              </div>
              <div className="text-3xl font-bold font-space-grotesk mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
