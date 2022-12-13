import PropTypes from 'prop-types';
import merge from 'lodash/merge';
import ReactApexChart from 'react-apexcharts';
// @mui
import { useTheme, styled } from '@mui/material/styles';
import { Box, Card, CardHeader } from '@mui/material';
// utils
import { fNumber } from '../../../utils/formatNumber';
// hooks
import useResponsive from '../../../hooks/useResponsive';
// components
import { BaseOptionChart } from '../../../components/chart';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(() => ({
  '& .apexcharts-legend': {
    width: 240,
    margin: 'auto',
  },
  '& .apexcharts-datalabels-group': {
    display: 'none',
  },
  '& .apexcharts-canvas svg,.apexcharts-canvas foreignObject': {
    overflow: 'visible',
  },
}));

// ----------------------------------------------------------------------

CustomPieChart.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  chartData: PropTypes.array.isRequired,
  chartColors: PropTypes.array.isRequired,
};

export default function CustomPieChart({ title, subheader, chartColors, chartData, ...other }) {
  const theme = useTheme();

  const isDesktop = useResponsive('up', 'sm');

  const chartLabels = chartData.map((i) => i.label);

  const chartSeries = chartData.map((i) => i.value);

  const chartOptions = merge(BaseOptionChart(), {
    labels: chartLabels,
    colors: chartColors,
    stroke: {
      colors: [theme.palette.background.paper],
    },
    fill: { opacity: 0.8 },
    legend: {
      position: 'right',
      itemMargin: {
        horizontal: 10,
        vertical: 5,
      },
      markers: {
        radius: 12,
        width: 12,
        height: 12,
      },
    },
    tooltip: {
      fillSeriesColor: false,
      y: {
        formatter: (seriesName) => fNumber(seriesName),
        title: {
          formatter: (seriesName) => `${seriesName}`,
        },
      },
    },
    responsive: [
      {
        breakpoint: theme.breakpoints.values.sm,
        options: {
          legend: {
            position: 'bottom',
            horizontalAlign: 'left',
          },
        },
      },
    ],
  });

  return (
    <RootStyle {...other}>
      <CardHeader title={title} subheader={subheader} />
      <Box sx={{ my: 5 }} dir="ltr">
        <ReactApexChart type="pie" series={chartSeries} options={chartOptions} height={isDesktop ? 240 : 360} />
      </Box>
    </RootStyle>
  );
}
