"use client"

import { motion } from "framer-motion"
import { Star, Users, TrendingUp, Award } from "lucide-react"
import Image from "next/image"

const stats = [
  { icon: Star, value: "4.5+", label: "Average Rating", color: "text-gold" },
  { icon: Users, value: "10K+", label: "Happy Customers", color: "text-saffron" },
  { icon: TrendingUp, value: "#1", label: "Trending in Raipur", color: "text-leaf-green" },
  { icon: Award, value: "100%", label: "Authentic Recipes", color: "text-coffee" },
]

const testimonials = [
  {
    text: "Best dosa I've had outside Bangalore! The ghee podi idli is absolutely divine.",
    author: "Priya S.",
    rating: 5,
  },
  {
    text: "Finally, authentic South Indian food in Raipur. The filter coffee transported me to Karnataka!",
    author: "Rahul M.",
    rating: 5,
  },
  {
    text: "The ambience and food both are top-notch. Must visit for anyone craving authentic South Indian cuisine.",
    author: "Sneha K.",
    rating: 5,
  },
]

const galleryImages = [
  {
    src: "/images/image.png",
    alt: "Authentic dosa served on wooden table at Cafe Bengaluru",
    title: "Warm Vibes",
    subtitle: "Authentic flavors in a cozy setting",
    className: "sm:col-span-2 lg:row-span-2 aspect-[3/4]",
  },
  {
    src: "/images/image.png",
    alt: "Cafe Bengaluru spacious dining area with beautiful arches",
    title: "Grand Dining",
    subtitle: "Architecture meets authenticity",
    className: "sm:col-span-2 lg:col-span-2 aspect-video",
  },
]

export default function SocialProof() {
  return (
    <section className="bg-cream py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-block rounded-full bg-saffron/10 px-4 py-2 text-sm font-medium text-saffron"
          >
            Why People Love Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl text-coffee sm:text-4xl md:text-5xl"
          >
            Going <span className="text-saffron">Viral</span> in Raipur
          </motion.h2>
        </div>

        {/* Stats Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl bg-cream-dark p-6 text-center shadow-md"
            >
              <stat.icon className={`mx-auto h-8 w-8 ${stat.color}`} />
              <p className={`mt-4 font-serif text-4xl ${stat.color}`}>{stat.value}</p>
              <p className="mt-2 text-sm text-coffee/70">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Ambience Gallery - Updated with new images */}
        <div className="mt-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 text-center font-serif text-2xl text-coffee md:text-3xl"
          >
            Experience the <span className="text-leaf-green">Vibe</span>
          </motion.h3>

          <div className="grid gap-4 md:grid-cols-2">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`relative overflow-hidden rounded-2xl shadow-xl ${image.className}`}
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={index * 150}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee/70 via-coffee/20 to-transparent" />
                <div className="absolute bottom-4 left-4 text-cream">
                  <p className="font-serif text-xl md:text-2xl">{image.title}</p>
                  <p className="text-sm opacity-80">{image.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 text-center font-serif text-2xl text-coffee md:text-3xl"
          >
            What Our Customers Say
          </motion.h3>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl bg-cream-dark p-6 shadow-md"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={index * 100}
              >
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="mt-4 text-coffee/80">&ldquo;{testimonial.text}&rdquo;</p>
                <p className="mt-4 font-semibold text-saffron">— {testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
