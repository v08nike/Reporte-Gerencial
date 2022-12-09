// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import DatePicker from '@mui/lab/DatePicker';
import { Stack, Card, TextField, MenuItem } from '@mui/material';
// components
import { RHFSelect, RHFTextField, FormProvider } from '../../components/hook-form';
// ----------------------------------------------------------------------

const STATUS_OPTIONS = ['Amazonas', 'Ancash', 'Apurimac', 'Arequipa'];
const YEAR_OPTIONS = ['2018', '2019', '2020', '2021', '2022'];

// ----------------------------------------------------------------------

export default function SettingForm() {
  return (
    <Card>
      <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }} sx={{ p: 3 }}>
        <TextField
          select
          label="Departamento"
          // value={filterService}
          // onChange={onFilterService}
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
          {STATUS_OPTIONS.map((option) => (
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
        <TextField
          select
          label="Año"
          // value={filterService}
          // onChange={onFilterService}
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
      </Stack>
    </Card>
  );
}
