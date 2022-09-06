// const factLink = ()=>{
//     document.getElementById("sendNumber").addEventListener("click", async(e)=>{
//          e.preventDefault
//          const inputValue = document.querySelector("#numbers").value
//          const fetchNumbers =  await fetch ('https://gloriousjoy.github/Facts.io/facts-api/facts.json/')
//          const fetchedNumbers = await fetchNumbers.json()
//          console.log(fetchedNumbers)
//          document.querySelector("#numbers").value
//          document.getElementById("receive-number").innerText= fetchedNumbers
//       })
//     }
const selectText = document.getElementById('numbers')
const fact = document.getElementById('animal-fact')
const p = document.createElement('p')
const animalfact = document.getElementById('getFact')
async function getFacts(url) {
    const promise = await fetch('https://gloriousjoy.github.io/facts-api/facts.json');
    const response = await promise.json();
    return response;

}
animalfact.addEventListener('click',
    function (e) {
        e.preventDefault();
        getFacts('https://gloriousjoy.github.io/facts-api/facts.json').then((response) => {
            let selectValue = selectText.options[selectText.selectedIndex].value;
            switch (selectValue) {
                case 'cat':
                    return fact.innerHTML = (`${response.Facts[2].cat}`)
                case 'dog':
                    return fact.innerHTML = (`${response.Facts[0].dog}`)
                    break;
                case 'bird':
                    return fact.innerHTML = (`${response.Facts[4].bird}`)
                case 'koala':
                    return fact.innerHTML = (`${response.Facts[5].koala}`)
                case 'panda':
                    return fact.innerHTML = (`${response.Facts[1].panda}`)
                case 'fox':
                    return fact.innerHTML = (`${response.Facts[3].fox}`)
                default:
                    console.log('category not defined')
            }
        }
        )
    })

//     console.log()
//     // for panda
//     console.log(response.Facts[1].panda)
//     // for cat
//     console.log(response.Facts[2].cat)
//     // for fox
//     console.log(response.Facts[3].fox)
//     // for bird
//     console.log)
// // for koala
// console.log(response.Facts[5].koala)

// p.textContent = response.Facts[0].dog
// fact.appendChild(p)
// })

function likes() {
    let likesCount = 0;
    document.getElementById('like-button').addEventListener('click', () => {
        likesCount += 1
        document.getElementById('like-count').innerText = likesCount

    }
    )
}
document.addEventListener('DOMContentLoaded', () => {
    getFacts();
    likes();
})