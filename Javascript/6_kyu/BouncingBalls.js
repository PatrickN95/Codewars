function bouncingBall(h,  bounce,  window) {
    var bounceHight = h * bounce
    var count = 1
    if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) return -1
    while(bounceHight>window){
        count+=2
        bounceHight*=bounce
    }
       return count
  }