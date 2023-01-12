// React
import { useState, useEffect } from 'react';
// @mui
// import { useTheme } from '@mui/material/styles';
import { Container, Grid, Stack } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
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
// axios
import axios from '../utils/axios';

const Logo = require('../assets/logo/logo_full.jpg');
// ----------------------------------------------------------------------

export default function StatisticalComponent() {
  // const theme = useTheme();

  const { themeStretch } = useSettings();
  const [reportData, setReportData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isExporting, setIsExporting] = useState(false);

  const generatePDF = async () => {
    // setIsExporting(true);
    const page = document.querySelector('#report-page');
    const screenW = document.body.offsetWidth;
    const bodyW = page.offsetWidth;
    const bodyH = page.offsetHeight;
    const bodyPadding =  (screenW - bodyW) / 2;

    console.log(screenW, bodyW, bodyH, bodyPadding);

    const doc = new JsPDF('p', 'px', [screenW, bodyH + 300]);

    doc.setFontSize(35);
    doc.setTextColor(28, 96, 84);
    doc.text("Reporte Gerencial de Registros de Información Forestal y Fauna Silvestre", screenW / 2 - 450, 50);
    doc.setFontSize(25);
    doc.setTextColor(28, 96, 84);
    doc.text("Fuente: Autoridades Nacionales de Flora y Fauna Silvestre", 50, bodyH + 230);
    doc.text("Componente Estadístico - SNIFFS", 50, bodyH + 250);
    doc.setTextColor(0, 0, 255);
    doc.textWithLink("https://sniffs.serfor.gob.pe/estadistica/es", screenW - 330, bodyH + 250, { url: 'https://sniffs.serfor.gob.pe/estadistica/es' });

    doc.addImage(Logo, 'PNG', screenW - 280, 10, 200, 60, `logo`);
    const imageData = await htmlToImage.toPng(page);
    doc.addImage(imageData, 'PNG', bodyPadding, 100, bodyW, bodyH, `body`);
    
    doc.save('report.pdf');
    // setIsExporting(false);
  };

  console.log(_test);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://sniffscereportegerencial.azurewebsites.net/ReporteGerencial?anho=2020`, {
        responseType: 'json',
      })
      .then((response) => {
        console.log(response.data);
        setReportData(response.data);
        setIsLoading(false);
      });
  }, []);

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
        {isLoading ? (
          <Stack mt={6} direction='row' alignItems='center' justifyContent='center'>
            <CircularProgress disableShrink />
          </Stack>
        ) : (
          <Grid container id="report-page" spacing={3} mt={2}>
            <Grid item xs={12} id="enablingTitles">
              <EnablingTitles data={_test.enablingTitles} />
            </Grid>

            <Grid item xs={12} id="ecommerceAnalyst">
              <EcommerceAnalyst data={reportData.ecommerceAnalyst} />
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
        )}
      </Container>
    </Page>
  );
}
