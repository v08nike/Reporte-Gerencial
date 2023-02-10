// PropTypes
import PropTypes from 'prop-types';

// @mui
import { useTheme } from '@mui/material/styles';
import { Grid } from '@mui/material';

// Components
import Header from './sub-components/Header';
import CustomAppChart from './sub-components/CustomAppChart';

// _mock_
// import { _analyticPost } from '../../_mock';
// ----------------------------------------------------------------------

EcommerceAnalyst.propTypes = {
  data: PropTypes.object,
};

export default function EcommerceAnalyst({ data }) {
  const theme = useTheme();
  const { timberProducts, productsOtherThanWood } = data;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Header title={'PRODUCCION, INDUSTRIA Y COMERCIO'} />
      </Grid>

      <Grid item xs={12}>
        <CustomAppChart
          title="Productos maderables"
          subheader="Principales tipos de productos"
          chartData={timberProducts}
          colors={[theme.palette.chart.darkBlue[0]]}
          dataLabelsOffsetX={80}
        />
      </Grid>
      <Grid item xs={12}>
        <CustomAppChart
          title="Productos diferentes a la madera"
          chartData={productsOtherThanWood}
          colors={[theme.palette.chart.darkBlue[0]]}
          dataLabelsOffsetX={80}
        />
      </Grid>
    </Grid>
  );
}
