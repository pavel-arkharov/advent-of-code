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
   // alert (mask);
    let j = arr.length;
    while (j--)
    {
        if (arr[j][i] != mask[i])
            arr.splice(j, 1);
    }
}

let output = arr.toString();
alert(output);

let arr2 = s.split('\n');
let i2 = -1;
while (arr2.length > 1)
{
    let mask2 = ''
    i2++;
    for (let digit = 0; digit < len; digit++)
    {
        let zeros = 0;
        let ones = 0;
        for (number of arr2)
        {
            if (number[digit] == '0')
                ++zeros;
            if (number[digit] == '1')
                ++ones;
        }
        if (zeros <= ones)
            mask2 += '0';
        else
            mask2 += '1';
    }
   // alert (mask);
    let j2 = arr.length;
    while (j2--)
    {
        if (arr2[j2][i2] != mask2[i2])
            arr2.splice(j2, 1);
    }
}

let output2 = arr2.toString();
alert(output2);