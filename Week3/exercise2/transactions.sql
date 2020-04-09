begin TRANSACTION;

UPDATE departments 
SET manager = $
{emp_no}
WHERE dept_no = ${dept_no};

UPDATE employees 
SET reports_to = $
{emp_no}
WHERE employees.dpt_no = ${dept_no};

COMMIT;