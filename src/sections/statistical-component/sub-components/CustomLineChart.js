import PropTypes from 'prop-types';
import merge from 'lodash/merge';
import ReactApexChart from 'react-apexcharts';
// @mui
import { useTheme } from '@mui/material/styles';
import { Card, CardHeader, Box } from '@mui/material';
// components
import { BaseOptionChart } from '../../../components/chart';

// ----------------------------------------------------------------------

CustomLineChart.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  chartData: PropTypes.array.isRequired,
  chartLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default function CustomLineChart({ title, subheader, chartLabels, chartData, ...other }) {
  const theme = useTheme();

  console.log(chartLabels);
  console.log(chartData);

  const chartOptions = merge(BaseOptionChart(), {
    xaxis: {
      categories: chartLabels,
    },
    legend: {
      position: 'bottom',
      horizontalAlign: 'center',
    },
    colors: [theme.palette.chart.gray[1], theme.palette.chart.darkGray[0]],
  });

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />
      {chartLabels && chartData && (
        <Box sx={{ mt: 3, mx: 3 }} dir="ltr">
          <ReactApexChart type="line" series={chartData[0].data} options={chartOptions} height={364} />
        </Box>
      )}
    </Card>
  );
}
