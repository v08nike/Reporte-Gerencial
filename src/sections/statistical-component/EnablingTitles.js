// propTypes
import { PropTypes } from 'prop-types';

// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, CardHeader, Box } from '@mui/material';

// Components
import Header from './sub-components/Header';
import Summary from './sub-components/Summary';
import CustomPieChart from './sub-components/CustomPieChart';

// ----------------------------------------------------------------------

EnablingTitles.propTypes = {
  data: PropTypes.array,
};

export default function EnablingTitles({ data }) {
  const theme = useTheme();
  return (
    <Box>
      <Header title={'TÍTULOS HABILITANTES'} />
      {data.map((summaryData, index) => (
        <Box key={index}>
          <CardHeader title={summaryData.title} />
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              <Summary
                summaryData={summaryData.departments}
                totalAmount={summaryData.totalAmount}
                totalSurface={summaryData.totalSurface}
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <CustomPieChart
                title={summaryData.pieChartTitle}
                chartData={summaryData.expenseCategorie}
                chartColors={[
                  theme.palette.chart.brown[0],
                  theme.palette.chart.darkYellow[0],
                  theme.palette.chart.lightBlue[0],
                  theme.palette.chart.gray[0],
                  theme.palette.chart.lightMauve[0],
                  theme.palette.chart.darkGreen[0],
                ]}
              />
            </Grid>
          </Grid>
        </Box>
      ))}
    </Box>
  );
}
