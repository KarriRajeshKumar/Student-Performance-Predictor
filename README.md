<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Performance Predictor - Documentation</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 40px;
            padding: 20px;
            background-color: #f4f4f4;
        }
        .container {
            max-width: 900px;
            margin: auto;
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        }
        h1, h2, h3 {
            color: #333;
        }
        code {
            background-color: #eee;
            padding: 2px 4px;
            border-radius: 4px;
        }
        pre {
            background-color: #272822;
            color: #f8f8f2;
            padding: 10px;
            border-radius: 5px;
            overflow-x: auto;
        }
        .section {
            margin-bottom: 20px;
        }
    </style>
</head>
<body>

    <div class="container">
        <h1>Student Performance Predictor</h1>

        <div class="section">
            <h2>Overview</h2>
            <p>Student Performance Predictor is a web application that uses machine learning to predict student performance based on various factors such as study hours, previous scores, extracurricular activities, sleep patterns, and practice tests.</p>
        </div>

        <div class="section">
            <h2>Features</h2>
            <ul>
                <li>Predicts student performance based on input features.</li>
                <li>Provides real-time validation for input values.</li>
                <li>Displays prediction results dynamically using JavaScript.</li>
                <li>Built with Flask for backend and a simple frontend using HTML, CSS, and JavaScript.</li>
            </ul>
        </div>

        <div class="section">
            <h2>Tech Stack</h2>
            <ul>
                <li><strong>Backend:</strong> Flask, Python</li>
                <li><strong>Frontend:</strong> HTML, CSS, JavaScript</li>
                <li><strong>Machine Learning Model:</strong> Multiple Linear Regression (Serialized using Pickle)</li>
            </ul>
        </div>

        <div class="section">
            <h2>Installation</h2>
            <h3>1. Clone the Repository</h3>
            <pre><code>git clone https://github.com/your-username/Student-Performance-Predictor.git
cd Student-Performance-Predictor</code></pre>

            <h3>2. Create and Activate Virtual Environment</h3>
            <pre><code>python -m venv venv  # Create virtual environment
source venv/bin/activate  # On Mac/Linux
venv\Scripts\activate  # On Windows</code></pre>

            <h3>3. Install Dependencies</h3>
            <pre><code>pip install -r requirements.txt</code></pre>

            <h3>4. Run the Flask Application</h3>
            <pre><code>python app.py</code></pre>

            <h3>5. Access the Application</h3>
            <p>Open your browser and go to:</p>
            <pre><code>http://127.0.0.1:5000/</code></pre>
        </div>

        <div class="section">
            <h2>API Endpoint</h2>
            <h3>/predict (POST)</h3>
            <p><strong>Description:</strong> Accepts student input data and returns the predicted performance score.</p>
            <p><strong>Request Body (JSON):</strong></p>
            <pre><code>{
    "features": [hours_studied, previous_scores, extracurricular_activities, sleeping_hours, sample_papers_practiced]
}</code></pre>
            <p><strong>Response (JSON):</strong></p>
            <pre><code>{
    "prediction": 85
}</code></pre>
        </div>

        <div class="section">
            <h2>Deployment Guide</h2>
            <ol>
                <li>Deploy the application to <strong>Heroku, Render, or AWS</strong>.</li>
                <li>Make sure the <code>requirements.txt</code> file includes all dependencies.</li>
                <li>Set up a <strong>Procfile</strong> (if using Heroku):</li>
                <pre><code>web: python app.py</code></pre>
                <li>Push the repository to GitHub and connect it with your deployment platform.</li>
            </ol>
        </div>

        <div class="section">
            <h2>File Structure</h2>
            <pre><code>Student-Performance-Predictor/
│── static/
│   ├── style.css  # Stylesheet
│   ├── script.js  # JavaScript logic
│── templates/
│   ├── index.html  # Main UI
│── model.pkl  # Machine Learning Model
│── app.py  # Flask Application
│── requirements.txt  # Dependencies
│── README.md  # Documentation</code></pre>
        </div>

        <div class="section">
            <h2>License</h2>
            <p>This project is open-source under the MIT License.</p>
        </div>

        <div class="section">
            <h2>Author</h2>
            <p><strong>Your Name</strong> - <a href="https://github.com/your-username">GitHub Profile</a></p>
        </div>
    </div>

</body>
</html>
