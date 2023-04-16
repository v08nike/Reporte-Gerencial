/* eslint-disable no-await-in-loop */
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
    const doc = new JsPDF('p', 'mm', 'a4');

    const width = doc.internal.pageSize.getWidth();
    const height = doc.internal.pageSize.getHeight();

    const reportHTMLTags = [];
    reportHTMLTags.push(document.querySelector('#enablingTitles'));
    reportHTMLTags.push(document.querySelector('#ecommerceAnalyst'));
    reportHTMLTags.push(document.querySelector('#wildlife'));
    reportHTMLTags.push(document.querySelector('#wildSourthAmericanCameids'));
    reportHTMLTags.push(document.querySelector('#nationalRegistries'));
    reportHTMLTags.push(document.querySelector('#comercioExterior'));

    for (let i = 0; i < reportHTMLTags.length; i += 1) {
      if (i !== 0) doc.addPage();
      const reportHTMLImage = await htmlToImage.toPng(reportHTMLTags[i]);
      doc.addImage(Logo, 'PNG', width - 70, 5, 60, 15, `logo`);
      doc.addImage(reportHTMLImage, 'PNG', 8, 40, width - 20, (width / reportHTMLTags[i].offsetWidth) * reportHTMLTags[i].offsetHeight, `body${i}`);
      doc.setFontSize(15);
      doc.setTextColor(28, 96, 84);
      doc.text('Reporte Gerencial de Registros de Información Forestal y Fauna Silvestre', width / 2, 25, 'center');

      doc.setFontSize(10);
      doc.setTextColor(28, 96, 84);
      doc.text('Fuente: Autoridades Nacionales de Flora y Fauna Silvestre', 10, height - 15);
      doc.text('Componente Estadístico - SNIFFS', 10, height - 10);
      doc.setTextColor(0, 0, 255);
      doc.textWithLink('https://sniffs.serfor.gob.pe/estadistica/es', width - 74, height - 15, {
        url: 'https://sniffs.serfor.gob.pe/estadistica/es',
      });
    }

    doc.save('report.pdf');
    // setIsExporting(false);
  };

  const filter = async (department, year) => {
    setIsLoading(true);
    axios
      .get(`https://sniffscereportegerencial.azurewebsites.net/ReporteGerencial?departamento=${department}&anho=${year}`, {
        responseType: 'json',
      })
      .then((response) => {
        console.log(response.data);
        setReportData(response.data);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://sniffscereportegerencial.azurewebsites.net/ReporteGerencial?departamento=00&anho=0`, {
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
            <SettingForm generatePDF={generatePDF} filter={filter} isExporting={isExporting} />
          </Grid>
        </Grid>
        {isLoading ? (
          <Stack mt={6} direction="row" alignItems="center" justifyContent="center">
            <CircularProgress disableShrink />
          </Stack>
        ) : (
          <Grid container id="report-page" spacing={3} mt={2}>
            <Grid item xs={12} id="enablingTitles">
              <EnablingTitles data={reportData.enablingTitles} />
            </Grid>

            <Grid item xs={12} id="ecommerceAnalyst">
              <EcommerceAnalyst data={reportData.ecommerceAnalyst} />
            </Grid>

            <Grid item xs={12} id="wildlife">
              <Wildlife data={reportData.wildlife} />
            </Grid>

            <Grid item xs={12} id="wildSourthAmericanCameids">
              <WildSourthAmericanCameids data={reportData.wildSouthAmericanCamelids} />
            </Grid>

            <Grid item xs={12} id="nationalRegistries">
              <NationalRegistries data={reportData.nationalRegistries} />
            </Grid>
            <Grid item xs={12} id="comercioExterior">
              <ComercioExterior data={reportData.comercioExterior} />
            </Grid>
          </Grid>
        )}
      </Container>
    </Page>
  );
}
