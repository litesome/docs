import DocLayout from "../../../../layouts/Docs/index";
import CodeHighlighter from "../../../common/highlighter";

const MDHelperBox = `<div class='box'>
  <div class='box-body'>
    <h2>Box title</h2>
    <p>
      The page header is a nice little feature to add appropriate spacing around the headings on a page.
      This is particularly helpful on a web page where you may have several post titles and
      need a way to add distinction to each of them.
    </p>
    </div>
    <div>
    <button type="button" class="button primary">
      Primary
    </button>
    <button type="button" class="button bordered-light">
      Light
    </button>
  </div>
</div>`;

const Spinners = () => {
  return (
    <>
      <DocLayout>
        <h1>Spinners</h1>
        <div className="lead">Spinners is used for loading or updating.</div>
        <div>
          Using spinner is easy very simple, You can add the
          <code className="code-wrapper">.loading</code> class to a container
          for loading status.
        </div>
        <div className="code-example">
          <div className="loading"></div>
          <div className="loading loading-lg"></div>
        </div>
        <CodeHighlighter code={MDHelperBox} />
      </DocLayout>
    </>
  );
};

export default Spinners;
