DROP TABLE if exists source;

CREATE TABLE source (
    id SERIAL primary key,
   source  VARCHAR(255),
    create_at timestamp default CURRENT_TIMESTAMP
);


INSERT into source (source)VALUES ('internet');
INSERT into source (source)VALUES ('friends');
INSERT into source (source)VALUES ('facebook');
INSERT into source (source)VALUES ('linkdin');
