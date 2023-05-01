import { useHistory, useParams } from "react-router-dom"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardMedia } from "@mui/material";

function View({details})
{
    const history=useHistory()
    const{id}=useParams()
    const student=details[id]
   
    return(
        <div className="view" >
             <Card sx={{ maxWidth: 345 }}>
             <CardMedia
        sx={{ height: 400 }}
        image={student.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          EMPLOYEE NAME : {student.name}
        </Typography>
        <Typography gutterBottom variant="h6" color="text.secondary">
         EMPLOYEE NUM:{student.num}
        </Typography>
        <Typography gutterBottom variant="h6" color="text.secondary">
         EMPLOYEE BATCH:{student.batch}
        </Typography>

      </CardContent>
      <CardActions>
        <Button onClick={()=>{history.push("/detail")}} size="small">BAck</Button>
      </CardActions>
    </Card>
        </div>
    )
}

export default View