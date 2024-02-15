/* 
Students: Colby McGrath, Mohamed Al-Hussein, and Owen Summersett
Course: CS340 - Group 193
Assignment: DML SQL for Project Step 3
Code Citations: The code sections within this file uses code from https://canvas.oregonstate.edu/courses/1946034/pages/exploration-database-application-design?module_item_id=23809325 as the skeleton code.
Code has been changed to reflect the realities of the entities within our project. 
*/

/*
Campaigns
*/

-- Retrieve all Campaigns entries
SELECT * 
FROM Campaigns; 

-- Add a new campaign
INSERT INTO Campaigns (title, start_date, end_date, dungeon_master) 
VALUES (:titleInput, :start_date_Input, :end_date_Input, :dungeon_master_Input)

-- Delete a campaign
DELETE 
FROM Campaigns
WHERE campaign_id = :campaign_id_from_table;

-- Update a campaign
UPDATE Campaigns SET title = :titleInput, start_date = :start_date_Input, 
					 end_date = :end_date_Input, dungeon_master = :dungeon_master_Input
                     
/*
Locations
*/

-- Retrieve all Locations entries
SELECT * 
FROM Locations;

-- Add a new location
INSERT INTO Locations (campaign_id, location_name, location_description)
VALUE (:campaign_id_from_campaigns_dropdown, :location_name_Input, :location_description_Input)

-- Delete location
DELETE
FROM Locations
WHERE location_id = :location_id_from_table

-- Update a location
UPDATE Locations SET campaign_id = :campaign_id_from_campaigns_Dropdown, location_name = :location_name_Input,
					 location_description = :location_description_Input

/*
Monsters
*/ 

-- Retrieve all monsters entries
SELECT *
FROM Monsters;

-- Add a new monster
INSERT INTO Monsters (monster_name, armor_class, hit_points, monster_type)
VALUE (:monster_name_Input, :armor_class_Input, :hit_point_Input, :monster_type_input)

-- Delete monster
DELETE 
FROM Monsters
WHERE monster_id = :monster_id_from_table

-- Update a monster
UPDATE Monsters SET monster_name = :monster_name_Input, armor_class = :armor_class_Input, 
					monster_type = :monster_type_Input

/*
Actions
*/

-- Retrieve all actions
SELECT *
FROM Actions;

-- Add a new action
INSERT INTO Actions (action_name, monster_name, description)
VALUE (:action_name_Input, :monster_ID_as_name_Dropdown, :description_Input)

-- Delete action
DELETE 
FROM Actions
WHERE action_id = :action_id_from_table

-- Update action
UPDATE Actions SET action_name = :action_name_Input, monster_name = :monster_ID_as_name_Dropdown,
					 description = :description_Input
                     
/*
Items
*/

-- Retrive all items
SELECT *
FROM Items;

-- Add a new item
INSERT INTO Items (item_name, value, weight)
VALUE (:item_name_Input, :value_Input, :weight_Input)

-- Delete item
DELETE
FROM Items
WHERE item_id = :item_id_from_table

-- Update item
UPDATE Items SET item_name = :item_name_Input, value = :value_Input, weight = :weight_Input


/* 
Locations_Items
*/
-- return all entries from table
SELECT *
FROM Locations_Items;

-- add a new entry to the table from the Locations page in the form of a multi-select drop down of items
INSERT INTO Locations_Items (lid, iid)
VALUES (:location_id_Input, :item_id_Input)

-- delete a record
DELETE FROM Locations_Items
WHERE lid = :location_id_input AND iid = :item_id_input

/* 
Monster_Items
*/
-- return all entries from table
SELECT *
FROM Locations_Items;

-- add a new entry to the table from the Locations page in the form of a multi-select drop down of items
INSERT INTO Locations_Items (lid, iid)
VALUES (:location_id_Input, :item_id_Input)

-- delete a record
DELETE FROM Locations_Items
WHERE lid = :location_id_input AND iid = :item_id_input
