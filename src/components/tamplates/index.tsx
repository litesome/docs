
const Templates = () => {
  return (
    <div className="main-wrapper">
      <div className="sidebar dark">
        <div className="logo">
        </div>
        <ul className="list-block">
          <li>
            <a href="/">Introduction</a>
          </li>
          <li>
            <a href="/">Layout</a>
            <ul className="list-block">
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
          </li>
          <li>
            <a href="/">Components</a>
            <ul className="list-block">
              <li>
                <a href="/">Headings</a>
              </li>
              <li>
                <a href="/">Buttons</a>
              </li>
              <li>
                <a href="/">Images</a>
              </li>
              <li>
                <a href="/">Alerts</a>
              </li>
              <li>
                <a href="/">Spinners</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/">Helpers</a>
          </li>
          <li>
            <a href="/">Templates</a>
          </li>
          <li>
            <a href="/">Contribution</a>
          </li>
        </ul>
      </div>
      <div className="main">
        <div className="container">
          <div>Litesome</div>
          <button className="button primary">Save</button>
          <button className="button secondary">Save as draft</button>
        </div>
      </div>
    </div>
  );
}

export default Templates;
