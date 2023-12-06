import { Button, TextInput } from "@ignite-ui/react";
import { Form } from "./styles";
import { ArrowRight } from "phosphor-react";

export function ClainUserNameForm(){
    return(
        <Form as='form'>
            <TextInput
            size='sm'
            prefix="ignite.com/"
            placeholder="seu-usuario"/>

            <Button
            size='sm'
            type="submit"
            >
                Reservar Usuário
                <ArrowRight/>
            </Button>
        </Form>
    )
}