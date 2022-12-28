// React
import { useState } from 'react';
// @mui
// import { useTheme } from '@mui/material/styles';
import { Container, Grid } from '@mui/material';
// jsPDF
import JsPDF from 'jspdf';
// htmlToImage
import * as htmlToImage from 'html-to-image';
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
  const [isExporting, setIsExporting] = useState(false);

  const generatePDF = async () => {
    setIsExporting(true);
    const page = document.querySelector('#report-page');
    const doc = new JsPDF('p', 'px', [page.offsetWidth + 20, page.offsetHeight + 20]);
    const imageData = await htmlToImage.toPng(page);
    doc.addImage(imageData, 'PNG', 10, 10, page.offsetWidth, page.offsetHeight, `image`);
    doc.save('report.pdf');
    setIsExporting(false);
  };

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
            <SettingForm generatePDF={generatePDF} isExporting={isExporting} />
          </Grid>
        </Grid>
        <Grid container id="report-page" spacing={3} mt={2}>
          <Grid item xs={12} id="enablingTitles">
            <EnablingTitles data={_test.enablingTitles} />
          </Grid>

          <Grid item xs={12} id="ecommerceAnalyst">
            <EcommerceAnalyst data={_test.ecommerceAnalyst} />
          </Grid>

          <Grid item xs={12} id="wildlife">
            <Wildlife data={_test.wildlife} />
          </Grid>

          <Grid item xs={12} id="wildSourthAmericanCameids">
            <WildSourthAmericanCameids data={_test.wildSouthAmericanCamelids} />
          </Grid>

          <Grid item xs={12} id="nationalRegistries">
            <NationalRegistries data={_test.nationalRegistries} />
          </Grid>
          <Grid item xs={12} id="comercioExterior">
            <ComercioExterior data={_test.comercioExterior} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
