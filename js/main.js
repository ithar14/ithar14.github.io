function home() {
  const home = document.getElementById("home");
  const projects = document.getElementById("projects");
  const labelhm = document.getElementById("homelabel");
  const labelpr = document.getElementById("projectlabel");
  projects.style.display = "none";
  home.style.display = "block";
  labelhm.style.color = "#002928";
  labelpr.style.color = "#0029284A";
}

function projects() {
  const home = document.getElementById("home");
  const projects = document.getElementById("projects");
  const labelhm = document.getElementById("homelabel");
  const labelpr = document.getElementById("projectlabel");
  home.style.display = "none";
  projects.style.display = "block";

  labelhm.style.color = "#0029284A";
  labelpr.style.color = "#002928";
}

var cursor = document.getElementById("cursor");
document.body.addEventListener("mousemove", function (e) {
  cursor.style.left = e.clientX + "px",
    cursor.style.top = e.clientY + "px";
})

function artpr() {
  const checkBox = document.getElementById("art");
  const label = document.getElementById("artchbxlabel");
  const artprojects = document.getElementsByClassName("art");

  if (checkBox.checked == true) {
    label.style.textDecoration = "none";
    for (let i = 0; i < artprojects.length; i++) {
      artprojects[i].style.display = "none";
    }
  }
  else {
    label.style.textDecoration = "#ED6A5A wavy underline";
    for (let i = 0; i < artprojects.length; i++) {
      artprojects[i].style.display = "block";
    }
  }
}

function devpr() {
  const checkBox = document.getElementById("dev");
  const label = document.getElementById("devchbxlabel");
  const devprojects = document.getElementsByClassName("dev");

  if (checkBox.checked == true) {
    label.style.textDecoration = "none";
    for (let i = 0; i < devprojects.length; i++) {
      devprojects[i].style.display = "none";
    }
  }
  else {
    label.style.textDecoration = "#ED6A5A wavy underline";
    for (let i = 0; i < devprojects.length; i++) {
      devprojects[i].style.display = "block";
    }
  }
}


fetch('https://raw.githubusercontent.com/ithar14/ithar14.github.io/master/js/projects.json')
  .then(response => {
    return response.json();
  }).then(data => {
    var work = document.getElementById('projects').appendChild(document.createElement("div"));
    work.className = "work";
    for (let i = 0; i < data.length; i++) {
      var div = document.createElement("div")
      div.className = data[i].class + " project";
      work.appendChild(div)

      var url = document.createElement("a");
      url.href = data[i].url;
      div.appendChild(url)

      var img = document.createElement("img");
      img.src = data[i].img;
      url.appendChild(img)

      var title = document.createElement("span");
      title.className = "title"
      title.textContent = data[i].title;
      div.appendChild(title)

      var date = document.createElement("span");
      date.className = "date"
      date.textContent = data[i].year;
      div.appendChild(date)

      var desc = document.createElement("span");
      desc.className = "desc"
      desc.textContent = data[i].desc;
      div.appendChild(desc)
    }
  })

