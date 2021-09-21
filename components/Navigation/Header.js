import { LeafOutline } from "react-ionicons"

import Anchor from "./Anchor"
import Link from "../Link"

const Header = () => (
    <header className="p-4 fixed top-0 left-0 w-full z-20">
        <div className="border-2 border-black w-full flex items-center justify-between bg-white p-4">
            <Link href="/" className="flex items-center">
                <div className="border-2 border-black flex items-center justify-center w-12 h-12">
                    <LeafOutline />
                    </div>

                <span className="ml-4 font-semibold text-2xl uppercase">Harvest Festival</span>
            </Link>

            <nav className="flex gap-4">
                <Anchor href="/vote">Vote</Anchor>
                <Anchor href="/news">News</Anchor>
                <Anchor href="/about">Activities</Anchor>
            </nav>
        </div>
    </header>
)

export default Header