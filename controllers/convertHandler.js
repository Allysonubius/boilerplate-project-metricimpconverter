/*
 *
 *
 *       Complete the handler logic below
 *       
 *       
 */

function numberSplitter(input) {
    let number = input.match(/[.\d\/]+/g) || ['1'];
    let string = input.match(/[a-zA-Z]+/g)[0];

    return [number[0], string];
}

function checkDiv(fraction) {
    let nums = fraction.split('/');

    if (nums.length > 2) {
        return false;
    }
    return nums;
}

function ConvertHandler() {

    this.getNum = function(input) {
        let result = numberSplitter(input)[0];
        if (result === undefined) { return result = 1; }
        let nums = checkDiv(result);

        let num1 = nums[0];
        let num2 = nums[1] || '1';


        if (isNaN(num1) || isNaN(num2)) { return null; }
        result = parseFloat(num1) / parseFloat(num2);

        return result;
    };

    this.getUnit = function(input) {
        let result = numberSplitter(input)[1].toLowerCase();

        switch (result) {
            case 'km':
                return 'km';
                break;
            case 'mi':
                return 'mi';
                break;
            case 'lbs':
                return 'lbs';
                break;
            case 'kg':
                return 'kg';
                break;
            case 'l':
                return 'L';
                break;
            case 'gal':
                return 'gal';
                break;
            default:
                return undefined;
                break;
        }
    };

    this.getReturnUnit = function(initUnit) {
        let unit = initUnit.toLowerCase();

        switch (unit) {
            case 'km':
                return 'mi';
                break;
            case 'mi':
                return 'km';
                break;
            case 'lbs':
                return 'kg';
                break;
            case 'kg':
                return 'lbs';
                break;
            case 'l':
                return 'gal';
                break;
            case 'gal':
                return 'L';
                break;
            default:
                return undefined;
                break;
        }


    };

    this.spellOutUnit = function(initUnit) {
        let name = initUnit.toLowerCase();

        switch (name) {
            case 'km':
                return 'kilometers';
                break;
            case 'mi':
                return 'miles';
                break;
            case 'lbs':
                return 'pounds';
                break;
            case 'kg':
                return 'kilograms';
                break;
            case 'l':
                return 'liters';
                break;
            case 'gal':
                return 'gallons';
                break;
            default:
                return null;
                break;
        }
    };

    this.convert = function(initNum, initUnit) {
        const galToL = 3.78541;
        const lbsToKg = 0.453592;
        const miToKm = 1.60934;
        let result;
        let unit = initUnit.toLowerCase();

        switch (unit) {
            case 'km':
                result = initNum / miToKm;
                break;
            case 'mi':
                result = initNum * miToKm;
                break;
            case 'kg':
                result = initNum / lbsToKg
                break;
            case 'lbs':
                result = initNum * lbsToKg;
                break;
            case 'l':
                result = initNum / galToL
                break;
            case 'gal':
                result = initNum * galToL
                break;
            default:
                result = undefined;
                break;
        }
        return parseFloat(result.toFixed(5));
    };

    this.getString = function(initNum, initUnit, returnNum, returnUnit) {
        return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
    };

}

module.exports = ConvertHandler;