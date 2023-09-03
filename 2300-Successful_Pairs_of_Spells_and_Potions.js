var successfulPairs = function (spells, potions, success) {
    let num = [];
    potions.sort((a, b) => a - b);
    for (let i = 0; i < spells.length; i++) {
        const successful = success / spells[i];
        let low = 0, high = potions.length - 1;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (potions[mid] < successful) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        num.push(potions.length - low);
    }

    return num;
};

const spells = [3, 1, 2];
const potions = [8, 5, 8];
const success = 16;

console.log(successfulPairs(spells, potions, success));