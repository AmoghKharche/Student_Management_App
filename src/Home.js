import React from 'react'
import db from './Fb';
import { get, ref, child, remove} from "firebase/database";
import { useState, useEffect } from "react";


function Home() {

    const [info,setInfo] = useState([]);

    useEffect( () => {
        const dbref = ref(db);
        get(child(dbref,"student/"))
        .then((snapshot)=>{
            if(snapshot.exists())
            {
                setInfo([]);
                console.log(snapshot.val());
                const data = snapshot.val()
                    if (data !== null)
                    {
                        Object.values(data).map((da)=>{setInfo((oldArray)=>[...oldArray,da]);});
                    }
            }
            else{
                console.log("No data")
            }
        })
    },[])

    const delStu = (rno) =>{
        remove(ref(db,"student/" + rno))
        .then(() => {
            alert(rno + ' Removed Succesfully');
            window.location.reload();
        })
        .catch((err) => console.log(err))
    }
  return (
    <div>
        <center>
            <h2>Home Page</h2>
            <br></br>
            <table border={"5"} style={{width:'50%'}}>
                <tr>
                <th>Roll No</th>
                <th>Name</th>
                <th>Marks</th>
                <th>Delete</th>
                </tr>
                {
                    info.map( (e =>
                        <tr style={{"text-align":"center"}}>
                            <td>{ e.rno }</td>
                            <td>{ e.name }</td>
                            <td>{ e.marks }</td>
                            <td><button onClick={() => {if(window.confirm("Are You Sure?"))
                        delStu(e.rno)}}>Delete</button></td>
                        </tr>))
                }
            </table>
        </center>
    </div>
  )
}

export default Home