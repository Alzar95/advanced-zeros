module.exports = function getZerosCount(number, base) {
    var tmp = base, tmpTwo = 0, tmpThree = 0, powerOne = 0, powerTwo = 0, sa = 0, sb = 0,
        resultFirst = 0, resultSecond = 0, flag = true, k = 0, mus = [];

    while (tmp > 1) {
        if ((tmp % 2) == 0) {
            tmp /= 2;
            powerOne++;
        } else {
            for (var y = 1; y < Math.floor(tmp / 2); y++) {
                k = tmp / y;
                if ((k ^ 0) === k) {
                    mus.push(y);
                }
            }

            if (mus.length > 1) {
                tmpTwo = mus[1];
                tmp /= mus[1];
            } else {
                tmpTwo = tmp;
                tmp /= tmp;
            }
            powerTwo++;
        }
    }

    for (var j = 2; j <= number; j++) {
        tmpThree = j;
        flag = true;
        while (flag) {
            if ((tmpThree % 2) == 0) {
                tmpThree /= 2;
                if ((tmpThree ^ 0) === tmpThree) {
                    sa++;
                }
            } else if (((tmpThree / tmpTwo) ^ 0) === (tmpThree / tmpTwo)) {
                tmpThree /= tmpTwo;
                if ((tmpThree ^ 0) === tmpThree) {
                    sb++;
                }
            } else {
                flag = false;
            }
        }
    }

    resultFirst = Math.floor(sa / powerOne);
    resultSecond = Math.floor(sb / powerTwo);

    if (resultFirst < resultSecond) {
        return resultFirst;
    } else {
        return resultSecond;
    }
}