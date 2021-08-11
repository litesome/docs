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

const Navbar = () => {
  return (
    <>
      <DocLayout>
        <h1>Navbar</h1>
        <div className="lead">Vertical and horizontal lists</div>
        <CodeHighlighter code={MDHelperBox} />
        <h2>Box variants</h2>
        <div className="lead">
          Boxes include various predefined &amp; customized options for you
        </div>
        <div className="code-example">
          <div className="row">
            <div className="l-sm-12 l-md-4 l-lg-4">
              <div className="box primary">
                <div className="box-body">
                  <h2>Box title</h2>
                  <p>
                    The page header is a nice little feature to add appropriate
                    spacing around the headings on a page.
                  </p>
                </div>
              </div>
            </div>
            <div className="l-sm-12 l-md-4 l-lg-4">
              <div className="box secondary">
                <div className="box-body">
                  <h2>Box title</h2>
                  <p>
                    The page header is a nice little feature to add appropriate
                    spacing around the headings on a page.
                  </p>
                </div>
              </div>
            </div>
            <div className="l-sm-12 l-md-4 l-lg-4">
              <div className="box dark">
                <div className="box-body">
                  <h2>Box title</h2>
                  <p>
                    The page header is a nice little feature to add appropriate
                    spacing around the headings on a page.
                  </p>
                </div>
              </div>
            </div>
            <div className="l-sm-12 l-md-4 l-lg-4">
              <div className="box success">
                <div className="box-body">
                  <h2>Box title</h2>
                  <p>
                    The page header is a nice little feature to add appropriate
                    spacing around the headings on a page.
                  </p>
                </div>
              </div>
            </div>
            <div className="l-sm-12 l-md-4 l-lg-4">
              <div className="box error">
                <div className="box-body">
                  <h2>Box title</h2>
                  <p>
                    The page header is a nice little feature to add appropriate
                    spacing around the headings on a page.
                  </p>
                </div>
              </div>
            </div>
            <div className="l-sm-12 l-md-4 l-lg-4">
              <div className="box info">
                <div className="box-body">
                  <h2>Box title</h2>
                  <p>
                    The page header is a nice little feature to add appropriate
                    spacing around the headings on a page.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DocLayout>
    </>
  );
};

export default Navbar;
