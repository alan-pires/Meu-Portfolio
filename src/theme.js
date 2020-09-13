import {createMuiTheme} from '@material-ui/core/styles'
import {grey} from '@material-ui/core/colors';
import { pink } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#ffffff',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#e65100',
      dark: '#f44336',
      contrastText: '#000',
    },
  }
});

export default theme;