// PropTypes
import PropTypes from 'prop-types';

// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, CardHeader } from '@mui/material';

// Components
import Header from './sub-components/Header';
import CustomChartSummary from './sub-components/CustomChartSummary';
// ----------------------------------------------------------------------
WildSouthAmericanCameids.propTypes = {
  data: PropTypes.object,
};

export default function WildSouthAmericanCameids({ data }) {
  const theme = useTheme();
  const { area, chakkus, estimatedPopulation, fiber, handlingStatements, managementHolders } = data;
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Header title={'CAMÉLIDOS SUDAMERICANOS SILVESTRES'} />
      </Grid>

      {chakkus && (
        <Grid item xs={12} md={4}>
          <CustomChartSummary
            title="Chakkus"
            percent={chakkus.percent}
            total={chakkus.total}
            chartColor={theme.palette.primary.main}
            chartData={chakkus.data}
          />
        </Grid>
      )}

      {managementHolders && (
        <Grid item xs={12} md={4}>
          <CustomChartSummary
            title="Titulares de Manejo"
            percent={managementHolders.percent}
            total={managementHolders.total}
            chartColor={theme.palette.primary.main}
            chartData={managementHolders.data}
          />
        </Grid>
      )}

      {fiber && (
        <Grid item xs={12} md={4}>
          <CustomChartSummary
            title="Fibra (kg)"
            percent={fiber.percent}
            total={fiber.total}
            chartColor={theme.palette.primary.main}
            chartData={fiber.data}
          />
        </Grid>
      )}

      <Grid item xs={12}>
        <CardHeader title={'Declaraciones de manejo'} />
      </Grid>

      {estimatedPopulation && (
        <Grid item xs={12} md={4}>
          <CustomChartSummary
            title="Poblacion estimada"
            percent={estimatedPopulation.percent}
            total={estimatedPopulation.total}
            chartColor={theme.palette.primary.main}
            chartData={estimatedPopulation.data}
          />
        </Grid>
      )}

      {area && (
        <Grid item xs={12} md={4}>
          <CustomChartSummary
            title="Superficie (ha)"
            percent={area.percent}
            total={area.total}
            chartColor={theme.palette.primary.main}
            chartData={area.data}
          />
        </Grid>
      )}

      {handlingStatements && (
        <Grid item xs={12} md={4}>
          <CustomChartSummary
            title="Declaraciones de manejo"
            percent={handlingStatements.percent}
            total={handlingStatements.total}
            chartColor={theme.palette.primary.main}
            chartData={handlingStatements.data}
          />
        </Grid>
      )}
    </Grid>
  );
}
