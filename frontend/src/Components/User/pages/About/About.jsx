import React from 'react';
import { Container, Typography, Grid, Card, List, ListItem, styled, Box } from '@mui/material';
import AboutImage from './AboutImg';

const SectionTypography = styled(Typography)(({ theme }) => ({
  margin: theme.spacing(2, 0),
}));

const ListItemText = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

const AboutUs = () => {
  return (
    <Box sx={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%)',
      py: 4,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Container maxWidth="md">
        <Card sx={{
          background: '#fff',
          borderRadius: 4,
          boxShadow: 4,
          p: { xs: 2, md: 5 },
        }}>
          <AboutImage />
          <SectionTypography variant="h4" component="h1" align="center" sx={{ fontWeight: 700, color: '#1976d2' }}>
            About Us
          </SectionTypography>
          <SectionTypography variant="body1" paragraph align="center">
            Welcome to our hospital management system! We are dedicated to providing exceptional healthcare services to our patients and streamlining administrative tasks for our staff.
          </SectionTypography>
          <SectionTypography variant="body1" paragraph align="center">
            Our team of experienced doctors, nurses, and administrators work tirelessly to ensure the smooth operation of the hospital and the highest level of care for our patients.
          </SectionTypography>
          <SectionTypography variant="h5" component="h2" align="center" sx={{ color: '#00bcd4', fontWeight: 600 }}>
            Our Mission
          </SectionTypography>
          <SectionTypography variant="body1" paragraph align="center">
            Our mission is to improve the health and well-being of our community by providing accessible, high-quality medical services. We strive to enhance patient outcomes, promote health education, and implement innovative technology solutions to optimize healthcare delivery.
          </SectionTypography>
          <SectionTypography variant="h5" component="h2" align="center" sx={{ color: '#00bcd4', fontWeight: 600 }}>
            Our Values
          </SectionTypography>
          <List>
            <ListItem>
              <ListItemText>
                <Typography variant="body1">Compassion: We treat every patient with empathy and understanding.</Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <Typography variant="body1">Excellence: We are committed to delivering the highest standard of care.</Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <Typography variant="body1">Integrity: We uphold ethical principles and maintain trust.</Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <Typography variant="body1">Collaboration: We foster teamwork and cooperation among our staff.</Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <Typography variant="body1">Innovation: We embrace new technologies and ideas to advance healthcare.</Typography>
              </ListItemText>
            </ListItem>
          </List>
          <SectionTypography variant="h5" component="h2" align="center" sx={{ color: '#00bcd4', fontWeight: 600 }}>
            Contact Us
          </SectionTypography>
          <SectionTypography variant="body1" paragraph align="center">
            If you have any questions, suggestions, or would like to make an appointment, please feel free to reach out to us. Our friendly staff will be happy to assist you.
          </SectionTypography>
          <SectionTypography variant="body1" paragraph align="center">
            Phone: +977-9862164447<br />
            Email: bastolaronak12@gmail.com
          </SectionTypography>
        </Card>
      </Container>
    </Box>
  );
};

export default AboutUs;
