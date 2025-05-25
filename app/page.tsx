"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shovel, Shield, Zap } from "lucide-react";
import { useTheme } from "next-themes";

export default function ComingSoonPage() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const storedEmail = localStorage.getItem("sandkiste_waitlist_email");
    if (storedEmail) {
      setIsSubmitted(true);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://bearbot.dev/api/database/rows/table/702/?user_field_names=true",
        {
          method: "POST",
          headers: {
            Authorization: getObfuscatedToken().replaceAll("j0s", "5j0sM"),
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ Email: email }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      localStorage.setItem("sandkiste_waitlist_email", email);
      setIsSubmitted(true);
      setEmail("");
    } catch (err) {
      console.error("Fehler beim Senden:", err);
      alert("Fehler beim Eintragen. Bitte versuch es erneut.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,65,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,65,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4 text-white">
        <div className="flex flex-col items-center justify-center text-center space-y-16 max-w-4xl w-full">
          <div className="flex items-center justify-center gap-3">
            <div className="relative">
              <Shovel className="h-8 w-8 md:h-10 md:w-10 text-green-400 drop-shadow-[0_0_10px_rgba(0,255,65,0.5)]" />
              <div className="absolute inset-0 h-8 w-8 md:h-10 md:w-10 bg-green-400/20 rounded-full blur-lg" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white/90">
              Sandkiste.io
            </h1>
          </div>

          <div className="space-y-6">
            <div className="relative">
              <p className="text-6xl md:text-8xl lg:text-9xl font-black text-green-400 drop-shadow-[0_0_30px_rgba(0,255,65,0.5)]">
                F*CK
              </p>
              <p className="text-6xl md:text-8xl lg:text-9xl font-black text-red-500 drop-shadow-[0_0_30px_rgba(239,68,68,0.5)] -mt-4">
                PHISHING
              </p>
              <div className="absolute inset-0 text-6xl md:text-8xl lg:text-9xl font-black text-green-400/20 blur-sm">
                F*CK
              </div>
              <div className="absolute inset-0 text-6xl md:text-8xl lg:text-9xl font-black text-red-500/20 blur-sm -mt-4">
                PHISHING
              </div>
            </div>

            <p className="text-xl md:text-2xl text-green-300 font-mono max-w-3xl">
              {">"} Next-gen sandbox environment detecting threats in real-time
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 backdrop-blur-sm rounded-lg border border-green-500/30">
              <Shield className="h-4 w-4 text-green-400" />
              <span className="text-sm font-mono text-green-400">SECURITY</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 backdrop-blur-sm rounded-lg border border-green-500/30">
              <Zap className="h-4 w-4 text-green-400" />
              <span className="text-sm font-mono text-green-400">
                REAL-TIME
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 backdrop-blur-sm rounded-lg border border-green-500/30">
              <span className="text-sm font-mono text-green-400">
                AI-POWERED
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Coming Soon</h2>
            <p className="text-lg text-white/70 max-w-2xl font-mono">
              Building the ultimate defense against phishing attacks.
            </p>
          </div>

          <div className="w-full max-w-md space-y-6">
            <h3 className="text-xl font-semibold text-green-400 font-mono">
              {">"} Join Waitlist
            </h3>

            {isSubmitted ? (
              <div className="p-6 bg-green-500/20 backdrop-blur-sm border border-green-400/50 rounded-lg">
                <p className="text-green-300 font-mono">
                  {">"} Access granted. You're in the system.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-black/50 backdrop-blur-sm border-green-500/30 text-green-400 placeholder:text-green-400/50 focus:border-green-400 focus:ring-green-400/20 h-12 text-lg font-mono"
                  disabled={isSubmitting}
                />
                <Button
                  type="submit"
                  className="w-full h-12 text-lg font-mono bg-green-500/20 hover:bg-green-500/30 border border-green-500/50 text-green-400 shadow-[0_0_20px_rgba(0,255,65,0.2)] hover:shadow-[0_0_30px_rgba(0,255,65,0.4)] transition-all duration-300"
                  disabled={isSubmitting || !email}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-green-400/30 border-t-green-400 rounded-full animate-spin" />
                      {">"} Connecting...
                    </span>
                  ) : (
                    <>{">"} Get Early Access</>
                  )}
                </Button>
              </form>
            )}
          </div>

          <div className="pt-8 text-sm text-green-400/60">
            <p className="font-mono">
              &copy; 2025 Sandkiste.io • Hacking back against phishing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

