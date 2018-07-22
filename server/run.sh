#!/bin/sh

export FLASK_APP=main.py
export BLOG_PATH=`pwd`/static
flask run --reload --port 7221
