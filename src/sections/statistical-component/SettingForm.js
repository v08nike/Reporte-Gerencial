// react
import { useState } from 'react';
// form
// import { useFormContext, Controller } from 'react-hook-form';
// @mui
// import DatePicker from '@mui/lab/DatePicker';
import { useTheme } from '@mui/material/styles';
import { Stack, Card, TextField, MenuItem, Button } from '@mui/material';
// components
// import { RHFSelect, RHFTextField, FormProvider } from '../../components/hook-form';
// ----------------------------------------------------------------------

const REGIONS_OPTIONS = [
  { key: '00', value: 'TODOS' },
  { key: '01', value: 'AMAZONAS' },
  { key: '02', value: 'ANCASH' },
  { key: '03', value: 'APURIMAC' },
  { key: '04', value: 'AREQUIPA' },
  { key: '05', value: 'AYACUCHO' },
  { key: '06', value: 'CAJAMARCA' },
  { key: '07', value: 'CALLAO' },
  { key: '08', value: 'CUSCO' },
  { key: '09', value: 'HUANCAVELICA' },
  { key: '10', value: 'HUANUCO' },
  { key: '11', value: 'ICA' },
  { key: '12', value: 'JUNIN' },
  { key: '13', value: 'LA LIBERTAD' },
  { key: '14', value: 'LAMBAYEQUE' },
  { key: '15', value: 'LIMA' },
  { key: '16', value: 'LORETO' },
  { key: '17', value: 'MADRE DE DIOS' },
  { key: '18', value: 'MOQUEGUA' },
  { key: '19', value: 'PASCO' },
  { key: '20', value: 'PIURA' },
  { key: '21', value: 'PUNO' },
  { key: '22', value: 'SAN MARTIN' },
  { key: '23', value: 'TACNA' },
  { key: '24', value: 'TUMBES' },
  { key: '25', value: 'UCAYALI' },
];

const YEAR_OPTIONS = ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'];

// ----------------------------------------------------------------------

export default function SettingForm() {
  const theme = useTheme();
  const [region, setRegion] = useState(`${REGIONS_OPTIONS[0].key},${REGIONS_OPTIONS[0].value}`);
  const [year, setYear] = useState(YEAR_OPTIONS[0]);

  const onChangeRegion = (e) => {
    setRegion(e.target.value);
  };

  const onChangeYear = (e) => {
    setYear(e.target.value);
  };

  return (
    <Card>
      <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }} sx={{ p: 3 }}>
        <TextField
          select
          label="Departamento"
          value={region}
          onChange={onChangeRegion}
          SelectProps={{
            MenuProps: {
              sx: { '& .MuiPaper-root': { maxHeight: 260 } },
            },
          }}
          sx={{
            width: '300px',
            textTransform: 'capitalize',
          }}
        >
          {REGIONS_OPTIONS.map((option) => (
            <MenuItem
              key={option.key}
              value={`${option.key},${option.value}`}
              sx={{
                mx: 1,
                my: 0.5,
                borderRadius: 0.75,
                typography: 'body2',
                textTransform: 'capitalize',
              }}
            >
              {option.value}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="Año"
          value={year}
          onChange={onChangeYear}
          SelectProps={{
            MenuProps: {
              sx: { '& .MuiPaper-root': { maxHeight: 260 } },
            },
          }}
          sx={{
            width: '300px',
            textTransform: 'capitalize',
          }}
        >
          {YEAR_OPTIONS.map((option) => (
            <MenuItem
              key={option}
              value={option}
              sx={{
                mx: 1,
                my: 0.5,
                borderRadius: 0.75,
                typography: 'body2',
                textTransform: 'capitalize',
              }}
            >
              {option}
            </MenuItem>
          ))}
        </TextField>
        <Button
          variant="contained"
          sx={{ bgColor: theme.palette.button.green[0], width: '89px', height: '54px'}}
        >
          Filtrar
        </Button>
      </Stack>
    </Card>
  );
}
