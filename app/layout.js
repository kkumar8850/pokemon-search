import { Poppins } from "next/font/google";
import "./globals.css";
import ErrorBoundary from "./component/ErrorBoundary";

const poppinsSans = Poppins({
  variable: "--font-poppins-sans",
  subsets: ["latin"],
  weight : ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata = {
  title: "Pokemon Search App",
  description: "Search Pokemon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppinsSans.className} antialiased`}
      >
        <ErrorBoundary>
        {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}
