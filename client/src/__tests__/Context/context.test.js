import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import BtnSwitch from '../../Components/Button/SwitchMode';
import ThemeContext, { Theme } from '../../Context/Theme';

afterEach(cleanup);

const renderWithContext = (Component) => {
    return {
        ...render(
            <ThemeContext value={Theme}>
                {Component}
            </ThemeContext>
        )
    }
}
describe('testing context actions of state', () => {

    it('checks if initial state is equal to false', () => {
        const { getByTestId } = renderWithContext(<BtnSwitch/>);
        expect(getByTestId('button-theme-mode').getAttribute('dark-theme')).toEqual('false')
    })

    it('verify theme change to true', () => {
        const { getByTestId } = renderWithContext(<BtnSwitch/>);
        fireEvent.click(getByTestId('button-theme-mode'));
        expect(getByTestId('button-theme-mode').getAttribute('dark-theme')).toEqual('true')
    })

    it('verify theme change to false', () => {
        const { getByTestId } = renderWithContext(<BtnSwitch/>);
        fireEvent.click(getByTestId('button-theme-mode'));//change true
        fireEvent.click(getByTestId('button-theme-mode'));//change false
        expect(getByTestId('button-theme-mode').getAttribute('dark-theme')).toEqual('false')
    })

})