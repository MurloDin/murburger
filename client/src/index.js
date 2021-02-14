import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App';
import {FoodServiceProvider} from "./components/food-service-context";
import FoodService from "./services/food-service";
import ErrorBoundary from "./components/error-boundary";
import store from './store';

import './styles/humburgers.css';
import './styles/index.scss';
import './styles/bootstrap-reboot.min.css';
import './styles/bootstrap-grid.min.css';



const foodService = new FoodService();


ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <FoodServiceProvider value={foodService}>
                <Router>
                    <App />
                </Router>
            </FoodServiceProvider>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root')
);
