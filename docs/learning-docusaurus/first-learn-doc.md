---
id: first-learn-doc-id
title: First Learn
description: My Own Tutorial
slug: /first-learn-doc
---

# Learning Docusaurus

## Creating A Folder Inside Docs

Create a new folder inside the `docs` folder:

```bash
mkdir docs/learning-docusaurus
```     
This creates a new menu item on the left sidebar: `Learning Docusaurus`. You can also create the folder using your code editor. 

_________________

## Making The New Folder A Menu Item

First, make sure that you are in the `docs/learning-docusaurus` folder:

Then your new learning-docusaurus `folder` needs to have a `_category_.json` file. This file is used to create the menu item on the sidebar. So create a file called `_category_.json` in the new folder:

```bash
touch docs/learning-docusaurus/_category_.json
```
Again, you can create this file using your code editor. In this JSON file you can add a label, position, and link including a description that appears like a tagline on the `Learning Docusaurus` page. Like this: I changed my description text after I created my screenshot below. 

```json
{
    "label": "Learning Docusaurus",
    "position": 3,
    "link": {
        "type": "generated-index",
        "description": "I hope to demonstrate how I will continue to use Docusaurus going forward."
    }
}
```
_________________

## Creating A File Inside The New Folder
Create a new file inside the new folder:

```bash
touch docs/learning-docusaurus/first-learn-doc.md
```
 
We are using Markdown as our markup language. Docusaurus, using React, behind the scenes, will automatically include this file in the sidebar menu under the `Learning Docusaurus` menu item. As seen in the screenshot below, this page also automatically becomes a tile link on the Learning Docusaurus page and it gets included in the previous/next navigation below.
_________________

## Using Front Matter To Customize The New File

Add metadata to customize the way things appear in the sidebar or modify the title and description in the front matter too. Similar to the function of the `_category_.json` file for the folder, the front matter is used to customize each markdown file individually.

```yaml
---
id: first-learn-doc-id
title: First Learn
description: My Own Tutorial
slug: /first-learn-doc
---
```
_________________

## Adding A Screenshot To The New File

A screenshot of my `Learning Docusaurus` page: that shows the tiles of my new `First Learn` page and my second `Ramblings` page that I have created the same way.

![An image from the static](/img/learning_docusaurus.jpg)

To add a screenshot: Use this syntax: `An image from the static` inside square brackets followed by perentheses with the path to the image located in the `img` folder inside the `static` folder. And yes, the exclamation mark is required.
```
![An image from the static](/img/learning_docusaurus.jpg)
```
_________________

## Adding Content To The New File

Add content to the new file:

I started this first-learn-doc markdown file inside of my new learning-docusaurus folder: `docs/learning-docusaurus/first-learn-doc.md`

Notice how the right menu has grown to include links to each heading in this page. Each heading is a link to the section of the page.

![An image from the static](/img/r_menu.jpg)

Many sources on the internet will show you how to write in Markdown. I have not tested everything here yet, but I have been using Markdown for several years using [Obsidian](https://obsidian.md/). It is very easy to write and learn simple syntax of how to make headings, bullet points, numbered lists, links, code blocks, etc. Here are some links to some of the most popular Markdown syntaxes:

- [Markdown](https://daringfireball.net/projects/markdown/syntax)

Headings are created by using the `#` symbol. One `#` is a level one heading, two `##` is a level two heading, etc. Here is an example:


```md
# Learning Docusaurus
```
becomes:

# Learning Docusaurus


```md
## How To Create Headings
```
becomes:

## How To Create Headings 

```md
### How To Create Subheadings
```
becomes: 

### How To Create Subheadings
LOOK at how the subheading gets indented on the righ sidebar menu >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
```md
###### All The Way Down To H6
```
becomes:

###### All The Way Down To H6

Notice the horizontal rule that I've added between each section on this page.
It is simply three hyphens, like this:
```md
--- 
```
 
_________________

## How To Link To Pages

You can link to other pages using relative file paths or url paths. I'm trying to get a handle on how to link to other pages. [Markdown Links](https://docusaurus.io/docs/markdown-features/links) need to be relative file paths.
[Creating Pages](https://docusaurus.io/docs/creating-pages)


Well, apparently it doesn't work to link to a page inside src/pages, but it does work to link to a [Ramblings Page](ramblings) inside docs.

Lets see if we can link to an outside website:

[Google](https://google.com)
Okay, good. That works as expected. 