"use client"

import Link from "next/link"
import { useRTL } from "@/components/rtl-provider"

export function Footer() {
  const { isRTL } = useRTL()

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center">
                <span className="text-white font-bold text-sm">LS</span>
              </div>
              <div>
                <h3 className="font-space-grotesk font-bold">Luxury Service</h3>
                <p className="text-xs text-muted-foreground">Lua Development</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              {isRTL
                ? "سكربتات متميزة، مودات حصرية، وواجهة عصرية لخادمك"
                : "Premium Scripts, Exclusive Mods, And Modern UI For Your Server"}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{isRTL ? "روابط سريعة" : "Quick Links"}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  {isRTL ? "الرئيسية" : "Home"}
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-foreground transition-colors">
                  {isRTL ? "السكربتات" : "Scripts"}
                </Link>
              </li>
              <li>
                <Link href="/profile" className="text-muted-foreground hover:text-foreground transition-colors">
                  {isRTL ? "الملف الشخصي" : "Profile"}
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-muted-foreground hover:text-foreground transition-colors">
                  {isRTL ? "الدعم" : "Support"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">{isRTL ? "التصنيفات" : "Categories"}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/category/protection"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {isRTL ? "الحماية" : "Protection"}
                </Link>
              </li>
              <li>
                <Link
                  href="/category/roleplay"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {isRTL ? "لعب الأدوار" : "Roleplay"}
                </Link>
              </li>
              <li>
                <Link
                  href="/category/economy"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {isRTL ? "الاقتصاد" : "Economy"}
                </Link>
              </li>
              <li>
                <Link
                  href="/category/administration"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {isRTL ? "الإدارة" : "Administration"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">{isRTL ? "قانوني" : "Legal"}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  {isRTL ? "سياسة الخصوصية" : "Privacy Policy"}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  {isRTL ? "شروط الخدمة" : "Terms of Service"}
                </Link>
              </li>
              <li>
                <Link href="/refund" className="text-muted-foreground hover:text-foreground transition-colors">
                  {isRTL ? "سياسة الإرجاع" : "Refund Policy"}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">{isRTL ? "تطوير بواسطة Bebo" : "Developer By Bebo"}</p>
          <p className="text-sm text-muted-foreground">
            © 2024 Luxury Service. {isRTL ? "جميع الحقوق محفوظة" : "All rights reserved"}.
          </p>
        </div>
      </div>
    </footer>
  )
}
