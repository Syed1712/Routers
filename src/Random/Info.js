import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useHistory } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { CardMedia } from '@mui/material';
function Info({details,setdetails})

{
  const history=useHistory()
  // const{details,setdetails}=useContext(counter);

  useEffect(()=>
  {
  if(!localStorage.getItem("name"))
  {
    history.replace("/login")
  }
  },[]) 

const delte =(idx)=>
{
  const newvalue=details.filter((value,index)=> idx!=index )
  setdetails(newvalue)
}

    return(
        <div className='info'  >
           {details.map((value,index)=>
           (

                        <Card sx={{ maxWidth: 345 }} key={index}  >
                           <CardMedia
        sx={{ height: 400 }}
        image={value.image}
        title="green iguana"
      />
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
EMPLOYEE NAME : {value.name}        </Typography>

        <Typography variant="body2" color="text.secondary">
         EMPLOYEE ID : {value.num}
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>history.push(`/edit/${index}`)} >EDIT</Button>
        <Button size="small" onClick={()=>{delte(index)}} >DELETE</Button>
        <Button size="small"  onClick={()=>history.push(`/view/${index}`)}>VIEW</Button>

      </CardActions>
    </Card>
    ))}

        </div>
    )
}
export default Info