"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import Image from "next/image"

const stackCards = [
  {
    id: 1,
    title: "Ghee Podi Mini Idlis",
    description: "Soaked in pure desi ghee and dusted with our secret 'Gunpowder' spice mix. Melt-in-the-mouth magic.",
    image: "/golden-mini-idlis-soaked-in-ghee-with-red-podi-spi.jpg",
    theme: "from-orange-600 to-amber-500",
    bgColor: "bg-gradient-to-br from-orange-100 to-amber-50",
    accent: "#E67E22",
  },
  {
    id: 2,
    title: "Open Butter Masala Dosa",
    description: "Crispy on the outside, fluffy on the inside. Served with our signature sweet-spicy chutney.",
    image: "/crispy-golden-open-dosa-with-melting-butter-on-top.jpg",
    theme: "from-amber-600 to-yellow-500",
    bgColor: "bg-gradient-to-br from-amber-100 to-yellow-50",
    accent: "#D4A574",
  },
  {
    id: 3,
    title: "Authentic Filter Kaapi",
    description: "Brewed fresh with premium Chikmagalur beans. The perfect finish to your meal.",
    image: "/south-indian-filter-coffee-pouring-from-brass-dava.jpg",
    theme: "from-amber-800 to-amber-600",
    bgColor: "bg-gradient-to-br from-amber-200 to-orange-100",
    accent: "#8B4513",
  },
]

export default function ScrollStack() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <section className="relative bg-cream py-12 md:py-20" id="story">
      {/* Section Header */}
      <div className="mx-auto max-w-7xl px-4 pb-12 text-center sm:px-6 lg:px-8">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 inline-block rounded-full bg-saffron/10 px-4 py-2 text-sm font-medium text-saffron"
        >
          Our Viral Hits
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-3xl text-coffee sm:text-4xl md:text-5xl"
        >
          What Makes Us <span className="text-saffron">Famous</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-coffee/60"
        >
          Scroll down to discover our signature dishes
        </motion.p>
      </div>

      <div ref={containerRef} className="relative" style={{ height: `${(stackCards.length + 0.5) * 100}vh` }}>
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="flex h-full items-center justify-center px-4">
            {stackCards.map((card, index) => (
              <StackCard
                key={card.id}
                card={card}
                index={index}
                totalCards={stackCards.length}
                progress={smoothProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function StackCard({
  card,
  index,
  totalCards,
  progress,
}: {
  card: (typeof stackCards)[0]
  index: number
  totalCards: number
  progress: ReturnType<typeof useSpring>
}) {
  const start = index / totalCards
  const end = (index + 1) / totalCards
  const midPoint = (start + end) / 2

  const scale = useTransform(progress, [start, midPoint, end], [1, 0.95, 0.85])
  const opacity = useTransform(progress, [start, midPoint, end - 0.05, end], [1, 1, 0.8, 0])
  const y = useTransform(progress, [start, end], [0, -150])
  const rotateX = useTransform(progress, [start, end], [0, -5])

  const blur = useTransform(progress, [start, midPoint, end], [0, 0, 4])

  return (
    <motion.div
      style={{
        scale,
        opacity,
        y,
        rotateX,
        filter: useTransform(blur, (v) => `blur(${v}px)`),
        zIndex: totalCards - index,
        transformPerspective: 1200,
        transformStyle: "preserve-3d",
      }}
      className={`absolute mx-auto w-full max-w-5xl ${card.bgColor} rounded-3xl p-6 shadow-2xl md:p-10`}
    >
      <div
        className="absolute inset-0 rounded-3xl opacity-30"
        style={{
          background: `linear-gradient(135deg, ${card.accent}40 0%, transparent 50%)`,
        }}
      />

      <div className="relative grid items-center gap-8 md:grid-cols-2">
        {/* Image */}
        <motion.div
          className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-xl"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image src={card.image || "/placeholder.svg"} alt={card.title} fill className="object-cover" />
          <div className={`absolute inset-0 bg-gradient-to-t ${card.theme} opacity-20`} />

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="absolute bottom-4 right-4 rounded-full bg-cream/90 px-4 py-2 shadow-lg backdrop-blur-sm"
          >
            <span className="font-serif text-lg font-bold text-coffee">Must Try!</span>
          </motion.div>
        </motion.div>

        {/* Content */}
        <div className="text-center md:text-left">
          <motion.span
            className={`inline-block rounded-full bg-gradient-to-r ${card.theme} px-4 py-1.5 text-sm font-semibold text-cream shadow-md`}
            whileHover={{ scale: 1.05 }}
          >
            #{index + 1} Fan Favorite
          </motion.span>
          <h3 className="mt-4 font-serif text-3xl text-coffee md:text-4xl lg:text-5xl">{card.title}</h3>
          <p className="mt-4 text-lg leading-relaxed text-coffee/70">{card.description}</p>

          <motion.div
            className="mt-6 flex items-center justify-center gap-3 md:justify-start"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="flex items-center gap-2 rounded-full bg-saffron/10 px-4 py-2">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-saffron opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-saffron"></span>
              </span>
              <span className="font-medium text-saffron">Trending in Raipur</span>
            </span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
