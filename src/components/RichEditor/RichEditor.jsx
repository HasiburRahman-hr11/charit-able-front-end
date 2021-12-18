import React, { useState } from "react";
import { Editor } from 'react-draft-wysiwyg';


import { EditorState, convertToRaw, convertFromHTML, ContentState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from 'draftjs-to-html';


const RichEditor = ({ setValue, defaultValue }) => {

    const editorWithValue = () => (
        EditorState.createWithContent(
            ContentState.createFromBlockArray(
                convertFromHTML(defaultValue)
            )
        )
    );
    const emptyEditor = () => (
        EditorState.createEmpty()
    )

    const [editorState, setEditorState] = useState(defaultValue ? editorWithValue : emptyEditor);

    const handleEditorChange = (state) => {
        setEditorState(state);
        sendContent(setValue);
    };

    const sendContent = (setEditorValue) => {
        setEditorValue(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    };

    return (
        <>
            <Editor
                editorState={editorState}
                onEditorStateChange={handleEditorChange}
                wrapperClassName="draft__editor_wrapper"
                editorClassName="draft__editor"
            />
        </>
    );
};

export default RichEditor;