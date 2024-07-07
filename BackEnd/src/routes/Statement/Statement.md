# /Statement


<details>
<summary><code>RETRIEVE</code> <code><b>/</b></code> <code>(Retrieve the statement during a certain period)</code></summary>

<br />

#### Header
| key | value | desciption |
|-----|-------|------------|
|-----|-------|------------|
##### Body (application/json or application/x-www-form-urlencoded)
| key       | required | data type | description                           |
| --------- | -------- | --------- | ------------------------------------- |
| PID       | trye     | string    | the PIDs of projects should be showed |
| startDate | true     | date      | the start date of the statement       |
| endDate   | true     | date      | the end date of the statement         |
##### Responses
| http code    | content-type       | description                                 |
| ------------ | ------------------ | ------------------------------------------- |
| `200`        | `application/json` | the statement                               |
| `400`        | `text/plain`       | `{ message: "client error"}`                |
| `500`        | `text/plain`       | `{ message: "server error"}`                |

</details>

<details>

<summary><code>EXPORT</code> <code><b>/</b></code> <code>(Export the statement)</code></summary>

<br />

#### Header
| key | value | desciption |
|-----|-------|------------|
|-----|-------|------------|
##### Path Parameters
| key       | required | data type | description                           |
| --------- | -------- | --------- | ------------------------------------- |
| --------- | -------- | --------- | ------------------------------------- |
##### Responses
| http code    | content-type                                   | description                                 |
| ------------ | ---------------------------------------------- | ------------------------------------------- |
| `200`        | `application/pdf` / `application/vnd.ms-excel` | the statement                               |
| `400`        | `text/plain`                                   | `{ message: "client error"}`                |
| `500`        | `text/plain`                                   | `{ message: "server error"}`                |
</details>