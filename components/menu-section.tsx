"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Leaf, Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const menuCategories = [
  "All",
  "Beverages",
  "Thatte Idli",
  "Special Idli",
  "Idli & Vada",
  "Benne Dose",
  "Set Dose",
  "Uttapam",
  "Rice Specials",
  "Sweets",
  "Snacks",
]

const menuItems = [
  // Beverages
  {
    id: 1,
    name: "Filter Coffee",
    price: 33,
    category: "Beverages",
    desc: "Traditional South Indian hot coffee.",
    popular: true,
  },
  {
    id: 2,
    name: "Butter Milk (Chhaach)",
    price: 43,
    category: "Beverages",
    desc: "Spiced refreshing buttermilk.",
    popular: true,
  },
  {
    id: 3,
    name: "Kesar Badam Lassi",
    price: 62,
    category: "Beverages",
    desc: "Rich sweet yogurt drink with saffron and almonds.",
  },
  { id: 4, name: "Lemon Water", price: 38, category: "Beverages", desc: "Fresh lime water.", popular: true },
  // Thatte Idli
  {
    id: 10,
    name: "Thatte Idli Plain",
    price: 71,
    category: "Thatte Idli",
    desc: "Special thick idli aka Idla. (1pc)",
    jain: true,
  },
  {
    id: 11,
    name: "Ghee Thatte Idli",
    price: 86,
    category: "Thatte Idli",
    desc: "Special thick idli with podi masala and pure ghee. (1pc)",
    popular: true,
    jain: true,
  },
  // Special Idli
  {
    id: 20,
    name: "Special Coconut Shell Idli",
    price: 71,
    category: "Special Idli",
    desc: "Steamed in a coconut shell for earthy flavor. (1pc)",
    popular: true,
    jain: true,
  },
  {
    id: 21,
    name: "Special Charcoal Idli",
    price: 90,
    category: "Special Idli",
    desc: "Infused with activated charcoal. (2pc)",
    jain: true,
  },
  // Idli & Vada
  {
    id: 30,
    name: "Idli Sambhar",
    price: 48,
    category: "Idli & Vada",
    desc: "Classic steamed idlis served with sambhar & chutney. (2pc)",
    jain: true,
  },
  {
    id: 31,
    name: "Idli Sambhar Dip",
    price: 57,
    category: "Idli & Vada",
    desc: "Idlis dipped in hot sambhar bowl. (2pc)",
    jain: true,
  },
  {
    id: 32,
    name: "Ghee Podi Idli",
    price: 71,
    category: "Idli & Vada",
    desc: "Regular idli tossed in podi masala and ghee. (2pc)",
    popular: true,
    jain: true,
  },
  {
    id: 33,
    name: "Mini Idli",
    price: 71,
    category: "Idli & Vada",
    desc: "12 pieces of bite-sized steamed idlis.",
    jain: true,
  },
  {
    id: 34,
    name: "Ghee Podi Mini Idli",
    price: 90,
    category: "Idli & Vada",
    desc: "12 Mini idlis tossed in spicy podi and ghee.",
    popular: true,
    jain: true,
  },
  {
    id: 35,
    name: "Vada Sambhar",
    price: 71,
    category: "Idli & Vada",
    desc: "Crispy lentil donuts. (Jain option available)",
    jain: true,
  },
  {
    id: 36,
    name: "Idli Vada Mix",
    price: 71,
    category: "Idli & Vada",
    desc: "One idli and one vada combination.",
    jain: true,
  },
  // Benne Dose
  {
    id: 40,
    name: "Plain Dose",
    price: 71,
    category: "Benne Dose",
    desc: "The Bengaluru style classic plain dosa.",
    jain: true,
  },
  {
    id: 41,
    name: "Benne Masala Dose",
    price: 119,
    category: "Benne Dose",
    desc: "Butter masala dosa with potato sagu.",
  },
  {
    id: 42,
    name: "Ghee Podi Masala Dose",
    price: 129,
    category: "Benne Dose",
    desc: "Masala dosa with generous ghee & podi masala.",
    popular: true,
    jain: true,
  },
  {
    id: 43,
    name: "Open Benne Masala Dose",
    price: 129,
    category: "Benne Dose",
    desc: "Served open-faced with butter and chutney powder.",
    popular: true,
  },
  {
    id: 44,
    name: "Ginnu Masala Dose",
    price: 138,
    category: "Benne Dose",
    desc: "Cheese Masala Dosa Bengaluru style.",
  },
  // Set Dose
  {
    id: 50,
    name: "Set Plain Dose",
    price: 100,
    category: "Set Dose",
    desc: "Soft, fluffy, sponge-like dosa. (2pc)",
    jain: true,
  },
  {
    id: 51,
    name: "Set Masala Dose",
    price: 119,
    category: "Set Dose",
    desc: "Soft set dosa served with sagu/masala. (2pc)",
    popular: true,
  },
  // Uttapam
  {
    id: 60,
    name: "Onion Uttapam",
    price: 119,
    category: "Uttapam",
    desc: "Thick pancake topped with onions.",
    popular: true,
  },
  {
    id: 61,
    name: "Tomato Uttapam",
    price: 119,
    category: "Uttapam",
    desc: "Thick pancake topped with tomatoes.",
    jain: true,
  },
  { id: 62, name: "Mix Uttapam", price: 119, category: "Uttapam", desc: "Topped with mixed vegetables." },
  // Rice Specials
  {
    id: 70,
    name: "Tomato Rice",
    price: 110,
    category: "Rice Specials",
    desc: "Tangy spiced rice served with raita.",
    popular: true,
  },
  {
    id: 71,
    name: "Lemon Rice",
    price: 110,
    category: "Rice Specials",
    desc: "Zesty lemon flavored rice served with raita.",
  },
  { id: 72, name: "Curd Rice", price: 110, category: "Rice Specials", desc: "Comforting yogurt rice.", jain: true },
  {
    id: 73,
    name: "Veg Biryani",
    price: 148,
    category: "Rice Specials",
    desc: "Aromatic rice with veggies and spices.",
    popular: true,
  },
  // Sweets
  { id: 80, name: "Payasam", price: 62, category: "Sweets", desc: "Traditional sweet pudding.", popular: true },
  {
    id: 81,
    name: "Pineapple Rava Keshri",
    price: 62,
    category: "Sweets",
    desc: "Semolina sweet with pineapple flavor.",
  },
  { id: 82, name: "Melting Paan", price: 38, category: "Sweets", desc: "Sweet betel leaf treat.", popular: true },
  // Snacks
  { id: 83, name: "Upma", price: 67, category: "Snacks", desc: "Savory semolina breakfast dish.", popular: true },
  { id: 84, name: "Moongodi", price: 95, category: "Snacks", desc: "Crispy moong dal fritters." },
  { id: 85, name: "Dahi Bhalla", price: 95, category: "Snacks", desc: "Lentil dumplings in yogurt. (3pc)", jain: true },
]

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [isSticky, setIsSticky] = useState(false)
  const tabsRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const tabContainerRef = useRef<HTMLDivElement>(null)

  const filteredItems =
    activeCategory === "All" ? menuItems : menuItems.filter((item) => item.category === activeCategory)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && tabsRef.current) {
        const sectionTop = sectionRef.current.offsetTop
        const sectionBottom = sectionTop + sectionRef.current.offsetHeight
        const scrollY = window.scrollY
        const tabsHeight = tabsRef.current.offsetHeight

        setIsSticky(scrollY >= sectionTop - 80 && scrollY < sectionBottom - tabsHeight - 200)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollTabs = (direction: "left" | "right") => {
    if (tabContainerRef.current) {
      const scrollAmount = 200
      tabContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section ref={sectionRef} id="menu" className="bg-cream-dark py-12 md:py-20">
      {/* Section Header */}
      <div className="mx-auto max-w-7xl px-4 pb-8 text-center sm:px-6 lg:px-8">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 inline-block rounded-full bg-leaf-green/10 px-4 py-2 text-sm font-medium text-leaf-green"
        >
          Our Menu
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-3xl text-coffee sm:text-4xl md:text-5xl"
        >
          Authentic <span className="text-saffron">South Indian</span> Delicacies
        </motion.h2>
      </div>

      {/* Sticky Category Tabs */}
      <div
        ref={tabsRef}
        className={`z-40 bg-cream-dark/95 backdrop-blur-md transition-all duration-300 ${
          isSticky ? "fixed top-16 left-0 right-0 shadow-md md:top-20" : ""
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center">
            {/* Scroll Left Button */}
            <button
              onClick={() => scrollTabs("left")}
              className="absolute left-0 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-cream shadow-md hover:bg-saffron/10 md:hidden"
            >
              <ChevronLeft className="h-4 w-4 text-coffee" />
            </button>

            {/* Tabs Container */}
            <div
              ref={tabContainerRef}
              className="scrollbar-hide mx-8 flex gap-2 overflow-x-auto md:mx-0 md:flex-wrap md:justify-center"
            >
              {menuCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    activeCategory === category ? "bg-saffron text-cream" : "bg-cream text-coffee hover:bg-saffron/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Scroll Right Button */}
            <button
              onClick={() => scrollTabs("right")}
              className="absolute right-0 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-cream shadow-md hover:bg-saffron/10 md:hidden"
            >
              <ChevronRight className="h-4 w-4 text-coffee" />
            </button>
          </div>
        </div>
      </div>

      {/* Spacer when sticky */}
      {isSticky && <div className="h-16" />}

      {/* Menu Grid */}
      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-2xl bg-cream p-5 shadow-md transition-all hover:shadow-xl"
              >
                {/* Badges */}
                <div className="absolute right-3 top-3 flex flex-col gap-2">
                  {item.popular && (
                    <span className="flex items-center gap-1 rounded-full bg-saffron px-2 py-1 text-xs font-semibold text-cream">
                      <Star className="h-3 w-3 fill-current" />
                      Must Try!
                    </span>
                  )}
                  {item.jain && (
                    <span className="flex items-center gap-1 rounded-full bg-leaf-green px-2 py-1 text-xs font-semibold text-cream">
                      <Leaf className="h-3 w-3" />
                      Jain
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="pt-2">
                  <h3 className="pr-16 font-serif text-lg text-coffee">{item.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-coffee/60">{item.desc}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xl font-bold text-saffron">₹{item.price}</span>
                    <span className="rounded-full bg-saffron/10 px-3 py-1 text-xs font-medium text-saffron">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-saffron/5 to-leaf-green/5 opacity-0 transition-opacity group-hover:opacity-100" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Order CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="mb-4 text-coffee/70">Ready to order? Get it delivered to your doorstep!</p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="w-full bg-[#E23744] px-8 hover:bg-[#C62D3C] sm:w-auto">
              <a href="https://zomato.com" target="_blank" rel="noopener noreferrer">
                Order on Zomato
              </a>
            </Button>
            <Button asChild size="lg" className="w-full bg-[#FC8019] px-8 hover:bg-[#E5720F] sm:w-auto">
              <a href="https://swiggy.com" target="_blank" rel="noopener noreferrer">
                Order on Swiggy
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
