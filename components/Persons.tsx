import { FC } from "react";
import Person, { PersonProps } from "./Person";

const mockPersonList:PersonProps[] = [
    {
        name: "Hannah",
        age: 25,
        gender: "Female"
    },
    {
        name: "Bryan",
        age: 30,
        gender: "Male"
    },
    {
        name: "Marcel",
        age: 55,
        gender: "Nonbinary"
    },
    {
        name: "Satan",
        age: 12329359,
        gender: "Female"
    }
]

const Persons: FC = () => {

    const displayPersons = () => {
        return mockPersonList.map(
            person => <Person person={person}/>
            )
    }

    return (
        <div style={{
            width: "100%",
            backgroundColor: "lightblue",
            display: "flex",
            flexDirection: "column"
        }}>
            <h1>Persons</h1>
            <div style= {{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap"
            }}>
                {displayPersons()};
                {/* <Person person={{
                    name: "Hannah",
                    age: 25,
                    gender: "Female"
                }}/>
                <Person person={{
                    name: "Bryan",
                    age: 30,
                    gender: "Male"
                }}/>
                <Person person={{
                    name: "Marcel",
                    age: 55,
                    gender: "Nonbinary"
                }}/> */}
            </div>
        </div>
    )
}

export default Persons;