import { ArrowForwardCircleOutline } from "react-ionicons"

const Button = ({ className="" }) => (
    <button className={ className + " px-3 py-1 flex items-center border-2 border-black uppercase" }>
        <span className="mr-3">Vote</span>
        <ArrowForwardCircleOutline />
    </button>
)

export default Button