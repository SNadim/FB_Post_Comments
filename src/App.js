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
    axios.get(`https://graph.facebook.com/v16.0/{page-secret}_{post-secret}/comments?access_token={access-token}`).then((res)=>{
      setPostComment(res.data.data);
    }).catch(err=>console.log(err))
  },[]);
  return (
    <div className="App">
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
