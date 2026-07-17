import Reveal from '@/components/Reveal'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const faqs = [
  { q: 'O que é uma série?', a: 'Uma série é um conjunto de vídeos automáticos dentro de um nicho que você escolhe. Você define o tema, o estilo e a frequência — a IA gera e publica os vídeos continuamente.' },
  { q: 'É fácil de usar?', a: 'Sim. Não é preciso nenhuma habilidade técnica ou de edição. Em três passos você configura sua série e a automação começa a trabalhar por você.' },
  { q: 'Preciso ser especialista em criação de conteúdo?', a: 'Não. O ReelFlow foi feito tanto para iniciantes quanto para criadores experientes. A IA cuida do roteiro, das imagens, da narração e da publicação.' },
  { q: 'Quais plataformas são suportadas?', a: 'Publicamos automaticamente no TikTok, Instagram Reels e YouTube Shorts. Você pode conectar uma ou várias contas ao mesmo tempo.' },
  { q: 'É seguro conectar minhas contas?', a: 'Sim. Usamos as APIs oficiais das plataformas e você pode revogar o acesso a qualquer momento diretamente nas configurações de cada rede social.' },
  { q: 'Quantos vídeos posso criar por mês?', a: 'Depende do seu plano. No plano gratuito você experimenta a ferramenta; nos planos pagos é possível publicar vários vídeos por dia em múltiplas séries.' },
  { q: 'Como garantir que meus vídeos tenham views?', a: 'Nossa IA é treinada com formatos e ganchos que já provaram performar bem. Combinamos nichos validados, legendas dinâmicas e frequência consistente — os três pilares do crescimento orgânico.' },
  { q: 'Posso pedir reembolso?', a: 'Sim. Oferecemos garantia de 7 dias. Se não ficar satisfeito, basta falar com nosso suporte e devolvemos seu pagamento integralmente.' },
]

export default function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 pb-28 pt-4">
      <Reveal className="text-center">
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-[2.75rem]">Perguntas Frequentes</h2>
        <p className="mt-3 text-zinc-500">Tudo o que você precisa saber sobre o ReelFlow</p>
      </Reveal>
      <Reveal delay={0.1}>
        <Accordion type="single" collapsible className="mt-12">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-[15px] font-semibold hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="text-[15px] leading-relaxed text-zinc-500">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </section>
  )
}
