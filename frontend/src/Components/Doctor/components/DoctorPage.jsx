import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Avatar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function DoctorPage() {
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();

  const fetchDoctors = async () => {
    try {
      const response = await axios.get('http://localhost:8080/doctor', {
        headers: {
          'Content-Type': 'application/json',
          authorization: localStorage.getItem('jwt'),
        },
      });
      setDoctors(response.data.doctors);
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  const columns = [
    {
      field: 'image',
      headerName: 'Image',
      width: 100,
      renderCell: (params) => (
        <Avatar alt={params.row.name} src={params.value} />
      ),
    },
    { field: 'name', headerName: 'Name', width: 150 },
    {
      field: 'expertise',
      headerName: 'Expertise',
      width: 200,
      renderCell: (params) => params.value.join(', '),
    },
    { field: 'contact', headerName: 'Contact', width: 150 },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'desc',
      headerName: 'Description',
      width: 300,
      renderCell: (params) => (
        <Typography variant="body2" noWrap>
          {params.value}
        </Typography>
      ),
    },
    { field: 'ammount', headerName: 'Amount', width: 100 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate(`/doctorpage/${params.row._id}`)}
        >
          View Details
        </Button>
      ),
    },
  ];

  return (
    <div style={{ height: 500, width: '100%', marginLeft: 20 }}>
      <DataGrid
        rows={doctors}
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
    </div>
  );
}
