describe('my-palette', () => {
  let page
  let elementPath = `document.querySelector('body > my-app').shadowRoot.querySelector('my-palette')`

  before(async () => {
    page = await global.browser.newPage()
    await page.goto('http://localhost:8081')
  })

  it('should be added to the dom', async () => {
    const element = await page.evaluate(`${elementPath}`)
    global.assert.isOk(element)
  })

  describe('createHSLColor()', () => {
    it('should return a string', async () => {
      const expectedType = 'string'
      const actualType = await page.evaluate(`${elementPath}.createHSLColor(10, 10, 10)`)
      global.assert.typeOf(actualType, expectedType)
    })

    it('should return "hsl(10, 10%, 10%)" for the parameters (10, 10, 10)', async () => {
      const expected = 'hsl(10, 10%, 10%)'
      const actual = await page.evaluate(`${elementPath}.createHSLColor(10, 10, 10)`)
      global.assert.strictEqual(actual, expected)
    })
  })

  describe('createColorArray()', () => {
    it('should return an array', async () => {
      const expectedType = 'array'
      const actualType = await page.evaluate(`${elementPath}.createColorArray(10, 10, 10)`)
      global.assert.typeOf(actualType, expectedType)
    })

    it('should return 36 colors when hueStepLength is set to 10', async () => {
      const expectedLength = 36
      const result = await page.evaluate(`${elementPath}.createColorArray(10, 0, 0)`)
      global.assert.lengthOf(result, expectedLength)
    })
  })

  after(async () => {
    await page.close()
  })
})
