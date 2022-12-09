// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, CardHeader } from '@mui/material';

// Components
import Header from '../Header';
import Summary from './Summary';
import ConcessionTypeChart from './ConcessionTypeChart';

// _mock_
import { _analyticPost } from '../../../_mock';
// ----------------------------------------------------------------------

const summaryInfos = [
  {
    title: 'Concesiones',
    departments: [
      {
        department: 'Amazonnas',
        amount: 0,
        surface: 0,
      },
      {
        department: 'Cusuco',
        amount: 0,
        surface: 0,
      },
      {
        department: 'Pasco',
        amount: 1,
        surface: 47.32,
      },
      {
        department: 'ASan Martin',
        amount: 2,
        surface: 116239.26,
      },
      {
        department: 'Amazonnas',
        amount: 0,
        surface: 0,
      },
    ],
    totalAmount: 3,
    totalSurface: 1535878,
  },
  {
    title: 'Autorizaciones',
    departments: [
      {
        department: 'Amazonnas',
        amount: 0,
        surface: 0,
      },
      {
        department: 'Cusuco',
        amount: 0,
        surface: 0,
      },
      {
        department: 'Pasco',
        amount: 1,
        surface: 47.32,
      },
      {
        department: 'ASan Martin',
        amount: 2,
        surface: 116239.26,
      },
      {
        department: 'Amazonnas',
        amount: 0,
        surface: 0,
      },
    ],
    totalAmount: 3,
    totalSurface: 1535878,
  },
  {
    title: 'Permisos',
    departments: [
      {
        department: 'Amazonnas',
        amount: 0,
        surface: 0,
      },
      {
        department: 'Cusuco',
        amount: 0,
        surface: 0,
      },
      {
        department: 'Pasco',
        amount: 1,
        surface: 47.32,
      },
      {
        department: 'ASan Martin',
        amount: 2,
        surface: 116239.26,
      },
      {
        department: 'Amazonnas',
        amount: 0,
        surface: 0,
      },
    ],
    totalAmount: 3,
    totalSurface: 1535878,
  },
];

export default function EnablingTitles() {
  const theme = useTheme();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Header title={'TÍTULOS HABILITANTES'} />
      </Grid>

      {summaryInfos.map((summaryInfo, index) => (
        <Grid item xs={12} key={index}>
          <CardHeader title={summaryInfo.title} />
          <Grid container spacing={2}>
            <Grid item xs={12} md={7}>
              <Summary
                summaryInfo={summaryInfo.departments}
                totalAmount={summaryInfo.totalAmount}
                totalSurface={summaryInfo.totalSurface}
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <ConcessionTypeChart
                title={'TIPODE CONCESIÓN'}
                chartData={[
                  { label: 'FINES MADERABLES', value: 4344 },
                  { label: 'CONSERVACION', value: 5435 },
                  { label: 'PRODUCTOS FORESTALES DIFFERENTES A LA MADERA', value: 1443 },
                  { label: 'ECOTURISMO', value: 4443 },
                  { label: 'FAUNA SILVESTRE', value: 4443 },
                  { label: 'PLANTACIONES FORESTALES', value: 4443 },
                ]}
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
        </Grid>
      ))}
    </Grid>
  );
}
