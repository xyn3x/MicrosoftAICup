from flask import Flask, request, render_template
app = Flask(__name__, template_folder='template')

def main():
    if request.method == 'GET':
        return (render_template('index.html'))
    
if __name__ == '__main__':
    app.run()