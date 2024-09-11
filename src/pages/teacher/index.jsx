import axios from "axios";
import { useEffect, useState } from "react";
import { TeacherTable, TeacherModal } from "@components";
import Button from '@mui/material/Button';

const Index = () => {
  const [data, setData] = useState([]); 
  const [course, setCourse] = useState([]); 
  const [open, setOpen] = useState(false)
  useEffect(() => {
    axios.get("http://localhost:3000/teacher").then((res) => {
      setData(res?.data);
    });
  }, []); 
  
  const handleClose = () =>{
    setOpen(false)
  }

  const openModal = async() =>{
      const res = await axios.get("http://localhost:3000/course").then(res=>{
        setCourse(res?.data)
      })
      setOpen(true)
  }

  return (
    <div>
      <TeacherModal open={open} handleClose={handleClose} course={course}/>
      <Button variant="contained" sx={{marginBottom: "20px"}} onClick={openModal}>Open Modal</Button>
      <TeacherTable data={data} />
    </div>
  );
};

export default Index;
