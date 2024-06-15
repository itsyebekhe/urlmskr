const params = new URLSearchParams(window.location.search);

if (params.get("r") && params.get("r").toLowerCase().endsWith(' reveal')) {
  const url = params.get("r").slice(0, -7);
  document.head.innerHTML += '<link rel="stylesheet" href="./style.css">';
  document.body.innerHTML = `
    <div class="reveal center">
        <div>
            <div class="top">This URL redirects to:</div>
            <div class="destination">${window.atob(url)}</div>
        </div>
    </div>  
  `
} else if (params.get("r")) {
  window.location.replace(window.atob(params.get("r")));
} else if (params.get("t")) {
  const paragraph = document.createElement("p");
  paragraph.innerText = window.atob(params.get("t"));
  document.body.append(paragraph);

  document.head.innerHTML += `
    <style>
      * {
        margin: 0;
        padding: 0;
      }

      p {
        padding: .9rem 1.2rem;
        font-size: 2rem;
        font-family: Arial, Helvetica, sans-serif;
      }
    </style>
  `
} else {
  window.location.replace("https://itsyebekhe.github.io/urlmskr/create");
}
