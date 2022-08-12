
import React from 'react';

// Suspense
import { Fragment ,  Suspense , lazy } from 'react' ;

// Theme
import { ThemeProvider , CssBaseline } from '@mui/material';
import {ThemeConfig} from './utils/theme' ;

// Global Style
// import GlobalStyles from "./utils/globalstyles";

// Pace
// import Pace from "./utils/Pace";

// Store
import { Provider } from 'react-redux' ;
import store from './redux';

// Router
import { BrowserRouter , Routes , Route } from 'react-router-dom';

const MainComponent = lazy(() => import('./components/Main')) ;


const App = () => {
  return (
    <BrowserRouter>
        <Provider store={store}>
          <ThemeConfig>
            <CssBaseline />
            <Suspense fallback={<Fragment />} >
              <Routes>
                  <Route path="*" element={<MainComponent />} />
              </Routes>
            </Suspense>
          </ThemeConfig>
        </Provider>
    </BrowserRouter>
  );
}

export default App;
