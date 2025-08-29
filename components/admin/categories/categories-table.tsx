"use client"

import { useState } from "react"
import { MoreHorizontal, Edit, Trash2, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CategoryDialog } from "./category-dialog"
import { toast } from "@/hooks/use-toast"

export function CategoriesTable() {
  const [searchQuery, setSearchQuery] = useState("")
  const [editingCategory, setEditingCategory] = useState<any>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const categories = [
    {
      id: "1",
      name: "Protection",
      description: "Anti-cheat systems and security scripts",
      productCount: 8,
      isActive: true,
      createdAt: "2023-01-15",
    },
    {
      id: "2", 
      name: "Roleplay",
      description: "Scripts for roleplay servers and immersive gameplay",
      productCount: 12,
      isActive: true,
      createdAt: "2023-01-15",
    },
    {
      id: "3",
      name: "Economy",
      description: "Banking, shops, and economic systems",
      productCount: 6,
      isActive: true,
      createdAt: "2023-01-15",
    },
    {
      id: "4",
      name: "Racing",
      description: "Racing systems and competition scripts",
      productCount: 4,
      isActive: true,
      createdAt: "2023-01-15",
    },
    {
      id: "5",
      name: "Administration",
      description: "Admin panels and management tools",
      productCount: 3,
      isActive: true,
      createdAt: "2023-01-15",
    },
  ]

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleEdit = (category: any) => {
    setEditingCategory(category)
    setIsDialogOpen(true)
  }

  const handleDelete = (categoryId: string) => {
    toast({
      title: "Category Deleted",
      description: "Category has been deleted successfully.",
      variant: "destructive",
    })
  }

  const handleDialogClose = () => {
    setIsDialogOpen(false)
    setEditingCategory(null)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>All Categories</CardTitle>
        <CardDescription>Manage your product categories</CardDescription>
      </CardHeader>
      <CardContent>
        {/* Search */}
        <div className="mb-6">
          <Input
            placeholder="Search categories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-sm"
          />
        </div>

        {/* Table */}
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Category</TableHead>
                <TableHead>Products</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Created</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCategories.map((category) => (
                <TableRow key={category.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{category.name}</div>
                      <div className="text-sm text-muted-foreground">{category.description}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">
                      {category.productCount} products
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={category.isActive ? "default" : "secondary"}>
                      {category.isActive ? "Active" : "Inactive"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {new Date(category.createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem onClick={() => handleEdit(category)}>
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem 
                          className="text-destructive"
                          onClick={() => handleDelete(category.id)}
                        >
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <CategoryDialog 
          open={isDialogOpen}
          onOpenChange={handleDialogClose}
          category={editingCategory}
        />

        {filteredCategories.length === 0 && (
          <div className="text-center py-8">
            <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">No categories found</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}