import Anchor from "./Anchor"
import { LeafOutline } from "react-ionicons"

const Header = () => (
    <header className="p-4">
        <div className="border-2 border-black w-full flex items-center justify-between p-4">
            <a href="/" className="flex items-center">
                <div className="border-2 border-black flex items-center justify-center w-12 h-12">
                    <LeafOutline />
                </div>

                <span className="ml-4 font-semibold text-2xl uppercase">Harvest Festival</span>
            </a>

            <nav className="flex gap-6">
                <Anchor href="/vote">Vote</Anchor>
                <Anchor href="/news">News</Anchor>
                <Anchor href="/about">Activities</Anchor>
            </nav>
        </div>
    </header>
)

export default Header