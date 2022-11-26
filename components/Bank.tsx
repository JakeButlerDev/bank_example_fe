import { FC, Fragment } from "react";

export interface BankProps {
    id: number,
    name: string,
    location: string,
    phoneNumber: number
}

const fakeBank: BankProps = {
        id: 666,
        name: "Allsafe",
        location: "555 Cherry Rose Ln, IA",
        phoneNumber: 4447290808
}
    
    


const Bank: FC<{bank: BankProps}> = (props) => {

    

    return (
        <Fragment>
        <div style= {{
            margin: "5em",
            display: "flex",
            flexDirection: "row",
            width: "100%"
        }}> 
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "stretch",
                alignSelf: "flex-start",
                flexBasis: "100%"
            }}>
                <h1>{props.bank.id}</h1>
                <p>{props.bank.name}</p>
                <p>{props.bank.location}</p>
                <p>{props.bank.phoneNumber}</p>
            </div>
        </div>

        </Fragment>
    )
}

export default Bank;