
function capitalA(str) {
    const regex = /^[a-zA-Z\s]*A$/;
    return regex.test(str);
}

// console.log(capitalA("abcdv && A"))

function ioEmail(str) {
    const regex =  /^[a-zA-Z]+@[a-zA-Z]+\.(io)$/;
    return regex.test(str);
}
// console.log(ioEmail("example@example.gmail"));


function imgSearch(text)
{
    let arr = [];
    let regex = /\b([a-zA-Z0-9_]+\.(jpg|jpeg|png))\b/g;
    let match;
    while ((match = regex.exec(text)) !== null) {
        arr.push(match[1]);
      }
      return arr;
}

// console.log(imgSearch("Lorem ipsum dolor sit amet, consectetur adipiscing elit, cat.png sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. dog.jpg Ut enim ad minim veniam, quis nostrud exercitation ullamco cow.jpeg laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."));
