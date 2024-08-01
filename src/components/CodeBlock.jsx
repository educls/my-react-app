import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

function CodeBlock() {
  const codeString = `
    class Person {
      constructor() {
        this.name = "Eduardo Cesar";
        this.role = "Dev Full Stack";
        this.age = new Date().getFullYear() - 2001;
      }
    }`;

  return (
    <div style={{
      fontSize: '30px',
      margin: '10px',
      borderRadius: '30px',
      width: '420px',
      height: '300px',
      background: 'rgba(34, 34, 34, 0.1)',
      overflow: 'hidden',
    }}>
      <SyntaxHighlighter language="dart" style={vscDarkPlus}
        customStyle={{
          fontSize: '20px',
          backgroundColor: 'rgba(34, 34, 34, 0.9)',
        }}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
