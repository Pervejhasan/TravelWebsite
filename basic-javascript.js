// problem-1 start

function seerToMon(weight) {
    if (typeof weight != "number") {
        console.log("Please input the number value!");
    }
    else {
        let serToMon = weight / 40;
        console.log(serToMon);
        return serToMon;
    }
}
// console.log(seerToMon(120));
// console.log(seerToMon("120"));

// problem-1 end

// problem-2 start

function totalSales(shirtQuantity, pantQuantity, shoesQuantity) {
    if (typeof shirtQuantity != "number" || typeof pantQuantity != "number" || typeof shoesQuantity != "number") {
        console.log("Please input the number value!");

    }
    else {
        let totalShirtSales = shirtQuantity * 100;
        let totalPantSales = pantQuantity * 200;
        let totalShoesSales = shoesQuantity * 500;
        let totalSales = totalShirtSales + totalPantSales + totalShoesSales;
        console.log(totalSales);
        return totalSales;
    }
}
// console.log(totalSales(5, 4, 3));
// console.log(totalSales("5", 4, 3));

// problem-2 end

// problem-3 start
function deliveryCost(t_ShirtQuantity) {
    if (typeof t_ShirtQuantity != "number") {
        console.log("Please input the number value!");
    }
    else {
        let totalDeliveryCost;
        if (t_ShirtQuantity <= 100) {
            totalDeliveryCost = t_ShirtQuantity * 100;
            console.log(totalDeliveryCost);
            return totalDeliveryCost;
        }
        else if (t_ShirtQuantity <= 200) {
            let deliveryCostFirst100 = 100 * 100;
            let remainTshirt = t_ShirtQuantity - 100;
            let deliveryCostRemainTshirt = remainTshirt * 80;
            totalDeliveryCost = deliveryCostFirst100 + deliveryCostRemainTshirt;
            console.log(totalDeliveryCost);
            return totalDeliveryCost;
        }
        else {
            deliveryCostFirst100 = 100 * 100;
            let deliveryCostSecond100 = 100 * 80;
            remainTshirt = t_ShirtQuantity - 200;
            deliveryCostRemainTshirt = remainTshirt * 50;
            totalDeliveryCost = deliveryCostFirst100 + deliveryCostSecond100 + deliveryCostRemainTshirt;
            console.log(totalDeliveryCost);
            return totalDeliveryCost;
        }


    }

}

let totatCost = deliveryCost(300);
console.log(totatCost);


// problem-3 end

//Problem-4 start

function perfectFriend(friendList) {
    if (typeof friendList != "object") {
        console.log("Please input the correct value!");
    }
    else {
        let count = 0;
        for (friend of friendList) {
            // console.log("type of friend: ",typeof friend);
            if (typeof friend == "string") {
                ++count;
                if (friend.length == 5) {
                    break;
                }
            }
            else {
                console.log("Please input the correct value!");
                count = 0;
                break;

            }

        }
        return friendList[count - 1];
    }

}

let friendList = ["Shafin", "Ahad", "Saiful", "Habib", "pavel", "Shrabon", "Imran"];
// console.log(perfectFriend(friendList));

//problem-4 end