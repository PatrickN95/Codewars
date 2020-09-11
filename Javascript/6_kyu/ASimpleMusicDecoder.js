function range(start, stop, step) {
    var a = [start], b = start;
    while (b < stop) {
        a.push(b += step || 1);
    }
    return a;
}

function uncompress(music) {
  console.log(music)
  let decoded = []
  for (const descriptor of music.split(',')) {
    if (descriptor.includes('/')) {
    
      const [rangex, step] = descriptor.split('/')
      const [a, b, c] = rangex.split('-')
      if (+a < +b) {
        decoded = decoded.concat(range(+a, b ? +b : +-c, +step))
      } else {
        decoded = decoded.concat(range(b ? +b : +-c, +a, +step).reverse())
      }
      
    } else if (descriptor.includes('*')) {
      const [number, times] = descriptor.split('*')
      decoded = decoded.concat(Array.from({length: +times}, () => +number))
      
    } else if (descriptor.includes('-')) {
    
      const [a, b] = descriptor.split('-')
      if (+a < +b) {
        decoded = decoded.concat(range(+a, +b))
      } else {
        decoded = decoded.concat(range(+b, +a).reverse())
      }
      
    } else {
    
      decoded.push(+descriptor)
      
    }
  }
  
  return decoded
}