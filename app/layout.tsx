import "@/styles/globals.css"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>

            <div className="[--header-height:calc(theme(spacing.14))]">
              <SidebarProvider className="flex flex-col min-h-screen">
                <SiteHeader />
                <div className="flex flex-1">
                  <AppSidebar />
                  <SidebarInset>
                    <main className="flex flex-1 flex-col gap-4 p-4">
                      {children}
                    </main>
                  </SidebarInset>
                </div>
              </SidebarProvider>
            </div>

            <SidebarProvider>
              <div className="relative flex min-h-screen">
                <AppSidebar />
                <SidebarInset className="flex flex-col flex-1">
                  <SiteHeader />
                  <main className="flex-1">{children}</main>
                </SidebarInset>
              </div>
            </SidebarProvider>

            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
