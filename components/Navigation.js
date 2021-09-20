import { LeafOutline } from "react-ionicons"

const NavigationLink = ({ href, children }) => (
    <a href={ href } className="group relative font-semibold text-xl">
        { children }

        <div className="bg-black w-full h-0.5 transition-opacity opacity-0 group-hover:opacity-100"></div>
    </a>
)

const Navigation = () => (
    <header className="p-4">
        <div className="border-2 border-black w-full flex items-center justify-between p-4">
            <a href="/" className="flex items-center">
                <div className="border-2 border-black flex items-center justify-center w-12 h-12">
                    <LeafOutline />
                </div>

                <span className="ml-4 font-semibold text-2xl uppercase">Harvest Festival</span>
            </a>

            <nav className="flex gap-6">
                <NavigationLink href="/vote">Vote</NavigationLink>
                <NavigationLink href="/news">News</NavigationLink>
                <NavigationLink href="/about">Activities</NavigationLink>
            </nav>
        </div>
    </header>
)

export default Navigation