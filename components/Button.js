import { ArrowForwardCircleOutline } from "react-ionicons"

const Button = ({ className="", children, ...props }) => (
    <button className={ className + " px-3 py-2 flex items-center border-2 border-black uppercase" } { ...props }>
        <span className="mr-3">{ children }</span>
        <ArrowForwardCircleOutline />
    </button>
)

export default Button