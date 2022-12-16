import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

const LogoStyle = styled('img')(() => ({
  marginLeft: "auto",
  marginRight: "auto"
}));

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default function Logo({ disabledLink = false, sx }) {

  // OR
  // const logo = '/logo/logo_single.svg';

  const logo = (
    <Box sx={{ width: 40, height: 40, ...sx }}>
      <LogoStyle src = "/logo/logo_single.svg" width="400px" height="100%" viewBox="0 0 512 512"/>
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}
