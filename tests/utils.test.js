import assert from 'assert';
import { greet } from '../public/scripts/utils.js';

assert.strictEqual(greet('web'), 'Hello web!');
console.log('utils.greet works');
