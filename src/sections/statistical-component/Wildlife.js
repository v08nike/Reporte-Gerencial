// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Card, Typography, CardHeader, Stack } from '@mui/material';

// Components
import Header from './sub-components/Header';
import Chart from './sub-components/Chart';
// ----------------------------------------------------------------------

const info = [
  { title: 'Centro de Manejo / Cria', value: 134 },
  { title: 'Centro de Conservacion', value: 4 },
  { title: 'Centro de Custodia Temporal', value: 7 },
  { title: 'Centro de Rescate', value: 12 },
  { title: 'Zoocriadero', value: 53 },
  { title: 'Zoologico', value: 57 },
  { title: 'Zoocriadero-Zoologico-Centro de Rescate', value: 1 },
];

export default function EcommerceAnalyst() {
  const theme = useTheme();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Header title={'FAUNA SILVESTRE'} />
      </Grid>

      <Grid item xs={6}>
        <Chart
          title="Licencias de caza deportiva"
          subheader="Total licencias Emitidas por Autoridad"
          chartData={[
            { label: 'ATFFS LIMA', value: 1269 },
            { label: 'ATFFS AREQUIPA', value: 303 },
            { label: 'ATFFS CUSCO', value: 237 },
            { label: 'ATFFS LAMBAYEQUE', value: 210 },
            { label: 'GORE LA LIBERTAD', value: 172 },
            { label: 'ATFFS ICA', value: 126 },
            { label: 'ATFFS PIURA', value: 125 },
            { label: 'ATFFS CAJAMARCA', value: 70 },
            { label: 'ATFFS ANCASH', value: 63 },
            { label: 'ATFFS APURIMAC', value: 57 },
            { label: 'GORE MADRE DE...', value: 53 },
            { label: 'ATFFS SIERRA CEN...', value: 40 },
            { label: 'ATFFS PUNO', value: 33 },
            { label: 'ATFFS MOQUEGUA..', value: 24 },
            { label: 'GORE HUANUCO', value: 10 },
            { label: 'GORE TUMBES', value: 10 },
            { label: 'GORE AMAZONAS', value: 7 },
          ]}
          colors={[theme.palette.chart.lightGreen[0]]}
        />
      </Grid>
      <Grid item xs={6}>
        <Card>
          <Typography variant="h3" component="h3" textAlign="center">
            Número total de licencias de caza deportiva
          </Typography>
          <Typography variant="h2" component="h2" textAlign="center" sx={{ color: theme.palette.secondary.main }}>
            2821
          </Typography>
        </Card>
      </Grid>
      <Grid item xs={12}>
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
        </Card>
      </Grid>
    </Grid>
  );
}
