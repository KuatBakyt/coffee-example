export function loadFromStorage<T>(storageKey: string): T | null {
  try {
    const item = localStorage.getItem(storageKey);
    if (!item) return null;
    return JSON.parse(item) as T;
  } catch (error) {
    console.error(`Ошибка при загрузке ${storageKey} из localStorage`, error);
    return null;
  }
}

export function saveToStorage<T>(storageKey: string, data: T): void {
  try {
    const serialized = JSON.stringify(data);
    localStorage.setItem(storageKey, serialized);
  } catch (error) {
    console.error(`Ошибка при сохранении ${storageKey} в localStorage`, error);
  }
}

export function removeFromStorage(storageKey: string): void {
  try {
    localStorage.removeItem(storageKey);
  } catch (error) {
    console.error(`Ошибка при удалении ${storageKey} из localStorage`, error);
  }
}
