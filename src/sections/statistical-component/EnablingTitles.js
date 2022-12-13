// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, CardHeader, Stack } from '@mui/material';

// Components
import Header from './sub-components/Header';
import Summary from './sub-components/Summary';
import CustomPieChart from './sub-components/CustomPieChart';

// _mock_
// import { _analyticPost } from '../../_mock';
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
              <Stack justifyContent="center">
                <Summary
                  summaryInfo={summaryInfo.departments}
                  totalAmount={summaryInfo.totalAmount}
                  totalSurface={summaryInfo.totalSurface}
                />
              </Stack>
            </Grid>
            <Grid item xs={12} md={5}>
              <CustomPieChart
                title="Expenses Categories"
                chartData={[
                  { label: 'FINES MADERABLES', value: 4344 },
                  { label: 'CONSERVACION', value: 5435 },
                  { label: 'PRODUCTOS FORESTALES', value: 1443 },
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
