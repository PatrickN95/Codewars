function score(dice) {
    var one = 0;
    var two = 0;
    var three = 0;
    var four = 0;
    var five = 0;
    var six = 0;
    var povars = 0;
    dice.sort()
    for (var i of dice) {
        switch (i) {
            case 1:
                one++;
                break;
            case 2:
                two++;
                break;
            case 3:
                three++;
                break;
            case 4:
                four++;
                break;
            case 5:
                five++;
                break;
            case 6:
                six++;
                break;

        }
    }
    while (one >= 3 || two >= 3 || three >= 3 || four >= 3 || five >= 3 || six >= 3) {
        if (one >= 3) {
            povars += 1000;
            one -= 3;
        }
        if (two >= 3) {
            povars += 200;
            two -= 3;
        }
        if (three >= 3) {
            povars += 300;
            three -= 3;
        }
        if (four >= 3) {
            povars += 400;
            four -= 3;
        }
        if (five >= 3) {
            povars += 500;
            five -= 3;
        }
        if (six >= 3) {
            povars += 600;
            six -= 3;
        }
    }
    while (one > 0) {
        povars += 100;
        one--;
    }
    while (five > 0) {
        povars += 50;
        five--;
    }
    return povars;
}