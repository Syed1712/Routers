import { useEffect, useState } from "react"
import { Button, TextField } from "@mui/material"
import { useHistory, useParams } from "react-router-dom"


function Edit({details,setdetails})
{
    const history=useHistory()
    const{id}=useParams()
    const[idx,setidx]=useState("")
    const[name,setname]=useState("")
    const[num,setnum]=useState("")
    const[batch,setbatch]=useState("")
    const student=details[id]
    const[editid,seteditid]=useState("")
    useEffect(()=>
    {
        seteditid(id)
setidx(student.id)
setname(student.name)
setnum(student.num)
setbatch(student.batch)
    },[]);

    const updating=()=>
    {
        const editstu=details.findIndex((ele)=>idx===editid)
        console.log(editstu)
const newupdate=
{
    idx,name,num,batch
}
console.log(newupdate)
details[editid]=newupdate
setdetails([...details])
    setname("")
    setnum("")
    setbatch("")
history.push("/detail")
    }
    return(
        <div>
             <TextField onChange={(event)=>setidx(event.target.value)} label="ID" color="secondary" value={idx} type="number"  focused /><br/><br/>
           <TextField onChange={(event)=>setname(event.target.value)} label="EMPLOYEE NAME" value={name} color="secondary"  focused /><br/><br/>
           <TextField onChange={(event)=>setnum(event.target.value)} label="EMPLOYEE ID" color="secondary" value={num} focused /><br/><br/>
           <TextField onChange={(event)=>setbatch(event.target.value)} label="EMPLOYEE TEAM" color="secondary" value={batch} focused /><br/><br/>
           <Button onClick={()=>{updating()}} variant="contained" color="secondary">UPDATE DATA</Button>
        </div>
    )
}

export default Edit