SET GLOBAL local_infile = on;
LOAD DATA local INFILE '/Users/laizhijing/Documents/CC/ESG/ESG/Backend/data/GWP_data.csv' INTO TABLE carbon.GWPS 
  FIELDS TERMINATED BY ',' 
  ENCLOSED BY '"'
  LINES TERMINATED BY '\n'
  IGNORE 1 LINES
  (@NUM, @NAME, @GWP )
  SET 
  GAS_ID = nullIF(@NUM,''),
  GAS_NAME = nullIF(@NAME,''),
  GWPS = nullIF(@GWP,'');