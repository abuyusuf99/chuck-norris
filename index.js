const button = document.getElementById("button");
const div = document.createElement('div')
document.body.append(div)

button.addEventListener("click", (e) => {
  e.preventDefault();
  fetch("https://api.chucknorris.io/jokes/random")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      div.textContent = data.value
    });

  //   await div.append(fet)
  //   document.body.append(div)
});
