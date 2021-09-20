import Root from "components/Root"
import Navigation from "components/Navigation"

const Wrapper = ({ children }) => (
    <div className="flex">
        { children }
    </div>
)

const Home = () => (
    <Root>
        <Navigation />
        <Wrapper>
            
        </Wrapper>
    </Root>
)

export default Home