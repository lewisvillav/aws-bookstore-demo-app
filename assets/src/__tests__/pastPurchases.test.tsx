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

test('Heading for best sellers component should show text correctly', function () {
    render(<PastPurchases />);
    let heading = document.getElementsByClassName("white-box");
    const windowAlert = window.alert;
    if(heading != null)
    {
        expect(heading[0].getElementsByTagName('h3')[0].innerHTML).toBe("Past purchases");
    }
    window.alert = windowAlert;
});
