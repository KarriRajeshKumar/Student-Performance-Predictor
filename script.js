document.getElementById('predictForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    let hoursStudied = parseFloat(document.getElementById('feature1').value);
    let previousScores = parseFloat(document.getElementById('feature2').value);
    let ExtraCurrAct = parseFloat(document.getElementById('feature3').value);
    let sleepingHours = parseFloat(document.getElementById('feature4').value); 
    let samplePapersPracticed = parseFloat(document.getElementById('feature5').value); 

    let features = [hoursStudied, previousScores, ExtraCurrAct, sleepingHours, samplePapersPracticed];

    const errorMessage = document.getElementById('errorMessage');
    const predictionResult = document.getElementById('predictionResult');
    
    errorMessage.textContent = ''; 
    predictionResult.textContent = ''; 

    if (hoursStudied + sleepingHours > 24) {
        errorMessage.textContent = 'Error: Hours Studied and Sleeping Hours cannot exceed 24 combined!';
        predictionResult.textContent = ''; 
        return; 
    }

    if (previousScores > 100) {
        errorMessage.textContent = 'Error: Previous Scores cannot exceed 100!';
        predictionResult.textContent = ''; 
        return; 
    }

    const response = await fetch('/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ features: features }),
    })
    .then(response => response.json())
    .then(result => {
        
        predictionResult.textContent = result.prediction;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
