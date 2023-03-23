let {MD5} = require('./mymd5')
let str = MD5('123456')
console.log('MD5(\'123456\') =', str)
let {JSEncrypt} = require('./jsencrypt')

function encryptPasswd(password, publicKey, random) {
    // 加密密码
    const encrypt = new JSEncrypt()
    encrypt.setPublicKey(publicKey)
    const mdPassword = MD5(password)
    const content = password + ',' + mdPassword + ',' + random;
    console.log('-------------' + content)
    const enPassword = encrypt.encryptLong(password + ',' + mdPassword + ',' + random)
    return enPassword
}

// bNmqL6zB8BGi9jKU6FxNjt0ECfvEycdREbxQeEyScfDIau1SLLewmin/Hb6sXyJktxmepn/AF6NB5qs7vbmSwW8cxxpOmJkAbPHcZe9cPluFy8YXSMjhvMV7gGduynBphANNLWRkX3g
// TtL7nfDdjq90YBINJn82+m7MIHc68iuLEkYpKPH9kd2kOaqIHesSvw+xcmZFwQvsEqcnwIT1wCgpxsFPQP1IUIK43Xh0bKfQ7t6nzJxtJhNC+qs7vQgQOZVdVIdOrC7gdv61RcGMWDu
// GCtRLjrzlWU36R3YFw/nXpX+cHUZKpKigZcnvZINdfmhZz4+PrBixIop8fXc0txw==

// let enPassword = encryptPasswd('123456',
//     'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAjIcRPlmvVVGBy2U0Fwk8jz9/KtBsEA2IZNKfJvSfoxdPfWLtI8e521c4zXA2OCgWiksrslhi5H3O/pMG/aTZIUevW50IgSAjJdArrhM1BTID5FyRgYYcqeGS3XET1WmRFQltp58RUFLo8v7HPbRHWrC/4o5HraVOxHaQqaSOMA9aAEUvluIRvDtTUGMqJE9i5iVDmZrK5igMFAj0UnmHbuqhW1ssyZ1of8M/soGicqn5i95KyW1olq7ed8RIDbhuXuv2SyDSkRGiKBKBN+65W6m1islCeKJX/Dr8EmVYwfotq5wFAY/GtoTWTb52MEcnZUwxmxqkD/btNrlY4Zb+/wIDAQAB',
//     '048780')
// console.log(enPassword)

module.exports = {encryptPasswd}
