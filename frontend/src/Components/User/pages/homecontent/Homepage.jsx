import React from "react";
import Screen from "./Slider";
import { Avatar, Grid, Typography,useTheme } from "@mui/material";
import Departments from "./Departments";
import h1_hero from '../../assets/h1_hero.png'

import Image from 'mui-image'
import { Box, fontSize } from "@mui/system";
import Gallery from "./Gallery";


const Homepage = () => {
  const theme=useTheme()


  const departments = [
    { name: "Anesthesiology And Critical Care" },
    { name: "Clinical Biochemistry" },
    { name: "Department of Dermatology" },
    { name: "Microbiology" },
    { name: "Ophthalmology" },
  ];

  return (
    <Box sx={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%)',
      py: 4,
    }}>
      <Grid container spacing={4} justifyContent="center">
        {/* Hero Section */}
        <Grid item xs={12}>
          <Box sx={{
            position: 'relative',
            borderRadius: 4,
            overflow: 'hidden',
            boxShadow: 4,
            minHeight: { xs: 250, md: 400 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(90deg, #1976d2 60%, #00bcd4 100%)',
          }}>
            <img
              src={h1_hero}
              alt="hero"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.7,
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 1,
              }}
            />
            <Box sx={{
              position: 'relative',
              zIndex: 2,
              color: '#fff',
              textAlign: 'center',
              width: { xs: '90%', md: '60%' },
              mx: 'auto',
            }}>
              <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, textShadow: '0 2px 8px #0002' }}>
                Welcome to Our Hospital Management System
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 400, mb: 2, textShadow: '0 2px 8px #0002' }}>
                Your health, our priority. Experience seamless healthcare management with modern technology.
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Quote Section */}
        <Grid item xs={12} md={10}>
          <Box sx={{
            background: '#fff',
            borderRadius: 4,
            boxShadow: 3,
            p: { xs: 3, md: 5 },
            mt: 4,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: 4,
          }}>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' }, fontStyle: 'italic', color: '#1976d2', mb: 2 }}>
                “I am at an age where I just want to be fit and healthy. Our bodies are our responsibility! So start caring for your body and it will care for you. Eat clean, it will care for you hard.”
              </Typography>
              <Typography sx={{ fontWeight: 500, color: '#00bcd4' }}>
                - Hospital Wellness Team
              </Typography>
            </Box>
            <Avatar
              alt="Wellness"
              src={h1_hero}
              sx={{ width: 120, height: 120, boxShadow: 2, border: '4px solid #e0f7fa' }}
            />
          </Box>
        </Grid>

        {/* Departments Section */}
        <Grid item xs={12} md={10}>
          <Box sx={{
            background: '#fff',
            borderRadius: 4,
            boxShadow: 3,
            p: { xs: 3, md: 5 },
            mt: 4,
          }}>
            <Typography variant="h4" sx={{ fontWeight: 700, color: '#1976d2', mb: 3, textAlign: 'center' }}>
              Departments
            </Typography>
            <Departments departments={departments} />
          </Box>
        </Grid>

        {/* Gallery Section */}
        <Grid item xs={12} md={10}>
          <Box sx={{
            background: '#fff',
            borderRadius: 4,
            boxShadow: 3,
            p: { xs: 3, md: 5 },
            mt: 4,
          }}>
            <Typography variant="h4" sx={{ fontWeight: 700, color: '#1976d2', mb: 3, textAlign: 'center' }}>
              Gallery
            </Typography>
            <Gallery />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Homepage;
