import { createSlice } from "@reduxjs/toolkit";

const previewerreducer = createSlice({
    name:"previewer",
    initialState:{
        defaulttext:`# Welcome to my React Markdown Previewer!
        ## This is a sub-heading...
        ### And here's some other cool stuff:
        
        Heres some code, \`<div></div>\`, between 2 backticks.
        
        \`\`\`
        // this is multi-line code:
        
        function anotherExample(firstLine, lastLine) {
        if (firstLine == '\\\`\`\`' && lastLine == '\\\`\`\`') {
          return multiLineCode;
          }
        }
        \`\`\`
        
        You can also make text **bold**... whoa!
        Or _italic_.
        Or... wait for it... **_both!_**
        And feel free to go crazy ~~crossingstuffout~~.
        `,
        text:`# Welcome to my React Markdown Previewer!
        ## This is a sub-heading...
        ### And here's some other cool stuff:
        
        Heres some code, \`<div></div>\`, between 2 backticks.
        
        \`\`\`
        // this is multi-line code:
        
        function anotherExample(firstLine, lastLine) {
        if (firstLine == '\\\`\`\`' && lastLine == '\\\`\`\`') {
          return multiLineCode;
          }
        }
        \`\`\`
        
        You can also make text **bold**... whoa!
        Or _italic_.
        Or... wait for it... **_both!_**
        And feel free to go crazy ~~crossingstuffout~~.
        `
    },
    reducers:{
        defaulttextarea: (state) => {
            document.querySelector("#root > div > div > div.markdown > div.markdown-content > textarea").value = state.defaulttext
        },
        texthandler: (state,action) => {
            state.text = action.payload;
        }
    }
});

export const { defaulttextarea,texthandler } = previewerreducer.actions;

export default previewerreducer.reducer;