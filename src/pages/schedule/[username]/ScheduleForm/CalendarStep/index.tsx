import { Calendar } from "../../../../../components/Calendar";
import { CalendarContainer, TimePicker, TimePickerHeader, TimePickerItem, TimePickerList } from "../../../styles";

export function CalendarStep(){

    const hasSelectedDate = true;

    return(
        <CalendarContainer isTimePickerOpen={hasSelectedDate}>
            <Calendar/>
            {
            hasSelectedDate && 

            <TimePicker>
                <TimePickerHeader>
                    
                </TimePickerHeader>

                <TimePickerList>
                    <TimePickerItem></TimePickerItem>
                    <TimePickerItem></TimePickerItem>
                    <TimePickerItem></TimePickerItem>
                </TimePickerList>
            </TimePicker> 
            }
        </CalendarContainer>
    )
}