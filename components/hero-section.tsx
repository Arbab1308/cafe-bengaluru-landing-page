"use client"

import { motion } from "framer-motion"
import { ArrowDown, MapPin, Clock, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-cream to-cream-dark pt-20"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 top-20 h-96 w-96 rounded-full bg-saffron/5 blur-3xl" />
        <div className="absolute -left-20 bottom-20 h-80 w-80 rounded-full bg-leaf-green/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-20 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-saffron/10 px-4 py-2"
            >
              <span className="flex h-2 w-2 rounded-full bg-saffron" />
              <span className="text-sm font-medium text-saffron">Now Open in Raipur</span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="font-serif text-4xl leading-tight text-coffee sm:text-5xl md:text-6xl lg:text-7xl">
              The Taste of <span className="text-saffron">Karnataka</span>, Now in{" "}
              <span className="text-leaf-green">Raipur</span>
            </h1>

            {/* Subheading */}
            <p className="mt-6 text-lg text-coffee/70 md:text-xl">
              Pure Ghee. Authentic Spices. <span className="font-semibold text-saffron">Unmatched Vibe.</span>
            </p>

            {/* Stats */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-gold text-gold" />
                <span className="font-semibold text-coffee">4.5</span>
                <span className="text-sm text-coffee/60">Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-leaf-green" />
                <span className="text-sm text-coffee/60">8 AM - 10 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-saffron" />
                <span className="text-sm text-coffee/60">Raipur, CG</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <Button asChild size="lg" className="w-full bg-saffron px-8 text-cream hover:bg-saffron-dark sm:w-auto">
                <a href="#menu">Explore Menu</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full border-leaf-green text-leaf-green hover:bg-leaf-green hover:text-cream sm:w-auto bg-transparent"
              >
                <a href="#story">Our Story</a>
              </Button>
            </div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative mx-auto aspect-square max-w-lg lg:max-w-none">
              {/* Background decorative circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-saffron/20 to-leaf-green/20" />

              {/* Main Image */}
              <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="/images/image.png"
                  alt="Delicious Ghee Roast Dosa served on banana leaf"
                  width={600}
                  height={600}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -left-4 top-1/4 rounded-xl bg-cream p-3 shadow-xl md:p-4"
              >
                <p className="text-xs font-semibold text-coffee md:text-sm">Viral Hit</p>
                <p className="text-xs text-coffee/60">Ghee Podi Idli</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                className="absolute -right-4 bottom-1/4 rounded-xl bg-cream p-3 shadow-xl md:p-4"
              >
                <p className="text-xs font-semibold text-coffee md:text-sm">Fresh Brew</p>
                <p className="text-xs text-coffee/60">Filter Kaapi</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-coffee/60">Scroll to explore</span>
            <ArrowDown className="h-5 w-5 text-saffron" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
