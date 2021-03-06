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

def compress(data, selectors):
    # compress('ABCDEF', [1,0,1,0,1,1]) --> A C E F
    return tuple(d for d, s in zip(data, selectors) if s)

filename = askopenfilename(filetypes=[('csv', '*.csv'),])
with open(filename) as f:
    reader = csv.reader(f)
    query = mydb.cursor()
    rows_to_insert = []
    valid_columns = {
        'ProductInformationId', 
        'Manufacturer', 
        'Model', 
        'Year', 
        'Shift', 
        'Transmission', 
        'Tilt', 
        'AdditionalOptions', 
    }
    headers = reader.__next__()
    print("headers: ", headers)

    insert_columns = []
    mask = []
    for name in headers:
        is_valid = name in valid_columns
        mask.append(is_valid)
        if not is_valid or name in insert_columns: continue
        insert_columns.append(name)

    for row in reader:
        if not row[0] == 'Jeep':
            continue
        rows_to_insert.append(compress(row, mask))

print(insert_columns)
print(rows_to_insert[:2])

statement = '''
INSERT INTO `columnsg_database`.`catalog` 
    (%s)
VALUES 
    (%s);
''' % (
    ','.join(insert_columns),
    ','.join(['%s'] * len(insert_columns))
)

print(statement)

try:
    query.executemany(statement, rows_to_insert)
    input("continue?")
    mydb.commit()
except Exception as e:
    print("rollback: ", e)
    mydb.rollback()
query.close()


print("done")
