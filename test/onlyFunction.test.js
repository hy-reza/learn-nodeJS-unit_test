//only() function used to run only one choosen test
it('Test - 1', () => {console.info('Test - 1')})
it('Test - 2', () => {console.info('Test - 2')})
it.only('Test - 3', () => {console.info('Test - 3')})
it('Test - 4', () => {console.info('Test - 4')})
it('Test - 5', () => {console.info('Test - 5')})