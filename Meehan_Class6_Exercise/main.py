# Liss Meehan

import sqlite3
import csv

db = sqlite3.connect("zagster.sqlite3.db")

with open("sample.csv","r") as sample_csv:
    lines = csv.reader(sample_csv, delimiter=',')
        for row in lines:
            user_id = row [0]
                if user_id == "":
                    user_id = None
            rental_id = row [1]
                if rental_id == "":
                    rental_id = None
            start_lat = row [2]
                if start_lat == "":
                    start_lat = None
            end_lat = row [3]
                if end_lat == "":
                    end_lat = None
            start_lng = row [4]
                if start_lon == "":
                    start_lon = None
            end_lng = row [5]
                if end_lon == "":
                    end_lon = None
            start_time = row [6]
                if start_time == ""
                    start_time = None
                else:
                    start_time_pieces = start_time.split("T")
                    start_time = f"{start_time_pieces[0]}{start_time_pieces[1]}:00"
            end_time = row [7]
            membership_name = row [8]
            sql_insert = f"""
            INSERT INTO rides (user_id, rental_id, start_lat, end_lat, start_lon, end_lon, start_time, end_time, membership_name)
            VALUES (?,?,?,?,?,?,?,?);
            """
            db.execute(sql_insert[user_id, rental_id, start_lat, end_lat, start_lon, end_lon, start_time, end_time, membership_name])
            db.commit()
db.close()
