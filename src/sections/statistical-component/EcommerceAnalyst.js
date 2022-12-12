// @mui
import { useTheme } from '@mui/material/styles';
import { Grid } from '@mui/material';

// Components
import Header from './sub-components/Header';
import Chart from './sub-components/Chart';

// _mock_
// import { _analyticPost } from '../../_mock';
// ----------------------------------------------------------------------

export default function EcommerceAnalyst() {
  const theme = useTheme();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Header title={'PRODUCCION, INDUSTRIA Y COMERCIO'} />
      </Grid>

      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Chart
              title="Productos maderables"
              subheader="Principales tipos de productos"
              chartData={[
                { label: 'MADERA ASERRADA', value: 316.08446 },
                { label: 'MADERA ROLLIZA', value: 292.16157 },
                { label: 'PAQUETERIA', value: 37.32124 },
                { label: 'TABLILLAS', value: 10.36027 },
              ]}
              colors={[
                theme.palette.chart.darkBlue[0]
              ]}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Chart
              title="Productos diferentes a la madera"
              // subheader="(+43%) than last year"
              chartData={[
                { label: 'CASTANA EN CAS...', value: 1305232.06 },
                { label: 'CARRIZO', value: 1288556.00 },
                { label: 'CASTANA PELADA', value: 1352000.16 },
                { label: 'BARBASCO', value: 1205190.00 },
                { label: 'TOLA', value: 1057000.00 },
                { label: 'ALGARROBA EN VAL...', value: 238371.88 },
                { label: 'UNA DE GATO', value: 151514.31 },
                { label: 'MUSGO', value: 149368.00 },
                { label: 'CUNUJA', value: 142740.00 },
                { label: 'PRODUCTOS DE US...', value: 137907.40 },
                { label: 'CORTEZA...', value: 55998.41 },
                { label: 'SEMILLA...', value: 34102.00 },
                { label: 'LATEX...', value: 33026.25 },
              ]}
              colors={[
                theme.palette.chart.darkBlue[0]
              ]}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
