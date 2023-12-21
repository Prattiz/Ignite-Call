import { CaretLeft, CaretRight } from 'phosphor-react';
import { getWeekDays } from '../utils/formater';
import 
{
  CalendarActions, CalendarBody, CalendarContainer,
  CalendarDay, CalendarHeader, CalendarTitle,
}
from './styles';
import dayjs from 'dayjs';
import { useMemo, useState } from 'react';


interface CalendarWeek {
  week: number,
  days: Array<{
    date: dayjs.Dayjs
    disabled: boolean
  }>,
}

type CalendarWeeks = CalendarWeek[]

export function Calendar() {

  const shortWeekDays = getWeekDays({ short: true });

  const [ currentDate, setCurrentDate ] = useState(() => {
    return dayjs().set('date', 1)
  });

  const currentMonth = currentDate.format("MMMM");
  const currentYear = currentDate.format("YYYY");

  const calendarWeeks = useMemo(() => {

    const daysInMonth = Array.from({
      length: currentDate.daysInMonth(),
    }).map(( _, i ) => {
      return currentDate.set('date', i + 1)
    });

    const firstWeekDay = currentDate.get('day');

    const previusMonthDays = Array.from({
      length: firstWeekDay,
    }).map((_, i) => {
      return currentDate.subtract(i + 1, 'day')
    }).reverse();

    const lastDayInCurrentMonth = currentDate.set('date', currentDate.daysInMonth())
    const lastWeekDay = lastDayInCurrentMonth.get('day');

    const nextMonthFill =  Array.from({

      length: 7 - (lastWeekDay + 1)

    }).map(( _ , i ) => {
      return lastDayInCurrentMonth.add(i + 1, 'day')
    });

    const calendarDays = [
      ...previusMonthDays.map((date) => {
        return {date, disabled: true }
      }),
      ...daysInMonth.map((date) => {
        return { date, disabled: date.endOf('day').isBefore(new Date()) }
      }),
      ...nextMonthFill.map((date) => {
        return { date, disabled: true }
      }),
    ]

    const calendarWeeks = calendarDays.reduce<CalendarWeeks>((weeks, _, i, original) => {
        
      const isNewWeek = i % 7 === 0

        if (isNewWeek) {
          weeks.push({
            week: i / 7 + 1,
            days: original.slice(i, i + 7),
          })
        }

        return weeks
      },
      [],
    )

    return calendarWeeks
  }, [currentDate]);


  function handlePreviusMonth(){
    const previusMonthDate = currentDate.subtract(1, 'month');

    setCurrentDate(previusMonthDate)
  }

  function handleNextMonth(){
    const previusMonthDate = currentDate.add(1, 'month');

    setCurrentDate(previusMonthDate)
  }

  return (
    <CalendarContainer>
      <CalendarHeader>
        <CalendarTitle>
          {currentMonth} <span>{currentYear}</span>
        </CalendarTitle>

        <CalendarActions>
          <button onClick={handlePreviusMonth}>
            <CaretLeft />
          </button>
          <button onClick={handleNextMonth}>
            <CaretRight />
          </button>
        </CalendarActions>
      </CalendarHeader>

      <CalendarBody>
        <thead>
          <tr>
            {
            shortWeekDays.map((weekDay) => (
              <th key={weekDay}>{weekDay}.</th>
            ))
            }
          </tr>
        </thead>
        <tbody>
        {
        calendarWeeks.map(({ week, days }) => {
            return (
              <tr key={ week }>
                {days.map(({ date, disabled }) => {
                  return (
                    <td key={ date.toString() }>
                      <CalendarDay disabled={ disabled }>
                        {date.get('date')}
                      </CalendarDay>
                    </td>
                  )
                })}
              </tr>
            )
          })
          }
        </tbody>
      </CalendarBody>
    </CalendarContainer>
  )
}