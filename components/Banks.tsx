import { FC, Fragment } from "react";
import Bank, { BankProps } from "./Bank";

const fakeBanks:BankProps[] = [
    {
        id: 789,
        name: "Allbad",
        location: "79 Winabego Dr, KY",
        phoneNumber: 1112221122
    },
    {
        id: 999,
        name: "WalBank",
        location: "99 Bluebird Blvd, AR",
        phoneNumber: 9995552222
    },
    {
        id: 313,
        name: "M&MsGold",
        location: "18 Seven Mile Rd, MI",
        phoneNumber: 3130523333
    },
]

const Banks: FC = () => {

    const displayBanks = () => {
        return fakeBanks.map(
            bank => <Bank bank={bank}/>
        )
    }

    return (
        <div>
            <h1>Banks</h1>
            <div style= {{
                display: "flex",
                flexDirection: "row",
                alignItems: "center"
            }}>

            {displayBanks()}
            </div>
        </div>
    )
}

export default Banks;