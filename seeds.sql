INSERT INTO department (name) VALUES ('Sales');
INSERT INTO department (name) VALUES ('Finance');
INSERT INTO department (name) VALUES ('Engineering');

INSERT INTO role (title, salary, department_id) VALUES ('Sales Manager', 50000, 1);
INSERT INTO role (title, salary, department_id) VALUES ('Sales Rep.', 48000, 1);
INSERT INTO role (title, salary, department_id) VALUES ('Finance Manager', 65000, 2);
INSERT INTO role (title, salary, department_id) VALUES ('Finance Spec.', 55000, 2);
INSERT INTO role (title, salary, department_id) VALUES ('Software Engineer', 90000, 3);
INSERT INTO role (title, salary, department_id) VALUES ('WEB Dev', 80000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('CJ', 'Stroud', 1, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Eric', 'Welch', 1, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Bilal', 'Khan', 3, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Tiffany', 'Burks', 4, 3);
