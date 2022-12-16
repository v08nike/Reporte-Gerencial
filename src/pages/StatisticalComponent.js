// @mui
// import { useTheme } from '@mui/material/styles';
import { Container, Grid } from '@mui/material';
// hooks
import useSettings from '../hooks/useSettings';
// components
import Page from '../components/Page';
import Image from '../components/Image';

// sections
import {
  SettingForm,
  EnablingTitles,
  AppWelcome,
  EcommerceAnalyst,
  Wildlife,
  WildSourthAmericanCameids,
  NationalRegistries,
  ComercioExterior,
} from '../sections/statistical-component';

// mock
import { _test } from '../_mock';

// ----------------------------------------------------------------------

export default function StatisticalComponent() {
  // const theme = useTheme();

  const { themeStretch } = useSettings();

  console.log(_test);

  return (
    <Page title="Exportaciones | Componente Estadistico">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <AppWelcome
              title={`Componente Estadístico - SNIFFS`}
              description="Abarca toda la información tabular y estadística de los registros nacionales que dispone la legislación forestal y de fauna silvestre, producto de la recopilación, sistematización y el análisis de los datos, que realiza la Dirección de Información y Registro (DIR) de la Dirección General de Información y Ordenamiento Forestal y de Fauna Silvestre (DGIOFFS) del SERFOR."
              img={
                <Image
                  src="assets/illustrations/illustration_motivation.png"
                  sx={{
                    p: 4,
                    margin: { xs: 'auto', md: 'inherit' },
                  }}
                />
              }
            />
          </Grid>

          <Grid item xs={12}>
            <SettingForm />
          </Grid>

          <Grid item xs={12}>
            <EnablingTitles info={_test.enablingTitles} />
          </Grid>

          <Grid item xs={12}>
            <EcommerceAnalyst />
          </Grid>

          <Grid item xs={12}>
            <Wildlife />
          </Grid>

          <Grid item xs={12}>
            <WildSourthAmericanCameids />
          </Grid>

          <Grid item xs={12}>
            <NationalRegistries />
          </Grid>
          <Grid item xs={12}>
            <ComercioExterior />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
