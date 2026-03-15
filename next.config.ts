import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",

      // Scripts: self + GTM + Google Analytics + Crisp + CookieHub
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://client.crisp.chat https://cdn.cookiehub.eu",

      // Styles: self + Google Fonts + Crisp
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://client.crisp.chat",

      // Fonts: self + Google Fonts + Crisp
      "font-src 'self' https://fonts.gstatic.com https://client.crisp.chat",

      // Images: self + Unsplash + Google Maps + Crisp + CookieHub + data URIs
      "img-src 'self' https://images.unsplash.com https://maps.gstatic.com https://maps.googleapis.com https://client.crisp.chat https://image.crisp.chat https://storage.crisp.chat data: blob:",

      // Frames: Google Maps + Crisp
      "frame-src https://maps.google.com https://www.google.com https://game.crisp.chat",

      // Connections: self + Analytics + GTM + Crisp (incl. websocket) + CookieHub
      "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://client.crisp.chat https://storage.crisp.chat wss://client.relay.crisp.chat wss://stream.relay.crisp.chat https://api.crisp.chat https://cdn.cookiehub.eu",

      // Media: Crisp (voice messages)
      "media-src 'self' https://client.crisp.chat",

      "worker-src 'self' blob:",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;