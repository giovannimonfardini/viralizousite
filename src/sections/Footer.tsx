import { Separator } from '@/components/ui/separator'
import { Clapperboard, Heart } from 'lucide-react'

const cols = [
  { title: 'Produto', links: ['Como funciona', 'FAQ', 'Preços'] },
  { title: 'Empresa', links: ['Contato', 'Blog', 'Afiliados'] },
  { title: 'Legal', links: ['Termos de Serviço', 'Política de Privacidade'] },
]

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <a href="#" className="flex items-center gap-2.5">
              <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-500 text-white shadow-md shadow-violet-500/30">
                <Clapperboard className="size-4" />
              </span>
              <span className="text-lg font-extrabold tracking-tight">ReelFlow</span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-zinc-500">Crie reels sem rosto gerados por IA no piloto automático.</p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="mb-4 text-sm font-bold">{c.title}</h4>
              <ul className="space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="text-sm text-zinc-500 transition-colors hover:text-violet-600">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Separator className="my-8" />
        <div className="flex flex-wrap items-center justify-between gap-3 text-[13px] text-zinc-400">
          <span>© 2026 ReelFlow. Todos os direitos reservados.</span>
          <span className="flex items-center gap-1.5">Feito com <Heart className="size-3.5 fill-rose-500 text-rose-500" /> para criadores</span>
        </div>
      </div>
    </footer>
  )
}
