import DocLayout from "../../../layouts/Docs/index";
import CodeHighlighter from "../../common/highlighter";
import "./Helper.css";

const MDHelperBox = `<div className="box">
  <h4>Dr Lorem</h4>
  <div className="lead"> Lorem Ipsum </div>
</div>`;

const Helpers = () => {
  return (
    <>
      <DocLayout>
        <h1>Utility classes</h1>
        <div className="lead">
          All generic form controls, designed for consistency
        </div>
        <h2>1. Containers</h2>
        <div>Default buttons</div>
        <div className="code-example">
          <div className="box">
            <h2>Box title</h2>
            <div>
              The page header is a nice little feature to add appropriate
              spacing around the headings on a page. This is particularly
              helpful on a web page where you may have several post titles and
              need a way to add distinction to each of them.
            </div>
          </div>
          <div className="box success">
            <h2>Dr Lorem</h2>
            <div> Lorem Ipsum </div>
          </div>
        </div>
        <CodeHighlighter code={MDHelperBox} />
        <h2>2. Alignment</h2>
        <h2>3. Spacing</h2>
        <h2>4. Visibility</h2>
      </DocLayout>
    </>
  );
};

export default Helpers;
