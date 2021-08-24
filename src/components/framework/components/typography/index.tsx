import DocLayout from "../../../../layouts/Docs/index";
import { CodeHighlighter } from "../../../common/highlighter";

const MDHeading = `<h1>H1 Heading</h1>
<h1>H1 Heading <small class="badge secondary">32px</small></h1>
<div class="h1">H1 Heading</div>`;

const Typography = () => {
  return (
    <>
      <DocLayout>
        <h1>Typography</h1>
        <div className="lead">
          Typography sets default styles for headings, paragraphs, text lead,
          etc
        </div>
        <h2>Heading</h2>
        <div className="code-example">
          <h1>
            H1 Heading <small className="badge secondary">32px</small>
          </h1>
          <h2>
            H2 Heading <small className="badge secondary">29px</small>
          </h2>
          <h3>
            H3 Heading <small className="badge secondary">26px</small>
          </h3>
          <h4>
            H4 Heading <small className="badge secondary">22px</small>
          </h4>
          <h5>
            H5 Heading <small className="badge secondary">19px</small>
          </h5>
          <h6>
            H6 Heading <small className="badge secondary">16px</small>
          </h6>
        </div>
        <CodeHighlighter code={MDHeading} />
        <h2>Text lead</h2>
        <div>Make a paragraph stand out by adding .lead.</div>
        <div className="lead">
          Typography sets default styles for headings, paragraphs, text lead,
          etc
        </div>
        <h2>Paragraph</h2>
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
        ˝<h2>Text aligment</h2>
        <div className="left-align lead">Text aligned in the center</div>
        <div className="center-align lead">Text aligned in the center</div>
        <div className="right-align lead">Text aligned in the center</div>
      </DocLayout>
    </>
  );
};

export default Typography;
