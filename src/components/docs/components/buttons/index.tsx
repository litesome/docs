import React from "react";
import DocLayout from "../../../../layouts/Docs/index";
import CodeHighlighter from "../../../common/highlighter";

const MDButtonsDefault = `<button type='button' class='button primary'>Primary</button>
<button type='button' class='button secondary'>Secondary</button>
<button type='button' class='button success'>Success</button>
<button type='button' class='button error'>Error</button>
<button type='button' class='button info'>Info</button>
<button type='button' class='button light'>Light</button>
<button type='button' class='button dark'>Dark</button>`;

const MDButtonsBordered = `<button type='button' class='button bordered-primary'>Primary</button>
<button type='button' class='button bordered-secondary'>Secondary</button>
<button type='button' class='button bordered-success'>Success</button>
<button type='button' class='button bordered-error'>Error</button>
<button type='button' class='button bordered-info'>Info</button>
<button type='button' class='button bordered-light'>Light</button>
<button type='button' class='button bordered-dark'>Dark</button>`;

function Docs() {
  return (
    <>
      <DocLayout>
        <h1>Buttons</h1>
        <div>Default buttons</div>
        <div className="code-example">
          <button type="button" className="button primary">
            Primary
          </button>
          <button type="button" className="button secondary">
            Secondary
          </button>
          <button type="button" className="button success">
            Success
          </button>
          <button type="button" className="button error">
            Danger
          </button>
          <button type="button" className="button info">
            Info
          </button>
          <button type="button" className="button light">
            Light
          </button>
          <button type="button" className="button dark">
            Dark
          </button>
        </div>
        <CodeHighlighter code={MDButtonsDefault} />
        <div>Bordered buttons</div>
        <div className="code-example">
          <button type="button" className="button bordered-primary">
            Primary
          </button>
          <button type="button" className="button bordered-secondary">
            Secondary
          </button>
          <button type="button" className="button bordered-success">
            Success
          </button>
          <button type="button" className="button bordered-error">
            Danger
          </button>
          <button type="button" className="button bordered-light">
            Light
          </button>
          <button type="button" className="button bordered-dark">
            Dark
          </button>
        </div>
        <CodeHighlighter code={MDButtonsBordered} />
      </DocLayout>
    </>
  );
}

export default Docs;
