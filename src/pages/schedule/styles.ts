import { Heading, styled, Text, Box } from '@ignite-ui/react';

export const Container = styled('main', {
  maxWidth: 852,
  padding: '0 $4',
  margin: '$20 auto $4',
});

export const UserHeader = styled('header', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  [`> ${Heading}`]: {
    lineHeight: '$base',
    marginTop: '$2',
  },

  [`> ${Text}`]: {
    color: '$gray200',
  },
});

export const CalendarContainer = styled(Box, {
    margin: '$6 auto 0',
    padding: 0,
    display: 'grid',
    position: 'relative',
    maxWidth: 840,
    gridTemplateColumns: '1fr',

    variants:{
      isTimePickerOpen: {
        true:{
          gridTemplateColumns: '1fr 280px',

          '@media(max-width: 677px)':{
            gridTemplateColumns: '1fr',
          }
        },
        false:{
          width: 540,
          gridTemplateColumns: '1fr',
        }
      }
    }
});

export const TimePicker = styled('div', {
  borderLeft: '1px solid $gray600',
  padding: '$6 $6 0',
  overflowY: 'scroll',
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 0,
  width: 280,
})

export const TimePickerHeader = styled(Text, {

  fontWeight: '$medium',

  span: {
    color: '$gray200',
  },
})

export const TimePickerList = styled('div', {
  marginTop: '$3',
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '$2',

  '@media (max-width: 900px)': {
    gridTemplateColumns: '2fr',
  },
});

export const TimePickerItem = styled('button', {
  border: 0,
  backgroundColor: '$gray600',
  padding: '$2 0',
  cursor: 'pointer',
  color: '$gray100',
  borderRadius: '$sm',
  fontSize: '$sm',
  lineHeight: '$base',

  '&:last-child': {
    marginBottom: '$6',
  },

  '&:disabled': {
    background: 'none',
    cursor: 'default',
    opacity: 0.4,
  },

  '&:not(:disabled):hover': {
    background: '$gray500',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$gray100',
  },
});