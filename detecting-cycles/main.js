var nspace = line.replace(/( )/g, '');
var b = line.split(' ');

function match(str, arr, idx) {
    var regA = '';
    var rest = '';
    for (var i = idx; i < arr.length; i += 1) {
        regA += arr[i];
        rest = arr.slice(i, arr.length).join('');
        var regB = regA + "(?=" + regA + ")";
        var re = new RegExp(regB, 'g');
        var isMatch = rest.match(re);
        if (isMatch) {
            return isMatch[0];
        }
    }
}

for (var i = 0; i < line.length; i += 1) {
    var matched = match(nspace, b, i);
    if (matched) {
        console.log(matched);
        break;
    }
}