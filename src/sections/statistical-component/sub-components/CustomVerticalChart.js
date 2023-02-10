import PropTypes from 'prop-types';
import merge from 'lodash/merge';
import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
// @mui
import { useTheme } from '@mui/material/styles';
import { Card, CardHeader, Box, TextField } from '@mui/material';
// components
import { BaseOptionChart } from '../../../components/chart';

// ----------------------------------------------------------------------

CustomVerticalChart.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  chartData: PropTypes.array.isRequired,
  chartLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default function CustomVerticalChart({ title, subheader, chartLabels, chartData, ...other }) {
  const theme = useTheme();

  const chartOptions = merge(BaseOptionChart(), {
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: chartLabels,
    },
    tooltip: {
      y: {
        formatter: (val) => `$${val}`,
      },
    },
    colors: [
      theme.palette.chart.lightBlue[2],
      theme.palette.chart.darkGray[1],
      theme.palette.chart.lightGreen[1],
    ]
  });

  return (
    <Card {...other}>
      <CardHeader
        title={title}
        subheader={subheader}
      />

      <Box sx={{ mt: 3, mx: 3 }} dir="ltr">
        <ReactApexChart type="bar" series={chartData} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}
