from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Mock data for rooms and bookings
rooms = [
    {"id": 1, "name": "Cozy Single", "price": 50, "capacity": 1},
    {"id": 2, "name": "Double Delight", "price": 80, "capacity": 2},
    {"id": 3, "name": "Family Suite", "price": 120, "capacity": 4},
    {"id": 4, "name": "Luxury Penthouse", "price": 200, "capacity": 2},
    {"id": 5, "name": "Garden View", "price": 90, "capacity": 2},
    {"id": 6, "name": "Ocean Breeze", "price": 150, "capacity": 3},
]

bookings = [
    {"id": 1, "room_id": 1, "guest_name": "John Doe", "check_in": "2024-03-15", "check_out": "2024-03-18"},
    {"id": 2, "room_id": 2, "guest_name": "Jane Smith", "check_in": "2024-03-20", "check_out": "2024-03-25"},
]

@app.route('/api/rooms', methods=['GET'])
def get_rooms():
    print("Fetching rooms...")  # Debug log
    return jsonify(rooms)

@app.route('/api/bookings', methods=['GET'])
def get_bookings():
    print("Fetching bookings...")  # Debug log
    return jsonify(bookings)

@app.route('/api/bookings', methods=['POST'])
def create_booking():
    booking = request.json
    booking['id'] = len(bookings) + 1
    bookings.append(booking)
    print(f"Created new booking: {booking}")  # Debug log
    return jsonify(booking), 201

@app.route('/debug', methods=['GET'])
def debug():
    return "Backend is running!", 200

if __name__ == '__main__':
    print("Starting Flask server...")  # Debug log
    app.run(debug=True)