import * as CryptoJS from 'crypto-js'

export default class Crypto {
  static hashInstance = (instance: Object): string => {
    const instanceJSON = JSON.stringify(instance)

    return Crypto.hashString(instanceJSON)
  }

  static hashString = (str: string): string => {
    return CryptoJS.SHA256(str).toString()
  }
}
