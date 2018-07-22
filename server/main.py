import os
from datetime import datetime
from flask import Flask, json

BLOG_PATH = os.environ.get('BLOG_PATH', 'static')
app = Flask(__name__, static_folder=BLOG_PATH)


@app.route("/list")
def list_blog():
    files = []
    for f in os.listdir(BLOG_PATH):
        mtime = os.path.getmtime(os.path.join(BLOG_PATH, f))
        files.append(
            dict(filename=f, updated_at=datetime.fromtimestamp(mtime)))
    files = sorted(files, key=lambda a: a['updated_at'], reverse=True)
    for i in files:
        i['title'] = i['filename'][:i['filename'].rindex('.')]
        i['updated_at'] = i['updated_at'].strftime('%Y-%m-%d %H:%M:%S')
    return json.dumps(files)
