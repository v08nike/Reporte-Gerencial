// PropTypes
import { PropTypes } from 'prop-types';

// MUI
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

// ----------------------------------------------------------------------
const HeaderStyle = styled(Box)(({ theme }) => ({
  padding: '24px 40px',
  width: '100%',
  background: theme.palette.warning.lighter,
  borderRadius: '16px',
  alignSelf: 'stretch',
}));

// ----------------------------------------------------------------------

Header.propTypes = {
  title: PropTypes.string
}

export default function Header({ title }) {
  return <HeaderStyle>
    <Typography variant="h4" component="h4" color="warning.dark">
      {title}
    </Typography>
  </HeaderStyle>;
}
