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
          title={'Top de las 10 partidasArancelaria con mayor Valor FOB ($)'}
          tableInfo={{
            tableHead: [
              { id: 'name', label: 'Patida Description', align: 'left' },
              { id: 'value', label: 'Valor FOB($)', align: 'right' },
            ],
            tableData: [
              { name: '4409 - Madera perfilada', value: 36687.49606 },
              { name: '4407 - Madera aserrada', value: 25488.19918 },
              { name: '4403 - Madera enbruto', value: 2054.80896 },
              { name: '9403 - Los demas muebles y sus partes', value: 1790.56959 },
              { name: '4412 - Madera contrachapada', value: 1342.68073 },
              { name: '4418 - Obras y piezas de carpinteria', value: 1160.71083 },
              { name: '4408 - Hojas para chapado', value: 837.09394 },
              { name: '4420 - Marqueteria y taracea', value: 696.03126 },
              { name: '4408 - Asientos', value: 505.36497 },
              { name: '4408 - Articulos de mesa o de cocina', value: 144.46724 },
            ],
          }}
          total={70707.42276}
          headerBgColor={theme.palette.table.darkBlue[0]}
          headerFontColor={'white'}
        />
      </Grid>
      <Grid item xs={6}>
        <CustomTable
          title={'Top de los 10 Parises de Mayor Madera Exportada segun Valor FOB($)'}
          tableInfo={{
            tableHead: [
              { id: 'name', label: 'Patida Description', align: 'left' },
              { id: 'value', label: 'Valor FOB($)', align: 'right' },
            ],
            tableData: [
              { name: 'ALEMANIA', value: 1786.85996 },
              { name: 'BELGICA', value: 5305.15876 },
              { name: 'CHINA', value: 147337.47436 },
              { name: 'DINAMARCA', value: 3845.86084 },
              { name: 'ECUADOR', value: 1251.60452 },
              { name: 'ESTADOS UNIDOS', value: 4946.00659 },
              { name: 'FRANCIA', value: 12974.02204 },
              { name: 'MEXICO', value: 4793.21227 },
              { name: 'REPUBLICA DOMINICANA', value: 9399.49521 },
              { name: 'VETNAM', value: 6307.51809 },
            ],
          }}
          total={40687.49606}
          headerBgColor={theme.palette.table.darkBlue[0]}
          headerFontColor={'white'}
        />
      </Grid>
      <Grid item xs={6}>
        <CustomTable
          title={'Top de los 10 Parises de Mayor Madera Exportada segun Valor FOB($)'}
          tableInfo={{
            tableHead: [
              { id: 'name', label: 'Patida Description', align: 'left' },
              { id: 'value', label: 'Valor FOB($)', align: 'right' },
            ],
            tableData: [
              { name: 'ALEMANIA', value: 1786.85996 },
              { name: 'BELGICA', value: 5305.15876 },
              { name: 'CHINA', value: 147337.47436 },
              { name: 'DINAMARCA', value: 3845.86084 },
              { name: 'ECUADOR', value: 1251.60452 },
              { name: 'ESTADOS UNIDOS', value: 4946.00659 },
              { name: 'FRANCIA', value: 12974.02204 },
              { name: 'MEXICO', value: 4793.21227 },
              { name: 'REPUBLICA DOMINICANA', value: 9399.49521 },
              { name: 'VETNAM', value: 6307.51809 },
            ],
          }}
          total={40687.49606}
          headerBgColor={theme.palette.table.darkBlue[0]}
          headerFontColor={'white'}
        />
      </Grid>
      <Grid item xs={12}>
        <CustomTable
          tableInfo={{
            tableHead: [
              { id: 'name', label: 'Descripcion de partida', align: 'left' },
              { id: 'value', label: 'Valor FOB($)', align: 'right' },
            ],
            tableData: [
              { name: 'Papel y carton; manufacturas de pasta de celulosa, de papel o carton', value: 8983995200 },
              {
                name: 'madera incluidas tablillas y frisos para parques, perfilada longitudinalmente',
                value: 6686591365,
              },
              { name: 'Madera aserrada', value: 3074416980 },
              { name: 'Madera manufacturada', value: 739282203 },
              { name: 'Muelbles de madera', value: 388367813 },
              { name: 'Madera contrachapada (Triplay) chapada y madera estratificada similar', value: 293304122 },
              { name: 'Otros', value: 400181483 },
            ],
          }}
          total={20566039066}
          headerBgColor={theme.palette.table.gray[0]}
          headerFontColor={'black'}
        />
      </Grid>
    </Grid>
  );
}
