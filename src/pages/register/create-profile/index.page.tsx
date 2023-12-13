import { Button, Heading, MultiStep, Text, TextArea } from "@ignite-ui/react";
import { Container, Header } from "../styles";
import { ArrowRight } from "phosphor-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormAnotation, ProfileBox } from "./styles";
import { useSession } from "next-auth/react";
import { GetServerSideProps } from "next";
import { getServerSession } from "next-auth";
import { buildNextAuthOptions } from "../../api/auth/[...nextauth].api";


const UpdateProfileFormSchema = z.object({
   bio: z.string(),
})

type UpdateProfileFormData = z.infer<typeof UpdateProfileFormSchema>

export default function UpdateProfile(){

    const { register, handleSubmit, formState: { isSubmitting } } = useForm<UpdateProfileFormData>({
        resolver: zodResolver(UpdateProfileFormSchema)
    });

   const session = useSession()
   console.log(session)

    async function handleUpdateProfile(data: UpdateProfileFormData){
        
    }

    return(
        <Container>
            <Header>
                <Heading as='strong'>Bem Vindo ao Ignite Call!</Heading>

                <Text>
                    Precisamos de algumas informações para criar seu perfil! Ah, você pode editar essas informações depois.
                </Text>

                <MultiStep size={4} currentStep={4}/>
            </Header>

            <ProfileBox as='form' onSubmit={handleSubmit(handleUpdateProfile)}>

                <label>
                    <Text size='sm'>Foto de perfil</Text>
                </label>

                <label>
                    <Text size='sm'>Sobre você</Text>
                    <TextArea placeholder="Seu nome" {...register('bio')}/> 

                    <FormAnotation size='sm'>
                        Fale um pouco sobre você. Isto será exibido em sua página pessoal.
                    </FormAnotation>

                </label>

                <Button type="submit" disabled={isSubmitting}>Finalizar <ArrowRight/></Button>
            </ProfileBox>
        </Container>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {

    const session = await getServerSession(req, res,  buildNextAuthOptions(req, res));


    return{
        props:{
            session,
        }
    }
}