
export default function CheckEmptyValueInObject(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key) && (obj[key] === null || obj[key] === undefined || obj[key] === "")) {
            return true;
        }
    }
    return false;
}




