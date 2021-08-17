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

const Lists = () => {
  return (
    <>
      <DocLayout>
        <h1>Lists</h1>
        <div className="lead">Vertical and horizontal lists</div>
        <h3>Block list</h3>
        <div className="code-example">
          <ul className="list-block">
            <li>
              <a href="/">
                <i className="i-home" />
                Home
              </a>
            </li>
            <li>
              <a href="/">
                <i className="i-users" /> Users
              </a>
            </li>
            <li>
              <a href="/">
                <i className="i-app" /> Apps
              </a>
            </li>
            <li>
              <a href="/">
                <i className="i-calendar" />
                Events
              </a>
            </li>
            <li>
              <a href="/">
                <i className="i-message" /> Messages
              </a>
            </li>
            <li>
              <a href="/">
                <i className="i-clock" /> History
              </a>
            </li>
          </ul>
        </div>
        <h3>Inline list</h3>
        <div className="code-example">
          <ul className="list-inline">
            <li>
              <a href="/">Grid</a>
            </li>
            <li>
              <a href="/">Cards</a>
            </li>
            <li>
              <a href="/">Table</a>
            </li>
          </ul>
        </div>
      </DocLayout>
    </>
  );
};

export default Lists;
