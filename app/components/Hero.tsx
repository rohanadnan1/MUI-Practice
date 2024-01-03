import { HeroWrapper } from "../mui-components/HeroStyles";
import Navbar from "./Navbar";
import Messages from "./Message";
import MessageInput from "./MessageInput";

const Hero = () => {
    return(
        <HeroWrapper>
        <Navbar />
        <Messages />
        <MessageInput />
      </HeroWrapper>
    )
}

export default Hero;
