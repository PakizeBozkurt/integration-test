import { it, expect, vi } from 'vitest';

import writeData from './io';

vi.mock('fs');

it('should execute the writeFile method', () => {
    const testData = 'Test';
    const testFilename = 'test.txt';
    
    return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
});