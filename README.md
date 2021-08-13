# Bookmarker LocalStorage App. How to effectively select DOM objects using querySelector and manipulating them by using addEventListener.

Simple application for bookmarking websites. This application is designed to learn the basic functions asssociated with DOM manipulation, how to effectively use them to make a simple app and how to add events using event listener function. Along with this, it also uses localstorage functions to store and retrieve values from local storage when needed and the bookmarks are also stored in local storage.

## Usage

Just download and open index.html. It is all client side. It is also live on netlify and can also be accessed through this link https://bookmarkappbyawais.netlify.app/.

## Functions

Simply enter site name and url.Save bookmarks by submit button. Once bookmarked you can visit, edit and delete the bookmarks easily by the buttons provided.

## Important Concepts used and their explanation

The prime purpose of this app creation was to effectively implement the basic concepts of JavaScript like querySelector, addEventListener and localStorage for deeper understanding. In building the app, it was learned how to effectively select DOM objects, how to manipulate them by adding events and how to save them using localStorage.

### Why querySelector is used and preferred over other selection methods:

There are several ways to select various tags and attributes from HTML in JavaScript file which include getElementById, getElementByClass, getElementByTagName,querySelector and querySelectorAll.The most used and effective way is querySelector or querySelectorAll. The reason behind its popularity and preference is that it is multi-purpose and encompasses all other methods use as well. 
The syntax to use querySelector is document.querySelector(""). Through this, you can get element by Id, Class or TagName as you wish. For accessing an element through tag name, simply put the tag name inside the quotation marks. For accessing an element through class just put a dot before class name inside the quotation marks and for id, put a hashtag before id name. So we see, by using querySelector, we can access element through tagName,Class and Id as well.This is the reason we have used query selector for selecting various classes tags and id in this project. 
The only difference between querySelector and querySelectorAll is that querySelector selects the first element it finds where as querySelectorAll selects all the elements with the same name.

## Recommendations

If you have any recommendations as to how can I improve the code and maximize my learning, feel free to contribute. It will be highly appreciated. 



