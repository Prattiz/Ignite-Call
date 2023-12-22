import { useEffect, useState } from "react";
import { Calendar } from "../../../../../components/Calendar";
import { CalendarContainer, TimePicker, TimePickerHeader, TimePickerItem, TimePickerList } from "../../../styles";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { api } from "../../../../../lib/axios";

interface AvailabilityProps{
    possibleTimes: number[],
    availableTimes: number[],
}

export function CalendarStep(){

    const [ selectedDate, onSelectedDate ] = useState<Date | any>(null)
    const hasSelectedDate = !!selectedDate;
    const selectedDay = selectedDate ? dayjs(selectedDate).format('dddd') : null;
    const formatDate = selectedDate ? dayjs(selectedDate).format('DD[ de ]MMMM') : null;

    const [ availability, setAvailability ] = useState<AvailabilityProps>();

    const router = useRouter();
    const username = String(router.query.username);

    useEffect(() => {
        if(!selectedDate){
            return 
        }
        api.get(`users/${username}//availability`, {
            params:{
                date: dayjs(selectedDate).format('YYYY-MM-DD')
            }
        }).then(response => {
            setAvailability(response.data)
        })

    }, [username, selectedDate])

    return(
        <CalendarContainer isTimePickerOpen={hasSelectedDate}>
            <Calendar 
            selectedDate={selectedDate}
            onSelectedDate={onSelectedDate}/>
            {
            hasSelectedDate && 

            <TimePicker>
                <TimePickerHeader>
                    {selectedDay}, <span>{formatDate}</span>
                </TimePickerHeader>

                <TimePickerList>
                  
                    {
                        availability?.possibleTimes.map(hour => {
                            return(
                                <TimePickerItem 
                                key={hour}
                                disabled={!availability.availableTimes.includes(hour)}
                                >
                                    {String(hour).padStart(2, '0')}:00h

                                </TimePickerItem>
                            )
                        })
                    }

                </TimePickerList>
            </TimePicker> 
            }
        </CalendarContainer>
    )
}