import Cryptography from "./Cryptography.js";

export default class CookiesToolset {
  private cryptography: Cryptography;

  constructor() {
    this.cryptography = new Cryptography();
  }

  async set(
    name: string,
    value: string,
    expireDays: number = 5,
    path: string = "/"
  ): Promise<void> {
    const encryptedValue = await this.cryptography.encrypt(value);
    const expiresDate = new Date();
    expiresDate.setDate(expiresDate.getDate() + expireDays);

    document.cookie = `${name}=${encryptedValue}; expires=${expiresDate.toUTCString()}; path=${path}; Secure; SameSite=Strict`;
  }

  private getValue(name: string): string | null {
    const cookies = document.cookie.split(";");
    for (let cookie of cookies) {
      const [name, value] = cookie.trim().split("=");
      if (name === name) {
        return value;
      }
    }

    return null;
  }

  async get(name: string): Promise<string | null> {
    const value = this.getValue(name);
    if (!value) return null;

    return await this.cryptography.decrypt(value);
  }

  remove(name: string, path: string = "/"): void {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path}; Secure; SameSite=Strict`;
  }
}
