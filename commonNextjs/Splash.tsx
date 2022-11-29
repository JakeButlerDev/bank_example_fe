import { StaticImageData } from "next/image";
import { CSSProperties, FC, ReactNode } from "react";

interface SplashProps{
    children: ReactNode,
    image: StaticImageData,
    style?: CSSProperties,
    // classname: string
}

const Splash: FC<SplashProps> = (props) => {
    return (
        <div 
        style={{
            backgroundImage: `url(${props.image.src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "75vh",      // 75% of view height
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
            zIndex: 0
        }}>
            {props.children}
        </div>
    )
}

export default Splash