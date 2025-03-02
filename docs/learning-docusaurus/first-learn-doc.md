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
This creates a new menu item on the left sidebar: `Learning Docusaurus' >



## Making The New Folder A Menu Item

First, make sure that you are in the `docs/learning-docusaurus` folder:

Then your new learning-docusaurus `folder` needs to have a `_category_.json` file. This file is used to create the menu item on the sidebar. So create a file called `_category_.json` in the new folder:

```bash
touch docs/learning-docusaurus/_category_.json
```
In this JSON file I can add a label, position, and link including a description that appears like a tagline on the `Learning Docusaurus` page. Like this: I changed my description text after I created my screenshot below. 

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

I'm going to try and insert a screenshot here.

![An image from the static](/img/learning_docusaurus.jpg)

## Creating A File Inside The New Folder
Create a new file inside the new folder:

```bash
touch docs/learning-docusaurus/first-learn-doc.md
```
 
Docusaurus will automatically include this file in the sidebar menu under the `Learning Docusaurus` menu item. This page also automatically becomes a tile link on the Learning Docusaurus page and it gets included in the previous/next navigation below.

## Adding Content To The New File

Add content to the new file:

I started this first-learn-doc markdown file inside of my new learning-docusaurus folder: `docs/learning-docusaurus/first-learn-doc.md`

## How To Link To Pages

You can link to other pages using relative file paths or url paths. I'm trying to get a handle on how to link to other pages. [Markdown Links](https://docusaurus.io/docs/markdown-features/links) need to be relative file paths.
[Creating Pages](https://docusaurus.io/docs/creating-pages)


Well, apparently it doesn't work to link to a page inside src/pages, but it does work to link to a [Ramblings Page](ramblings) inside docs.

Lets see if we can link to an outside website:

[Google](https://google.com)
Okay, good. That works as expected. 