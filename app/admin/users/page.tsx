import { UsersHeader } from "@/components/admin/users/users-header"
import { UsersTable } from "@/components/admin/users/users-table"
import { UsersStats } from "@/components/admin/users/users-stats"

export default function AdminUsersPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <UsersHeader />
        <div className="space-y-6">
          <UsersStats />
          <UsersTable />
        </div>
      </div>
    </div>
  )
}