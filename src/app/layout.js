import "./globals.css"
import { Playfair_Display, Poppins } from "next/font/google"

import Navbar from "./components/Navbar"


const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
})

export const metadata = {
  title: "RICH & MILLER",
  description: "inspirational home improvment",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />   {/* ✅ now it shows on every page */}
        <main >{children}</main>
      </body>
    </html>
  )
}