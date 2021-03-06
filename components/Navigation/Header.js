import { LeafOutline } from "react-ionicons"

import Anchor from "./Anchor"
import Link from "../Link"

const Header = () => (
    <header className="p-4 fixed top-0 left-0 w-full z-20">
        <div className="border-2 border-black w-full flex items-center justify-between bg-white p-4">
            <Link href="/" className="flex items-center">
                <div className="border-2 border-black flex items-center justify-center w-10 h-10 md:w-12 md:h-12">
                    <LeafOutline />
                </div>

                <span className="ml-4 font-semibold text-2xl uppercase hidden sm:inline-flex">Harvest Festival</span>
            </Link>

            <nav className="flex gap-4">
                <Anchor href="/vote">Vote</Anchor>
                <Anchor href="/news">News</Anchor>
                <Anchor href="https://deloro.farm" real>About</Anchor>
            </nav>
        </div>
    </header>
)

export default Header