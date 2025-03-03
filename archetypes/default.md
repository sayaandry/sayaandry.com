+++
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
date = {{ .Date }}
lastmod = {{ now.Format "2006-01-02" }}
slug = 'url'
categories = 'blog'
tags = ['helloworld']
featured_image = 'cover.png'
draft = true
+++
