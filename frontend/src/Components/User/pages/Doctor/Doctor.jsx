import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import DoctorCard from "./Doctorcard";
import { Grid, Typography, Box } from "@mui/material";
import Loading from "../../Loading";
import { getdoctor } from "../../slices/getDoctor";
import { useDispatch, useSelector } from "react-redux";

const Doctor = () => {
  const dispatch = useDispatch();
  const datas = useSelector((state) => state.doctor);
  const { doctor, isLoading, error } = datas;

  useEffect(() => {
    dispatch(getdoctor());
  }, []);

  return (
    <Box sx={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%)',
      py: 4,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Grid container sx={{ maxWidth: 1400, mx: 'auto', background: '#fff', borderRadius: 4, boxShadow: 4, p: { xs: 2, md: 5 } }}>
        <Grid item xs={12}>
          <Typography
            sx={{
              color: '#1976d2',
              fontSize: '2.5rem',
              fontWeight: 'bold',
              textShadow: '2px 2px 8px #00bcd422',
              textAlign: 'center',
              mb: 4,
            }}
          >
            OUR DOCTORS
          </Typography>
        </Grid>
        {doctor?.doctors?.map((item, idx) => (
          <Grid
            item
            sx={{ padding: '10px' }}
            xs={12}
            sm={6}
            md={3}
            direction="row"
            key={item._id || idx}
          >
            <DoctorCard item={item} />
          </Grid>
        ))}
      </Grid>
      <Loading isloading={isLoading} />
    </Box>
  );
};

export default Doctor;
