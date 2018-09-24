DROP TABLE if exists project;

CREATE TABLE project (
    id SERIAL primary key,
    project_name VARCHAR(255) NOT NULL,
    region VARCHAR(255) NOT NULL,
    focus_project VARCHAR(255) NOT NULL,
    target_group VARCHAR(255) NOT NULL,
    duration VARCHAR(255) NOT NULL,
    budget Numeric(255)  NOT NULL,
    project_cost  VARCHAR(255)  NOT NULL,
    overhead_cost VARCHAR(255)  NOT NULL,
    comment VARCHAR(255),
    create_at timestamp default CURRENT_TIMESTAMP
);
