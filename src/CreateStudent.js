import React from 'react'
import db from "./Fb"
import {get,child,ref,set} from "firebase/database";
import {useState} from "react"

function CreateStudent() {
    const [rno,setRno] = useState("")
    const [name,setName] = useState("")
    const [marks,setMarks] = useState("")
    const [msg,setMsg] = useState("")

    const hRno = (event) =>{setRno(event.target.value)}
    const hName = (event) =>{setName(event.target.value)}
    const hMarks = (event) =>{setMarks(event.target.value)}

    const save = (event) =>{
        event.preventDefault();
        const r1 = ref(db);
        get(child(r1,"student/" + rno))
        .then((snapshot)=>{
            if(snapshot.exists())
            {
                setMsg("Roll No. Already Exists");
                setRno("");
                setName("");
                setMarks("");
            }
            else{
                const r2 = ref(db,"student/" + rno);
                let data = {rno,name,marks};
                set (r2,data);
                setMsg("Student Data created");
                setRno("");
                setName("");
                setMarks("");
            }
        })
        .catch(err => console.log(err))
    }
  return (
    <div>
        <center>
            <form onSubmit={save}>
                <br/><br/>
            <input type={"number"} placeholder="Enter Roll No." onChange={hRno} value={rno}/>
            <br/><br/>
            <input type={"text"} placeholder="Enter Name" onChange={hName} value={name}/>
            <br/><br/>
            <input type={"number"} placeholder="Enter Marks" onChange={hMarks} value={marks}/>
            <br/><br/>
            <input type={"submit"} value="Save"/>
            <br/><br/>
            <h2>{msg}</h2>
            </form>
        </center>
    </div>
  )
}

export default CreateStudent