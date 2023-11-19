create extension if not exists "uuid-ossp";
CREATE TYPE cart_status AS ENUM ('OPEN', 'ORDERED');

create table if not exists users (
     id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
     name text NOT NULL,
     email text NOT NULL,
     password text NOT NULL
);

create table if not exists carts (
    id uuid NOT NULL PRIMARY KEY default uuid_generate_v4(),
    user_id uuid NOT NULL REFERENCES users(id),
    created_at date NOT NULL default current_date,
    updated_at date NOT NULL default current_date,
    status cart_status NOT NULL default 'OPEN'
);

create table if not exists cart_items (
   cart_id uuid NOT NULL REFERENCES carts(id),
   product_id uuid NOT NULL,
   count integer NOT NULL,
   foreign key ("cart_id") references "carts" ("id")
   on update cascade
   on delete cascade
);

create table if not exists orders (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id uuid NOT NULL REFERENCES users(id),
    cart_id uuid NOT NULL REFERENCES carts(id),
    payment json NOT NULL,
    delivery json NOT NULL,
    comments text,
    status cart_status NOT NULL,
    total integer NOT NULL
);

INSERT INTO users (name, email, password) VALUES ('John Doe', 'john.doe@example.com', 'password123');
INSERT INTO users (name, email, password) VALUES ('Jane Smith', 'jane.smith@example.com', 'password456');
INSERT INTO users (name, email, password) VALUES ('Peter Toth', 'peter.tothh@example.com', 'password789');


INSERT INTO carts (user_id) VALUES ('784f7153-d829-4e54-bd90-6dd533ff2d24');
INSERT INTO carts (user_id) VALUES ('ba5d17f2-1c28-4beb-a5e4-501bb6534c54');

INSERT INTO cart_items (cart_id, product_id, count) VALUES ('8ead7c87-bcc7-4514-a6cd-ab844e910f31', '1b371610-8a82-402d-bfa8-8c7078a1943f', 2);
INSERT INTO cart_items (cart_id, product_id, count) VALUES ('8ead7c87-bcc7-4514-a6cd-ab844e910f31', '374f84a6-e189-4758-a546-9eabcb431bec', 1);

INSERT INTO cart_items (cart_id, product_id, count) VALUES ('08a632b4-806a-4e63-a074-3d60bb997517', 'ccd29e53-0825-43db-9247-780669280f59', 5);
INSERT INTO cart_items (cart_id, product_id, count) VALUES ('08a632b4-806a-4e63-a074-3d60bb997517', '1c2ad1fd-5bfa-4671-8f83-3cd8d5da18dd', 6);

INSERT INTO orders (user_id, cart_id, payment, delivery, comments, status, total) VALUES ('784f7153-d829-4e54-bd90-6dd533ff2d24', '8ead7c87-bcc7-4514-a6cd-ab844e910f31', '{"payment_method": "credit_card", "payment_status": "paid"}', '{"delivery_method": "standard", "delivery_status": "shipped"}', 'Please deliver between 9am and 5pm', 'ORDERED', 100); -- Replace <user_id1> and <cart_id1> with actual ids
INSERT INTO orders (user_id, cart_id, payment, delivery, comments, status, total) VALUES ('ba5d17f2-1c28-4beb-a5e4-501bb6534c54', '08a632b4-806a-4e63-a074-3d60bb997517', '{"payment_method": "paypal", "payment_status": "paid"}', '{"delivery_method": "express", "delivery_status": "shipped"}', 'Leave the package at the front door', 'ORDERED', 150); -- Replace <user_id2> and <cart_id3> with actual ids

select * from carts;
select * from cart_items;
select * from orders;
select * from users;