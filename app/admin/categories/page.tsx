import { CategoriesHeader } from "@/components/admin/categories/categories-header"
import { CategoriesTable } from "@/components/admin/categories/categories-table"

export default function AdminCategoriesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <CategoriesHeader />
        <CategoriesTable />
      </div>
    </div>
  )
}