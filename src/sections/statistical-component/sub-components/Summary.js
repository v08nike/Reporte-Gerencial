import PropTypes from 'prop-types';
// @mui
import { Card, Stack, Grid, Divider, Typography, CardContent } from '@mui/material';

// ----------------------------------------------------------------------

Summary.propTypes = {
  summaryData: PropTypes.array,
  totalAmount: PropTypes.number,
  totalSurface: PropTypes.number,
};

export default function Summary({ summaryData, totalAmount, totalSurface, ...other }) {
  return (
    <Card {...other}>
      <CardContent>
        <Stack spacing={2}>
          <Grid container>
            <Grid item xs={5}>
              <Typography variant="subtitle1">DEPARTAMENTO</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="subtitle2" textAlign="right">
                Cantidad
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="subtitle2" textAlign="right">
                Superficie (ha)
              </Typography>
            </Grid>
          </Grid>

          <Divider />

          {summaryData.map((info, index) => (
            <Grid container key={index}>
              <Grid item xs={5}>
                <Typography variant="body2">{info.department}</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="subtitle2" textAlign="right">
                  {info.amount}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="subtitle2" textAlign="right">
                  {parseFloat(info.surface).toFixed(2)}
                </Typography>
              </Grid>
            </Grid>
          ))}

          <Divider />

          <Grid container>
            <Grid item xs={5}>
              <Typography variant="subtitle1">TOTAL</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="subtitle2" textAlign="right">
                {totalAmount}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="subtitle2" textAlign="right">
                {parseFloat(totalSurface).toFixed(2)}
              </Typography>
            </Grid>
          </Grid>
        </Stack>
      </CardContent>
    </Card>
  );
}
