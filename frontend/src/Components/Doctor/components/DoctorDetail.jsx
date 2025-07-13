import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Avatar, Typography, Button, TextField } from '@mui/material';

export default function DoctorDetail() {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [appointmentDate, setAppointmentDate] = useState('');

  const fetchDoctor = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/doctor/${id}`, {
        headers: {
          authorization: localStorage.getItem('jwt'),
        },
      });
      setDoctor(response.data.data);
    } catch (error) {
      console.error('Error fetching doctor details:', error);
    }
  };

  useEffect(() => {
    fetchDoctor();
  }, [id]);

  const handleAppointment = async () => {
    try {
      const response = await axios.post('http://localhost:8080/appointments', {
        doctorId: id,
        date: appointmentDate,
      }, {
        headers: {
          authorization: localStorage.getItem('jwt'),
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200) {
        alert('Appointment booked successfully');
      } else {
        alert('Failed to book appointment');
      }
    } catch (error) {
      console.error('Error booking appointment:', error);
      alert('Error booking appointment');
    }
  };

  if (!doctor) return <div>Loading...</div>;

  return (
    <div style={{ margin: 20 }}>
      <Avatar alt={doctor.name} src={doctor.image} sx={{ width: 100, height: 100 }} />
      <Typography variant="h5">{doctor.name}</Typography>
      <Typography variant="subtitle1">Expertise: {doctor.expertise.join(', ')}</Typography>
      <Typography variant="body1">Contact: {doctor.contact}</Typography>
      <Typography variant="body1">Email: {doctor.email}</Typography>
      <Typography variant="body2" style={{ marginTop: 10 }}>{doctor.desc}</Typography>
      <Typography variant="h6" style={{ marginTop: 10 }}>Consultation Fee: ${doctor.ammount}</Typography>

      <div style={{ marginTop: 20 }}>
        <TextField
          label="Appointment Date"
          type="date"
          value={appointmentDate}
          onChange={(e) => setAppointmentDate(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button variant="contained" color="primary" onClick={handleAppointment} style={{ marginLeft: 10 }}>
          Book Appointment
        </Button>
      </div>
    </div>
  );
}
