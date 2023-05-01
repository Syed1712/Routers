import { Button, TextField } from "@mui/material"
import { useState } from "react"
import { useHistory } from "react-router-dom"
import logd from "./loginpas"
function Login()
{
    const history=useHistory()
    const[err,seterr]=useState(true)

    const [bae,setbae]=useState(logd)
    const [user,setuser]=useState("")
    const [pass,setpass]=useState("")
    const logindetail=()=>
    {
        if(user==logd[0].username  && pass==logd[0].password)
        {
        localStorage.setItem("name",user)
        history.push("/detail")
        seterr(true)

        }
        else  if(user==logd[1].username  && pass==logd[1].password)
        {
        localStorage.setItem("name",user)
        history.push("/detail")
        seterr(true)

        }
        else{
            seterr(false)

            alert("WRONG PASSWORd")
        }
    }
    return(
        <div>
            <TextField id="standard-basic" label="Standard" variant="standard"  onChange={(e)=>setuser(e.target.value)} color="secondary"/> <br/><br/>

            <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
          color="secondary"
          onChange={(e)=>setpass(e.target.value)}
        />
<br/><br/><br/>
<Button onClick={()=>{logindetail()}} variant="contained" color="secondary" >LOGIN</Button>

        </div>
    )
}

export default Login