import DocLayout from "../../../../layouts/Docs/index";
import { CodeHighlighter } from "../../../common/highlighter";
import ImagePlaceholder from "./../../../../assets/images/placeholder.png";

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
    <button type="button" class="button border-light">
      Light
    </button>
  </div>
</div>`;

const Box = () => {
  return (
    <>
      <DocLayout>
        <h1>Box</h1>
        <div className="lead">
          Box provide a flexible element container with various options.
        </div>
        <h2>Simple box</h2>
        <div>Default buttons</div>
        <div className="code-example">
          <div className="box">
            <div className="box-body">
              <h2>Box title</h2>
              <p>
                The page header is a nice little feature to add appropriate
                spacing around the headings on a page. This is particularly
                helpful on a web page where you may have several post titles and
                need a way to add distinction to each of them.
              </p>
            </div>
            <div className="box-footer">
              <div className="button-group pull-left">
                <button type="button" className="button secondary">
                  Back
                </button>
              </div>
              <div className="button-group pull-right">
                <button type="button" className="button secondary">
                  Save &amp; Proceed
                </button>
                <button type="button" className="button">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <CodeHighlighter code={MDHelperBox} />
        <h2>Box variants</h2>
        <div className="lead">
          Boxes include various predefined &amp; customized options for you
        </div>

        <div className="box">
          <div className="code-example">
            <div className="row">
              <div className="l-sm-12 l-md-4 l-lg-4">
                <div className="box primary">
                  <div className="box-body">
                    <h2>Primary</h2>
                    <p>
                      The page header is a nice little feature to add
                      appropriate spacing around the headings on a page.
                    </p>
                  </div>
                </div>
              </div>
              <div className="l-sm-12 l-md-4 l-lg-4">
                <div className="box secondary">
                  <div className="box-body">
                    <h2>Secondary</h2>
                    <p>
                      The page header is a nice little feature to add
                      appropriate spacing around the headings on a page.
                    </p>
                  </div>
                </div>
              </div>
              <div className="l-sm-12 l-md-4 l-lg-4">
                <div className="box dark">
                  <div className="box-body">
                    <h2>Dark</h2>
                    <p>
                      The page header is a nice little feature to add
                      appropriate spacing around the headings on a page.
                    </p>
                  </div>
                </div>
              </div>
              <div className="l-sm-12 l-md-4 l-lg-4">
                <div className="box success">
                  <div className="box-body">
                    <h2>Success</h2>
                    <p>
                      The page header is a nice little feature to add
                      appropriate spacing around the headings on a page.
                    </p>
                  </div>
                </div>
              </div>
              <div className="l-sm-12 l-md-4 l-lg-4">
                <div className="box danger">
                  <div className="box-body">
                    <h2>Danger</h2>
                    <p>
                      The page header is a nice little feature to add
                      appropriate spacing around the headings on a page.
                    </p>
                  </div>
                </div>
              </div>
              <div className="l-sm-12 l-md-4 l-lg-4">
                <div className="box info">
                  <div className="box-body">
                    <h2>Info</h2>
                    <p>
                      The page header is a nice little feature to add
                      appropriate spacing around the headings on a page.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2>Box with image</h2>
        <div>Handling image in the box</div>
        <div className="code-example">
          <div className="row">
            <div className="l-sm-12 l-md-6 l-lg-6">
              <div className="box  body-center">
                <div className="box-body">
                  <div className="box-image">
                    <img className="" src={ImagePlaceholder} alt="Lists" />
                  </div>
                  <h2>Box title</h2>
                  <p>
                    The page header is a nice little feature to add appropriate
                    spacing around the headings on a page. This is particularly
                    helpful on a web page where you may have several post titles
                    and need a way to add distinction to each of them.
                  </p>
                </div>
                <div className="box-footer">
                  <button type="button" className="button">
                    Primary
                  </button>
                  <button type="button" className="button secondary">
                    Light
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DocLayout>
    </>
  );
};

export default Box;
