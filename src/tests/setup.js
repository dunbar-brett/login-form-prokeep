import { afterEach, expect } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
// import * as matchers from "@testing-library/jest-dom/matchers";

// expect.extend(matchers);

// runs a clean after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
})