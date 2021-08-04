import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface Props {
  code: React.ReactNode;
}

const Highlighter = ({ code }: Props) => {
  return (
    <>
      <SyntaxHighlighter
        lineProps={{ style: { paddingBottom: 8 } }}
        wrapLines={false}
        language="htmlbars"
        showLineNumbers={true}
        style={atomOneDark}
      >
        {code}
      </SyntaxHighlighter>
    </>
  );
};

export default Highlighter;
