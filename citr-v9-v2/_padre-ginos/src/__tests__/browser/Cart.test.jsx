import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';
import Cart from '../../Cart';

test('snapshot with nothing in cart', async () => {
    const { asFragment } = await render(<Cart cart={[]} /> );
    expect(asFragment()).toMatchSnapshot();
})