let s =`
00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010
`

let arr = s.split('\n');
let len = arr[1].length;
let i = -1;
while (arr.length > 1)
{
    let mask = ''
    i++;
    for (let digit = 0; digit < len; digit++)
    {
        let zeros = 0;
        let ones = 0;
        for (number of arr)
        {
            if (number[digit] == '0')
                ++zeros;
            if (number[digit] == '1')
                ++ones;
        }
        if (zeros > ones)
            mask += '0';
        else
            mask += '1';
    }
    for (let j = 1; j < arr.length; j++)
    {
     alert (arr[j][i]);
        if (arr[j][i] != mask[i])
            arr.splice(j, 1);
    }
}

let output = arr.toString();
alert(output);