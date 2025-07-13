import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
} from '@mui/material';
import { Email, Phone, LocationOn } from '@mui/icons-material';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ContactUsPage = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      message,
      contact,
    };
    const response = await axios.post('http://localhost:8080/patient/patientmessage', data);
    if (response.status === 200) {
      toast.success(response.data.message);
      navigate("/");

    } else {
      toast.error(response.data.message);

    }
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [contact, setContact] = useState("");


  return (
    <Box py={4} sx={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Container maxWidth="md">
        <Box sx={{
          background: '#fff',
          borderRadius: 4,
          boxShadow: 4,
          p: { xs: 2, md: 5 },
          mb: 4,
        }}>
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 700, color: '#1976d2' }}>
            Contact Us
          </Typography>

          {/* Contact Info */}
          <Grid container spacing={2} alignItems="center" mb={2}>
            <Grid item xs={12} sm={6}>
              <Box display="flex" alignItems="center" sx={{ background: '#e0f7fa', borderRadius: 2, p: 2, boxShadow: 1 }}>
                <Email sx={{ mr: 1, color: '#1976d2' }} />
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  Email: bastolaronak12@gmail.com
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box display="flex" alignItems="center" sx={{ background: '#e0f7fa', borderRadius: 2, p: 2, boxShadow: 1 }}>
                <Phone sx={{ mr: 1, color: '#1976d2' }} />
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  Phone: +977-9862164447
                </Typography>
              </Box>
            </Grid>
          </Grid>

          {/* Address */}
          <Box mt={4}>
            <Typography variant="h6" gutterBottom sx={{ color: '#1976d2', fontWeight: 600 }}>
              Address
            </Typography>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={6}>
                <Box display="flex" alignItems="center" sx={{ background: '#e0f7fa', borderRadius: 2, p: 2, boxShadow: 1 }}>
                  <LocationOn sx={{ mr: 1, color: '#1976d2' }} />
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    Kathmandu
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box display="flex" alignItems="center" sx={{ background: '#e0f7fa', borderRadius: 2, p: 2, boxShadow: 1 }}>
                  <LocationOn sx={{ mr: 1, color: '#1976d2' }} />
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    Baneshwor
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* Map */}
          <Box mt={4}>
            <Typography variant="h6" gutterBottom sx={{ color: '#1976d2', fontWeight: 600 }}>
              Map
            </Typography>
            <Box height={400} mt={2} sx={{ borderRadius: 3, overflow: 'hidden', boxShadow: 2 }}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2263.1707428429418!2d85.3351713!3d27.6939869!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1999d574786b%3A0x727aa56d32352da2!2z4KSt4KSw4KWL4KS44KS-IOCkheCkuOCljeCkquCkpOCkvuCksiDgpKrgpY3gpLDgpL4u4KSy4KS_!5e1!3m2!1sne!2snp!4v1694709428278!5m2!1sne!2snp" width="100%" height="400" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </Box>
          </Box>

          {/* Contact Form */}
          <Box mt={4}>
            <Typography variant="h6" gutterBottom sx={{ color: '#1976d2', fontWeight: 600 }}>
              Contact Form
            </Typography>
            <Box sx={{ background: '#e0f7fa', borderRadius: 3, boxShadow: 2, p: { xs: 2, md: 4 }, mt: 2 }}>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Name"
                      variant="outlined"
                      fullWidth
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      sx={{ borderRadius: 2, background: '#fff' }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Email"
                      variant="outlined"
                      fullWidth
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      sx={{ borderRadius: 2, background: '#fff' }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Contact Number"
                      variant="outlined"
                      fullWidth
                      required
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      sx={{ borderRadius: 2, background: '#fff' }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Message"
                      variant="outlined"
                      multiline
                      rows={4}
                      fullWidth
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      sx={{ borderRadius: 2, background: '#fff' }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant="contained" color="primary" type="submit" fullWidth sx={{ borderRadius: 2, fontWeight: 600, fontSize: '1.1rem', background: 'linear-gradient(90deg, #1976d2 60%, #00bcd4 100%)', boxShadow: 2, textTransform: 'none' }}>
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactUsPage;
