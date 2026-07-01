import pandas as pd
from sklearn.linear_model import LinearRegression
import joblib

# Load data
data = pd.read_csv("data.csv")

# Features (day) and target (fuel sold)
X = data[["day"]]
y = data["fuel_sold"]

# Train model
model = LinearRegression()
model.fit(X, y)

# Save model
joblib.dump(model, "fuel_model.pkl")

print("Model trained successfully 🚀")