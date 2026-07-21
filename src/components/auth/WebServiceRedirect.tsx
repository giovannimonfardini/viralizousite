import { useEffect } from 'react'

export default function WebServiceRedirect({ to }: { to: string }) {
  useEffect(() => {
    window.location.replace(to)
  }, [to])

  return (
    <main className="grid min-h-screen place-items-center bg-white" role="status" aria-live="polite">
      <div className="flex flex-col items-center gap-4 text-center">
        <span className="size-8 animate-spin rounded-full border-2 border-zinc-200 border-t-violet-600" aria-hidden="true" />
        <p className="text-sm font-medium text-zinc-600">Conectando ao Viralizou…</p>
        <a href={to} className="text-sm font-semibold text-violet-700 underline underline-offset-4">
          Continuar para o login
        </a>
      </div>
    </main>
  )
}
