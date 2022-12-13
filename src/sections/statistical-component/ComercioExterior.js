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

export default function ComercioExterior() {
  const theme = useTheme();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Header title={'PRODUCCION, INDUSTRIA Y COMERCIO'} />
      </Grid>

      <Grid item xs={12} md={6}>
        <CustomLineChart
          title="EXPORTACIONES E IMPORTACIONES"
          chartLabels={['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020']}
          chartData={[
            {
              data: [
                {
                  name: 'EXPORTACIONES (VALOR FOB)',
                  data: [10000, 14051, 12535, 17851, 24549, 45862, 12369, 15691, 78148, 78148, 78148],
                },
                {
                  name: 'IMPORTACIONES (VALOR CIF)',
                  data: [1587, 25851, 54535, 25851, 16549, 55862, 22369, 33691, 54148, 45148, 74148],
                },
              ],
            },
          ]}
        />
      </Grid>
      <Grid item xs={6}>
        <CustomTable
          tableInfo={{
            tableHead: [
              { id: 'name', label: 'Patida Description', align: 'left' },
              { id: 'value', label: 'Valor FOB($)', align: 'right' },
            ],
            tableData: [
              { name: '4409 - Madera perfilada', value: 3668749606 },
              { name: '4409 - Madera perfilada', value: 1231 },
              { name: '4409 - Madera perfilada', value: 123123 },
              { name: '4409 - Madera perfilada', value: 23432423423 },
              { name: '4409 - Madera perfilada', value: 12345 },
              { name: '4409 - Madera perfilada', value: 213 },
              { name: '4409 - Madera perfilada', value: 234 },
            ],
          }}
          total={4068749606}
          headerBgColor={theme.palette.table.darkBlue[0]}
          headerFontColor={'white'}
        />
      </Grid>
      <Grid item xs={6}>
        <CustomTable
          tableInfo={{
            tableHead: [
              { id: 'name', label: 'Patida Description', align: 'left' },
              { id: 'value', label: 'Valor FOB($)', align: 'right' },
            ],
            tableData: [
              { name: '4409 - Madera perfilada', value: 3668749606 },
              { name: '4409 - Madera perfilada', value: 1231 },
              { name: '4409 - Madera perfilada', value: 123123 },
              { name: '4409 - Madera perfilada', value: 23432423423 },
              { name: '4409 - Madera perfilada', value: 12345 },
              { name: '4409 - Madera perfilada', value: 213 },
              { name: '4409 - Madera perfilada', value: 234 },
            ],
          }}
          total={4068749606}
          headerBgColor={theme.palette.table.darkBlue[0]}
          headerFontColor={'white'}
        />
      </Grid>
      <Grid item xs={6}>
        <CustomTable
          tableInfo={{
            tableHead: [
              { id: 'name', label: 'Patida Description', align: 'left' },
              { id: 'value', label: 'Valor FOB($)', align: 'right' },
            ],
            tableData: [
              { name: '4409 - Madera perfilada', value: 3668749606 },
              { name: '4409 - Madera perfilada', value: 1231 },
              { name: '4409 - Madera perfilada', value: 123123 },
              { name: '4409 - Madera perfilada', value: 23432423423 },
              { name: '4409 - Madera perfilada', value: 12345 },
              { name: '4409 - Madera perfilada', value: 213 },
              { name: '4409 - Madera perfilada', value: 234 },
            ],
          }}
          total={4068749606}
          headerBgColor={theme.palette.table.darkBlue[0]}
          headerFontColor={'white'}
        />
      </Grid>
      <Grid item xs={12}>
        <CustomTable
          tableInfo={{
            tableHead: [
              { id: 'name', label: 'Patida Description', align: 'left' },
              { id: 'value', label: 'Valor FOB($)', align: 'right' },
            ],
            tableData: [
              { name: '4409 - Madera perfilada', value: 3668749606 },
              { name: '4409 - Madera perfilada', value: 1231 },
              { name: '4409 - Madera perfilada', value: 123123 },
              { name: '4409 - Madera perfilada', value: 23432423423 },
              { name: '4409 - Madera perfilada', value: 12345 },
              { name: '4409 - Madera perfilada', value: 213 },
              { name: '4409 - Madera perfilada', value: 234 },
              { name: '4409 - Madera perfilada', value: 4532 },
              { name: '4409 - Madera perfilada', value: 234 },
              { name: '4409 - Madera perfilada', value: 435545 },
            ],
          }}
          total={4068749606}
          headerBgColor={theme.palette.table.gray[0]}
          headerFontColor={'black'}
        />
      </Grid>
    </Grid>
  );
}
