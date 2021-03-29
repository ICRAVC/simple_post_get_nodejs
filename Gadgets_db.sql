drop database if exists Gadgets;
create database if not exists Gadgets;
use Gadgets;

create table if not exists Products(
id int auto_increment not null,
_name varchar(50) not null,
price decimal(10,2) not null,
_description varchar(250),
_date date not null,
primary key(id)
);

insert into Products values(0, 'p1', 15.5, 'some things of p1', STR_TO_DATE( '29-03-2021', '%d-%m-%Y' ));
insert into Products values(0, 'p4', 15.5, 'some things of p4', STR_TO_DATE( '29-05-2021', '%d-%m-%Y' ));
insert into Products values(0, 'p5', 15.5, 'some things of p5', STR_TO_DATE( '29-06-2021', '%d-%m-%Y' ));
insert into Products values(0, 'p6', 15.5, 'some things of p6', STR_TO_DATE( '29-04-2021', '%d-%m-%Y' ));
insert into Products values(0, 'p7', 15.5, 'some things of p7', STR_TO_DATE( '30-03-2021', '%d-%m-%Y' ));
insert into Products values(0, 'p2', 15.5, 'some things of p2', STR_TO_DATE( '29-03-2011', '%d-%m-%Y' ));
insert into Products values(0, 'p8', 15.5, 'some things of p8', STR_TO_DATE( '29-04-2012', '%d-%m-%Y' ));
insert into Products values(0, 'p9', 15.5, 'some things of p9', STR_TO_DATE( '29-06-2013', '%d-%m-%Y' ));
insert into Products values(0, 'p10', 15.5, 'some things of p10', STR_TO_DATE( '29-05-2011', '%d-%m-%Y' ));
insert into Products values(0, 'p11', 15.5, 'some things of p11', STR_TO_DATE( '30-03-2011', '%d-%m-%Y' ));
insert into Products values(0, 'p12', 15.5, 'some things of p12', STR_TO_DATE( '29-03-2020', '%d-%m-%Y' ));
insert into Products values(0, 'p13', 15.5, 'some things of p13', STR_TO_DATE( '29-03-2021', '%d-%m-%Y' ));
insert into Products values(0, 'p14', 15.5, 'some things of p14', STR_TO_DATE( '29-03-2022', '%d-%m-%Y' ));
insert into Products values(0, 'p15', 15.5, 'some things of p15', STR_TO_DATE( '29-03-2023', '%d-%m-%Y' ));
insert into Products values(0, 'p16', 15.5, 'some things of p16', STR_TO_DATE( '30-03-2020', '%d-%m-%Y' ));
