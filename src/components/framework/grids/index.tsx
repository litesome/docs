import DocLayout from "../../../layouts/Docs/index";
import CodeHighlighter from "../../common/highlighter";

const MDGridInitial = `<div class="row">
  <div class="l-sm-12 lg-md-4 l-lg-12 light">Column three</div>
  <div class="l-sm-12 lg-md-4 l-lg-12 light">Column six</div>
  <div class="l-sm-12 lg-md-4 l-lg-12 light">Column three</div>
</div>`;

const  Grids = () => {
  return (
    <>
      <DocLayout>
        <h1>Introduction to Litesome grids</h1>
        <div className="lead">Building a columns layout with Litesome is so easy</div>
        <ol>
          <li>
            Add a <code className="code-wrapper">.row</code> container
          </li>
          <li>Add as many as column elements you want want</li>
        </ol>
        <div className="code-example"></div>
        <CodeHighlighter code={MDGridInitial} />
        <div className="code-example">
          <div className="row">
            <div className="l-sm-12 l-md-4 l-lg-4 border">Column three</div>
            <div className="l-sm-12 l-md-4 l-lg-4 border">Column six</div>
            <div className="l-sm-12 l-md-4 l-lg-4 border">Column three</div>
          </div>
        </div>
        <h2>Columns classes</h2>
        <p>
          As the grid can be divided into 12 columns, there are size classes for
          each division:
        </p>
        <p>
          <code className="code-wrapper">.l-1</code>
          <code className="code-wrapper">.l-2</code>
          <code className="code-wrapper">.l-3</code>
          <code className="code-wrapper">.l-4</code>
          <code className="code-wrapper">.l-5</code>
          <code className="code-wrapper">.l-6</code>
          <code className="code-wrapper">.l-7</code>
          <code className="code-wrapper">.l-8</code>
          <code className="code-wrapper">.l-10</code>
          <code className="code-wrapper">.l-11</code>
          <code className="code-wrapper">.l-12</code>
        </p>
        <div className="code-example">
          <div className="row">
            <div className="l-sm-12 l-md-4 l-lg-4 light">Column three</div>
            <div className="l-sm-12 l-md-4 l-lg-4 light">Column six</div>
            <div className="l-sm-12 l-md-4 l-lg-4 light">Column three</div>
          </div>
        </div>
        <h2>Litesome breakpoints</h2>
        <ol>
          <li>~ — 480px: Mobile devices</li>
          <li>481px — 768px: iPads, Tablets</li>
          <li>769px — 1024px: Small screens, laptops</li>
          <li>1025px — ~: Desktops, large screens</li>
        </ol>
      </DocLayout>
    </>
  );
}

export default Grids;
