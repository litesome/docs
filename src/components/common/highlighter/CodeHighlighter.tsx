import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import './Codehighlighter.css'
interface Props {
  code: React.ReactNode;
}

const CodeHighlighter = ({ code }: Props) => {
  return (
    <div className="codehighlighter">
      <SyntaxHighlighter
        lineProps={{ style: { paddingBottom: 8 } }}
        wrapLines={false}
        language="htmlbars"
        showLineNumbers={true}
        style={atomOneDark}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeHighlighter;
