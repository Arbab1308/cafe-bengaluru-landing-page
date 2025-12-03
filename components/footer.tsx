"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Clock, Instagram, Facebook, Twitter, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Menu", href: "#menu" },
  { name: "Our Story", href: "#story" },
  { name: "Contact", href: "#contact" },
]

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
]

export default function Footer() {
  return (
    <footer id="contact" className="bg-coffee text-cream">
      <div className="w-full h-[300px] md:h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.002!2d81.6297!3d21.2514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dde234c77a43%3A0x52e29ab78ec93f91!2sCafe%20Bengaluru!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Cafe Bengaluru Location"
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div>
              <h3 className="font-serif text-2xl">Cafe Bengaluru</h3>
              <p className="text-xs tracking-widest text-saffron">SOUTH INDIAN CAFE</p>
            </div>
            <p className="mt-4 max-w-md leading-relaxed text-cream/70">
              Bringing the authentic taste of Karnataka to Raipur. Experience the warmth of South Indian hospitality
              with every bite.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 transition-colors hover:bg-saffron"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="sm" className="bg-saffron text-cream hover:bg-saffron-dark">
                <a
                  href="https://www.swiggy.com/city/raipur/cafe-bengaluru-shrinagar-rest739473"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Swiggy
                </a>
              </Button>
              <Button
                asChild
                size="sm"
                variant="outline"
                className="border-cream/30 text-cream hover:bg-cream/10 bg-transparent"
              >
                <a href="http://zoma.to/r/20767801" target="_blank" rel="noopener noreferrer">
                  Zomato
                </a>
              </Button>
              <Button
                asChild
                size="sm"
                variant="outline"
                className="border-cream/30 text-cream hover:bg-cream/10 bg-transparent"
              >
                <a
                  href="https://www.justdial.com/Raipur-Chhattisgarh/Cafe-Bengaluru-Opposite-Udyog-Bhawan-Near-M-Silver-Plaza-New-Rajendra-Nagar/9999PX771-X771-231104182430-Y7L8_BZDET"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-1 h-3 w-3" />
                  JustDial
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-serif text-lg">Quick Links</h4>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-cream/70 transition-colors hover:text-saffron">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-serif text-lg">Visit Us</h4>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-saffron" />
                <a
                  href="https://maps.app.goo.gl/Li2pNkVRsnZsoJbi6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/70 hover:text-saffron transition-colors"
                >
                  6MJ7+QGH MM Silver Plaza,
                  <br />
                  Udyodh Bhavan, Mahaveer Nagar,
                  <br />
                  Raipur, Chhattisgarh 492001
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-saffron" />
                <span className="text-cream/70">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 shrink-0 text-saffron" />
                <span className="text-cream/70">8:00 AM - 10:00 PM</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 md:flex-row">
          <p className="text-sm text-cream/50">© {new Date().getFullYear()} Cafe Bengaluru. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-cream/50">
            <Link href="#" className="hover:text-saffron">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-saffron">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
