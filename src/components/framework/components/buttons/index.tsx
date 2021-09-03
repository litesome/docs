import DocLayout from "../../../../layouts/Docs/index";
import { CodeHighlighter } from "../../../common/highlighter";

const MDButtonsDefault = `<button type='button' class='button primary'>Primary</button>
<button type='button' class='button secondary'>Secondary</button>
<button type='button' class='button success'>Success</button>
<button type='button' class='button danger'>danger</button>
<button type='button' class='button light'>Light</button>
<button type='button' class='button dark'>Dark</button>`;

const MDButtonsBordered = `<button type='button' class='button bordered-primary'>Primary</button>
<button type='button' class='button bordered-secondary'>Secondary</button>
<button type='button' class='button bordered-success'>Success</button>
<button type='button' class='button bordered-danger'>danger</button>
<button type='button' class='button bordered-light'>Light</button>
<button type='button' class='button bordered-dark'>Dark</button>`;

const Buttons = () => {
  return (
    <>
      <DocLayout>
        <h1>Buttons</h1>
        <div className="lead">
          Call-to-action buttons in different style and sizes
        </div>
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
          <button type="button" className="button danger">
            Danger
          </button>
          <button type="button" className="button light">
            Light
          </button>
          <button type="button" className="button dark">
            Dark
          </button>
        </div>
        <CodeHighlighter code={MDButtonsDefault} />
        <h3>Bordered buttons</h3>
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
          <button type="button" className="button bordered-danger">
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
        <h3>Sizes of buttons</h3>
        <div className="code-example">
          <button type="button" className="button primary button-lg">
            Large Button
          </button>
          <button type="button" className="button primary">
            Default size
          </button>
          <button type="button" className="button primary button-sm">
            Small Button
          </button>
        </div>
        <h3>Button block</h3>
        <div className="code-example">
          <button
            type="button"
            className="button button-lg button-block primary"
          >
            Block button
          </button>
        </div>
        <CodeHighlighter code={MDButtonsBordered} />
        <h3>Buttons with icons</h3>
        <div className="code-example">
          <button type="button" className="button bordered-primary">
            <i className="i-message" /> Message
          </button>
          <button type="button" className="button bordered-success">
            <i className="i-check" /> Confirm action
          </button>
          <button type="button" className="button bordered-danger">
            <i className="i-play" /> Play song
          </button>
        </div>
        <CodeHighlighter code={MDButtonsBordered} />
      </DocLayout>
    </>
  );
};

export default Buttons;
