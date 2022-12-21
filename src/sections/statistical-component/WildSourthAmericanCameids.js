// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, CardHeader } from '@mui/material';

// Components
import Header from './sub-components/Header';
import CustomChartSummary from './sub-components/CustomChartSummary';
// ----------------------------------------------------------------------
export default function WildSourthAmericanCameids() {
  const theme = useTheme();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Header title={'Camélidos Sudamericanos Silvestres'} />
      </Grid>

      <Grid item xs={12} md={4}>
        <CustomChartSummary
          title="Chakkus"
          percent={2.6}
          total={765}
          chartColor={theme.palette.primary.main}
          chartData={[22, 8, 35, 50, 82, 84, 77, 12, 87, 43]}
        />
      </Grid>

      <Grid item xs={12} md={4}>
        <CustomChartSummary
          title="Titulares de Manejo"
          percent={-0.1}
          total={18765}
          chartColor={theme.palette.primary.main}
          chartData={[56, 47, 40, 62, 73, 30, 23, 54, 67, 68]}
        />
      </Grid>

      <Grid item xs={12} md={4}>
        <CustomChartSummary
          title="Fibra (kg)"
          percent={0.6}
          total={4876}
          chartColor={theme.palette.primary.main}
          chartData={[40, 70, 75, 70, 50, 28, 7, 64, 38, 27]}
        />
      </Grid>

      <Grid item xs={12}>
        <CardHeader title={'Declaraciones de manejo'} />
      </Grid>

      <Grid item xs={12} md={4}>
        <CustomChartSummary
          title="Poblacion estimada"
          percent={2.6}
          total={765}
          chartColor={theme.palette.primary.main}
          chartData={[22, 8, 35, 50, 82, 84, 77, 12, 87, 43]}
        />
      </Grid>

      <Grid item xs={12} md={4}>
        <CustomChartSummary
          title="Superficie (ha)"
          percent={-0.1}
          total={18765}
          chartColor={theme.palette.primary.main}
          chartData={[56, 47, 40, 62, 73, 30, 23, 54, 67, 68]}
        />
      </Grid>

      <Grid item xs={12} md={4}>
        <CustomChartSummary
          title="Declaraciones de manejo"
          percent={0.6}
          total={4876}
          chartColor={theme.palette.primary.main}
          chartData={[40, 70, 75, 70, 50, 28, 7, 64, 38, 27]}
        />
      </Grid>
    </Grid>
  );
}
