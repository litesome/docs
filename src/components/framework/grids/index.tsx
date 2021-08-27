import DocLayout from "../../../layouts/Docs/index";
import { CodeHighlighter } from "../../common/highlighter";
import "./Grid.css";

const MDGridInitial = `<div class="row">
  <div class="l-sm-12 lg-md-4 l-lg-12">Column three</div>
  <div class="l-sm-12 lg-md-4 l-lg-12">Column six</div>
  <div class="l-sm-12 lg-md-4 l-lg-12">Column three</div>
</div>`;

const Grids = () => {
  return (
    <>
      <DocLayout>
        <h1>Grid System</h1>
        <div className="lead">
          Building column-based layout with Litesome is so easy
        </div>
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
            <div className="l-sm-12 lg-md-6 l-lg-3">
              <div className="box">Column</div>
            </div>
            <div className="l-sm-12 lg-md-6 l-lg-3">
              <div className="box">Column</div>
            </div>
            <div className="l-sm-12 lg-md-6 l-lg-3">
              <div className="box">Column</div>
            </div>
            <div className="l-sm-12 lg-md-6 l-lg-3">
              <div className="box">Column</div>
            </div>
          </div>
        </div>
        <div className="alert info">
          The Litesome Grid system allows you to arrange block elements in
          columns. Columns are wrapped into a container and their widths are
          automatically defined in a way they are always responsive. It’ll take
          less code than writing media queries all over the place.
        </div>
        <h2>Columns classes</h2>
        <p>
          As the grid can be divided into{" "}
          <code className="code-wrapper">12 columns</code>, there are size
          classes for each division:
        </p>
        <table>
          <thead>
            <tr>
              <th scope="col">Breakpoints</th>
              <th scope="col">Class</th>
              <th scope="col">Dimensions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Account">
                <b>Small</b>
                <br />
                <div>
                  Behaviour of the column boxes on small<sup>1</sup> screens
                </div>
              </td>
              <td data-label="Account">
                <div className="text-danger">-sm-</div>
              </td>
              <td data-label="Due Date"> &#62; 687px</td>
            </tr>
            <tr>
              <td data-label="Account">
                <b>Medium-</b>
                <br />
                <div>
                  Behaviour of the column boxes on medium<sup>2</sup> screens
                </div>
              </td>
              <td data-label="Account">
                <div className="text-danger">-md-</div>
              </td>
              <td data-label="Due Date">688px — 921px</td>
            </tr>
            <tr>
              <td data-label="Account">
                <b>Large</b>
                <br />
                <div>
                  Behaviour of the column boxes on large<sup>3</sup> screens
                </div>
              </td>
              <td data-label="Account">
                <div className="text-danger">-lg-</div>
              </td>
              <td data-label="Due Date">922px &#60;</td>
            </tr>
          </tbody>
        </table>
        <h2>Media query breakpoints</h2>
        <ol>
          <li>Small screens devices(mobile phones): ~ — 687px: </li>
          <li>Medium screen devices(iPads, Tablets): 688px — 921px: </li>
          <li>Large screens(laptops, TVs, large screens): 922px — ~: </li>
        </ol>
        <h2>Grid scenarios</h2>
        <div className="code-example">
          <div className="row">
            <div className="l-sm-12 lg-md-6 l-lg-8">
              <div className="box primary">Column</div>
            </div>
            <div className="l-sm-12 lg-md-6 l-lg-4">
              <div className="box success">Column</div>
            </div>
            <div className="l-sm-12 lg-md-6 l-lg-3">
              <div className="box secondary">Column</div>
            </div>
            <div className="l-sm-12 lg-md-6 l-lg-3">
              <div className="box secondary">Column</div>
            </div>
            <div className="l-sm-12 lg-md-6 l-lg-3">
              <div className="box secondary">Column</div>
            </div>
            <div className="l-sm-12 lg-md-6 l-lg-3">
              <div className="box secondary">Column</div>
            </div>
          </div>
        </div>
      </DocLayout>
    </>
  );
};

export default Grids;
