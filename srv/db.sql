-- Create a new database called 'Inventory'
-- Create the new database if it does not exist already
DROP DATABASE ColumnsGalore;
CREATE DATABASE ColumnsGalore;
USE ColumnsGalore;


CREATE TABLE Inventory
(
	InventoryId INT AUTO_INCREMENT NOT NULL PRIMARY KEY -- primary key column
);

-- Create the table in the specified schema
CREATE TABLE Catalog
(
  CatalogId INT AUTO_INCREMENT NOT NULL PRIMARY KEY, -- primary key column
  InventoryId INT, 
  Manufacturer VARCHAR(50) NOT NULL,
  Model VARCHAR(50) NOT NULL,
  Year VARCHAR(50) NOT NULL,
  Shift ENUM("Floor", "Column") NOT NULL,
  Transmission ENUM("Manual", "Automatic") NOT NULL,
  Tilt ENUM("Tilt", "Fixed") NOT NULL,
  AdditionalOptions VARCHAR(100),
  
  FOREIGN KEY (InventoryId) REFERENCES Inventory(InventoryId)
);

Insert into Catalog (`Manufacturer`, `Model`, `Year`, `Shift`, `Transmission`, `Tilt`) Values ("CHRYSLER", "300M", "99-00", "Floor", "Manual", "Tilt"),
("Chrysler", "300M", "01-02", "Floor", "Manual", "Tilt"),
("American Motors", "Ambassador", "70", "Floor", "Manual", "Tilt"),
("American Motors", "Ambassador", "70", "Floor", "Manual", "Fixed"),
("American Motors", "Ambassador", "70", "Floor", "Automatic", "Tilt"),
("American Motors", "Ambassador", "70", "Floor", "Automatic", "Fixed");


