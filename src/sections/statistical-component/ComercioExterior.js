// PropTypes
import PropTypes from 'prop-types';

// @mui
import { useTheme } from '@mui/material/styles';
import { Grid } from '@mui/material';

// Components
import Header from './sub-components/Header';
import CustomLineChart from './sub-components/CustomLineChart';
import CustomAppChart from './sub-components/CustomAppChart';
import CustomTable from './sub-components/CustomTable';
import CustomVerticalChart from './sub-components/CustomVerticalChart';

// _mock_
// import { _analyticPost } from '../../_mock';
// ----------------------------------------------------------------------

ComercioExterior.propTypes = {
  data: PropTypes.object,
};

export default function ComercioExterior({ data }) {
  const theme = useTheme();
  const { exportsAndImports, comercioExteriorLastTable, topExportedWoodsChart, topImportedWoodsChart, annualTradeBalanceChart } = data;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Header title={'COMERCIO EXTERIOR'} />
      </Grid>

      <Grid item xs={12} md={6}>
        <CustomLineChart
          title="EXPORTACIONES E IMPORTACIONES"
          chartLabels={exportsAndImports.chartLabels}
          chartData={exportsAndImports.chartData}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <CustomVerticalChart
           title="Balanza Comercial Anual"
           subheader=""
           chartLabels={['2016', '2017', '2018', '2019', '2020', '2021', '2022']}
           chartData={annualTradeBalanceChart}
        />
      </Grid>
      <Grid item xs={12}>
        <CustomTable
          tableInfo={comercioExteriorLastTable}
          headerBgColor={theme.palette.table.gray[0]}
          headerFontColor={'black'}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <CustomAppChart
          title="Top de los 10 Paises de Mayor Madera Exportada segun Valor FOB($)"
          chartData={topExportedWoodsChart}
          colors={[theme.palette.chart.darkBlue[0]]}
          dataLabelsOffsetX={100}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <CustomAppChart
          title="Top de los 10 Paises de Mayor Madera Importada segun Valor FOB($)"
          chartData={topImportedWoodsChart}
          colors={[theme.palette.chart.darkBlue[0]]}
          dataLabelsOffsetX={100}
        />
      </Grid>
    </Grid>
  );
}
