import { useHistory, useParams } from "react-router-dom"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardMedia } from "@mui/material";

function Teacherview({techdetails})
{
    const history=useHistory()
    const{id}=useParams()
    const teacher=techdetails[id]
   
    return(
        <div className="view" >
             <Card sx={{ maxWidth: 345 }}>
             <CardMedia
        sx={{ height: 200 }}
        image={teacher.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          TEACHER NAME : {teacher.name}
        </Typography>
        <Typography gutterBottom variant="h6" color="text.secondary">
        TEACHER NUM:{teacher.num}
        </Typography>
        <Typography gutterBottom variant="h6" color="text.secondary">
        TEACHER BATCH:{teacher.subject}
        </Typography>

      </CardContent>
      <CardActions>
        <Button onClick={()=>{history.push("/teacher")}} size="small">BAck</Button>
      </CardActions>
    </Card>
        </div>
    )
}



export default Teacherview