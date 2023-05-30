CREATE DATABASE cat_requests;
USE cat_requests;

CREATE TABLE requests (
  id INT AUTO_INCREMENT PRIMARY KEY,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  image_url VARCHAR(255)
);
