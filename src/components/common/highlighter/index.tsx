import SyntaxHighlighter from "react-syntax-highlighter";
import { nnfxDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Markdown = ({ code }: any) => {
  return (
    <>
      <SyntaxHighlighter
        lineProps={{ style: { paddingBottom: 8 } }}
        wrapLines={true}
        showLineNumbers={true}
        language="markdown"
        style={nnfxDark}
      >
        {code}
      </SyntaxHighlighter>
    </>
  );
};

export default Markdown;
