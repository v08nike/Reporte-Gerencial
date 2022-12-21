// PropTypes
import PropTypes from 'prop-types';

// @mui
import { useTheme } from '@mui/material/styles';
import { Grid } from '@mui/material';

// Components
import Header from './sub-components/Header';
import CustomLineChart from './sub-components/CustomLineChart';
import CustomTable from './sub-components/CustomTable';

// _mock_
// import { _analyticPost } from '../../_mock';
// ----------------------------------------------------------------------

ComercioExterior.propTypes = {
  data: PropTypes.object,
};

export default function ComercioExterior({ data }) {
  const theme = useTheme();
  const { exportsAndImports, comercioExteriorLastTable, topExportedWoodsChart, topTariffItemsChart } = data;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Header title={'PRODUCCION, INDUSTRIA Y COMERCIO'} />
      </Grid>

      <Grid item xs={12} md={6}>
        <CustomLineChart
          title="EXPORTACIONES E IMPORTACIONES"
          chartLabels={exportsAndImports.chartLabels}
          chartData={exportsAndImports.chartData}
        />
      </Grid>
      <Grid item xs={6}>
        <CustomTable
          title={'Top de las 10 partidasArancelaria con mayor Valor FOB ($)'}
          tableInfo={topTariffItemsChart}
          headerBgColor={theme.palette.table.darkBlue[0]}
          headerFontColor={'white'}
        />
      </Grid>
      <Grid item xs={6}>
        <CustomTable
          title={'Top de los 10 Parises de Mayor Madera Exportada segun Valor FOB($)'}
          tableInfo={topExportedWoodsChart}
          headerBgColor={theme.palette.table.darkBlue[0]}
          headerFontColor={'white'}
        />
      </Grid>
      <Grid item xs={6}>
        <CustomTable
          title={'Top de los 10 Parises de Mayor Madera Exportada segun Valor FOB($)'}
          tableInfo={topExportedWoodsChart}
          headerBgColor={theme.palette.table.darkBlue[0]}
          headerFontColor={'white'}
        />
      </Grid>
      <Grid item xs={12}>
        <CustomTable
          tableInfo={comercioExteriorLastTable}
          headerBgColor={theme.palette.table.gray[0]}
          headerFontColor={'black'}
        />
      </Grid>
    </Grid>
  );
}
