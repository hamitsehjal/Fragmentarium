import { InMemoryStore } from "./memory-db";
const memoryStore = new InMemoryStore();

// writeUrl
export function writeUrl(url: string, key: number) {
  return memoryStore.setValue(url, key);
}

// readUrl
export function readUrl(key: number) {
  return memoryStore.getValue(key);
}

// delUrl
export function deleteUrl(key: number) {
  return memoryStore.deleteValue(key);
}

// listUrls
export function queryUrls() {
  return memoryStore.getAllValues();
}

