import Canvas from "./Scene/Canvas"
import Button from "./Button"

const Hero = () => (
    <div className="h-screen w-full flex items-center justify-end relative z-10 overflow-hidden">
        <div className="absolute bottom-4 left-4 bg-white border-2 border-black p-4 z-10">
            <span className="uppercase tracking-wider text-lg">Featured Event</span>
            <h1 className="text-4xl font-bold">Trunk or Treat</h1>
            
            <div className="flex items-center justify-between mt-2 w-full">
                <p className="text-xl font-serif">Hosted by Kiana Mushock-Buntin</p>
                <Button className="ml-40" />
            </div>
        </div>

        <Canvas className="mt-16 mr-16" style={{ width: "30rem", height: "30rem" }} />
    </div>
)

export default Hero