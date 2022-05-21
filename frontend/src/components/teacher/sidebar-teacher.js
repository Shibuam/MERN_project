import { useNavigate } from "react-router-dom";
import { Button,Paper } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import ManIcon from '@mui/icons-material/Man';
import ClassIcon from '@mui/icons-material/Class';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HelpIcon from '@mui/icons-material/Help';
import { minHeight } from "@mui/system";

export  function SidebarTeacher() {
const navigate=useNavigate()
    return (
        <div >
            <Paper style={{minHeight:'500px'}}>
            <Button onClick={()=>navigate('/teacherHomePage')}>    <HomeIcon/> Dashboard</Button><br/>
            <Button><ManIcon/>Student</Button><br/>
            <Button><ClassIcon/>My classes</Button><br/>
            <Button onClick={()=>navigate('/calendar')}><CalendarMonthIcon/>Calendar</Button><br/>
            <Button onClick={()=>navigate('/teacherProfile')}><AccountCircleIcon/>Profile</Button><br/>
            <Button><HelpIcon/>Helps</Button><br/>
            </Paper>
        </div>
    )
}

export function Topbar(){
    return(
        <div>
            <Button>All</Button>|
            <Button>New</Button>|
            <Button>Contact</Button>|
            <Button>Demo</Button>
        </div>
    )
}
