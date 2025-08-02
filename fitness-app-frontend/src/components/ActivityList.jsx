import { Card, CardContent, Grid2, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router';

const ActivityList = ({ activities }) => {
  const navigate = useNavigate();

  return (
    <Grid2 container spacing={2}>
      {activities.map((activity) => (
        <Grid2 key={activity.id} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Card sx={{cursor: 'pointer'}}
            onClick= {() => navigate(`/activities/${activity.id}`)}>
                <CardContent>
                  <Typography variant='h6'>{activity.type}</Typography>
                  <Typography>Duration: {activity.duration}</Typography>
                  <Typography>Calories: {activity.caloriesBurned}</Typography>
                </CardContent>
            </Card>
        </Grid2>
      ))}
  </Grid2>
  )
}

export default ActivityList