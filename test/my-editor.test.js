describe('my-editor', () => {
  let page
  let elementPath = `document.querySelector('body > my-app').shadowRoot.querySelector('my-editor')`

  before(async () => {
    page = await global.browser.newPage()
    await page.goto('http://localhost:8081')
  })

  it('is added to the dom', async () => {
    const element = await page.evaluate(`${elementPath}`)
    global.assert.isOk(element)
  })

  after(async () => {
    await page.close()
  })
})
