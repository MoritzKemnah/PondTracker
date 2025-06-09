"use client"

import * as React from "react"

import {
  BookOpen,
  Bot,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  TerminalSquare,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: TerminalSquare,
      isActive: true,
      items: [
        { title: "History", url: "#" },
        { title: "Starred", url: "#" },
        { title: "Settings", url: "#" },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      items: [
        { title: "Genesis", url: "#" },
        { title: "Explorer", url: "#" },
        { title: "Quantum", url: "#" },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        { title: "Introduction", url: "#" },
        { title: "Get Started", url: "#" },
        { title: "Tutorials", url: "#" },
        { title: "Changelog", url: "#" },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        { title: "General", url: "#" },
        { title: "Team", url: "#" },
        { title: "Billing", url: "#" },
        { title: "Limits", url: "#" },
      ],
    },
  ],
  navSecondary: [
    { title: "Support", url: "#", icon: LifeBuoy },
    { title: "Feedback", url: "#", icon: Send },
  ],
  projects: [
    { name: "Design Engineering", url: "#", icon: Frame },
    { name: "Sales & Marketing", url: "#", icon: PieChart },
    { name: "Travel", url: "#", icon: Map },
  ],
}

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      className="top-[--header-height] h-[calc(100svh-var(--header-height))]!"
      {...props}
    >
      <SidebarHeader>
        <NavProjects projects={data.projects} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>

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
