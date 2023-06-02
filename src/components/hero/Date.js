import { useEffect, useRef, useState } from 'react'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import format from 'date-fns/format'
import { addDays } from 'date-fns'
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Box } from '@mui/material'

const DateInput = () => {
    const [range, setRange] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection'
        }
    ])
    const [open, setOpen] = useState(false)
    const refOne = useRef(null)

    useEffect(() => {
        document.addEventListener("keydown", hideOnEscape, true)
        document.addEventListener("click", hideOnClickOutside, true)
    }, [])

    const hideOnEscape = (e) => {
        if (e.key === "Escape") {
            setOpen(false)
        }
    }

    const hideOnClickOutside = (e) => {
        if (refOne.current && !refOne.current.contains(e.target)) {
            setOpen(false)
        }
    }

    return (
        <Box sx={{ bgcolor: 'white', p: '1em' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <input
                    style={{ width: '100%', fontSize: '1em', fontWeight: '600', outline: 'none', border: 'none' }}
                    value={`${format(range[0].startDate, "MM/dd/yyyy")} - ${format(range[0].endDate, "MM/dd/yyyy")}`}
                    readOnly
                    className="inputBox"
                    onClick={() => setOpen(open => !open)}
                />
                <CalendarMonthIcon onClick={() => setOpen(open => !open)} sx={{ fontSize: { xs: '1.6em', sm: '1.6em', md: '2em', lg: '2.1em' }, cursor: 'pointer' }} />
            </Box>
            <Box ref={refOne}>
                {open &&
                    <DateRange
                        onChange={item => setRange([item.selection])}
                        editableDateInputs={true}
                        moveRangeOnFirstSelection={false}
                        ranges={range}
                        months={1}
                        direction="horizontal"
                        className="calendarElement"
                    />
                }
            </Box>
        </Box>
    )
};

export default DateInput;