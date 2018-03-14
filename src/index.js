module.exports = function getZerosCount(number, base) {
    var tmp = base, tmpSecond = 0, powerOne = 0, powerTwo = 1,
        k = 0, mus = [], tmpFirst = 0, limiter = 0;

    while (tmp > 1) {
        mus = [];

        for (var y = 1; y < tmp; y++) {
            k = tmp / y;
            if ((k ^ 0) === k) {
                mus.push(y);
            }
        }

        if ((mus.length > 1) && ((tmp == base) || (tmpFirst === mus[1]))) {
            tmpFirst = mus[1];
            tmp /= mus[1];
            powerOne++;
        } else if (mus.length > 1) {
            tmpSecond = mus[1];
            tmp /= mus[1];
            if (limiter > 0) {
                powerTwo++;
            }
            limiter++;
        } else {
            if ((tmpFirst == tmp) && (limiter == 0)) {
                powerOne++;
            }
            if ((tmpSecond == tmp) || (tmpFirst == tmp)) {
                powerTwo++;
            }
            tmpSecond = tmp;
            tmp /= tmp;
        }
    }


    var counter = 0, counter2 = 0, i = number, j = number;
    if (tmpFirst > 0) {
        while (i >= tmpFirst) {
            i = Math.floor(i / tmpFirst);
            counter += Math.floor(i);
        }
    }

    if (tmpSecond > 0) {
        while (j >= tmpSecond) {
            j = Math.floor(j / tmpSecond);
            counter2 += Math.floor(j);
        }
    }

    var resultFirst = Math.floor(counter / powerOne);
    var resultSecond = Math.floor(counter2 / powerTwo);

    if (resultFirst < resultSecond) {
        return resultFirst;
    } else {
        return resultSecond;
    }
}