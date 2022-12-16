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
  info: PropTypes.array,
};

export default function EnablingTitles({ info }) {
  const theme = useTheme();

  return (
    <Box>
      <Header title={'TÍTULOS HABILITANTES'} />
      {info.map((summaryInfo, index) => (
        <Box key={index}>
          <CardHeader title={summaryInfo.title} />
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              <Summary
                summaryInfo={summaryInfo.departments}
                totalAmount={summaryInfo.totalAmount}
                totalSurface={summaryInfo.totalSurface}
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <CustomPieChart
                title="Expenses Categories"
                chartData={summaryInfo.expenseCategorie}
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
