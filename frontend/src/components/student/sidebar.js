import {Button} from '@mui/material'

import { useNavigate } from 'react-router-dom'
function Sidebar(){

const navigate=useNavigate()

    return(
        <div>
            <Button>Dashboard</Button><br/>
            <Button>Profile</Button><br/>
            <Button>Find by Subject</Button><br/>
            <Button onClick={()=>navigate('/studentlocation')}>Find by Location</Button><br/>
            <Button onClick={()=>navigate('/studentdashboard')} >My teachers</Button><br/>
           
        </div>
    )
}
export default Sidebar