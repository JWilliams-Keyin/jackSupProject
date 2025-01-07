import {render, screen, waitFor} from '@testing-library/react';
import axios from 'axios';
import ClassCard from '../components/classCard';

jest.mock('axios');

describe('Course Display Card', () => {
    test('fetches course info and displays in a card', async () => {
        const mockData = [
            {
                id: "1",
                title: "AWS",
                instructor: "John Doe",
                duration: "8 weeks"
            },
            {
                id: "1",
                title: "JS",
                instructor: "Jane Doe",
                duration: "5 weeks"
            }
        ];

        axios.get.mockResolvedValue({data: mockData});
        render(<ClassCard/>);

        await waitFor(() => {
            expect(screen.getByText(/AWS/i)).toBeInTheDocument();
            expect(screen.getByText(/JS/i)).toBeInTheDocument();
        });
    });
});