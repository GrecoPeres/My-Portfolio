"use client";

import {Sheet, SheetContent, SheetTrigger} from '../components/ui/sheet';
import {usePathname} from 'next/navigation';
import Link from "next/link";
import { CiMenuFries } from 'react-icons/ci';

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
        name: "experiencia",
        path: "/experiencia",
    },
    {
        name: "contato",
        path: "/contato",
    },
]

const MobileNav = () => {
    const pathname = usePathname();
        return (
            <Sheet>
                <SheetTrigger className="flex justify-center items-center">
                    <CiMenuFries className="text-[32px] text-teal-300" />
                </SheetTrigger>
                <SheetContent className="flex flex-col">
                    <div className="mt-10 mb-20 text-center text-2xl flex justify-center">
                        <Link href="/">
                            {/* <h1 className='text-4xl font-semibold'>
                                Gre<span className='text-teal-300'>co</span>
                            </h1> */}
                            <img src="/assets/Logo-Branca-Full.png" width={100} height={100} alt="Logo" />
                        </Link>
                    </div>

                    <nav className='flex flex-col justify-center items-center gap-8'>
                        {links.map((link, index)=> {
                            return(
                                <Link href={link.path} key={index} className={`${link.path === pathname && "text-teal-300 border-b-2 border-teal-300"} text-xl capitalize hover:text-teal-300 transition-all`}>
                                    {link.name}
                                </Link>
                            )
                        })}
                    </nav>
                </SheetContent>
            </Sheet>
        )
}

export default MobileNav