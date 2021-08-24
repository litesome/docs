import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface Props {
  code: React.ReactNode;
}

const CodeHighlighter = ({ code }: Props) => {
  return (
    <>
      <SyntaxHighlighter
        lineProps={{ style: { paddingBottom: 8 } }}
        wrapLines={false}
        language="htmlbars"
        style={atomOneDark}
        useInlineStyles={false}
      >
        {code}
      </SyntaxHighlighter>
    </>
  );
};

export default CodeHighlighter;
