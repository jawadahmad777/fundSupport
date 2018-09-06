DROP TABLE if exists source;

CREATE TABLE source (
    id SERIAL primary key,
   source  VARCHAR(255),
    source_id integer references users(id),
    create_at timestamp default CURRENT_TIMESTAMP
);


INSERT into source (source, source_id ) VALUES ('internet',41);
INSERT into source (source, source_id )VALUES ('friends',41);
INSERT into source (source, source_id )VALUES ('facebook',41);
INSERT into source (source, source_id )VALUES ('linkdin',41);
