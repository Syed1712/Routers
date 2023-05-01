import { Button } from "@mui/material"
import { useHistory } from "react-router-dom"
import Base from "./Base"
function Home()
{
    const history=useHistory();
    return(

        
        <div >
       <Base
  title="WELCOME TO OUR HOME PAGE"
  desc="We can see our employees details"
  />
  <div >
  <h5>To know our employees details .Please Login...</h5> <br/>
<Button variant="contained" color="secondary"onClick={()=>history.push("/login")} >LOGIN</Button>
</div>


        </div>

    )
}
export default Home