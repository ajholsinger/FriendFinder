DROP DATABASE IF EXISTS survey_db;

CREATE DATABASE survey_db;

USE survey_db;

CREATE TABLE surveyData(
	id int(10) not null auto_increment,
    user_name varchar(50) not null,
    user_answers varchar(50) not null,
    primary key(id)
);

SELECT * FROM surveyData;