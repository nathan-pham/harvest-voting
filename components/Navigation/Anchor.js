import Link from "next/link"

const Anchor = ({ href, children }) => (
    <Link href={ href }>
        <a className="group relative font-semibold text-xl mr-2">
            { children }

            <div className="bg-black w-full h-0.5 transition-opacity opacity-0 group-hover:opacity-100"></div>
        </a>
    </Link>
)

export default Anchor
