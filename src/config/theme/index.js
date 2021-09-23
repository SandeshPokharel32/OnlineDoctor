import { createTheme } from '@material-ui/core/styles';
import {
  primary,
  blue,
  red,
  green,
  grey,
  orange,
  teal,
  yellow,
  purple,
} from './UserDefinedColors';
import MuiButton from './MuiButton';
import MuiTypography from './MuiTypography';
import MuiInput from './MuiInput';
import MuiInputLabel from './MuiInputLabel';
import MuiBreadcrumbs from './MuiBreadcrumbs';

const theme = createTheme({
  palette: {
    primary: {
      light: primary.A100,
      main: primary.default,
      dark: primary.A700,
      ...primary,
    },
    secondary: {
      light: primary.A200,
      main: primary.A300,
      dark: primary.A400,
      contrastText: primary.A600,
    },
    success: {
      light: green.A100,
      main: green.default,
      dark: green.A700,
      contrastText: '#fff',
    },
    error: {
      light: red.A100,
      main: red.default,
      dark: red.A600,
      contrastText: '#fff',
    },
    info: {
      light: blue.A100,
      main: blue.default,
      dark: blue.A600,
    },
    warning: {
      light: yellow.A100,
      main: yellow.default,
      dark: yellow.A600,
    },
    common: {
      textDefault: '#445668',
    },
    blue,
    red,
    green,
    grey,
    orange,
    teal,
    yellow,
    purple,
    background: {
      default: '#fff',
    },
  },
  typography: {
    h1: {
      fontSize: '2.625rem',
      fontWeight: 600,
      lineHeight: 2.625 * 1.25 + `rem`,
      fontFamily: 'Inter, sans-serif',
    },
    h2: {
      fontSize: '1.875rem',
      fontWeight: 500,
      lineHeight: 1.875 * 1.25 + `rem`,
      fontFamily: 'Inter, sans-serif',
    },
    h3: {
      fontSize: '1.625rem',
      fontWeight: 500,
      lineHeight: 1.625 * 1.25 + `rem`,
      fontFamily: 'Inter, sans-serif',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
      lineHeight: 1.5 * 1.25 + `rem`,
      fontFamily: 'Inter, sans-serif',
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.25 * 1.25 + `rem`,
      fontFamily: 'Inter, sans-serif',
    },
    h6: {
      fontSize: '1.125rem',
      fontWeight: 500,
      lineHeight: 1.25 * 1.25 + `rem`,
      fontFamily: 'Inter, sans-serif',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: '1.625rem',
    },
    button: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: '1.25rem',
    },
    subtitle1: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 0.875 * 1.25 + `rem`,
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 0.75 * 1.25 + `rem`,
    },
    fontFamily: 'Inter, sans-serif',
  },
});

theme.props = {
  MuiButton: MuiButton.props,
  MuiInput: MuiInput.props,
  MuiInputLabel: MuiInputLabel.props,
};

theme.overrides = {
  MuiButton: MuiButton.overrides,
  MuiTypography: MuiTypography.overrides,
  MuiBreadcrumbs: MuiBreadcrumbs.overrides,
  MuiInput: {
    root: {
      padding: theme.spacing(1),
      border: `1px solid ${theme.palette.grey.A300}`,
      borderRadius: '5px',
      outline: '1px solid transparent',
      color: theme.palette.common.textDefault,
      marginTop: `${theme.spacing(2.78)}px !important`,
    },
    error: {
      background: theme.palette.red.A100,
      borderColor: theme.palette.red.A500,
    },
    colorSecondary: {
      background: theme.palette.grey.A200,
    },
    focused: {
      borderColor: `${theme.palette.blue.default}`,
    },
  },
  MuiInputLabel: {
    root: {
      ...theme.typography.subtitle2,
      fontSize: '1.1rem',
      textTransform: 'capitalize',
      color: theme.palette.common.textDefault,
    },
  },
  MuiFormLabel: {
    colorSecondary: {
      '&$focused': {
        color: theme.palette.common.textDefault,
      },
    },
  },
  MuiAvatar: {
    root: {
      fontSize: '1rem',
    },
  },
  MuiAutocomplete: {
    option: {
      '&::first-letter': {
        textTransform: 'uppercase',
      },
    },
  },
};

export default theme;
