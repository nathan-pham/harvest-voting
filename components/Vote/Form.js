import Button from "../Button"
import Input from "./Input"

const Form = () => {
    return (
        <div className="mt-28 px-4">
            <div className="border-2 border-black bg-white p-4">
                <h1 className="text-3xl font-semibold mt-4">Vote for the Best Car</h1>
                <p className="mt-2">Enter a booth name!</p>
                    
                <form className="mt-6 flex flex-col items-start">
                    <Input placeholder="Best decorated" />
                    <Input placeholder="Best theme" />
                    <Input placeholder="Spookiest" />

                    <Button>Submit</Button>
                </form>
            </div>
        </div>
    )
}

export default Form