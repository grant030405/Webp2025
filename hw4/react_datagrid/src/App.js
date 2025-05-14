import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { TextField, Container, Typography } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'title', headerName: '名稱', width: 250 },
  { field: 'location', headerName: '地點', width: 250 },
  { field: 'price', headerName: '票價', width: 150 }
];

function App() {
  const [rows, setRows] = useState([]);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    fetch('https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6')
      .then(res => res.json())
      .then(data => {
        const formatted = data.map((item, index) => ({
          id: index + 1,
          title: item.title,
          location: item.showInfo[0]?.location || '無資料',
          price: item.showInfo[0]?.price || '無資料'
        }));
        setRows(formatted);
      })
      .catch(err => {
        console.error('載入失敗:', err);
      });
  }, []);

  const filteredRows = rows.filter(row =>
    row.title.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        景點觀光展覽資訊
      </Typography>
      <TextField
        label="搜尋名稱關鍵字"
        variant="outlined"
        fullWidth
        margin="normal"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <div style={{ height: 500, width: '100%' }}>
        <DataGrid
          rows={filteredRows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
        />
      </div>
    </Container>
  );
}

export default App;
