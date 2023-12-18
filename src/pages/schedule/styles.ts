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
});
