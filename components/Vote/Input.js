const Input = ({ ...props}) => {

    return (
        <input className="mb-2 py-2 px-3 border-2 border-black outline-none disabled:cursor-not-allowed disabled:bg-gray-200" autoComplete="off" { ...props } />
    )
}

export default Input