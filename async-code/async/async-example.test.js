import { expect, it } from 'vitest';
import { generateToken } from './async-example';

it('should generate a token value', () => {
 const testUserEmail = 'test@example.com';

 generateToken(testUserEmail, (err, token) => {
     expect(token).toBeDefined();
 });
});