import {render, cleanup} from '@testing-library/react';
import {expect, test, afterEach} from 'vitest' ;
import Pizza from '../Pizza';

afterEach(cleanup)

test('To have alt text render on Pizza image', async () => {
    const name = "Test Pizza";
    const src = "https://picsum.photos/200";

    const screen = render(
        <Pizza name={name} description={'super cool pizza'} image={src} />
    );

    const img = screen.getByRole("img");
    expect(img.src).toBe(src);
    expect(img.alt).toBe(name);
})

test('To have a default image if none is provided', async () => {
    const name = "Test Pizza";
    
    const screen = render(
        <Pizza name={name} description={'super cool pizza'} />
    );

    const img = screen.getByRole("img");
    expect(img.src).not.toBe("");
})

