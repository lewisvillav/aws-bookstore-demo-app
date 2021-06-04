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

test('Heading for past purchases component should have correct heading', function () {
    render(<PastPurchases />);
    let heading = document.getElementsByClassName("white-box");
    const windowAlert = window.alert;
    if(heading != null)
    {
        expect(heading[0].getElementsByTagName('h3')[0].innerHTML).toBe("Past purchases");
    }
    window.alert = windowAlert;
});

test('Checking end div has correct amount of childNodes', function () {
    render(<PastPurchases />);
    let heading = document.getElementsByClassName("well-bs no-margin-top no-padding col-md-12");
    const windowAlert = window.alert;
    expect(heading[0].childNodes.length).toEqual(2)
    window.alert = windowAlert;
});
