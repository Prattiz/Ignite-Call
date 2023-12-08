import { Heading, MultiStep, Text, Button } from "@ignite-ui/react";
import { Container, Header } from "../styles";
import { ArrowRight } from "phosphor-react";
import { Connect, ConnectItem } from "./styles";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";


export default function CalendarConnectGoogle(){
    
    return(
        <Container>
            <Header>
                <Heading as='strong'>Conecte sua agenda!</Heading>
                <Text>
                    Conecte o seu calendário para verificar automaticamente as horas ocupadas 
                    e os novos eventos à medida em que são agendados.
                </Text>

                <MultiStep size={4} currentStep={2}/>  
            </Header>

            <Connect>
                <ConnectItem>
                    <Text>Google Calendar</Text>
                    <Button variant='secondary' size='sm' onClick={() => signIn('google')}>
                        Conectar
                        <ArrowRight/>
                    </Button>
                </ConnectItem>
                <Button type="submit">Próximo Passo <ArrowRight/></Button>
            </Connect>

        </Container>
    )
}