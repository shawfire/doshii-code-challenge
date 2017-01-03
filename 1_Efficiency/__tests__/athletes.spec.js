const athletes = require('../athletes')

test('should return the correct number of gold medals', () => {
  return athletes.parseFile().then(result => expect(result).toBe(655))
    .catch(err => {
      throw new Error(err);
    })
})

test('should use memory efficiently', () => {
  let heapUsageBefore = process.memoryUsage().heapUsed
  console.log(1, process.memoryUsage())
  return athletes.parseFile()
    .then(result => {
      console.log(1, process.memoryUsage())
      let heapUsageAfter = process.memoryUsage().heapUsed
      let heapUsage = heapUsageAfter / heapUsageBefore
      expect(heapUsage).toBeLessThan(1)
    })
    .catch(err => {
      throw new Error(err);
    })
})
