import { ProductsHeader } from "@/components/admin/products/products-header"
import { ProductsTable } from "@/components/admin/products/products-table"
import { ProductsStats } from "@/components/admin/products/products-stats"

export default function AdminProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <ProductsHeader />
        <div className="space-y-6">
          <ProductsStats />
          <ProductsTable />
        </div>
      </div>
    </div>
  )
}
