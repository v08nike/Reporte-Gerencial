// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Card, CardHeader, Typography, Stack } from '@mui/material';

// Components
import Header from './sub-components/Header';
import NationalRegistriesSummary from './sub-components/NationalRegistriesSummary';
import NationalRegistriesChart from './sub-components/NationalRegistriesChart';
import Chart from './sub-components/Chart';
// ----------------------------------------------------------------------

const info = [
  { title: 'Regentes con licencias vigentes', value: 260 },
  { title: 'Regentes con licencias suspendidas a solicitud de parte', value: 1 },
  { title: 'Regentes con licencias inhabilitada', value: 7 },
];

// ----------------------------------------------------------------------

export default function NationalRegistries() {
  const theme = useTheme();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Header title={'Registros Nacionales'} />
      </Grid>
      <Grid item xs={12}>
        <CardHeader title={'Plantaciones forestales'} />
      </Grid>
      <Grid item xs={12} md={4}>
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} sx={{ height: '455px' }}>
          <NationalRegistriesSummary
            title={'Total 2020'}
            icon={'eva:diagonal-arrow-left-down-fill'}
            percent={8.2}
            total={9999}
            chartData={[111, 136, 76, 108, 74, 54, 57, 84]}
          />
        </Stack>
      </Grid>
      <Grid item xs={12} md={8}>
        <NationalRegistriesChart
          title="SUPERFICIE INSTALADA DE PLANTACIONES FORESTALES (HA)"
          chartLabels={['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020']}
          chartData={[
            {
              year: 'Year',
              data: [
                { name: 'Income', data: [38000, 35000, 24000, 22000, 21000, 11000, 9900, 9500, 8222, 7111, 6333] },
              ],
            },
          ]}
        />
      </Grid>
      <Grid item xs={12}>
        <CardHeader title={'Regentes forestales y de fauna silvestre (2022)'} />
      </Grid>
      <Grid item xs={12} md={6}>
        <Card sx={{ p: 2 }}>
          <CardHeader subheader={'Centros de  Manejo y Cría'} />
          <Stack direction="row" spacing={2}>
            {info.map((item, index) => (
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
        </Card>{' '}
      </Grid>

      <Grid item xs={12}>
        <CardHeader title={'Infractores'} />
      </Grid>
      <Grid item xs={12}>
        <Chart
          title="Recuento de Expedientes por Órgano Sancionador"
          chartData={[
            { label: 'SERFOR', value: 2012 },
            { label: 'OSINFOR', value: 1446 },
            { label: 'ARFFS', value: 744 },
            { label: 'SERNANP-WS', value: 215 },
            { label: 'INRENA', value: 1 },
          ]}
          colors={[theme.palette.chart.lightBlue[1]]}
        />
      </Grid>
    </Grid>
  );
}
