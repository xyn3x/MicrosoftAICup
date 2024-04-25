import flask as fl
app = fl.Flask(__name__, template_folder='templates')

@app.route('/', methods = ['GET', 'POST'])
def main():
    if fl.request.method == 'GET':
        return (fl.render_template('main.html'))
    if fl.request.method == 'POST':
        age = fl.request.form.get('age')
        return (fl.render_template('result.html', age=age))
if __name__ == '__main__':
    app.run()