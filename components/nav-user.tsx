"use client"

import { User } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  SidebarGroup,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

export function NavUser({
  user,
}: {
  user: { name: string; email: string; avatar: string }
}) {
  return (
    <SidebarGroup>
      <SidebarMenuButton asChild>
        <a href="#" className="flex items-center gap-2">
          <User className="size-6" />
          <div className="grid text-left">
            <span className="text-sm font-medium leading-tight">{user.name}</span>
            <span className="text-xs text-muted-foreground">{user.email}</span>
          </div>
        </a>
      </SidebarMenuButton>
      <Button variant="outline" className="w-full">
        Sign out
      </Button>
    </SidebarGroup>
  )
}
