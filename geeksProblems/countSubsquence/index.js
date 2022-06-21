const s = 'abcabc';
function fun(s) {
    let aCount = 0, bCount = 0, cCount = 0;
    const bigInt = 1e9 + 7;

    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case 'a':
                aCount = (1 + 2 * aCount) % bigInt;
                break;
            case 'b':
                bCount = (aCount + 2 * bCount) % bigInt;
                break;
            case 'c':
                cCount = (bCount + 2 * cCount) % bigInt;
                break;
        }
    }
    return cCount;
}

fun(s); // Subsequences are abc, abc, abbc, aabc abcc, abc and abc. Output: 7