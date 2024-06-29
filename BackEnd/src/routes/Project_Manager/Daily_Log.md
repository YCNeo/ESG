# /Project_Management/Daily_Record

<details>
<summary><code>POST</code> <code><b>/</b></code> <code>(Create a daily record)</code></summary>

<br />

##### Headers
| key | values | description |
| --- | ------ | ----------- |
| --- | ------ | ----------- |
##### Body
| key                | required | data type | description                              |
| ------------------ | -------- | --------- | ---------------------------------------- |
| Date               | true     | date      | the date of the daily record             |
| Equipment          | true     | string    | the equipment used (Name? ID?)           | 
| Material           | true     | string    | the material used                        |
| EQMamount          | true     | int       | the amount of equipment used that day    |
| EQMUnit            | true     | number    | the unit of the equipment                |
| MATamount          | true     | int       | the amount of material used that day     |
| MATUnit            | true     | number    | the unit of the equipment                |
| Runtime            | true     | int       | the runtime that day, unit: hr           |
##### Responses
| http code    | content-type         | description                        |
| ------------ | -------------------- | ---------------------------------- |
| `200`        | `application/json`   | the detail of the daily record     |
| `400`        | `text/plain`         | `{ message: "client error"}`       |
| `500`        | `text/plain`         | `{ message: "server error"}`       |
</details>

<details>
<summary><code>REVISE</code> <code><b>/{}</b></code> <code>(Revise a daily record)</code></summary>

<br />

##### Headers
| key | values | description |
| --- | ------ | ----------- |
| --- | ------ | ----------- |
##### Path Parameters
| key  | required | data type | description           |
| ---- | -------- | --------- | --------------------- |
| ---- | -------- | --------- | --------------------- |
##### Body
| key                | required | data type | description                              |
| ------------------ | -------- | --------- | ---------------------------------------- |
| Date               | true     | date      | the date of the daily record             |
| Equipment          | true     | string    | the equipment used (Name? ID?)           | 
| Material           | true     | string    | the material used                        |
| EQMamount          | true     | int       | the amount of equipment used that day    |
| EQMUnit            | true     | number    | the unit of the equipment                |
| MATamount          | true     | int       | the amount of material used that day     |
| MATUnit            | true     | number    | the unit of the equipment                |
| Runtime            | true     | int       | the runtime that day, unit: hr           |
##### Responses
| http code    | content-type       | description                                 |
| ------------ | ------------------ | ------------------------------------------- |
| `200`        | `application/json` | the detail of revised daily record          |
| `400`        | `text/plain`       | `{ message: "client error"}`                |
| `500`        | `text/plain`       | `{ message: "server error"}`                |

</details>

<details>
<summary><code>RETRIEVE</code> <code><b>/{date}</b></code> <code>(Retrieve the detail of a daily record)</code></summary>

<br />

##### Headers
| key | values | description |
| --- | ------ | ----------- |
| --- | ------ | ----------- |
##### Path Parameters
| key  | required | data type | description                         |
| ---- | -------- | --------- | ----------------------------------- |
| Date | true     | string    | the date of the daily record wanted |
##### Responses
| http code    | content-type       | description                                 |
| ------------ | ------------------ | ------------------------------------------- |
| `200`        | `application/json` | the detail of the daily record              |
| `400`        | `text/plain`       | `{ message: "client error"}`                |
| `500`        | `text/plain`       | `{ message: "server error"}`                |

</details>