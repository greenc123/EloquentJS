// Looping a triangle

function triangle(num) {
  let result = ''
  let idx = 1

  while (idx < num) {
    let row = ''
    let start = 0

    while(start < idx) {
       row += '#' 
      start++
    }

    row += '\n'
    idx++
    result += row
  }

  return result
}

console.log(triangle(7))
