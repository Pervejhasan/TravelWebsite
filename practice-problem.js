function bestfriend(frndlist) {
    let test = frndlist[0].length
    // console.log(test);
    let count = 0;
    for (const frndName of frndlist) {
        if (test < frndName.length) {
            test = frndName.length;
        }

    }
    for (frnd of frndlist) {
        ++count;
        if (test == frnd.length) {
            break;
        }
    }
    // console.log(count);
    // console.log(test);
    return frndlist[count - 1];
}

let frndlist = ["shafin Ahamed", "md. pervej hasan Ali", "poran dhakar ahad ali", "md. saiful islam"];
let largeName = bestfriend(frndlist);
console.log(largeName);
