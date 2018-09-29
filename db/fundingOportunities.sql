DROP TABLE if exists project;

CREATE TABLE project (
    id SERIAL primary key,
    orginizations VARCHAR(255) NOT NULL,
    focus_areas VARCHAR(255) NOT NULL,
    legal_forms VARCHAR(255) NOT NULL,
    types VARCHAR(255) NOT NULL,
    reagions VARCHAR(255) NOT NULL,
    contacts VARCHAR(255)  NOT NULL,
    min_funding  VARCHAR(255)  NOT NULL,
    min_funding_description VARCHAR(255)  NOT NULL,
    mix_funding VARCHAR(255),
    mix_funding_description VARCHAR(1000),
    start_date VARCHAR(255) NOT NULL,
    end_date VARCHAR(255) NOT NULL,
    duration VARCHAR(255) NOT NULL,
    duration_type VARCHAR(255) NOT NULL,
    deadline VARCHAR(255)  NOT NULL,
    own_share  VARCHAR(255)  NOT NULL,
    details VARCHAR(255)  NOT NULL,
    create_at timestamp default CURRENT_TIMESTAMP
);
