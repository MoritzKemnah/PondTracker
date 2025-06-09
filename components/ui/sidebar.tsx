"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/lib/hooks/use-media-query"
import { Sheet, SheetContent } from "@/components/ui/sheet"

interface SidebarContextValue {
  isCollapsed: boolean
  setCollapsed: (value: boolean) => void
  isOpen: boolean
  setOpen: (value: boolean) => void
}

const SidebarContext = React.createContext<SidebarContextValue | undefined>(undefined)

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setCollapsed] = React.useState(false)
  const [isOpen, setOpen] = React.useState(false)
  return (
    <SidebarContext.Provider value={{ isCollapsed, setCollapsed, isOpen, setOpen }}>
      {children}
    </SidebarContext.Provider>
  )
}

export function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) throw new Error("useSidebar must be used within SidebarProvider")
  return context
}

export const SidebarTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => {
    const isDesktop = useMediaQuery("(min-width: 768px)")
    const { isCollapsed, setCollapsed, setOpen } = useSidebar()
    return (
      <button
        ref={ref}
        onClick={() => {
          if (isDesktop) {
            setCollapsed(!isCollapsed)
          } else {
            setOpen(true)
          }
        }}
        className={cn(
          "inline-flex items-center justify-center rounded-md p-2 hover:bg-sidebar-accent",
          className
        )}
        {...props}
      />
    )
  }
)
SidebarTrigger.displayName = "SidebarTrigger"

export function Sidebar({ className, children }: React.HTMLAttributes<HTMLElement>) {
  const { isCollapsed, isOpen, setOpen } = useSidebar()
  return (
    <>
      <Sheet open={isOpen} onOpenChange={setOpen}>
        <SheetContent side="left" className="sm:max-w-xs md:hidden">
          {children}
        </SheetContent>
      </Sheet>
      <aside
        data-collapsed={isCollapsed}
        className={cn(
          "group/sidebar hidden border-r bg-sidebar text-sidebar-foreground transition-all md:block",
          isCollapsed ? "w-14" : "w-64",
          className
        )}
      >
        {children}
      </aside>
    </>
  )
}

export function SidebarInset({ className, children }: React.HTMLAttributes<HTMLDivElement>) {
  const { isCollapsed } = useSidebar()
  return (
    <div
      className={cn(
        "flex flex-col transition-all",
        isCollapsed ? "md:ml-14" : "md:ml-64",
        className
      )}
    >
      {children}
    </div>
  )
}
