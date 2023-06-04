import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import ParentWrapper from './components/Example/ParentWrapper';

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: ParentWrapper, ...options });

export * from '@testing-library/react';
export { customRender as render };
