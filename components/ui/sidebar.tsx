"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/lib/hooks/use-media-query"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { Slot } from "@radix-ui/react-slot"

interface SidebarContextValue {
  isCollapsed: boolean
  setCollapsed: (value: boolean) => void
  isOpen: boolean
  setOpen: (value: boolean) => void
  toggleSidebar: () => void
}

const SidebarContext = React.createContext<SidebarContextValue | undefined>(undefined)

export function SidebarProvider({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) {
  const [isCollapsed, setCollapsed] = React.useState(false)
  const [isOpen, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  const toggleSidebar = React.useCallback(() => {
    if (isDesktop) {
      setCollapsed((prev) => !prev)
    } else {
      setOpen((prev) => !prev)
    }
  }, [isDesktop])

  return (
    <SidebarContext.Provider
      value={{ isCollapsed, setCollapsed, isOpen, setOpen, toggleSidebar }}
    >
      <div className={cn(className)}>{children}</div>
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
    const { toggleSidebar } = useSidebar()
    return (
      <button
        ref={ref}
        onClick={toggleSidebar}
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

export function SidebarHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("px-4 py-2", className)} {...props} />
}

export function SidebarFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mt-auto px-4 py-2", className)} {...props} />
}

export function SidebarContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex flex-col gap-2 px-2 py-4", className)} {...props} />
}

export function SidebarGroup({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("grid gap-2", className)} {...props} />
}

export function SidebarGroupLabel({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h4 className={cn("px-3 text-xs font-semibold text-muted-foreground", className)} {...props} />
}

export function SidebarMenu({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) {
  return <ul className={cn("grid gap-1", className)} {...props} />
}

export function SidebarMenuItem({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) {
  return <li className={cn(className)} {...props} />
}

export function SidebarMenuButton({ asChild, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      className={cn(
        "flex w-full items-center gap-2 rounded-md px-3 py-2 hover:bg-sidebar-accent",
        className
      )}
      {...props}
    />
  )
}

export function SidebarMenuAction({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn("ml-auto p-1 text-muted-foreground hover:text-foreground", className)}
      {...props}
    />
  )
}

export function SidebarMenuSub({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) {
  return <ul className={cn("ml-6 grid gap-1", className)} {...props} />
}

export function SidebarMenuSubItem({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) {
  return <li className={cn(className)} {...props} />
}

export function SidebarMenuSubButton({ asChild, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      className={cn(
        "flex w-full items-center rounded-md px-3 py-1.5 hover:bg-sidebar-accent",
        className
      )}
      {...props}
    />
  )
}
