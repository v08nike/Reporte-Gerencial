import PropTypes from 'prop-types';
import merge from 'lodash/merge';
import ReactApexChart from 'react-apexcharts';
// @mui
import { Box, Card, CardHeader } from '@mui/material';
// utils
import { fNumber } from '../../../utils/formatNumber';
// components
import { BaseOptionChart } from '../../../components/chart';

// ----------------------------------------------------------------------

CustomAppChart.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  chartData: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired,
  dataLabelsOffsetX: PropTypes.number.isRequired,
};

export default function CustomAppChart({ title, subheader, chartData, colors, dataLabelsOffsetX, ...other }) {
  // const theme = useTheme();

  const chartLabels = chartData.map((i) => i.label);

  const chartSeries = chartData.map((i) => Math.round(i.value));

  const chartOptions = merge(BaseOptionChart(), {
    chart: {
      type: 'bar',
    },
    tooltip: {
      marker: { show: false },
      y: {
        formatter: (seriesName) => fNumber(seriesName),
        title: {
          formatter: () => '',
        },
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        borderRadius: 2,
        dataLabels: {
          position: 'top',
        },
      },
    },
    bar: {
      dataLabels: {
        position: 'top',
      },
    },
    dataLabels: {
      enabled: true,
      offsetX: dataLabelsOffsetX,
      formatter: (val) => val.toLocaleString('en-US'),
      style: {
        fontSize: '11px',
        colors: ['#000'],
      },
    },
    xaxis: {
      categories: chartLabels,
    },
    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    colors,
  });

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Box sx={{ mx: 3 }} dir="ltr">
        <ReactApexChart type="bar" series={[{ data: chartSeries }]} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}
