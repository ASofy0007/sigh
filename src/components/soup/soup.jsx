import React from "react";
import "./soup.css";

function makeid(length) {
  var result = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

let palavras = ["testeteste", "mundo"];

function Soup() {
  let pecas = [{ id: "1st", innerArray: [] }];

  let i = 0;
  for (let peca of pecas) {
    while (i < 150) {
      peca.innerArray.push(makeid(1));
      i++;
    }

    peca.innerArray[0] = "O";
    peca.innerArray[1] = "L";
    peca.innerArray[2] = "A";

    let pal = palavras[0].split("");
    let x = pal.length;

    let y = 0,
      z,
      k = 15;
    while (y < x) {
      z = y + k;
      peca.innerArray[z] = pal[y];
      y++;
    }
  }

  return (
    <div className="tabuleiro">
      {pecas.map((outerElement) =>
        outerElement.innerArray.map((innerElement) => (
          <div key={outerElement.id}>{innerElement}</div>
        ))
      )}
    </div>
  );
}

export default Soup;
