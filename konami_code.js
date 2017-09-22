const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index = 0;

function init(e) {
  const key = parseInt(e.key);

  if (key === code[index]) {
    index++;

    if(key === code.length) {
      alert('You\'ve triggered the code!');

      index = 0;
    }
  } else {
    index = 0;
  }
}
