import firebase_admin
from firebase_admin import credentials
from firebase_admin import db

cred = credentials.Certificate("serviceAccountKey.json")
firebase_admin.initialize_app(
    cred,
    {
        "databaseURL": "",
        "storageBucket": "",
    },
)

ref = db.reference(
    "Students"
)  # reference path to our database... will create student directory in the database

data = {
    "22BSA10072": {  # id of student which is a key
        "id": "22BSA10072",
        "name": "NAMAN JAIN",
        "password": "nemojain",
        "major": "BSA",
        "total_attendance": 0,
        "last_attendance_time": "2024-04-20 12:00:00",
    },
}
for key, value in data.items():
    ref.child(key).set(value)



for key, value in data.items():
    ref.child(key).set(value)
