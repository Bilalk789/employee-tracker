INSERT INTO department (name) VALUES ('Sales');
INSERT INTO department (name) VALUES ('Finance');
INSERT INTO department (name) VALUES ('Engineering');

INSERT INTO role (title, salary, department_id) VALUES ('Sales Manager', 60000, 1);
INSERT INTO role (title, salary, department_id) VALUES ('Sales Representative', 40000, 1);
INSERT INTO role (title, salary, department_id) VALUES ('Finance Manager', 60000, 2);
INSERT INTO role (title, salary, department_id) VALUES ('Finance Specialist', 45000, 2);
INSERT INTO role (title, salary, department_id) VALUES ('Software Engineer', 80000, 3);
INSERT INTO role (title, salary, department_id) VALUES ('UI/UX Designer', 70000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('John', 'Doe', 1, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Jane', 'Smith', 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Michael', 'Johnson', 3, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Emily', 'Williams', 4, 3);
