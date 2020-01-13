-- Create a new database called 'Inventory'
-- Create the new database if it does not exist already
DROP DATABASE ColumnsGalore;
CREATE DATABASE ColumnsGalore;
USE ColumnsGalore;

CREATE TABLE ProductInformation
(
	ProductInformationId INT NOT NULL PRIMARY KEY,
  Title Text,
  DescriptionHTML TEXT,
  Notes TEXT

);

CREATE TABLE Inventory
(
	InventoryId INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  Qty INT NOT NULL DEFAULT 0

);

-- Create the table in the specified schema
CREATE TABLE Catalog
(
  CatalogId INT AUTO_INCREMENT NOT NULL PRIMARY KEY, 
  InventoryId INT, 
	ProductInformationId INT,
  Manufacturer VARCHAR(50) NOT NULL,
  Model VARCHAR(50) NOT NULL,
  Year VARCHAR(50) NOT NULL,
  Shift ENUM("Floor", "Column") NOT NULL,
  Transmission ENUM("Manual", "Automatic") NOT NULL,
  Tilt ENUM("Tilt", "Fixed") NOT NULL,
  AdditionalOptions VARCHAR(100),
  Image VARCHAR(50),
  Price INT,
  CoreCharge INT,

  
  FOREIGN KEY (InventoryId) REFERENCES Inventory(InventoryId),
  FOREIGN KEY (ProductInformationId) REFERENCES ProductInformation(ProductInformationId)
);

Insert into Inventory () Values ();
Insert into ProductInformation (`ProductInformationId`, `Title`, `DescriptionHTML`) Values (1, 'Column type:	1980 - 1991 Ford Trucks (F series) and Vans (E Series) with non tilt.', '
<h3>What gets done when we rebuild.</h3>	
<p>Complete disassembly, sand blast to remove rust &amp; paint, clean and degrease, inspect components, repack bearings, grease moving parts, replace broken &amp; worn parts, twelve point test, paint black.</p>					
<h3>Comes complete with:</h3>						
<p>New signal switch and ignition lock with 2 keys.</p>				
<h3>This column does not come with:</h3><p>(The Customer can remove these items from their broken column and install them on our rebuilt column.) Steering wheel, signal and shift levers (on column shift models), these parts may be available if needed.</p>	
');

Insert into Catalog (`ProductInformationId`, `Manufacturer`, `Model`, `Year`, `Shift`, `Transmission`, `Tilt`, `Price`, `CoreCharge`) Values 
(1, "CHRYSLER", "300M", "99-00", "Floor", "Manual", "Tilt", 325, 150),
(1, "Chrysler", "300M", "01-02", "Floor", "Manual", "Tilt", 325, 150),
(1, "American Motors", "Ambassador", "70", "Floor", "Manual", "Tilt", 325, 150),
(1, "American Motors", "Ambassador", "70", "Floor", "Manual", "Fixed", 325, 150),
(1, "American Motors", "Ambassador", "70", "Floor", "Automatic", "Tilt", 325, 150),
(1, "American Motors", "Ambassador", "70", "Floor", "Automatic", "Fixed", 325, 150);


