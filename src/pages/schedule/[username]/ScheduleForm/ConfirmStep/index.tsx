import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Text, TextArea, TextInput } from '@ignite-ui/react';
import { CalendarBlank, Clock } from 'phosphor-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { ConfirmForm, FormActions, FormError, FormHeader } from '../../../styles';
import dayjs from 'dayjs';


interface ConfirmStepProps{
  schedulingDate: Date,
  cancelConfirmation: () => void
}

const confirmFormSchema = z.object({
  name: z.string()
  .min(3, { message: 'O nome precisa no mínimo 3 caracteres' })
  .regex(/^([a-z\\-]+)$/i, {message: 'O usuário só pode ter letras ou hifens'}),

  email: z.string().email({ message: 'Digite um e-mail válido' }),
  
  details: z.string().nullable(),
})

type ConfirmFormData = z.infer<typeof confirmFormSchema>

export function ConfirmStep({ schedulingDate, cancelConfirmation }: ConfirmStepProps) {

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<ConfirmFormData>({
    resolver: zodResolver(confirmFormSchema),
  });

  const date = dayjs(schedulingDate).format('DD[ de ]MMMM[ de ]YYYY');
  const selectedHour = dayjs(schedulingDate).format('HH:mm[h]')

  function handleConfirmScheduling(data: ConfirmFormData) {
    console.log(data)
  }

  return (
    <ConfirmForm as="form" onSubmit={handleSubmit(handleConfirmScheduling)}>
      <FormHeader>
        <Text>
          <CalendarBlank />
          {date}
        </Text>

        <Text>
          <Clock />
          {selectedHour}
        </Text>
      </FormHeader>

      <label>
        <Text size="sm">Nome completo</Text>
        <TextInput placeholder="Seu nome" {...register('name')} />
        {errors.name && <FormError size="sm">{errors.name.message}</FormError>}
      </label>

      <label>
        <Text size="sm">Endereço de e-mail</Text>
        <TextInput
          type="email"
          placeholder="thiago@example.com"
          {...register('email')}
        />
        {errors.email && (
          <FormError size="sm">{errors.email.message}</FormError>
        )}
      </label>

      <label>
        <Text size="sm">Observações</Text>
        <TextArea {...register('details')} />
      </label>

      <FormActions>
        <Button type="button" variant="tertiary" onClick={cancelConfirmation}>
          Cancelar
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          Confirmar
        </Button>
      </FormActions>
    </ConfirmForm>
  )
}