import { Expletus_Sans } from "next/font/google";
import "./globals.css";
import Sidebar from "./containers/Sidebar";
import Header from "./components/Header";

const inter = Expletus_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Edvin johnson - Portfolio",
  description: "web developer portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col md:flex-row gap-2 p-3">
          <div className="md:w-1/3 bg-zinc-900 rounded-xl text-sm md:sticky md:top-0 md:h-3/4 py-5">
            <Sidebar/>
          </div>
          <div className="w-full rounded-xl bg-zinc-900">
        <Header/>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
