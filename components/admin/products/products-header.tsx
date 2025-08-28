"use client"

import Link from "next/link"
import { Plus, Upload, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ProductsHeader() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
      <div>
        <h1 className="text-3xl font-bold font-space-grotesk">Products</h1>
        <p className="text-muted-foreground">Manage your scripts and digital products</p>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="outline" size="sm">
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>
        <Button variant="outline" size="sm">
          <Upload className="h-4 w-4 mr-2" />
          Import
        </Button>
        <Button asChild>
          <Link href="/admin/products/new">
            <Plus className="h-4 w-4 mr-2" />
            Add Product
          </Link>
        </Button>
      </div>
    </div>
  )
}
