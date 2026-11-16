import { render, cleanup } from 'vitest-browser-react';
import { expect, test, afterEach } from 'vitest';

import Pizza from '../../Pizza';

afterEach(cleanup)

test('To have alt text render on Pizza image', async () => {
    const name = "Test Pizza";
    const src = "https://picsum.photos/200";

    const screen = await render(
        <Pizza name={name} description={'super cool pizza'} image={src} />
    );

    const img = await screen.getByRole("img");
    await expect.element(img).toBeInTheDocument();
    await expect.element(img).toHaveAttribute("src",src);
    await expect.element(img).toHaveAttribute("alt",name);
})

test('To have a default image if none is provided', async () => {
    const name = "Test Pizza";
    
    const screen = await render(
        <Pizza name={name} description={'super cool pizza'} />
    );

    const img = await screen.getByRole("img");
    await expect.element(img).toHaveAttribute("src", "https://picsum.photos/200")
})