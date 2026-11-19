"use client"

import { useSyncExternalStore } from "react"

const DAY = 86_400_000

function subscribe(onChange: () => void) {
  const id = setInterval(onChange, 60_000)
  return () => clearInterval(id)
}

/** Dias inteiros que faltam até a data (calculado no navegador, nunca fica desatualizado). */
export function DaysUntil({ date, fallback = "—" }: { date: string; fallback?: string }) {
  const target = new Date(date).getTime()
  const days = useSyncExternalStore(
    subscribe,
    () => Math.max(0, Math.ceil((target - Date.now()) / DAY)),
    () => null,
  )
  return <span suppressHydrationWarning>{days ?? fallback}</span>
}
