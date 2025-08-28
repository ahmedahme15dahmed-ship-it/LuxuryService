"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Gift,
  Settings,
  Bell,
  FileText,
  Trash2,
  LogOut,
  Menu,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import { useState } from "react"

const navigation = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Products", href: "/admin/products", icon: Package },
  { name: "Orders", href: "/admin/orders", icon: ShoppingCart },
  { name: "Users", href: "/admin/users", icon: Users },
  { name: "Coupons", href: "/admin/coupons", icon: Gift },
  { name: "Settings", href: "/admin/settings", icon: Settings },
  { name: "Notifications", href: "/admin/notifications", icon: Bell },
  { name: "Logs", href: "/admin/logs", icon: FileText },
  { name: "Trash", href: "/admin/trash", icon: Trash2 },
]

export function AdminHeader() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/admin" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center">
              <span className="text-white font-bold text-sm">LS</span>
            </div>
            <div>
              <h1 className="font-space-grotesk font-bold text-lg">Admin Panel</h1>
              <p className="text-xs text-muted-foreground">Luxury Service</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                  {item.name === "Orders" && (
                    <Badge variant="secondary" className="ml-1">
                      3
                    </Badge>
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />

            {/* Notifications */}
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-4 w-4" />
              <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 text-xs">2</Badge>
            </Button>

            {/* Back to Site */}
            <Button variant="outline" size="sm" asChild>
              <Link href="/">Back to Site</Link>
            </Button>

            {/* Logout */}
            <Button variant="ghost" size="icon">
              <LogOut className="h-4 w-4" />
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">LS</span>
                  </div>
                  <div>
                    <h1 className="font-space-grotesk font-bold">Admin Panel</h1>
                    <p className="text-xs text-muted-foreground">Luxury Service</p>
                  </div>
                </div>
                <nav className="space-y-2">
                  {navigation.map((item) => {
                    const isActive = pathname === item.href
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                          isActive
                            ? "bg-accent text-accent-foreground"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        }`}
                      >
                        <item.icon className="h-4 w-4" />
                        {item.name}
                        {item.name === "Orders" && (
                          <Badge variant="secondary" className="ml-auto">
                            3
                          </Badge>
                        )}
                      </Link>
                    )
                  })}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
