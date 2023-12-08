import { Button, Heading, MultiStep, Text, TextInput } from "@ignite-ui/react";
import { Container, Header, Form, FormError } from "./styles";
import { ArrowRight } from "phosphor-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { api } from "../../lib/axios";
import { AxiosError } from 'axios';

const registerFormSchema = z.object({
    username: z.string()
    .min(4, {message: 'o usuário deve ter mais de 4 caracteres'})
    .regex(/^([a-z\\-]+)$/i, {message: 'O usuário só pode ter letras ou hifens'})
    .transform(username => username.toLowerCase()),
    
    name: z.string()
    .min(4, {message: 'o nome deve ter mais de 4 caracteres'}),
})

type RegisterFormData = z.infer<typeof registerFormSchema>

export default function Register(){

    const { register, handleSubmit, formState: { errors, isSubmitting }, setValue } = useForm<RegisterFormData>({
        resolver: zodResolver(registerFormSchema)
    });

    const router = useRouter();

    useEffect(() => {
        setValue('username', String(router.query.username))
    }, [router.query?.username, setValue] )

    async function handleRegister(data: RegisterFormData){
        try {
            await api.post('/users', {
                name: data.name,
                username: data.username
            });

            await router.push('/register/connect-calendar')

        } catch (error) {
            if (error instanceof AxiosError && error?.response?.data?.message) {
              alert(error.response.data.message)
              return
            }
        }
    }

    return(
        <Container>
            <Header>
                <Heading as='strong'>Bem Vindo ao Ignite Call!</Heading>

                <Text>
                    Precisamos de algumas informações para criar seu perfil! Ah, você pode editar essas informações depois.
                </Text>

                <MultiStep size={4} currentStep={1}/>
            </Header>

            <Form as='form' onSubmit={handleSubmit(handleRegister)}>

                <label>
                    <Text size='sm'>Nome de Usuário</Text>
                    <TextInput prefix="ignite.com/" placeholder="seu-usuario" {...register('username')}/>   

                    {errors.username &&  (
                        <FormError size='sm'>
                            {errors.username.message}
                        </FormError>
                    )} 
                </label>

                <label>
                    <Text size='sm'>Nome Completo</Text>
                    <TextInput placeholder="Seu nome" {...register('name')}/>    
                    {errors.name &&  (
                        <FormError size='sm'>
                            {errors.name.message}
                        </FormError>
                    )} 
                </label>

                <Button type="submit" disabled={isSubmitting}>Próximo Passo <ArrowRight/></Button>
            </Form>
        </Container>
    )
}