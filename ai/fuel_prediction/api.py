from flask import Flask, request, jsonify
import joblib
import numpy as np

app = Flask(__name__)

# Load trained model
model = joblib.load("fuel_model.pkl")

# Predict fuel demand
@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    day = data["day"]

    prediction = model.predict(np.array([[day]]))

    return jsonify({
        "day": day,
        "predicted_fuel_demand": float(prediction[0])
    })

if __name__ == "__main__":
    app.run(port=8000, debug=True)