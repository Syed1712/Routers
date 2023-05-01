import { Button, TextField } from "@mui/material"
import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"

function Teacheredit({techdetails,setteachdetails})
{
    const history=useHistory()
    const{id}=useParams()
    const[idx,setidx]=useState("")
    const[name,setname]=useState("")
    const[num,setnum]=useState("")
    const[subject,setsubject]=useState("")
    const teacher=techdetails[id]
    const[editid,seteditid]=useState("")
    useEffect(()=>
    {
        seteditid(id)
setidx(teacher.id)
setname(teacher.name)
setnum(teacher.num)
setsubject(teacher.batch)
    },[]);

    const updating=()=>
    {
        const editstu=techdetails.findIndex((ele)=>idx===editid)
        console.log(editstu)
const newupdate=
{
    idx,name,num,subject
}
console.log(newupdate)
techdetails[editid]=newupdate
setteachdetails([...techdetails])
    setname("")
    setnum("")
    setsubject("")
history.push("/teacher")
    }
    return(
        <div>
             <TextField onChange={(event)=>setidx(event.target.value)} label="ID" color="secondary" value={idx} type="number"  focused /><br/><br/>
           <TextField onChange={(event)=>setname(event.target.value)} label="TEACHER NAME" value={name} color="secondary"  focused /><br/><br/>
           <TextField onChange={(event)=>setnum(event.target.value)} label="TEACHER ID" color="secondary" value={num} focused /><br/><br/>
           <TextField onChange={(event)=>setsubject(event.target.value)} label=" SUBJECT" color="secondary" value={subject} focused /><br/><br/>
           <Button onClick={()=>{updating()}} variant="contained" color="secondary">UPDATE DATA</Button>
           </div>
    )
}

export default Teacheredit