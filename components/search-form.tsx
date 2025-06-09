"use client"

import { Search } from "lucide-react"
import { cn } from "@/lib/utils"
import * as React from "react"

export function SearchForm({ className }: React.HTMLAttributes<HTMLFormElement>) {
  return (
    <form className={cn("relative flex items-center", className)}>
      <Search className="absolute left-2 size-4 text-muted-foreground" />
      <input
        type="search"
        placeholder="Search"
        className="h-8 w-full rounded-md border bg-background py-1 pl-7 pr-2 text-sm shadow-sm"
      />
    </form>
  )
}
