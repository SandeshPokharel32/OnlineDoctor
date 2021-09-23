import { grey, primary } from '../UserDefinedColors';

export default {
  props: {
    disableElevation: false,
  },
  overrides: {
    root: {
      fontSize: '1rem',
      padding: '1rem 2rem',
      textTransform: 'capitalize',
    },
    text: {
      fontSize: '1rem',
      padding: '1rem 2rem',
    },
    outlined: {
      fontSize: '1rem',
      padding: '1rem 2rem',
      background: 'white',
    },
    textSecondary: {
      color: primary.default,
      background: primary.A200,
      '&:hover': {
        background: primary.A300 + ` !important`,
      },
    },
    outlinedSecondary: {
      color: primary.default,
      background: primary.A100,
      borderColor: primary.A500,
    },
    disabled: {
      color: `${grey.A450} !important`,
      background: `${grey.white} !important`,
    },
    // Sizes
    sizeSmall: {
      fontSize: '0.875rem',
      padding: '0.8125rem 2rem',
    },
    sizeLarge: {
      fontSize: '1rem',
      padding: '22px 40px',
    },
  },
};
