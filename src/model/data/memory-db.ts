
export type keyValueStore = {
  [key: number]: string
};

export class InMemoryStore {
  private store: keyValueStore;

  constructor() {
    this.store = {}
  }

  setValue(longUrl: string, key: number): number {
    this.store[key] = longUrl;

    return key;
  }

  getValue(key: number): string {
    return this.store[key];
  }

  getAllValues(): keyValueStore {
    return this.store;
  }

  deleteValue(key: number): boolean {
    const success = delete this.store[key];
    return success;
  }
}

const memoryDb = new InMemoryStore();

export function addUrl(url: string, key: number) {
  memoryDb.setValue(url, key);
}

export function getUrl(key: number): string {
  return memoryDb.getValue(key);
}

export function deleteUrl(key: number): boolean {
  const success = memoryDb.deleteValue(key);
  return success;
}
