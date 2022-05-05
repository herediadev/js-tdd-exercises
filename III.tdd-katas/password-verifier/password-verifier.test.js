const { Password } = require('./password');

describe('Password', () => {
  it('is valid?', () => {
    const password = new Password('12345678');
    const password2 = new Password('Aa23@aaaB');
    expect(password.isValid).toBe(false);
    expect(password2.isValid).toBe(true);
  })
})
