import DocLayout from "../../../../layouts/Docs/index";
import { CodeHighlighter } from "../../../common/highlighter";

const MDBadge = `<span class="badge success"></span>`;
const MDBadgeWithHeading = `<h1>Example heading <span class="badge success"></span></h1>
<h2>Example heading <span class="badge warning"></span></h2>
<h3>Example heading <span class="badge danger"></span></h3>
<h4>Example heading <span class="badge warning"></span></h4>
<h5>Example heading <span class="badge info"></span></h5>
<h6>Example heading <span class="badge success"></span></h6>`;
const MDBadgeWithButtons = `<button type="button" class="button primary">Notifications<span class="badge dot-badge"></span></button>
<button type="button" class="button success">New Messages<span class="badge danger">+9</span></button>
<button type="button" class="button border-secondary">Products<span class="badge inline-badge danger">New</span></button>
<button type="button" class="button secondary">Products<span class="badge inline-badge">New</span></button>`;
const MDStatus = `<span class="status success"></span>`;
const MDDefaultBadges = `<button type="button">Notifications<span class="badge">+9</span></button>
<button type="button">Notifications<span class="badge dot-badge"></span></button>`;
const MDBadgesWithNumbers = `<button type="button">Messages<span class="badge">0</span></button>
<button type="button" class="secondary">Messages<span class="badge success">45</span></button>
<button type="button" class="outline">Messages<span class="badge warning">2</span></button>
<button type="button" class="outline">Messages<span class="badge info">39</span></button>
<button type="button" class="secondary">Messages<span class="badge danger">+9</span></button>`;
const MDBadgesWithLabels = `<button type="button">Messages<span class="badge inline-badge">New</span></button>
<button type="button" class="secondary">Messages<span class="badge inline-badge success">New</span></button>
<button type="button" class="outline">Messages<span class="badge inline-badge warning">New</span></button>
<button type="button" class="outline">Messages<span class="badge inline-badge info">New</span></button>
<button type="button" class="outline">Messages<span class="badge inline-badge">New</span></button>`;

const Badges = () => {
  return (
    <>
      <DocLayout>
        <h1>Badge &amp; Status</h1>
        <div className="lead">
          Giving content a meaning with badge and status
        </div>
        <h2>Badge</h2>
        <div>
          Badges are used to add additional information to any content. Use the
          <code className="code-wrapper">.badge</code> class together with an
          alert color variant(<code className="code-wrapper">.success</code>,
          <code className="code-wrapper">.danger</code>,
          <code className="code-wrapper">.info</code> or{" "}
          <code className="code-wrapper">.warning</code>)
        </div>
        <CodeHighlighter code={MDBadge} />
        <h3>Badge with headings</h3>
        <div className="box">
          <div className="code-example">
            <h2>
              Example heading <span className="badge success">New</span>
            </h2>
          </div>
        </div>
        <CodeHighlighter code={MDBadgeWithHeading} />
        <h3>Badge with buttons</h3>
        <div className="code-example">
          <h4>Default badges</h4>
          <button type="button">
            Notifications
            <span className="badge">+9</span>
          </button>
          <button type="button">
            Notifications
            <span className="badge dot-badge"></span>
          </button>
        </div>
        <CodeHighlighter code={MDDefaultBadges} />
        <div className="code-example">
          <h4>Badge with numbers</h4>
          <button type="button">
            Messages
            <span className="badge">0</span>
          </button>
          <button type="button" className="secondary">
            Messages
            <span className="badge success">45</span>
          </button>
          <button type="button" className="outline">
            Messages
            <span className="badge warning">2</span>
          </button>
          <button type="button" className="outline">
            Messages
            <span className="badge info">39</span>
          </button>
          <button type="button" className="secondary">
            Messages
            <span className="badge danger">+9</span>
          </button>
        </div>
        <CodeHighlighter code={MDBadgesWithNumbers} />
        <div className="code-example">
          <h4>Inline badge with label</h4>
          <button type="button">
            Messages
            <span className="badge inline-badge">New</span>
          </button>
          <button type="button" className="secondary">
            Messages
            <span className="badge inline-badge success">New</span>
          </button>
          <button type="button" className="outline">
            Messages
            <span className="badge inline-badge warning">New</span>
          </button>
          <button type="button" className="outline">
            Messages
            <span className="badge inline-badge info">New</span>
          </button>
          <div className="clear" />
          <button type="button" className="outline">
            Messages
            <span className="badge inline-badge">New</span>
          </button>
        </div>
        <CodeHighlighter code={MDBadgesWithLabels} />
        <h2>Status</h2>
        <div>
          Status is always handled in a span tag with{" "}
          <code className="code-wrapper">.status</code> class together with an
          alert color variant(<code className="code-wrapper">.success</code>,
          <code className="code-wrapper">.danger</code>,
          <code className="code-wrapper">.info</code> or{" "}
          <code className="code-wrapper">.warning</code>)
        </div>
        <CodeHighlighter code={MDStatus} />
        <div className="box">
          <div className="code-example">
            <table>
              <thead>
                <tr>
                  <th scope="col">Account</th>
                  <th scope="col">Email</th>
                  <th scope="col">Status</th>
                  <th scope="col">Period</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Account">Jane Smith</td>
                  <td data-label="Due Date">jane@smith.com</td>
                  <td data-label="Amount">
                    <span className="status success">Active</span>
                  </td>
                  <td data-label="Period">03/01/2016</td>
                </tr>
                <tr>
                  <td scope="row" data-label="Account">
                    John Doe
                  </td>
                  <td data-label="Due Date">joe@doe.com</td>
                  <td data-label="Amount">
                    <span className="status info">Draft</span>
                  </td>
                  <td data-label="Period">02/01/2016</td>
                </tr>
                <tr>
                  <td scope="row" data-label="Account">
                    Ngabo Jasper
                  </td>
                  <td data-label="Due Date">ngabo@jasper.com</td>
                  <td data-label="Amount">
                    <span className="status warning">Pending</span>
                  </td>
                  <td data-label="Period">02/01/2016</td>
                </tr>
                <tr>
                  <td scope="row" data-label="Account">
                    James Klos
                  </td>
                  <td data-label="Due Date">james@klos.com</td>
                  <td data-label="Amount">
                    <span className="status danger">Deleted</span>
                  </td>
                  <td data-label="Period">02/01/2016</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </DocLayout>
    </>
  );
};

export default Badges;
