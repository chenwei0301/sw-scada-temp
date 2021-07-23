/*
 * @Author: your name
 * @Date: 2021-07-23 14:35:37
 * @LastEditTime: 2021-07-23 16:20:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\utils\crypto.js
 */
import CryptoJS from 'crypto-js'

const BASEKEY = '0123456789ABCDEF' // 十六位十六进制数作为密钥
const BASEIV = 'FEDCBA9876543210' // 十六位十六进制数作为密钥偏移量
const key = CryptoJS.enc.Utf8.parse(BASEKEY)
const iv = CryptoJS.enc.Utf8.parse(BASEIV)

// 加密方法
function Encrypt (msg) {
  const srcs = CryptoJS.enc.Utf8.parse(msg)
  const encrypted = CryptoJS.AES.encrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 })
  return encrypted.ciphertext.toString().toUpperCase()
}

// 解密方法
function Decrypt (msg) {
  const encryptedHexStr = CryptoJS.enc.Hex.parse(msg)
  const srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr)
  const decrypt = CryptoJS.AES.decrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 })
  const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8)
  return decryptedStr.toString()
}

export {
  Decrypt,
  Encrypt
}
