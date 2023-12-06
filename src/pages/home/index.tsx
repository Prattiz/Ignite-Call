import { Heading, Text } from "@ignite-ui/react";
import { Container, Content, ImageContainer } from "./styles";

import previewImg from "../../assets/Calendar.png";
import Image from "next/image";


export default function Home() {
  return(
    <Container>
      <Content>
        <Heading size='4xl'>Agendamento descomplicado</Heading>
        <Text size='lg'>Conecte seu calendário e permita que as pessoas marquem agendamentos no seu tempo livre.</Text>
      </Content>
      <ImageContainer>
        <Image 
        src={previewImg}
        height={400}
        quality={100}
        priority
        alt="Calendário"
        />
      </ImageContainer>
    </Container>
  ) 
}
