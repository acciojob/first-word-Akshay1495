function firstWord(s) {
  if (s === "") {
    return "";
  }
  const spaceIndex = s.indexOf(' ');
  if (spaceIndex === -1) {
    return s;
  }
  return s.slice(0, spaceIndex);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
