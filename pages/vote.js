import NavigationHeader from "components/Navigation/Header"
import Root from "components/Root"
import VoteForm from "components/Vote/Form"

const VoteInput = (props) => (
    <input className="mb-2 py-2 px-3 border-2 border-black outline-none" { ...props } />
)

const Vote = () => (
    <Root>
        <NavigationHeader />
        <VoteForm />
    </Root>
)

export default Vote