import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

function Teacherinfo({techdetails,setteachdetails})


{

  useEffect(()=>
  {
  if(!localStorage.getItem("name"))
  {
    history.replace("/login")
  }
  },[]) 
  const history=useHistory()
    return(
        <div className='tec'>
             {techdetails.map((value,index)=>
           (

                        <Card sx={{ maxWidth: 345 }} key={index}  >
                           <CardMedia
        sx={{ height: 200 }}
        image={value.image}
        title="green iguana"
      />
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
Teacher NAME : {value.name}        </Typography>

        <Typography variant="body2" color="text.secondary">
         Teacher ID : {value.num}
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>history.push(`/te/${index}`)} >EDIT</Button>
        <Button size="small" onClick={()=>history.push(`/vie/${index}`)} >VIEW</Button>

      </CardActions>
    </Card>
    ))}
        </div>
    )
}
export default Teacherinfo