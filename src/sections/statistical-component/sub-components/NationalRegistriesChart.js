import PropTypes from 'prop-types';
import merge from 'lodash/merge';
import ReactApexChart from 'react-apexcharts';
// @mui
import { useTheme } from '@mui/material/styles';
import { Card, CardHeader, Box } from '@mui/material';
// components
import { BaseOptionChart } from '../../../components/chart';

// ----------------------------------------------------------------------

NationalRegistriesChart.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  chartData: PropTypes.array.isRequired,
  chartLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default function NationalRegistriesChart({ title, subheader, chartLabels, chartData, ...other }) {
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
    colors: [theme.palette.chart.darkGreen[1]],
  });

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />
      {chartData.map((item) => (
        <Box key={item.year} sx={{ mt: 3, mx: 3 }} dir="ltr">
          {item.year === 'Year' && <ReactApexChart type="bar" series={item.data} options={chartOptions} height={364} />}
        </Box>
      ))}
    </Card>
  );
}
