import mysql.connector
import os
import csv
from tkinter.filedialog import askopenfilename

mydb = mysql.connector.connect(
  host=os.environ.get('HOST'),
  user=os.environ.get('USER'),
  password=os.environ.get('PASSWORD'),
  database=os.environ.get('DATABASE')
)

filename = askopenfilename(filetypes=[('csv', '*.csv'),])
with open(filename) as f:
    reader = csv.reader(f)
    query = mysql.cursor()
    rows_to_insert = []
    for row in reader:
        if row[0] == 'Jeep':
            rows_to_insert.append(row)
    query.executemany('''
    INSERT INTO `columnsg_database`.`catalog` (
        `ProductInformationId`, 
        `Manufacturer`, 
        `Model`, 
        `Year`, 
        `Shift`, 
        `Transmission`, 
        `Tilt`, 
        `AdditionalOptions`, 
        `Price`, 
        `CoreCharge`) 
    VALUES 
        (?,?,?,?,?,?,?,?,?,?);
    ''', rows_to_insert)

print(mydb)