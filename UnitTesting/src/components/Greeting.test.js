import { render, screen } from '@testing-library/react';
import Greeting from './Greeting'
import userEvent from '@testing-library/user-event'

describe('Greeting Component', () => {
    test('renders Hello world as a text', () => {
        // AAAs 
        // Arrange --> Set up the test data, test conditions and test enviroment
        render(<Greeting />);

        // Act --> Run logic that should be tested
        // Nothing...

        // Assert --> Compare execution results with expected results
        const hellowWorldElement = screen.getByText('Hello World');
        expect(hellowWorldElement).toBeInTheDocument();

    });

    test('renders "good to see" you if button was NOT clicked', () => {
        render(<Greeting />);
        const outputElement = screen.getByText('good to see you', { exact: false });
        expect(outputElement).toBeInTheDocument();
    });

    test('renders "Changed" if button was clicked', () => {
        // Arrange
        render(<Greeting />)
        // Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
        // Assert
        const outputElement = screen.getByText('Changed');
        expect(outputElement).toBeInTheDocument();
    });

    test('does not renders "good to see you" If button was clicked', () => {
        // Arrange
        render(<Greeting />)
        // Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
        // Assert
        const outputElement = screen.queryByText('good to see you');
        expect(outputElement).toBeNull();
    });
});

