export function elemOrParentsHavePointerCursor(elem) {
  if (elem instanceof Document) {
    return false;
  }

  if (elem.dataset.hasOwnProperty("cursorPointer")) {
    return true;
  } else if (elem.parentNode) {
    return elemOrParentsHavePointerCursor(elem.parentNode);
  } else {
    return false;
  }
}
