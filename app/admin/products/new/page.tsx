import { ProductForm } from "@/components/admin/products/product-form"

export default function NewProductPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold font-space-grotesk">Add New Product</h1>
          <p className="text-muted-foreground">Create a new script or digital product</p>
        </div>
        <ProductForm />
      </div>
    </div>
  )
}