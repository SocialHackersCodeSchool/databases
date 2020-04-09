begin TRANSACTION;

UPDATE departments 
SET manager = 2
WHERE dept_no = 3;

UPDATE employees 
SET reports_to = 2
WHERE dpt_no = 3;

COMMIT;