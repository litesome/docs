import DocLayout from "../../../../layouts/Docs/index";
import { CodeHighlighter } from "../../../common/highlighter";

const MDHeading = `<h1>H1 Heading</h1>
<h1>H1 Heading <small class="badge secondary">32px</small></h1>
<div class="h1">H1 Heading</div>`;
const MDHeadingWithBadge = `<h1>H1 Heading <span class="badge secondary">32px</span></h1>`;
const MDLead = `<div class="lead">Typography sets default styles for headings, paragraphs, text lead,etc</div>`;
const MDParagraph = `<p>Lorem ipsum dolor sit amet, consectetur <a href="/"> adipiscing elit</a>. Etiam condimentum nec enim velviverra. Mauris luctus nibh non rhoncus fermentum.</p>`;
const MDBold = `<div class="text-bold"></div>`;
const MDItalic = `<div class="text-italic"></div>`;
const MDCapital = `<div class="text-capitalize"></div>`;

const Typography = () => {
  return (
    <>
      <DocLayout>
        <h1>Typography</h1>
        <div className="lead">
          Semantic styles for headings, paragraphs, text lead, etc
        </div>
        <h2>Headings</h2>
        <div className="white shadow py-md px-md my-md">
          <div className="code-example">
            <h1>H1 Heading</h1>
            <h2>H2 Heading</h2>
            <h3>H3 Heading</h3>
            <h4>H4 Heading</h4>
            <h5>H5 Heading</h5>
            <h6>H6 Heading</h6>
          </div>
        </div>
        <CodeHighlighter code={MDHeading} />
        <h2>Using badge in a heading</h2>
        <div className="box">
          <h2>
            H2 Heading <span className="badge secondary">29px</span>
          </h2>
        </div>
        <CodeHighlighter code={MDHeadingWithBadge} />
        <h2>Text lead</h2>
        <div>Make a paragraph stand out by adding .lead.</div>
        <div className="box">
          <div className="lead">
            Typography sets default styles for headings, paragraphs, text lead,
            etc
          </div>
        </div>
        <CodeHighlighter code={MDLead} />
        <CodeHighlighter code={MDParagraph} />
        <h2>Paragraph</h2>
        <div className="box">
          <div>
            Lorem ipsum dolor sit amet, consectetur
            <a href="/"> adipiscing elit</a>. Etiam condimentum nec enim vel
            viverra. Mauris luctus nibh non rhoncus fermentum. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Aliquam eu dui cursus dui
            varius pretium id in ex. Aenean at nibh eget ante imperdiet pretium
            sed vel velit. Aliquam vehicula dignissim ipsum, ut tincidunt nunc
            viverra id. Nulla facilisi. Maecenas faucibus sed sem a vehicula.
            Praesent ullamcorper vehicula auctor. Proin at imperdiet diam.
          </div>
        </div>
        <CodeHighlighter code={MDParagraph} />
        <h3>...and more</h3>
        <div className="text-bold">Bold text</div>
        <CodeHighlighter code={MDBold} />
        <div className="text-italic">Italic text</div>
        <CodeHighlighter code={MDItalic} />
        <div className="text-capitalize">capitalized text</div>
        <CodeHighlighter code={MDCapital} />
      </DocLayout>
    </>
  );
};

export default Typography;
