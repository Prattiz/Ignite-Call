import { Button, TextInput, Text } from "@ignite-ui/react";
import { Form, FormAnotation } from "./styles";
import { ArrowRight } from "phosphor-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"


const clainUsernameFormSchema = z.object({
    username: z.string()
    .min(4, {message: 'o usuário deve ter mais de 4 caracteres'})
    .regex(/^([a-z\\-]+)$/i, {message: 'O usuário só pode ter letras ou hifens'})
    .transform(username => username.toLowerCase()),
});

type ClainUsernameFormData = z.infer<typeof clainUsernameFormSchema>

export function ClainUserNameForm(){
    const { register, handleSubmit, formState: { errors } } = useForm<ClainUsernameFormData>({
        resolver: zodResolver(clainUsernameFormSchema)
    })

    async function handlePreRegister(data: ClainUsernameFormData){
        console.log(data)
    }

    return(
        <>
            <Form as='form' onSubmit={handleSubmit(handlePreRegister)}>
                <TextInput
                size='sm'
                prefix="ignite.com/"
                placeholder="seu-usuario"
                {...register('username')}
                />

                <Button
                size='sm'
                type="submit"
                >
                    Reservar Usuário
                    <ArrowRight/>
                </Button>
            </Form>

            <FormAnotation>
                <Text size='sm'>
                    {errors.username ? errors.username.message : 'Digite o Nome de Usuário'}
                </Text>
            </FormAnotation>
        </>
    )
}