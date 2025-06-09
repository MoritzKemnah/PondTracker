"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export function Breadcrumb({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return <nav className={cn("flex", className)} {...props} />
}

export function BreadcrumbList({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) {
  return <ol className={cn("flex items-center gap-1", className)} {...props} />
}

export function BreadcrumbItem({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) {
  return <li className={cn("text-sm", className)} {...props} />
}

export function BreadcrumbLink({ className, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a className={cn("font-medium", className)} {...props} />
}

export function BreadcrumbPage({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn("font-semibold", className)} {...props} />
}

export function BreadcrumbSeparator({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return <span role="presentation" className={cn("mx-1 text-muted-foreground", className)} {...props} />
}
