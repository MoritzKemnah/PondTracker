"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function SidebarToggle() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="sm:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="sm:max-w-xs">
        <SidebarContent />
      </SheetContent>
    </Sheet>
  )
}

export function SidebarContent() {
  return (
    <div className="grid gap-4 py-4">
      <FarmSelector />
      <nav className="grid gap-2 px-2 text-sm font-medium">
        <Link
          href="/"
          className="flex items-center rounded-md px-3 py-2 hover:bg-accent"
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
        <Button
          variant="ghost"
          className="flex w-full items-center justify-between px-3 py-2"
        >
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
        <DropdownMenuItem onSelect={() => setFarm("Farm 1")}>
          Farm 1
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => setFarm("Farm 2")}>
          Farm 2
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
