import { Button } from "@mui/material";
import Base from "./Base";

function Nopage()
{
    return(
        
        <div className="nopage">

            <h3>You Lost Your Page</h3>
            <h6>
                Click the Home Button to go Home
            </h6>
            
            <Button variant="contained" color="secondary">Home</Button>
        </div>
        
    )
}

export default Nopage