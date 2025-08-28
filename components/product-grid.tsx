"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, Eye, Users, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useRTL } from "@/components/rtl-provider"

// Mock product data
const mockProducts = [
  {
    id: "1",
    name: "Advanced Anti-Cheat System",
    shortDescription: "Professional anti-cheat protection for your FiveM server",
    price: 49.99,
    discountPrice: 39.99,
    category: "Protection",
    tags: ["FiveM", "Anti-Cheat", "Security"],
    images: ["/gaming-anticheat-system.png"],
    fakeViews: 1250,
    fakeRating: 4.8,
    fakeCustomers: 89,
    isActive: true,
    showStats: true,
  },
  {
    id: "2",
    name: "Luxury Car Dealership",
    shortDescription: "Complete car dealership system with modern UI",
    price: 79.99,
    category: "Roleplay",
    tags: ["FiveM", "Cars", "Dealership"],
    images: ["/luxury-car-dealership-ui.png"],
    fakeViews: 2100,
    fakeRating: 4.9,
    fakeCustomers: 156,
    isActive: true,
    showStats: true,
  },
  {
    id: "3",
    name: "Banking System Pro",
    shortDescription: "Advanced banking system with ATM and mobile app",
    price: 59.99,
    discountPrice: 44.99,
    category: "Economy",
    tags: ["FiveM", "Banking", "Economy"],
    images: ["/banking-system-interface.png"],
    fakeViews: 890,
    fakeRating: 4.7,
    fakeCustomers: 67,
    isActive: true,
    showStats: true,
  },
  {
    id: "4",
    name: "MTA Race System",
    shortDescription: "Complete racing system for MTA servers",
    price: 34.99,
    category: "Racing",
    tags: ["MTA", "Racing", "Competition"],
    images: ["/mta-racing-system.png"],
    fakeViews: 650,
    fakeRating: 4.6,
    fakeCustomers: 43,
    isActive: true,
    showStats: true,
  },
  {
    id: "5",
    name: "Admin Panel Ultimate",
    shortDescription: "Professional admin panel with advanced features",
    price: 89.99,
    category: "Administration",
    tags: ["FiveM", "Admin", "Management"],
    images: ["/admin-panel-dashboard.png"],
    fakeViews: 1800,
    fakeRating: 4.9,
    fakeCustomers: 124,
    isActive: true,
    showStats: true,
  },
  {
    id: "6",
    name: "Inventory System Plus",
    shortDescription: "Modern inventory system with drag & drop",
    price: 39.99,
    category: "Interface",
    tags: ["FiveM", "Inventory", "UI"],
    images: ["/inventory-system-ui.png"],
    fakeViews: 1100,
    fakeRating: 4.8,
    fakeCustomers: 78,
    isActive: true,
    showStats: true,
  },
]

export function ProductGrid() {
  const { isRTL } = useRTL()
  const [products, setProducts] = useState(mockProducts)
  const [filteredProducts, setFilteredProducts] = useState(mockProducts)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("newest")
  const [priceRange, setPriceRange] = useState([0, 100])

  const categories = ["all", "Protection", "Roleplay", "Economy", "Racing", "Administration", "Interface"]

  useEffect(() => {
    let filtered = products

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
      )
    }

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((product) => product.category === selectedCategory)
    }

    // Filter by price range
    filtered = filtered.filter((product) => {
      const price = product.discountPrice || product.price
      return price >= priceRange[0] && price <= priceRange[1]
    })

    // Sort products
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => (a.discountPrice || a.price) - (b.discountPrice || b.price))
        break
      case "price-high":
        filtered.sort((a, b) => (b.discountPrice || b.price) - (a.discountPrice || a.price))
        break
      case "rating":
        filtered.sort((a, b) => (b.fakeRating || 0) - (a.fakeRating || 0))
        break
      case "popular":
        filtered.sort((a, b) => (b.fakeViews || 0) - (a.fakeViews || 0))
        break
      default:
        // newest - keep original order
        break
    }

    setFilteredProducts(filtered)
  }, [products, searchQuery, selectedCategory, sortBy, priceRange])

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-space-grotesk mb-4">
            {isRTL ? "سكربتاتنا المتميزة" : "Our Premium Scripts"}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {isRTL
              ? "اكتشف مجموعتنا المختارة بعناية من السكربتات عالية الجودة لخوادم الألعاب"
              : "Discover our carefully curated collection of high-quality scripts for gaming servers"}
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="w-full lg:w-96">
              <Input
                placeholder={isRTL ? "البحث في السكربتات..." : "Search scripts..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>

            {/* Category & Sort */}
            <div className="flex gap-4 w-full lg:w-auto">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue placeholder={isRTL ? "التصنيف" : "Category"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{isRTL ? "جميع التصنيفات" : "All Categories"}</SelectItem>
                  {categories.slice(1).map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue placeholder={isRTL ? "ترتيب حسب" : "Sort by"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">{isRTL ? "الأحدث" : "Newest"}</SelectItem>
                  <SelectItem value="popular">{isRTL ? "الأكثر شعبية" : "Most Popular"}</SelectItem>
                  <SelectItem value="rating">{isRTL ? "الأعلى تقييماً" : "Highest Rated"}</SelectItem>
                  <SelectItem value="price-low">{isRTL ? "السعر: منخفض إلى مرتفع" : "Price: Low to High"}</SelectItem>
                  <SelectItem value="price-high">{isRTL ? "السعر: مرتفع إلى منخفض" : "Price: High to Low"}</SelectItem>
                </SelectContent>
              </Select>

              {/* Advanced Filters */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <SlidersHorizontal className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>{isRTL ? "فلاتر متقدمة" : "Advanced Filters"}</SheetTitle>
                    <SheetDescription>
                      {isRTL ? "قم بتخصيص البحث حسب احتياجاتك" : "Customize your search preferences"}
                    </SheetDescription>
                  </SheetHeader>
                  <div className="py-6">
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">{isRTL ? "نطاق السعر" : "Price Range"}</label>
                        <div className="flex gap-2">
                          <Input
                            type="number"
                            placeholder="Min"
                            value={priceRange[0]}
                            onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                          />
                          <Input
                            type="number"
                            placeholder="Max"
                            value={priceRange[1]}
                            onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative overflow-hidden">
                <Image
                  src={product.images[0] || "/placeholder.svg"}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.discountPrice && (
                  <Badge className="absolute top-2 left-2 bg-destructive">
                    {Math.round(((product.price - product.discountPrice) / product.price) * 100)}% OFF
                  </Badge>
                )}
                <div className="absolute top-2 right-2 flex gap-1">
                  {product.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Preview button on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="secondary" size="sm">
                    {isRTL ? "معاينة" : "Preview"}
                  </Button>
                </div>
              </div>

              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2 line-clamp-1">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{product.shortDescription}</p>

                {product.showStats && (
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      <span>{product.fakeViews?.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span>{product.fakeRating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      <span>{product.fakeCustomers}</span>
                    </div>
                  </div>
                )}
              </CardContent>

              <CardFooter className="p-4 pt-0 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {product.discountPrice ? (
                    <>
                      <span className="text-lg font-bold">${product.discountPrice}</span>
                      <span className="text-sm text-muted-foreground line-through">${product.price}</span>
                    </>
                  ) : (
                    <span className="text-lg font-bold">${product.price}</span>
                  )}
                </div>
                <Button size="sm" asChild>
                  <Link href={`/product/${product.id}`}>{isRTL ? "عرض التفاصيل" : "View Details"}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* No results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">{isRTL ? "لم يتم العثور على نتائج" : "No products found"}</p>
          </div>
        )}

        {/* Load More */}
        {filteredProducts.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              {isRTL ? "تحميل المزيد" : "Load More"}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
