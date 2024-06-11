"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "servicos",
        path: "/servicos",
    },
    {
        name: "sobre",
        path: "/sobre",
    },
    {
        name: "portfolio",
        path: "/portfolio",
    },
    {
        name: "contato",
        path: "/contato",
    },
]
const Nav = () => {
    const pathname = usePathname();
    return (
        <nav className="flex gap-8">{links.map((link, index) => {
            return (
                <Link href={link.path} key={index} className={`${link.path === pathname && "text-teal-300 border-b-2 border-teal-300"} capitalize font-medium hover:text-teal-300 transition-all`}>
                    {link.name}
                </Link>
            );
        })}
        </nav>
    );
};

export default Nav