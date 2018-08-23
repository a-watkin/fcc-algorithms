function convertHTML(str) {
    var htmlMap = ['&', '<', '>', '<>', "'", '"']

    var replaceArray = {
        '&': '&amp;',
        '<': "&lt;",
        '>': '&gt;',
        '<>': '&lt;&gt;',
        "'": '&apos;',
        '"': '&quot;'
    };

    for(var i = 0; i < htmlMap.length; i++) {

        var regEx = RegExp(htmlMap[i], 'g');

        if( regEx.test( str ) ) {
            var tempStr = str.replace(regEx, replaceArray[ htmlMap[i] ]);
            str = tempStr;
        }
    }

    return str;
}

console.log(convertHTML("Dolce & Gabbana"));
// should return Dolce &​amp; Gabbana.
// console.log(convertHTML("Hamburgers < Pizza < Tacos"));
// should return Hamburgers &​lt; Pizza &​lt; Tacos.
// convertHTML("Sixty > twelve") 
// should return Sixty &​gt; twelve.
// console.log(convertHTML('Stuff in "quotation marks"'));
// should return Stuff in &​quot;quotation 
// marks&​quot;.
console.log(convertHTML("Shindler's List"))
// should return Shindler&​apos;s List.
// convertHTML("<>") 
// should return &​lt;&​gt;.
// convertHTML("abc") 
// should return abc.