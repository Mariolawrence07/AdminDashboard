// var uniqueInOrder=function(str){
//     //your code here - remember iterable can be a string or an array
//     let splitedIterable = str.split("")
//     let resultArr = []
//     for(let i = 0; i < splitedIterable.length; i++){
      
//       if(splitedIterable[i] === splitedIterable[i - 1] ) {
//         continue;
//       }else{
//        resultArr.push(splitedIterable[i])
//       }
//     }
//     console.log(resultArr)
//     return resultArr;
//   }
//   console.log(uniqueInOrder("AAAABBBCCDAABBB"))

  function isValidIP(str) {
    let splitedStr = str.split(".")
    console.log(splitedStr.length)
    for( let i = 0; i < splitedStr.length; i++){
      if(splitedStr.length === 4 && splitedStr[i][0] !== 0){
          console.log(splitedStr[i])
        return true
      }
    }
    return false;
  }
  console.log(isValidIP("137.255.156.100"))


//  const anchor = document.querySelectorAll('.link-3');
// const storedString = localStorage.getItem("recentlyviewed");
// const stored = storedString ? JSON.parse(storedString) : [];

// for (let i = 0; i < anchor.length; i++) {
//   anchor[i].addEventListener('click', function(e) {
//     if (!checkIfLinkExists(stored, this.textContent)) {
//       const article = { title: this.textContent.trim(), url: this.getAttribute('href').trim(), viewedAt: Date.now() };
//       stored.push(article);
//       localStorage.setItem("recentlyviewed", JSON.stringify(stored));
//     }
//   });
// }

// function checkIfLinkExists(stored, newLink) {
//   for (let i = 0; i < stored.length; i++) {
//     if (stored[i]["title"].toLowerCase() == newLink.trim().toLowerCase()) {
//       return true;
//     }
//   }
//   return false;
// }


// let child = '<div class="w-dyn-list"><div role="list" class="w-dyn-items">';
// let count = 5;

// for (let i = stored.length - 1; i >= 0 && count > 0 && stored.length > 0; i--, count--) {
//   child += `<div role="listitem" class="w-dyn-item"><a href=${stored[i].url}
//       class="link-11">${stored[i].title}</a></div>`;
// }

// if (stored.length > 0) {
//   child += '</div></div>';
//   const x = document.querySelector(".recently-viewed")
//   x.insertAdjacentHTML('beforeend', child);
// }
