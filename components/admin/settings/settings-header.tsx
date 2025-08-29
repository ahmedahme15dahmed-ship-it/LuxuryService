"use client"

import { Save, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SettingsHeader() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
      <div>
        <h1 className="text-3xl font-bold font-space-grotesk">Settings</h1>
        <p className="text-muted-foreground">Manage your store configuration and preferences</p>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="outline" size="sm">
          <RotateCcw className="h-4 w-4 mr-2" />
          Reset to Default
        </Button>
        <Button>
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </Button>
      </div>
    </div>
  )
}