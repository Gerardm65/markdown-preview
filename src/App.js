
import './App.css';
import './markdown.css'
import React from 'react'
import {marked} from 'marked';

const initialState = `
This is a paragraph
# Welcome to my markdown preview page
## Here you can edit the code below

You can Also put Text **BOLD**<br/>
Also you can use *italics!*<br/>
Or even both of them ***isn't great?***

### Even u can make lists
- Here is the first element of the list
- here is the second element of the list
- Here is the third element of the list


## You can also add new elements such as Links!
[Visit freecodecamp and learn how to Code!](http://freecodecamp.org/)<br/>
> And Block coutes!

You can also add new functions such as \`
let helloWorld= () => {
  console.log('Hello world')
}
\`

This are 2 divs between backticks making an inline code \`<div></div>\`
### You can add Tables!
| Name | Age | Location |
| ---- | --- | -------- |
| John | 30  | New York |
| Jane | 25  | Paris    |
| Bob  | 40  | London   |

###### This is a block of Code
\`\`\`
let x = 1;
let y = 4;
let z = x * y + (y-z);
\`\`\`
1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:


![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)


`
class App extends React.Component {
  

  constructor(props) {
    super(props);
  this.state = {
    text: initialState,
    editorExpanded: false,
    previewHidden: false,
    editorHidden: false,
    previewExpanded: false,
    
  }
  this.handleChange = this.handleChange.bind(this);
  this.toggleEditor = this.toggleEditor.bind(this);
  this.togglePreview = this.togglePreview.bind(this);
  
  
}
toggleEditor() {
  this.setState({ 
    editorExpanded: !this.state.editorExpanded,
     previewHidden: !this.state.previewHidden})
}
togglePreview(){
  this.setState({
    editorHidden: !this.state.editorHidden,
    previewExpanded: !this.state.previewExpanded
})}

handleChange = (e) => {
  this.setState({
    text: e.target.value
  });}
  
  render() {
    const text = this.state.text;
    const markdown = marked(this.state.text, {breaks:true})
    const editorExpanded = this.state.editorExpanded ? 'editor expanded' : 'editor';
    const previewHidden =  this.state.previewHidden ? 'preview hidden' : 'preview';
  return (
   <div className='body d-flex justify-content-center'>
    
    <div className='column text-center'>
     
      <div className='editor__container' >
        <h5>enter your text here</h5>
        <div className='header'>
          <div className='header__container'>
          <div className="logo" />
                <button onChange={this.toggleEditor}>press</button>
             </div>
             </div>
        <textarea id='editor' className='editor' value={text} onChange={this.handleChange} ></textarea>
      </div>
      
      
      
      <div className='col-12' >
        <h5>See The result</h5>
        <div className='header'>
          <div className='header__container'>
          <div className="logo" />
                <button onChange={this.togglePreview}>press</button>
            </div>
            </div>

       <div className={previewHidden} dangerouslySetInnerHTML={{__html:markdown}} id='preview'>
        
        </div>
      </div>
    </div>
   </div>
  );
}}

export default App;

