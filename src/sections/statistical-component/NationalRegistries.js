// PropTypes
import PropTypes from 'prop-types';

// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Card, CardHeader, Typography, Stack } from '@mui/material';

// Components
import Header from './sub-components/Header';
import NationalRegistriesSummary from './sub-components/NationalRegistriesSummary';
import NationalRegistriesChart from './sub-components/NationalRegistriesChart';
import CustomAppChart from './sub-components/CustomAppChart';

// ----------------------------------------------------------------------

NationalRegistries.propTypes = {
  data: PropTypes.object,
};

export default function NationalRegistries({ data }) {
  const theme = useTheme();
  const { countOfFilesBySanctioningBody, forestAndWildlifeRegents, forestPlantations, installAreaOfForestPlantations } =
    data;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Header title={'REGISTROS NACIONALES'} />
      </Grid>
      <Grid item xs={12}>
        <CardHeader title={'Plantaciones forestales'} />
      </Grid>
      {forestPlantations && (
        <Grid item xs={12} md={4}>
          <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} sx={{ height: '455px' }}>
            <NationalRegistriesSummary
              title={forestPlantations.title}
              icon={'eva:diagonal-arrow-left-down-fill'}
              percent={forestPlantations.percent}
              total={forestPlantations.total}
              chartData={forestPlantations.data}
            />
          </Stack>
        </Grid>
      )}
      {installAreaOfForestPlantations && (
        <Grid item xs={12} md={8}>
          <NationalRegistriesChart
            title="SUPERFICIE INSTALADA DE PLANTACIONES FORESTALES (HA)"
            chartLabels={installAreaOfForestPlantations.chartLabels}
            chartData={installAreaOfForestPlantations.chartData}
          />
        </Grid>
      )}
      {forestAndWildlifeRegents && (
        <Grid item xs={12}>
          <CardHeader title={forestAndWildlifeRegents.title} />
        </Grid>
      )}
      {forestAndWildlifeRegents && (
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 2 }}>
            <Stack direction="row" spacing={2}>
              {forestAndWildlifeRegents.data.map((item, index) => (
                <Stack key={index} direction="column" justifyContent="space-between" sx={{ pt: 2 }}>
                  <Typography variant="h6" component="h6" textAlign="center">
                    {item.title}
                  </Typography>
                  <Typography
                    variant="h5"
                    component="h5"
                    textAlign="center"
                    sx={{ pt: 1, color: theme.palette.secondary.main }}
                  >
                    {item.value}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Card>
        </Grid>
      )}
      <Grid item xs={12}>
        <CardHeader title={'Infractores'} />
      </Grid>
      {countOfFilesBySanctioningBody && (
        <Grid item xs={12}>
          <CustomAppChart
            title={countOfFilesBySanctioningBody.title}
            chartData={countOfFilesBySanctioningBody.chartData}
            colors={[theme.palette.chart.lightBlue[1]]}
            dataLabelsOffsetX={40}
          />
        </Grid>
      )}
    </Grid>
  );
}
