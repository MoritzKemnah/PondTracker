"use client"

import * as React from "react"

export function useMediaQuery(query: string) {
  const getMatches = () => (typeof window !== "undefined" ? window.matchMedia(query).matches : false)

  const [matches, setMatches] = React.useState(getMatches)

  React.useEffect(() => {
    const matchMedia = window.matchMedia(query)

    const handleChange = () => setMatches(matchMedia.matches)

    handleChange()

    matchMedia.addEventListener("change", handleChange)
    return () => matchMedia.removeEventListener("change", handleChange)
  }, [query])

  return matches
}
