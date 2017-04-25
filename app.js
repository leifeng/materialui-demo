import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './src/App'
const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <Component />
            </MuiThemeProvider>
        </AppContainer>,
        document.getElementById('root')
    )
}
injectTapEventPlugin();
render(App)

if (module.hot) {
    module.hot.accept('./src/App', () => {
        render(App)
    })
}