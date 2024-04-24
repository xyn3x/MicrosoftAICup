import flask as fl
app = fl.Flask(__name__, template_folder='templates')

@app.route('/')
def main():
    if fl.request.method == 'GET':
        return (fl.render_template('main.html'))
if __name__ == '__main__':
    app.run()