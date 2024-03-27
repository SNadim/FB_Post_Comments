import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

const column = [
  {
    field: "from",
    headerName: "Name",
    width: 200,
    renderCell: (params) =>params.row.from.name,
  },
  { field: "message", headerName: "Message", width: 200 },
  
]
function App() {
  const [postComment, setPostComment] = useState([]);
  useEffect(()=>{
    axios.get(https://graph.facebook.com/v16.0/100082326030769_398222889598576/comments?access_token=EAANSrp9YZBc8BOxjwBhn55ljQXB7cwS3OC0fJAZAfNQj6Bklnm4wassDfs7tzdT1mLCl8awpGRNhHbIZCwZBtDDd02D9AYsEHGuPn8kgZBZAmZASuUBjtyGmxNGgWknuAihmoi8SXqrrXwZBK9EhtOKNZCJupAPE4XYxMBQ2n7tisbMInilUyHhanTo2HiHxBYW0ZD`).then((res)=>{
      setPostComment(res.data.data);
    }).catch(err=>console.log(err))
  },[]);
  return (
    <div className="App" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px'}}>
      <h1>Facebook comments tracker!</h1>
      <span><a href='https://www.facebook.com/profile.php?id=100082326030769'>Facebook Page Link</a></span>
      
      <Box sx={{ width: "100%", height: 450 }} className="companies-grid">
      <DataGrid
        rows={postComment}
        columns={column}
        getRowId={(row) => row.id}
        rowHeight={50}
      />
    </Box>
    </div>
  );
}

export default App;
