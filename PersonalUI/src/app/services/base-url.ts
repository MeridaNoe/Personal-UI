export const APP_URL ="http://localhost:3000/"



/* create database utez;
use utez;

create table position (
id bigint primary key auto_increment,
    position varchar(50) not null,
    description varchar(50) null
);

create table personal(
id bigint primary key auto_increment,
    name varchar(50) not null,
    surname varchar(50) not null,
    lastname varchar(50) not null,
    salary double not null,
    birthday date not null,
    position_id bigint not null,
    constraint fk_personal_position foreign key (position_id) references position (id)
);

create table users
(
    id          bigint primary key auto_increment,
    email       varchar(50) not null unique,
    password    varchar(100) not null,
    role        varchar(10) not null,
    status      tinyint     not null,
    created_at  datetime    not null default now(),
    personal_id bigint      not null,
    constraint fk_personal_users foreign key (personal_id) references personal (id)
);*/