function randomFloat() {
    let floatArray = new Uint32Array(1);
    let maxUint32 = 0xFFFFFFFF;
    return crypto.getRandomValues(floatArray)[0]/maxUint32;
}
// 生成密码学摘要
(async function () {
    let encoder = new TextEncoder();
    let message = encoder.encode('foo')
    let buffer = await crypto.subtle.digest('SHA-256', message)
    console.log(new Uint32Array(buffer))
})()

(async function () {
    const params = {
        name: 'AES-CTR',
        length: 128
    };
    const keyUsage = ['encrypt', 'decrypt']
    // 生成随机的密钥CryptoKey
    // crypto.subtle.generateKey()
    const key = await crypto.subtle.generateKey(params, false, keyUsage);
    console.log(key)
})()
