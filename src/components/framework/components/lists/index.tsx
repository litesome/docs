import DocLayout from "../../../../layouts/Docs/index";
import { CodeHighlighter } from "../../../common/highlighter";

const MDListBlock = `<ul class="list-block">
  <li>
    <a href="/">Home</a>
  </li>
  <li>
    <a href="/">Users</a>
  </li>
  <li>
    <a href="/">Apps</a>
  </li>
  <li>
    <a href="/">Events</a>
  </li>
  <li>
    <a href="/">Messages</a>
  </li>
  <li>
    <a href="/">History</a>
  </li>
</ul>`;
const MDListInline = `<div class="code-example">
  <ul class="list-inline">
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
</div>`;

const Lists = () => {
  return (
    <>
      <DocLayout>
        <h1>Lists</h1>
        <div className="lead">
          Flexible lists for displaying a series of content.
        </div>
        <h3>Block list</h3>
        <div className="code-example">
          <ul className="list-block">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Users</a>
            </li>
            <li>
              <a href="/">Apps</a>
            </li>
            <li>
              <a href="/">Events</a>
            </li>
            <li>
              <a href="/">Messages</a>
            </li>
            <li>
              <a href="/">History</a>
            </li>
          </ul>
        </div>
        <CodeHighlighter code={MDListBlock} />
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
        <CodeHighlighter code={MDListInline} />
      </DocLayout>
    </>
  );
};

export default Lists;
