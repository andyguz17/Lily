import React from 'react';
import { render } from '@testing-library/react';

import Button from '../components/Button';

describe('Button', () => {
  test('Render the Button Component', () => {
    render(<Button>Hello World</Button>);
  });
});
