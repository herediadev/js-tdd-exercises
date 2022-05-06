const { Password } = require('./password');

describe('Password', () => {
  it('is an string?', () => {
    const password = new Password(null);
    expect(password.isValid).toBe('Invalid input');
  })

  it('A valid case', () => {
    const password2 = new Password('Aa23@aaaB');
    expect(password2.isValid).toBe(true);
  })

  it('No have lower case?', () => {
    const password2 = new Password('AAAABB23@B');
    expect(password2.isValid).toBe('Password must contain at least one lower case letter');
  })

  it('3 conditions?', () => {
    const password2 = new Password('AAaa');
    expect(password2.isValid).toBe('Password must contain at least 3 of the following: lower case letter, upper case letter, special character');
  })
})
