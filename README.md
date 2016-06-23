# Dodge.js

## Synopsis
Can´t touch this.
Use this framework if you want to create a game which is nearly impossible to win. This framework will change the selected element into a mouse dodging element! 


## Installation

First you need to download the map 'Dodge' on Github and place it in your website folder.

Add the link to the .js file in the header of your page
```  
 <script src=”Dodge/Dodge.js”></script>
```

Now you want to add the classname to your element to make it dodge.
```
<div id=’img’ class=’Dodge’ >
``` 

Instead of using Dodge you can also use
 * DodgeVert //OnlyVertical
 * DodgeHor //OnlyHorizontal
 
If you would like the element to move with a fancy animation you can add this line to your css file:
``` 
.Dodge,.DodgeVert,.DodgeHor
{
    transition: all 0.2s ease-out; 
} 
```
 
## Demo
Yeah, you can watch a demo [here](http://sonnyluu.nl/Dodge/demo.html).

## Version
0.01Beta

## To Do
Need to fine tune the movement. Sometimes the element doesn't move too far enough so it gets stuck beneath the mouse cursos. 


