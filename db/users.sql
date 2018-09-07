DROP TABLE if exists users;

CREATE TABLE users (
    id SERIAL primary key,
    first_name VARCHAR(255) not null,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    hashed_password VARCHAR(255) NOT NULL,
    project VARCHAR(255),
    orginization VARCHAR(255),
    website VARCHAR(255),
    source  VARCHAR(255),
    create_at timestamp default CURRENT_TIMESTAMP
);
