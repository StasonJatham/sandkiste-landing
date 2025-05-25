/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <-- Wichtig für statischen Export (Next.js 13+)

  trailingSlash: true, // optional – sorgt für saubere index.html in jedem Ordner

  images: {
    unoptimized: true, // notwendig für <Image />, da kein Server zum Optimieren
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig