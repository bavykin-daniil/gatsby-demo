---
preview_image: "/uploads/maxresdefault.jpg"
dateofcreate: 2022-07-20T16:49:56Z
title: QueryForDataWithGraphQL
url: gatsby-post
pagetitle: Query for Data with GraphQL
description: Conveniently, Gatsby has a powerful feature called the data layer that
  you can use to pull data into your site from anywhere. Want to keep your blog posts
  in WordPress, your store products in Shopify, and your user data in Airtable?

---
## Meet Gatsby’s GraphQL data layer

Gatsby has its own [GraphQL](https://graphql.org/) data layer where it keeps all the data for your site. But how does it work under the hood?

First, your data is stored in one or more **sources**. That source might be a folder on your computer’s filesystem, a content management system (CMS) like WordPress, or a database. You might even have multiple data sources!

How do you get data from its source into the data layer? By adding a type of plugin to your site called a **source plugin**. Each source plugin is designed to communicate with a specific source. When you build your site, each source plugin pulls data from its particular source and adds it to your site’s GraphQL data layer.

![](/uploads/data-layer.png)