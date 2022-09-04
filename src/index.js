const loadFact = ()=>{
    document.getElementById("sendNumber").addEventListener("click", async(e)=>{
         e.preventDefault
         const inputValue = document.querySelector("#numbers").value
         const fetchNumbers =  await fetch (`http://numbersapi.com/${inputValue}`)
         const fetchedNumbers = await fetchNumbers.text()
         document.querySelector("#numbers").value
         document.getElementById("receive-number").innerText= fetchedNumbers
      })
    }
    function likes() {
        let likesCount = 0;
        document.getElementById('like-button').addEventListener('click', () => {
            likesCount += 1
            document.getElementById('like-count').innerText = likesCount
    
        }
        )
    }
    document.addEventListener('DOMContentLoaded', ()=>{
        loadFact();
        likes();
        })