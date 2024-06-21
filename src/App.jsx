import { useState } from "react"
import { marked } from "marked"
import './App.css'

export function App () {
    const [text, setText] = useState(`# H1 
## H2
[title](https://developer.mozilla.org/es/)
\`CODE\`
\`\`\`
{
    "firstName":"J",
    "lastName":"L",
    "age": "20" 
}
\`\`\`
- First Item
- Second Item
- Third Item
> blockquote
![alt text](image.jpg)

**BOLD**
`)

    marked.use({
        gfm:true,
        breaks:true
    })
    
    const handleClick =(e)=>{
        setText(e.target.value)
    }

    return(
        <main>
            <h1 id="title">MarkdownPreviewer</h1>
            <div className="editor-wrap">
                <label className="editor-header" htmlFor="editor">Editor</label>
                <textarea name="editor" 
                id="editor" 
                onChange={handleClick} 
                rows={20} 
                cols={60}
                defaultValue={text}></textarea>
            </div>
            <div className="preview-wrap">
                <div id="preview" dangerouslySetInnerHTML={{__html : marked(text),}}></div>
            </div>
        </main>
    )
}