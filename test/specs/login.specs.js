// testcase
// buka kasirdemo.belajarqa.com
    //buka URL
// input email
    //ajiesep@gmail.com
// input passowrd
    //kepobanget
// click login button

describe('I success Login to Kasirdemo',() => {
    it('login with valid data', async () => {
        // buka url
        browser.url("https://kasirdemo.belajarqa.com")
        browser.pause(1)

        // input email
        await $('#email').setValue('ajiesep@gmail.com')

        // password
        await $('#password').setValue('kepobanget')

        // click login button
        await $('#submit').click()
    })
})