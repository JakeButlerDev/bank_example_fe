import { FC } from "react";

export interface PersonProps {     // NOT a JS object
    name: string,
    age: number,
    gender: "Male" | "Female" | "Nonbinary"     // called a multiple-option type. can be only one of these values
}

const mockPerson: PersonProps = {
    name: "Satan",
    age: 12329359,
    gender: "Female",
}

const Person: FC<{person: PersonProps}> = (props) => {
    return (
        <div style={{
            border: "1px solid red",
            margin: "1em",
            padding: "1.5em",
            maxWidth: "500px",
            width: "100%"
        }}>
            <h1>{props.person.name}</h1>
            <p>{props.person.age}</p>
            <p>{props.person.gender}</p>
        </div>
    )
}

export default Person;