import Reveal from '@/components/Reveal'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Star } from 'lucide-react'

const testimonials = [
  { text: 'O conteúdo é de alta qualidade, confiável e sempre envolvente — exatamente o que eu preciso para aumentar views e inscritos.', name: 'Cíntia Duarte', bg: 'bg-violet-500', ini: 'CD' },
  { text: 'Adoro os diferentes estilos e histórias que eles criam. Ganhei muitas views e novos inscritos. E continuo crescendo!', name: 'Visão Criativa Filmes', bg: 'bg-sky-500', ini: 'VC' },
  { text: 'Muito fácil de usar e as histórias são interessantes. Ótima forma de entrar no mundo do conteúdo sem todo o trabalho.', name: 'Jorge Mota', bg: 'bg-emerald-500', ini: 'JM' },
  { text: 'Amei. Facilita muito na hora de postar quando você está sem ideia do que publicar.', name: 'Nana Bandeira', bg: 'bg-amber-500', ini: 'NB' },
  { text: 'O ReelFlow foi ótimo. Minha página cresceu demais!', name: 'Tomás Alves', bg: 'bg-rose-500', ini: 'TA' },
  { text: 'É conveniente para quem quer contar histórias mas não quer mostrar o rosto.', name: 'Léo Ribeiro', bg: 'bg-violet-400', ini: 'LR' },
  { text: 'Projeto muito produtivo, adorei. O suporte é excelente.', name: 'Agnes Costa', bg: 'bg-pink-500', ini: 'AC' },
  { text: 'Ótimo para quem está começando como criador de conteúdo.', name: 'Josh Martins', bg: 'bg-blue-500', ini: 'JM' },
]

function TCard({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <div className="w-80 shrink-0 rounded-2xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-3 flex gap-0.5 text-amber-400">
        {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-3.5 fill-current" />)}
      </div>
      <p className="mb-5 text-sm leading-relaxed text-zinc-600">"{t.text}"</p>
      <div className="flex items-center gap-3">
        <Avatar className="size-9"><AvatarFallback className={`${t.bg} text-xs font-bold text-white`}>{t.ini}</AvatarFallback></Avatar>
        <div>
          <p className="text-sm font-semibold">{t.name}</p>
          <p className="text-xs text-zinc-400">Criador(a) de conteúdo</p>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const reversed = [...testimonials].reverse()
  return (
    <section id="depoimentos" className="overflow-hidden py-24">
      <Reveal className="text-center">
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-[2.75rem]">O que dizem sobre nós</h2>
        <p className="mt-3 text-zinc-500">Veja o que nossos usuários falam sobre o ReelFlow.</p>
      </Reveal>
      <div className="marquee-paused mt-14 space-y-5">
        <div className="animate-marquee flex w-max gap-5">
          {[...testimonials, ...testimonials].map((t, i) => <TCard key={i} t={t} />)}
        </div>
        <div className="animate-marquee-reverse flex w-max gap-5">
          {[...reversed, ...reversed].map((t, i) => <TCard key={i} t={t} />)}
        </div>
      </div>
    </section>
  )
}
