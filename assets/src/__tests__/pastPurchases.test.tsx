import React from 'react';
import {render, screen} from '@testing-library/react';
import ReactDOM from 'react-dom';
import PastPurchases from '../modules/pastPurchases/PastPurchases';

window.alert = jest.fn();
test('renders without crashing', () => {
    const windowAlert = window.alert;
    const div = document.createElement('div');
    ReactDOM.render(<PastPurchases />, div);
    ReactDOM.unmountComponentAtNode(div);
    window.alert = windowAlert;
});
