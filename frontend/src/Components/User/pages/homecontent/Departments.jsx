import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function Departments({ departments = [] }) {
  return (
    <Grid container spacing={3} justifyContent="center">
      {departments.map((item, idx) =>
        item && item.name ? (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Card sx={{ minWidth: 200, minHeight: 120, borderRadius: 3, boxShadow: 2 }}>
              <CardContent>
                <Typography sx={{ fontSize: 22, fontWeight: 600 }} color="text.primary" gutterBottom>
                  {item.name}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="outlined" color="primary">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ) : null
      )}
    </Grid>
  );
}