import { useState } from "react";
import { Calendar } from "../../../../../components/Calendar";
import { CalendarContainer, TimePicker, TimePickerHeader, TimePickerItem, TimePickerList } from "../../../styles";

export function CalendarStep(){

    const [ selectedDate, onSelectedDate ] = useState<Date | any>(null)

    const hasSelectedDate = !!selectedDate;

    return(
        <CalendarContainer isTimePickerOpen={hasSelectedDate}>
            <Calendar 
            selectedDate={selectedDate}
            onSelectedDate={onSelectedDate}/>
            {
            hasSelectedDate && 

            <TimePicker>
                <TimePickerHeader>
                    
                </TimePickerHeader>

                <TimePickerList>
                    <TimePickerItem>8:00</TimePickerItem>
                    <TimePickerItem>10:00</TimePickerItem>
                    <TimePickerItem>11:00</TimePickerItem>
                    <TimePickerItem>12:00</TimePickerItem>
                    <TimePickerItem>13:00</TimePickerItem>
                    <TimePickerItem>14:00</TimePickerItem>
                    <TimePickerItem>14:30</TimePickerItem>
                    <TimePickerItem>15:00</TimePickerItem>
                    <TimePickerItem>15:30</TimePickerItem>
                    <TimePickerItem>16:00</TimePickerItem>
                    <TimePickerItem>16:30</TimePickerItem>
                    <TimePickerItem>17:00</TimePickerItem>
                    <TimePickerItem>17:30</TimePickerItem>
                    <TimePickerItem>18:00</TimePickerItem>
                    <TimePickerItem>18:30</TimePickerItem>
                    <TimePickerItem>19:00</TimePickerItem>
                    <TimePickerItem>19:30</TimePickerItem>
                    <TimePickerItem>20:00</TimePickerItem>
                    <TimePickerItem>20:30</TimePickerItem>
                    <TimePickerItem>21:00</TimePickerItem>
                    <TimePickerItem>21:30</TimePickerItem>
                    <TimePickerItem>22:00</TimePickerItem>
                    <TimePickerItem>22:30</TimePickerItem>
                    <TimePickerItem>23:00</TimePickerItem>
                </TimePickerList>
            </TimePicker> 
            }
        </CalendarContainer>
    )
}