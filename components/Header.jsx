import Link from "next/link";
import { Button } from "./ui/button";
// componente
import Nav from "./Nav";
import MobileNav from "./MobileNav"

const Header = () => {
  return (
    <header className="py-8 xl:py-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
            {/* LOGO */}
            {/* <Link href="/">
            <h1 className="text4xl font-semibold">Gre<span className="text-accent">co</span></h1>
            <img src="./" alt="" /> 
            </Link> */}

            <Link href="/">
              <img src="/assets/logo-branca.png" alt="Logo" className="h-10" />
            </Link>

            {/* desktop nav & botão de contato */}
            <div className="hidden xl:flex items-center gap-8">
                <Nav />
                <Link href="/contato">
                    <Button>Mensagem</Button>
                </Link>
            </div>

            {/* mobile nav */}
            <div className="xl:hidden">
              <MobileNav />
            </div>
        </div>
    </header>
  );
};

export default Header;