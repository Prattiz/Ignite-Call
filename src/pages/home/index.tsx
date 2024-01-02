import { Heading, Text } from '@ignite-ui/react'
import { Container, Content, ImageContainer } from './styles'

import previewImg from '../../assets/Calendar.png'
import Image from 'next/image'
import { ClainUserNameForm } from './components/ClainUsernameForm'
import { NextSeo } from 'next-seo'

export default function Home() {
  return (
    <>
      <NextSeo
        title="Descomplique sua agenda | Ignite Call"
        description="Conecte seu calendário e permita que as pessoas marquem agendamentos no seu tempo livre"
      />

      <Container>
        <Content>
          <Heading size="4xl">Agendamento descomplicado</Heading>
          <Text size="lg">
            Conecte seu calendário e permita que as pessoas marquem agendamentos
            no seu tempo livre.
          </Text>
          <ClainUserNameForm />
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
    </>
  )
}
