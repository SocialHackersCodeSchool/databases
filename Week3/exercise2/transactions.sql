start
TRANSACTION;

UPDATE departments 
SET manager = 2
WHERE dept_no = 3;

UPDATE employees 
SET reports_to = 
WHERE dpt_no = 3;

COMMIT;

--START transaction
--update departments SET manager = 2 WHERE dept_no = 3;
--
--update employees SET reports_to = 2 WHERE department = 3;

-- commit;