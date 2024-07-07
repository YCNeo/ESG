# /admin
### Create user
<details>
<summary><code>POST</code> <code><b>/</b></code> <code>create an account by EID and assign an access for this account </code></summary>

##### Header
| key | value | desciption |
|-----|-------|------------|
|-----|-------|------------|

##### Body
| key | required | datatype | desciption |
|-----|----------|----------|------------|
|EID|true|string|ID for the employee|
|access|true|string|Access for the user|

##### Responses
| http code | content-type | response |
|-----------|--------------|----------|
|200|application/json|{"message": "Create user successfully!", "UID": assign_UID, "password": initial_password}|
|400|application/json|{"message": "Bad request - Invalid EID or access."}|
|500|application/json|{"message": "Server error."}|

</details>

### Access Assignment
<details>
<summary><code>POST</code> <code><b>/{UID}</b></code> <code>re-assign access for the user </code></summary>

#### Header
| key | value | desciption |
|-----|-------|------------|
|-----|-------|------------|

#### Path Parameters
| key | required | datatype | desciption |
|-----|----------|----------|------------|
|UID|true|string|ID for the user|
|access|true|string|Access for the user|

#### Responses
| http code | content-type | response |
|-----------|--------------|----------|
|200|application/json|{"message": "Re-assign user's access successfully!"}|
|400|application/json|{"message": "Bad request - Invalid UID or access."}|
|500|application/json|{"message": "Server error."}|

</details>

### Create Project
<details>
<summary><code>POST</code> <code><b>/</b></code> <code>enter project manager's UID, material ID and equipment ID to create a project </code></summary>

#### Header
| key | value | desciption |
|-----|-------|------------|
|-----|-------|------------|

#### Body
| key | required | datatype | desciption |
|-----|----------|----------|------------|
|PName|true|string|Project name|
|UID|true|string|ID for the PM|
|MID|true|string|ID for the material|
|EQID|true|string|ID for the equipment|

#### Responses
| http code | content-type | response |
|-----------|--------------|----------|
|200|application/json|{"message": "Create project successfully!", "PID": "initial PID", "UID": "UID", "material": "list for material", "equipment": "list for equipment"}|
|400|application/json|{"message": "Bad request - Invalid UID or MID or EQID."}|
|500|application/json|{"message": "Server error."}|

</details>

### Approve
<details>
<summary><code>approve_revise</code> <code><b>/{PID}</b></code> <code>approve the revise send from PM to revise the equipment usage time </code></summary>

#### Header
| key | value | desciption |
|-----|-------|------------|
|-----|-------|------------|

#### Path Parameters
| key | required | datatype | desciption |
|-----|----------|----------|------------|
|PID|true|string|ID for the project|
|UID|true|string|ID for the PM|
|{"old EQID": "EQID", "old EQ_usageTime": "EQ_usageTime"}|true|json|Old content of the daily record|
|{"new EQID": "EQID", "new EQ_usageTime": "EQ_usageTime"}|true|json|New content of the daily record|
|timestamp|true|timestamp|System produce|

#### Responses
| http code | content-type | response |
|-----------|--------------|----------|
|200|application/json|{"message": "Approve the resive successfully!"}|
|500|application/json|{"message": "Server error."}|

</details>

<details>
<summary><code>reject_revise</code> <code><b>/{PID}</b></code> <code>reject the revise send from PM to revise the equipment usage time </code></summary>

#### Header
| key | value | desciption |
|-----|-------|------------|
|-----|-------|------------|

#### Path Parameters
| key | required | datatype | desciption |
|-----|----------|----------|------------|
|PID|true|string|ID for the project|
|UID|true|string|ID for the PM|
|{"old EQID": "EQID", "old EQ_usageTime": "EQ_usageTime"}|true|json|Old content of the daily record|
|{"new EQID": "EQID", "new EQ_usageTime": "EQ_usageTime"}|true|json|New content of the daily record|
|timestamp|true|timestamp|System produce|

#### Responses
| http code | content-type | response |
|-----------|--------------|----------|
|200|application/json|{"message": "Rejected the resive successfully!"}|
|500|application/json|{"message": "Server error."}|

</details>

### Employee
<details>
<summary><code>POST</code> <code><b>/</b></code> <code>create an employee </code></summary>

#### Header
| key | value | desciption |
|-----|-------|------------|
|-----|-------|------------|

#### Path Parameters
| key | required | datatype | desciption |
|-----|----------|----------|------------|
|name|true|string|Name for the employee|
|gender|true|int|Gender for the employee. 1 for male, 2 for female.|
|phone|true|string|Phone for the employee|
|mail|true|string|Mail for the employee|
|nation|true|string|Nationality for the employee|
|PID|false|string|ID for the project that the employee works on|

#### Responses
| http code | content-type | response |
|-----------|--------------|----------|
|200|application/json|{"message": "Create an employee successfully!", "EID": initial EID}|
|400|application/json|{"message": "Bad request - Invalid gender or PID."}|
|500|application/json|{"message": "Server error."}|

</details>

<details>
<summary><code>REVISE</code> <code><b>/{EID}</b></code> <code>revise an employee's data </code></summary>

#### Header
| key | value | desciption |
|-----|-------|------------|
|-----|-------|------------|

#### Path Parameters
| key | required | datatype | desciption |
|-----|----------|----------|------------|
|EID|true|string|ID for the employee|

#### Body
| key | required | datatype | desciption |
|-----|----------|----------|------------|
|name|true|string|Name for the employee|
|gender|true|int|Gender for the employee. 1 for male, 2 for female.|
|phone|true|string|Phone for the employee|
|mail|true|string|Mail for the employee|
|nation|true|string|Nationality for the employee|
|PID|false|string|ID for the project that the employee works on|

#### Responses
| http code | content-type | response |
|-----------|--------------|----------|
|200|application/json|{"message": "Revise an employee successfully!"}|
|400|application/json|{"message": "Bad request - Invalid EID or gender or PID."}|
|500|application/json|{"message": "Server error."}|

</details>

<details>
<summary><code>DELETE</code> <code><b>/{EID}</b></code> <code>delete an employee by EID and name </code></summary>

<br />marked as delete

#### Header
| key | value | desciption |
|-----|-------|------------|
|-----|-------|------------|

#### Path Parameters
| key | required | datatype | desciption |
|-----|----------|----------|------------|
|EID|true|string|ID for the employee|
|name|true|string|Name for the employee|

#### Responses
| http code | content-type | response |
|-----------|--------------|----------|
|200|application/json|{"message": "Delete an employee successfully!"}|
|400|application/json|{"message": "Bad request - Invalid EID or name."}|
|500|application/json|{"message": "Server error."}|

</details>

<details>
<summary><code>RETRIEVE</code> <code><b>/{EID}</b></code> <code>retrieve employees by EID or name or nation or PID </code></summary>

#### Header
| key | value | desciption |
|-----|-------|------------|
|-----|-------|------------|

#### Path Parameters
| key | required | datatype | desciption |
|-----|----------|----------|------------|
|EID|false|string|ID for the employee|
|name|false|string|Name for the employee|
|nation|false|string|Nationality for the employee|
|PID|false|string|ID for the project that the employee works on|

#### Responses
| http code | content-type | response |
|-----------|--------------|----------|
|200|application/json|{"message": "Retrieve employees successfully!", "employees": "list for employees' data"}|
|400|application/json|{"message": "Bad request - Invalid EID or name or nation or PID."}|
|500|application/json|{"message": "Server error."}|

</details>

### History Logs
<details>
<summary><code>LOG</code> <code><b>/</b></code> <code>retrieve system logs </code></summary>

#### Header
| key | value | desciption |
|-----|-------|------------|
|-----|-------|------------|

#### Path Parameters
| key | required | datatype | desciption |
|-----|----------|----------|------------|
|-----|----------|----------|------------|

#### Responses
| http code | content-type | response |
|-----------|--------------|----------|
|200|application/json|{"message": "Retrieve system logs successfully!", "logs": "list of logs"}|
|500|application/json|{"message": "Server error."}|

</details>