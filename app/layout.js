import { Inter } from "next/font/google";
import "./globals.css";
import 'remixicon/fonts/remixicon.css'
import ToasterContext from "@/context/ToasterContext";
import { GlobalContextProvider } from "@/context/GlobalContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  icons: {
    icon: "/images/logo2.png",
    apple: "/images/logo2.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToasterContext />
        <GlobalContextProvider>
          {children}
        </GlobalContextProvider>

      </body>
    </html>
  );
}
