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

A screenshot of my `Learning Docusaurus` page: that shows the tiles of my new `First Learn` page and my second `Ramblings` page.

![An image from the static](/img/learning_docusaurus.jpg)

To add a screenshot: Use this syntax: `An image from the static` inside square brackets followed by perentheses with the path to the image located in the `img` folder inside the `static` folder. And yes, the exclamation mark is required.
```
![An image from the static](/img/learning_docusaurus.jpg)
```
_________________

## Creating A File Inside The New Folder
Create a new file inside the new folder:

```bash
touch docs/learning-docusaurus/first-learn-doc.md
```
 
Docusaurus will automatically include this file in the sidebar menu under the `Learning Docusaurus` menu item. As seen in the screenshot above, this page also automatically becomes a tile link on the Learning Docusaurus page and it gets included in the previous/next navigation below.

_________________

## Adding Content To The New File

Add content to the new file:

I started this first-learn-doc markdown file inside of my new learning-docusaurus folder: `docs/learning-docusaurus/first-learn-doc.md`

_________________

## How To Link To Pages

You can link to other pages using relative file paths or url paths. I'm trying to get a handle on how to link to other pages. [Markdown Links](https://docusaurus.io/docs/markdown-features/links) need to be relative file paths.
[Creating Pages](https://docusaurus.io/docs/creating-pages)


Well, apparently it doesn't work to link to a page inside src/pages, but it does work to link to a [Ramblings Page](ramblings) inside docs.

Lets see if we can link to an outside website:

[Google](https://google.com)
Okay, good. That works as expected. 