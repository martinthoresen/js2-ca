export function save(key, item) {
  localStorage.setItem(key, JSON.stringify(item));
}

export function load(key) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch {
    throw new Error("Undefined token");
  }
}

export function clear(key) {
  try {
    return JSON.parse(localStorage.removeItem(key));
  } catch {
    throw new Error("Undefined token");
  }
}
