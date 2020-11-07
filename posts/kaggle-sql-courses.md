---
title: 'A short review of the Kaggle SQL Courses'
description: 'Or: Why I would really like to use Google BigQuery in my daily life'
author: Michael Nowak
date: '2020-11-07'
---

[Kaggle](https://www.kaggle.com/) is an online community of data scientists and machine learning practitioners. And it's also a great place to get your feet wet in data science. I recently ran through two free courses: [Intro to SQL](https://www.kaggle.com/learn/intro-to-sql), and [Advanced SQL](https://www.kaggle.com/learn/advanced-sql). Both of these courses are *free*, and will give you a good introduction to both SQL in general and [Google BigQuery](https://cloud.google.com/bigquery).

# Kaggle Intro to SQL
You might think that you can skip this if you know SQL. You already know what `SELECT` does. You already know tables and schemas and keys and `JOIN`s work. Well if you don't know Google BigQuery or haven't used Kaggle or `pandas` before, you need this.

```python
from google.cloud import bigquery

# Create a "Client" object
client = bigquery.Client()

# Construct a reference to the "hacker_news" dataset
dataset_ref = client.dataset("hacker_news", project="bigquery-public-data")

# API request - fetch the dataset
dataset = client.get_dataset(dataset_ref)

# Construct a reference to the "comments" table
table_ref = dataset_ref.table("comments")

# API request - fetch the table
table = client.get_table(table_ref)

# Preview the first five lines of the table
client.list_rows(table, max_results=5).to_dataframe()
```

That's the code to inspect a few rows from a dataset. The boilerplate takes a bit of time to get used to. I kept the page for the first two courses open while working through *Intro to SQL* and *Advanced SQL* just because I kept getting the reference to a table and the actual table backwards.

The *Intro to SQL* course runs through an intro to BigQuery, basic keywords, grouping, ordering, and ends with `JOIN`ing tables. Overall, it's a great way to kill a few birds with one stone if you're totally fresh to Kaggle, BigQuery, or SQL.

# Kaggle Advanced SQL
Google BigQuery allows you to nest records. A record in a record. And it's more efficient. No need to `JOIN`. Really interesting if you're coming from a Microsoft SQL Server background. How does it work. Total magic. I've used `OPENJSON` before. And it was a pain in the ass. And no schema. BigQuery has nested records which each have a defined schema. It's amazing. Go try it out.

The rest of the course is just normal advanced SQL: aggregates, analytics functions, windowing and partitioning, and a light into to optimization. You know, so you don't blow through your 3 TB allocation on Google Cloud by `SELECT * ...`ing from a twenty table `JOIN`.

# Overall, really nice courses
Kaggle's notebooks for these courses are super slick. I only ran into a single issue when exploring the [GitHub sample data](https://www.gharchive.org/) where the recommended safe scan size (so you don't blow through your 3TB scan limit on Google Cloud) was over the default safe limit. The query scanned somewhere close to 26GB of data when running through a query. I just bumped the limit to 30GB using the `job_config` parameter to the BigQuery `client.query()` call and continued along.

The hint system is great. Each question has a hint and a solution if you get stuck. Just uncomment the call to the hint method or the solution method for that question, and boom the solution or hint is shown in the notebook.