function sumItUp(numbersWithBases){
    return numbersWithBases.reduce((acc,val)=> acc+ parseInt(val[0], val[1]),0)
  }