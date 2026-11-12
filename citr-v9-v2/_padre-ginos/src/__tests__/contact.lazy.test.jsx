import { render } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import createFetchMock from 'vitest-fetch-mock';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { Route } from '../routes/contact.lazy';

const client = new QueryClient();

const fetchMocker = createFetchMock(vi);

fetchMocker.enableMocks();

test('can submit contact form', async () => {
    // Mock the response
    fetchMocker.mockResponse(JSON.stringify({ status: 'ok' }));
    
    // Mock the tanstack QueryClientProvider to render the component for the test
    const screen = render(
        <QueryClientProvider client={client} >
            <Route.options.component />
        </QueryClientProvider>
    )

    const nameInput   = screen.getByPlaceholderText("Name" );
    const emailInput  = screen.getByPlaceholderText("Email");
    const msgTextArea = screen.getByPlaceholderText("Message");

    const testData = {
        name: 'test-name',
        email: 'testEmail@example.com',
        message: 'Test message'
    };

    nameInput.value = testData.name;
    emailInput.value = testData.email;
    msgTextArea.value = testData.message;

    const button = screen.getByRole('button');
    button.click();

    const h3 = await screen.findByRole('heading', { level: 3 });
     
    expect(h3.innerText).toContain("Submitted");

    const requests = fetchMocker.requests();
    expect(requests.length).toBe(1);
    expect(requests[0].url).toBe('/api/contact');
    expect(fetchMocker).toHaveBeenCalledWith('/api/contact', {
        body: JSON.stringify(testData),
        headers: {
            'Content-Type': "application/json"
        },
        method: "POST"
    })

})

