import { Linkedin, Instagram, Facebook } from "lucide-react"

export default function SocialLinks() {
  const socialLinks = [
    { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com/company/globanapay", label: "LinkedIn" },
    { icon: <Instagram className="h-5 w-5" />, href: "https://www.instagram.com/globanapay/", label: "Instagram" },
    { icon: <Facebook className="h-5 w-5" />, href: "https://www.facebook.com/61583602229773/", label: "Facebook" },
  ]

  return (
    <div className="flex space-x-4">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          aria-label={link.label}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-colors hover:bg-[#1D3557] hover:text-white"
        >
          {link.icon}
        </a>
      ))}
    </div>
  )
}
