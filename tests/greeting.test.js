import test from 'node:test';
import assert from 'node:assert/strict';
import { greeting } from '../js/helper.js';

test('greeting returns Hello web!', () => {
  assert.equal(greeting(), 'Hello web!');
});
