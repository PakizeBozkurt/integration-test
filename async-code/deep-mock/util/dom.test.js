import { it } from 'vitest';

import { showError } from './dom';

import('first test', () => {
    showError('test');
})