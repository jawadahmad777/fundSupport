DROP TABLE if exists orginization;

CREATE TABLE orginization (
    id SERIAL primary key,
    orginization_name VARCHAR(255) not null,
    address VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL,
    legal_entity VARCHAR(255) NOT NULL,
    contact_person VARCHAR(255) NOT NULL,
    orginization_email VARCHAR(255),
    phone Numeric(255),
    website  VARCHAR(255),
    fields_activites VARCHAR(255),
    -- year_foundation VARCHAR(255),
    -- number_employees Numeric(25) NOT NULL,
    -- number_valunteers Numeric(25) NOT NULL,
    -- mission_orginization VARCHAR(255) NOT NULL,
    -- yearly_revenue Numeric(255) NOT NULL,
    -- Current_funding_org VARCHAR(255) NOT NULL,
    -- Current_funding_name VARCHAR(255) NOT NULL,
    -- funding_start_end VARCHAR(255) NOT NULL,
    -- eu_pic_number VARCHAR(255) NOT NULL,
    -- comment  VARCHAR(255) NOT NULL,
    creaste_at timestamp default CURRENT_TIMESTAMP
);
