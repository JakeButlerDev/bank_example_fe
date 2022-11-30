import { FC, Fragment } from "react";
import NavLinks from "./NavLinks";

const NavBar: FC = () => {
    return (
        
        <Fragment>

            <div        // NavBar base, container div
                id="containerDiv"
                style={{
                    backgroundColor: "white",
                    boxShadow: "0 1px 2px 0 red",
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    position: "fixed",
                    zIndex: 9999,        // 9999 just a high number so the bar sits on top
                    top: 0,
                    left: 0,
                    height: "75px"
                }}>
                <div        // NavBar spacing div 
                    id="spacingDiv"
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        margin: "0 6rem",
                        justifyContent: "space-between",
                        flex: 1
                    }}>
                    <div        // Logo div
                        id="logoDiv"
                        style={{
                            margin: "0 1rem",
                            cursor: "pointer",
                            justifyContent: "center"
                        }}
                        onClick={() => alert("Go home.")}
                    >
                        <h1 style={{ fontWeight: "bold" }}>
                            Dev <span style={{ color: "green" }}>Bank</span>
                        </h1>

                    </div>

                    <div 
                     id= "linksDiv"
                     style= {{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center"
                    }}>
                        <NavLinks destination="/" label="Home"/>
                        <NavLinks destination="/signup" label="Sign Up"/>
                    </div>
                </div>
            </div>

            <div id="bufferDiv" style={{ height: "75px" }}>

            </div>
        </Fragment>
    )
}

export default NavBar