// alert("welcome to my store");
const githubUrl =
  "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits";

let myBox = document.getElementById("root")
async function showData(){
    let res = await fetch(githubUrl)
    let data = await res.json();
    console.log(data);
    myBox.innerHTML = data
    .map((item) => {
        return `<div class="card">
        <img src=${item.author.avatar_url} alt="avatar">
        <p class="para">${item.author.login}</p>
        </div>`
    })
    .join("");
}

showData();
// // fetch(githubUrl)
// // .then( (res) =>res.json())
// // .then( (data) => console.log(data [0] .author))
// // .catch( (err) => console.log(err));

// function getData() {
//   fetch(githubUrl)
//     .then((res) => res.json())
//     .then((data) => {
//       return console.log(data[0].author);
//     })
//     .catch((err) => console.log(err));
// }

// getData();
// let mypara = document.getElementById("para");
// mypara.innerHTML = "Hello world";
// mypara.style.backgroundColor = "red";
// function ChangeBG() {
//   mypara.style.backgroundColor = "blue";
// }
// mypara.addEventListener("click", changeBG);

// let myBtn = document.getElementById("btn");

// function changeTitle() {
//   myBtn.innerText = "Clicked";
//   myBtn.style.backgroundColor = "blue"
// }

// myBtn.addEventListener("click", changeTitle);
