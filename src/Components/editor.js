import React from 'react'
import '../../src/editor.css';

function Editor(menuData) {
let bold = () => {
  document.getElementById('header').style.fontStyle = 'normal';
}

let italic = () => {
document.getElementById('header').style.fontStyle = 'italic';
}

let h1 = () => {
  document.getElementById('header').style.fontSize = '2em';
}

let h2 = () => {
  document.getElementById('header').style.fontSize = '1.5em';
}

let boldp = () => {
  document.execCommand('bold');
}

let italicp = () => {
  document.execCommand('italic');
}

let h1p = () => {
  document.execCommand('fontSize', false, '5em');
}

let h2p = () => {
  document.execCommand('fontSize', false, '4em');
}

  return (
    <div className="editor">
     <h1 id="header">{menuData.menuData.title}</h1>
     <div className="format">
     <button onClick={italic} className="btn2">I</button>
     <button onClick={bold} className="btn2">B</button>
     <button onClick={h1} className="btn2">H1</button>
     <button onClick={h2} className="btn2">H2</button>
     </div>
     <hr></hr>
     <div className="format">
     <button onClick={italicp} className="btn2">I</button>
     <button onClick={boldp} className="btn2">B</button>
     <button onClick={h1p} className="btn2">H1</button>
     <button onClick={h2p} className="btn2">H2</button>
     </div>
    </div>
  );
}

export default Editor;