from flask import Flask, request, jsonify, render_template
import pickle

app = Flask(__name__)


with open('model.pkl', 'rb') as file:
    model = pickle.load(file)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json() 
    features = data['features']  
    
    
    prediction = model.predict([features])  
    if prediction > 100:
        prediction = 100
    
    
    return jsonify({'prediction': prediction[0]})  

if __name__ == '__main__':
    app.run()
