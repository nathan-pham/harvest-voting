import NavigationHeader from "components/Navigation/Header"
import Button from "components/Button"
import Root from "components/Root"

const VoteInput = (props) => (
    <input className="mb-2 py-2 px-3 border-2 border-black outline-none" { ...props } />
)

const Vote = () => (
    <Root>
        <NavigationHeader />

        <div className="mt-28 px-4">
            <div className="border-2 border-black bg-white p-4">
                <h1 className="text-3xl font-semibold mt-4">Vote for the Best Car</h1>
                <p className="mt-2">Enter a booth name!</p>
                    
                <form className="mt-6 flex flex-col items-start">
                    <VoteInput placeholder="Best decorated" />
                    <VoteInput placeholder="Best theme" />
                    <VoteInput placeholder="Spookiest" />

                    <Button>Submit</Button>
                    {/* <button className="border-2 border-black py-2 px-3">Submit</button> */}
                </form>
            </div>
        </div>
    </Root>
)

export default Vote