-- CREATE DATABASE flight_booking;
-- USE flight_booking;

-- -- Table for flights
-- CREATE TABLE flights (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     flight_number VARCHAR(10) NOT NULL,
--     origin VARCHAR(100) NOT NULL,
--     destination VARCHAR(100) NOT NULL,
--     departure_time DATETIME NOT NULL,
--     arrival_time DATETIME NOT NULL
-- );

-- -- Table for seats
-- CREATE TABLE seats (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     flight_id INT NOT NULL,
--     seat_number VARCHAR(10) NOT NULL,
--     availability BOOLEAN NOT NULL,
--     FOREIGN KEY (flight_id) REFERENCES flights(id)
-- );

-- -- Table for bookings (optional)
-- CREATE TABLE bookings (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     seat_id INT NOT NULL,
--     passenger_name VARCHAR(100) NOT NULL,
--     booking_time DATETIME NOT NULL,
--     FOREIGN KEY (seat_id) REFERENCES seats(id)
-- );

-- -- Insert example flights
-- INSERT INTO flights (flight_number, origin, destination, departure_time, arrival_time) VALUES
-- ('FL123', 'New York', 'Los Angeles', '2023-10-01 08:00:00', '2023-10-01 11:00:00');

-- -- Insert example seats for the flight
-- INSERT INTO seats (flight_id, seat_number, availability) VALUES
-- (1, '1A', true),
-- (1, '1B', true),
-- (1, '1C', false),
-- (1, '2A', true),
-- (1, '2B', true);