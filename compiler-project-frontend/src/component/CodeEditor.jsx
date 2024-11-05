import React, { useState, useEffect, useRef } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { cpp } from "@codemirror/lang-cpp";
import { java } from "@codemirror/lang-java";
import { python } from "@codemirror/lang-python";
import { indentUnit } from "@codemirror/language";
import { EditorState } from "@codemirror/state";

const CodeEditor = ({ currentLanguage, currentCode, setCurrentCode }) => {
  const [language, setLanguage] = useState(java);
  const editorRef = useRef(null);

  useEffect(() => {
    if (currentLanguage === "cpp") setLanguage(cpp);
    if (currentLanguage === "java") setLanguage(java);
    if (currentLanguage === "python") setLanguage(python);
  }, [currentLanguage]);

  useEffect(() => {
    if (editorRef.current) {
      const editorView = editorRef.current.view;
      if (editorView) {
        editorView.scrollDOM.scrollTop = editorView.scrollDOM.scrollHeight;
      }
    }
  }, [currentCode]);

  return (
    <CodeMirror
      ref={editorRef}
      value={currentCode}
      extensions={[
        language,
        indentUnit.of("        "),
        EditorState.tabSize.of(4),
      ]}
      height="350px"
      onChange={(value) => setCurrentCode(value)}
      basicSetup={{
        lineNumbers: true,
        highlightActiveLineGutter: true,
        highlightSpecialChars: true,
        history: true,
        foldGutter: true,
        drawSelection: true,
        dropCursor: true,
        allowMultipleSelections: true,
        indentOnInput: true,
        syntaxHighlighting: true,
        bracketMatching: true,
        closeBrackets: true,
        autocompletion: true,
        rectangularSelection: true,
        crosshairCursor: true,
        highlightActiveLine: true,
        highlightSelectionMatches: true,
      }}
      onCreateEditor={(editorView) => {
        editorRef.current = { view: editorView };
      }}
    />
  );
};

export default CodeEditor;
