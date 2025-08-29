"use client"

import { useState } from "react"
import Image from "next/image"
import { MoreHorizontal, Edit, Trash2, Eye, Shield, ShieldOff, Crown, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { toast } from "@/hooks/use-toast"

export function UsersTable() {
  const [searchQuery, setSearchQuery] = useState("")
  const [roleFilter, setRoleFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedUser, setSelectedUser] = useState<any>(null)

  const users = [
    {
      id: "1",
      name: "Ahmed Hassan",
      email: "ahmed@example.com",
      avatar: "/professional-avatar.png",
      role: "customer",
      level: "Gold",
      balance: 125.50,
      points: 2450,
      isBlocked: false,
      lastLogin: "2024-01-20T10:30:00Z",
      createdAt: "2023-06-15",
      orders: 12,
      totalSpent: 450.00,
    },
    {
      id: "2",
      name: "Sarah Ahmed",
      email: "sarah@example.com",
      avatar: null,
      role: "customer",
      level: "Silver",
      balance: 75.25,
      points: 1200,
      isBlocked: false,
      lastLogin: "2024-01-19T15:45:00Z",
      createdAt: "2023-08-22",
      orders: 8,
      totalSpent: 320.00,
    },
    {
      id: "3",
      name: "Mohammed Ali",
      email: "mohammed@example.com",
      avatar: null,
      role: "customer",
      level: "Bronze",
      balance: 0.00,
      points: 450,
      isBlocked: true,
      lastLogin: "2024-01-10T09:20:00Z",
      createdAt: "2023-12-01",
      orders: 2,
      totalSpent: 89.99,
    },
    {
      id: "4",
      name: "Admin User",
      email: "bebo11hany1@gmail.com",
      avatar: null,
      role: "admin",
      level: "Gold",
      balance: 0.00,
      points: 0,
      isBlocked: false,
      lastLogin: "2024-01-20T08:00:00Z",
      createdAt: "2023-01-01",
      orders: 0,
      totalSpent: 0.00,
    },
  ]

  const filteredUsers = users.filter((user) => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesRole = roleFilter === "all" || user.role === roleFilter
    const matchesStatus = statusFilter === "all" ||
                         (statusFilter === "active" && !user.isBlocked) ||
                         (statusFilter === "blocked" && user.isBlocked)

    return matchesSearch && matchesRole && matchesStatus
  })

  const handleViewUser = (user: any) => {
    setSelectedUser(user)
  }

  const handleToggleBlock = (userId: string) => {
    toast({
      title: "User Status Updated",
      description: "User block status has been changed successfully.",
    })
  }

  const handleDeleteUser = (userId: string) => {
    toast({
      title: "User Deleted",
      description: "User has been deleted successfully.",
      variant: "destructive",
    })
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Bronze":
        return "bg-amber-600"
      case "Silver":
        return "bg-gray-400"
      case "Gold":
        return "bg-yellow-500"
      default:
        return "bg-gray-400"
    }
  }

  const getRoleIcon = (role: string) => {
    return role === "admin" ? Crown : User
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>All Users</CardTitle>
        <CardDescription>Manage your customer accounts</CardDescription>
      </CardHeader>
      <CardContent>
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <Input
            placeholder="Search users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="sm:max-w-sm"
          />
          <Select value={roleFilter} onValueChange={setRoleFilter}>
            <SelectTrigger className="sm:w-48">
              <SelectValue placeholder="Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Roles</SelectItem>
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="customer">Customer</SelectItem>
            </SelectContent>
          </Select>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="sm:w-48">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="blocked">Blocked</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Table */}
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Level</TableHead>
                <TableHead>Balance</TableHead>
                <TableHead>Orders</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Login</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user) => {
                const RoleIcon = getRoleIcon(user.role)
                return (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={user.avatar || undefined} />
                          <AvatarFallback>
                            {user.name.split(" ").map(n => n[0]).join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{user.name}</div>
                          <div className="text-sm text-muted-foreground">{user.email}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="flex items-center gap-1 w-fit">
                        <RoleIcon className="h-3 w-3" />
                        {user.role}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={`${getLevelColor(user.level)} text-white`}>
                        {user.level}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <span className="font-semibold">${user.balance.toFixed(2)}</span>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <div>{user.orders} orders</div>
                        <div className="text-muted-foreground">${user.totalSpent.toFixed(2)} spent</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={user.isBlocked ? "destructive" : "default"}>
                        {user.isBlocked ? "Blocked" : "Active"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {new Date(user.lastLogin).toLocaleDateString()}
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
                          <DropdownMenuItem onClick={() => handleViewUser(user)}>
                            <Eye className="h-4 w-4 mr-2" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="h-4 w-4 mr-2" />
                            Edit User
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem onClick={() => handleToggleBlock(user.id)}>
                            {user.isBlocked ? (
                              <>
                                <Shield className="h-4 w-4 mr-2" />
                                Unblock User
                              </>
                            ) : (
                              <>
                                <ShieldOff className="h-4 w-4 mr-2" />
                                Block User
                              </>
                            )}
                          </DropdownMenuItem>
                          <DropdownMenuItem 
                            className="text-destructive"
                            onClick={() => handleDeleteUser(user.id)}
                          >
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </div>

        {/* User Details Dialog */}
        <Dialog open={!!selectedUser} onOpenChange={() => setSelectedUser(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>User Details</DialogTitle>
              <DialogDescription>
                Detailed information about the selected user
              </DialogDescription>
            </DialogHeader>
            {selectedUser && (
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={selectedUser.avatar || undefined} />
                    <AvatarFallback className="text-lg">
                      {selectedUser.name.split(" ").map((n: string) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-semibold">{selectedUser.name}</h3>
                    <p className="text-muted-foreground">{selectedUser.email}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="secondary">{selectedUser.role}</Badge>
                      <Badge className={`${getLevelColor(selectedUser.level)} text-white`}>
                        {selectedUser.level}
                      </Badge>
                      <Badge variant={selectedUser.isBlocked ? "destructive" : "default"}>
                        {selectedUser.isBlocked ? "Blocked" : "Active"}
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-muted/30 rounded-lg">
                    <div className="text-lg font-bold text-green-600">${selectedUser.balance.toFixed(2)}</div>
                    <div className="text-sm text-muted-foreground">Balance</div>
                  </div>
                  <div className="text-center p-3 bg-muted/30 rounded-lg">
                    <div className="text-lg font-bold text-blue-600">{selectedUser.points}</div>
                    <div className="text-sm text-muted-foreground">Points</div>
                  </div>
                  <div className="text-center p-3 bg-muted/30 rounded-lg">
                    <div className="text-lg font-bold text-purple-600">{selectedUser.orders}</div>
                    <div className="text-sm text-muted-foreground">Orders</div>
                  </div>
                  <div className="text-center p-3 bg-muted/30 rounded-lg">
                    <div className="text-lg font-bold text-orange-600">${selectedUser.totalSpent.toFixed(2)}</div>
                    <div className="text-sm text-muted-foreground">Total Spent</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>Member Since:</strong> {new Date(selectedUser.createdAt).toLocaleDateString()}
                  </div>
                  <div>
                    <strong>Last Login:</strong> {new Date(selectedUser.lastLogin).toLocaleDateString()}
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {filteredUsers.length === 0 && (
          <div className="text-center py-8">
            <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">No users found</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}