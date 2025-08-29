import { ProductForm } from "@/components/admin/products/product-form"

// Mock product data - in real app, fetch from API
const getProduct = (id: string) => {
  const products = [
    {
      id: "1",
      name: "Advanced Anti-Cheat System",
      shortDescription: "Professional anti-cheat protection for your FiveM server",
      description: "A comprehensive anti-cheat system designed specifically for FiveM servers. Features real-time monitoring, advanced detection algorithms, and customizable punishment systems.",
      price: 49.99,
      discountPrice: 39.99,
      category: "Protection",
      tags: ["FiveM", "Anti-Cheat", "Security"],
      requirements: ["FiveM Server", "ESX Framework", "MySQL Database"],
      features: ["Real-time monitoring", "Advanced detection", "Customizable punishments", "Admin panel"],
      fileSize: "2.5 MB",
      isActive: true,
      showStats: true,
      fakeViews: 1250,
      fakeRating: 4.8,
      fakeCustomers: 89,
    },
  ]
  
  return products.find(p => p.id === id)
}

export default function EditProductPage({ params }: { params: { id: string } }) {
  const product = getProduct(params.id)

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Product Not Found</h1>
          <p className="text-muted-foreground">The requested product could not be found.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold font-space-grotesk">Edit Product</h1>
          <p className="text-muted-foreground">Update product information and settings</p>
        </div>
        <ProductForm product={product} isEdit={true} />
      </div>
    </div>
  )
}