import {FC, Fragment, useState} from "react";
import { isPropertySignature } from "typescript";
import Form from '../common/Form';
import InlineInputContainer from '../common/InlineInputContainer';
import Input from '../common/Input';
import Container from '../common/Container';



// const InputForm: FC = (props) => {

//     const handleChange = (e) => {
//         props.updateForm(e.target.id, e.target.value)
//     }

//     return (
//         <Container>
//             <h1>Input Form</h1>
//             <Form onSubmit={props.onSubmit}>
//                 <InlineInputContainer>
//                     <Input
//                     name="userCounter"
//                     id="userCounter"
//                     placeholder="Enter a value to set counter to"
//                     value={props.id}
//                     onChange={handleChange}
//                     />
//                 </InlineInputContainer>
//             </Form>
//         </Container>
//     )
// }