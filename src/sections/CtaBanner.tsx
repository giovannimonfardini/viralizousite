import Reveal from '@/components/Reveal'
import { Button } from '@/components/ui/button'
import { Zap } from 'lucide-react'

export default function CtaBanner() {
  return (
    <section className="px-6 py-24">
      <Reveal>
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-violet-600 via-fuchsia-500 to-fuchsia-600 px-8 py-20 text-center text-white shadow-2xl shadow-violet-500/30">
          <div aria-hidden className="absolute -right-32 -top-56 size-[480px] rounded-full bg-white/10" />
          <div aria-hidden className="absolute -bottom-64 -left-32 size-[420px] rounded-full bg-white/10" />
          <h2 className="relative text-3xl font-extrabold tracking-tight sm:text-4xl">Pronto para viralizar sem aparecer?</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-white/85">Junte-se a mais de 1,3 milhão de criadores que automatizam seus canais com o ReelFlow.</p>
          <Button size="lg" className="relative mt-9 h-14 gap-2 rounded-xl bg-white px-9 text-base font-bold text-violet-700 shadow-xl transition-transform hover:scale-[1.03] hover:bg-white">
            <Zap className="size-5 fill-current" /> Começar gratuitamente
          </Button>
        </div>
      </Reveal>
    </section>
  )
}
