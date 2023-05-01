import { Button, TextField } from "@mui/material"
import { useState ,useEffect} from "react"
import { useHistory } from "react-router-dom"

function Add({details,setdetails})
{


    const history=useHistory()
    const[id,setid]=useState("")
    const[name,setname]=useState("")
    const[num,setnum]=useState("")
    const[batch,setbatch]=useState("")


    useEffect(()=>
    {
    if(!localStorage.getItem("name"))
    {
      history.replace("/login")
    }
    },[]) 

    const adding=()=>
{
    const addingvalue={
        id,name,num,batch
    }
    setdetails([...details,addingvalue])
    setid("")
    setname("")
    setnum("")
    setbatch("")
    history.push("/detail")
}


    return(
        <div className="add">
           <TextField onChange={(event)=>setid(event.target.value)} label="ID" color="secondary" type="number"  focused /><br/><br/>
           <TextField onChange={(event)=>setname(event.target.value)} label="EMPLOYEE NAME" color="secondary"  focused /><br/><br/>
           <TextField onChange={(event)=>setnum(event.target.value)} label="EMPLOYEE ID" color="secondary" focused /><br/><br/>
           <TextField onChange={(event)=>setbatch(event.target.value)} label="EMPLOYEE TEAM" color="secondary"  focused /><br/><br/>
           <Button onClick={()=>{adding()}} variant="contained" color="secondary">ADD DATA</Button>


        </div>
    )
}

export default Add