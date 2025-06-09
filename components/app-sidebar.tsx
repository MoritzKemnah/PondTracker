"use client"

import * as React from "react"
import Link from "next/link"
import { Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sidebar } from "@/components/ui/sidebar"

export function AppSidebar() {
  return (
    <Sidebar className="sticky top-16 h-[calc(100vh-4rem)]">
      <SidebarContent />
    </Sidebar>
  )
}

function SidebarContent() {
  return (
    <div className="grid gap-4 p-4">
      <FarmSelector />
      <nav className="grid gap-2 text-sm font-medium">
        <Link
          href="/"
          className="flex items-center rounded-md px-3 py-2 hover:bg-sidebar-accent"
        >
          Home
        </Link>
        <TasksDropdown />
      </nav>
    </div>
  )
}

function TasksDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex w-full items-center justify-between px-3 py-2">
          Tasks
          <Plus className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem asChild>
          <Link href="#">Water Test</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="#">Feed &amp; Tray Check</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="#">Shrimp Observation</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="#">Equipment Checklist</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function FarmSelector() {
  const [farm, setFarm] = React.useState("Farm 1")
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-full justify-between">
          {farm}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40">
        <DropdownMenuItem onSelect={() => setFarm("Farm 1")}>Farm 1</DropdownMenuItem>
        <DropdownMenuItem onSelect={() => setFarm("Farm 2")}>Farm 2</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
