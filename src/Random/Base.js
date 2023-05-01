import { AppBar, Button, Menu, MenuItem, Toolbar } from "@mui/material"
import { useHistory } from "react-router-dom"

function Base({title,desc})
{
    const history=useHistory()

    const logoutthis=()=>
    {
      localStorage.removeItem("name")
      history.push("/home")
    }
    return(
        <div>
            
        
        <div className="base">

            {/* <h1>This Is Base Page</h1> */}

            <AppBar position="static" color="secondary">
  <Toolbar variant="dense" className="tool">
    <div className="btn">
   <Button  style={{color:"white"}} onClick={()=>history.push("/home")} > HOME</Button>
   <Button style={{color:"white"}} onClick={()=>history.push("/add")}> ADD </Button>
   <Button style={{color:"white"}} onClick={()=>history.push("/detail")} >Student Details</Button>
   <Button style={{color:"white"}} onClick={()=>history.push("/teacher")} >Teachers Details</Button>

   <Button style={{color:"white"}}  onClick={()=>history.push("/login")} > LOGIN</Button>
   <Button style={{color:"white"}} onClick={()=>logoutthis()} > LOGOUT</Button>

   </div>
  </Toolbar>
</AppBar>

</div>
<div className="base1">
    <h3>{title}</h3><br/>
    <h6>{desc}</h6><br/>

    <hr/>
</div>

</div>
    )
}

export default Base