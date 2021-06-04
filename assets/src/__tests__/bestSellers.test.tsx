import React from 'react';
import {render, screen} from '@testing-library/react';
import BestSellers from '../modules/bestSellers/BestSellers';

window.alert = jest.fn();
test('Heading for best sellers component should show text correctly', function () {
    render(<BestSellers />);
    let heading = document.getElementsByClassName("container-category");
    const windowAlert = window.alert;
    if(heading != null)
    {
        expect(heading[0].getElementsByTagName('h3')[0].innerHTML).toBe("Top 20 best sellers");
    }
    window.alert = windowAlert;
});