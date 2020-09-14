import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from '../../App';

afterEach(cleanup);

const renderWithRouter = (component, redirect = null) => {
    const history = createMemoryHistory();
    redirect != null? history.push(redirect): null;
    return {
        ...render(
            <Router history={history} >
                {component}
            </Router>,
        )
    }
}

describe('should try the routes', () => {

    xit('should render the pricing page', () => {
        const { getByText, history } = renderWithRouter(<App/>)
        expect(getByText(/pricing\b/i)).toBeInTheDocument();
    })

    xit('should render the Product page', () => {
        const { getByText, history } = renderWithRouter(<App/>, '/product');
        expect(getByText(/product\b/i)).toBeInTheDocument();
    })

})
