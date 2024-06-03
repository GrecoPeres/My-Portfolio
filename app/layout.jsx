import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// meus componentes
import Header from "../components/Header";
import PageTransition from "../components/PageTransition";
import StairTransition from "../components/StairTransition";

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrainsMono'
});

export const metadata = {
  title: "Greco Peres - Desenvolvedor Web & Mobile",
  description: "Portfólio de Greco Peres, desenvolvedor especializado em soluções web e mobile com mais de 3 anos de experiência. Conheça meus projetos, habilidades e trajetória profissional.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/logo-preto.ico" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
