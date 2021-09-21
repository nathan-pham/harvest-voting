import Canvas from "./Scene/Canvas"
import Button from "./Button"

const Hero = () => (
    <div className="h-screen w-full flex items-center justify-end relative z-10 overflow-hidden" style={{ backgroundColor: "#fffff7" }}>
        <div className="absolute bottom-4 left-4 bg-white border-2 border-black p-4 z-10">
            <span className="uppercase tracking-wider text-lg">Featured Event</span>
            <h1 className="text-4xl font-bold">Trunk or Treat</h1>
            
            <div className="flex items-center justify-between mt-2 w-full">
                <p className="text-xl font-serif">Hosted by Kiana Mushock-Buntin</p>
                <Button className="ml-40" />
            </div>
        </div>

        <Canvas className="w-96 h-96 mt-16 mr-4" />
        {/* <video className="invert mt-20 mr-16" src="/ball.mp4" autoPlay muted loop></video> */}
    </div>
)

export default Hero