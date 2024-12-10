// !! what are some new tags in html5
// * semantic tags : those tags which is easy to read, seo
{/* <header></header>
<footer></footer>
<section></section>
<audio></audio>
<video></video>
<canvas></canvas> */}

// div is a block element
// ! we cannot set height and width in span (inline element)

// inline elements

{/* <span></span>
<a href=""></a>
<img src="" alt="" />
<input></input> */}

// two type of inline elements

// 1. replaced  - those elements come through external source - image
// 2. non replaced 

// ! <!DOCTYPE> we use to specifies the document type and version of HTML being used.


// DOM - DOCUMENT OBJECT MODAL
// The DOM is a programming interface for web documents. It represents the structure of HTML and XML documents as a tree-like structure where each node represents an element or a piece of content.
// BOM - BROWSER OBJECT MODAL - ALERT , NAVTGETE , alert() , WINDOW
// The BOM is a collection of browser-specific objects and interfaces that extend the capabilities of JavaScript beyond what is provided by the DOM.

// ?? this helps in improving seo

// !! px vs rem vs em

// ? px:static not usually recommended because it is absolute
// ? rem:multiple of the root font size , 2rem is 2Xh1 .
// ? em:multiple of the font size of the body eg body me h1 ka 20px h  toh 2em = 40px


// !! 5 way to center the div
// 1.flex justify content: center , align item:center
//6.grid justify content:center, align item:center
// 2.margin
// 3.postioning , absolute,relative
// 4.grid
// 5.tables

// !! box model

margin
border
padding
content

// ?? id has more priority then class



// css types

// inline > id > class 


// by default display type is inline 
// we can create custom tag like <naresh> </naresh> // it can be anything

// ? inline elements

// we cannot give height and width


// ! but image is an inline element , then why can we give height and width
// since the content is provided by external source so they don't behave like general span elements.

// inline element -> 1) replaced   - image
// 2) non replaced - span