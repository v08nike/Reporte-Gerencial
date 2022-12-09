import PropTypes from 'prop-types';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import { List, Box, ListSubheader } from '@mui/material';
// hooks
import useLocales from '../../../hooks/useLocales';
//
import { NavListRoot } from './NavList';

// ----------------------------------------------------------------------

export const ListSubheaderStyle = styled((props) => <ListSubheader disableSticky disableGutters {...props} />)(
  ({ theme }) => ({
    ...theme.typography.overline,
    paddingTop: theme.spacing(3),
    paddingLeft: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    color: theme.palette.text.primary,
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.shorter,
    }),
  })
);

// ----------------------------------------------------------------------

NavSectionVertical.propTypes = {
  isCollapse: PropTypes.bool,
  navConfig: PropTypes.array,
};

export default function NavSectionVertical({ navConfig, isCollapse = false, ...other }) {
  const theme = useTheme();
  const { translate } = useLocales();

  return (
    <Box {...other} sx={{ background: theme.palette.primary.dark }}>
      {navConfig.map((group) => (
        <List key={group.subheader} disablePadding>
          <ListSubheaderStyle
            sx={{
              ...(isCollapse && {
                opacity: 0,
              }),
            }}
          >
            {translate(group.subheader)}
          </ListSubheaderStyle>

          {group.items.map((list) => (
            <NavListRoot key={list.title + list.path} list={list} isCollapse={isCollapse} />
          ))}
        </List>
      ))}
    </Box>
  );
}
