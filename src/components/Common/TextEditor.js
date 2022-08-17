import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const TextEditor = () => {
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );
    
    return (
        <div>
            <div style={{ border: "1px solid black", padding: '2px', minHeight: '300px' }}>
                <Editor
                    editorState={editorState}
                    onEditorStateChange={setEditorState}
                />
            </div>
        </div>
    );
}

export default TextEditor;