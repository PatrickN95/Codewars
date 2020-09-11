function getCount(str) {
    var vowelsCount = 0;
  [...str].forEach(c => (c.match("a|e|i|o|u")?vowelsCount++:null))    
    return vowelsCount;
  }