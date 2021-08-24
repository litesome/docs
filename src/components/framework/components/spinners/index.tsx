import DocLayout from "../../../../layouts/Docs/index";
import { CodeHighlighter } from "../../../common/highlighter";

const MDDefaultSpinner = `<div class="spinner"></div>
<div class="spinner spinner-lg"></div>`;

const Spinners = () => {
  return (
    <>
      <DocLayout>
        <h1>Spinners</h1>
        <div className="lead">Spinners is used for loading or updating.</div>
        <div>
          Using spinner is easy very simple, You can add the
          <code className="code-wrapper">.spinner</code> class to a container
          for loading status.
        </div>
        <div className="code-example">
          <div className="spinner"></div>
          <div className="spinner spinner-lg"></div>
        </div>
        <CodeHighlighter code={MDDefaultSpinner} />
      </DocLayout>
    </>
  );
};

export default Spinners;
