import SyntaxHighlighter from "react-syntax-highlighter";
import { nnfxDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface Props {
  code: React.ReactNode
}

const Markdown = ({ code }: Props) => {
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
