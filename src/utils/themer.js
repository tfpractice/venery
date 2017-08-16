import teal from 'material-ui/colors/teal';
import pink from 'material-ui/colors/pink';
import createPalette from 'material-ui/styles/palette';
import { createMuiTheme, } from 'material-ui/styles';

const palette = createPalette({ primary: teal, accent: pink, type: 'dark', });

export const theme = createMuiTheme({ palette, });
export const styleManager = {};

// const { styleManager, theme, } = MuiThemeProvider.createDefaultContext({ theme: createMuiTheme({ palette, }), });

// export { styleManager, theme, };
