'use strict'

const fs = require('fs')
const lines = require('lines-adapter');

module.exports = {
  parseFile: function() {
    return new Promise((resolve, reject) => {

      const chunkSize = 1030 // file of fixed line length of 103. 636 * 103 = 65508
      let stream = fs.createReadStream('./data/athletes.txt', {highWaterMark: chunkSize});

      var total = 0;

      lines(stream,'utf8').on('data', line => {
          total += parseInt(line.toString().split(',')[9])
      }).on('end', () => {
          resolve(total)
      });

    })
  }
}

// yarn test v0.18.1
// $ jest
//  PASS  __tests__/athletes.spec.js
//   ✓ should return the correct number of gold medals (122ms)
//   ✓ should use memory efficiently (118ms)
//
// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.685s, estimated 1s
// Ran all test suites.
//   console.log __tests__/athletes.spec.js:16
//     Memory usage has increased by -29.41%
//
// ✨  Done in 1.24s.
