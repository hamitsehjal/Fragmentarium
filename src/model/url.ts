import generateRandomNumber from "../random";
import { deleteUrl, readUrl, writeUrl } from "./data";

export class Url {
  key: number;
  url: string;

  constructor({ url }: { url: string }) {
    if (!url) {
      throw new Error('Long Url should be defined');
    }
    this.key = generateRandomNumber(1, 50000000);
    this.url = url;
  }

  static byKey(key: number): string | undefined {
    return readUrl(key);
  }

  save(): number {
    const long_url = this.url;
    const short_key = this.key;
    return writeUrl(long_url, short_key);
  }

  static delete(key: number): boolean {
    return deleteUrl(key);
  }
}
