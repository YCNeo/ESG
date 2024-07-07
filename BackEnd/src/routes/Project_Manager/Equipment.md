# /Project_Management/Equipment

<details>
<summary><code>POST</code> <code><b>/</b></code> <code>(Create an equipment)</code></summary>

<br />

##### Headers
| key | values | description |
| --- | ------ | ----------- |
| --- | ------ | ----------- |
##### Body
| key                | required | data type | description                              |
| ------------------ | -------- | --------- | ---------------------------------------- |
| Name               | true     | string    | name of the equipment                    |
| Amount             | true     | int       | amount of the equipment                  |
| Unit               | true     | number    | the unit of the equipment                |
##### Responses
| http code    | content-type         | description                        |
| ------------ | -------------------- | ---------------------------------- |
| `200`        | `application/json`   | the detail of the posted equipment |
| `400`        | `text/plain`         | `{ message: "client error"}`       |
| `500`        | `text/plain`         | `{ message: "server error"}`       |
</details>

<details>
<summary><code>DELETE</code> <code><b>/{EID}</b></code> <code>(Delete an eqiupment)</code></summary>

<br />

##### Headers
| key | values | description |
| --- | ------ | ----------- |
| --- | ------ | ----------- |
##### Path Parameters
| key | required | data type | description         |
| --- | -------- | --------- | ------------------- |
| EID | true     | string    | id of the equipment |
##### Responses
| http code    | content-type | description                           |
| ------------ | -------------| ------------------------------------- |
| `200`        | `text/plain` | `{ message: "success"}`               |
| `400`        | `text/plain` | `{ message: "client error"}`          |
| `500`        | `text/plain` | `{ message: "server error"}`          |

</details>

<details>
<summary><code>RETRIEVE</code> <code><b>/{EID}</b></code> <code>(Retrieve the detail of an equipment)</code></summary>

<br />

##### Headers
| key | values | description |
| --- | ------ | ----------- |
| --- | ------ | ----------- |
##### Path Parameters
| key  | required | data type | description           |
| ---- | -------- | --------- | --------------------- |
| Name | true     | string    | name of the equipment |
##### Responses
| http code    | content-type       | description                                 |
| ------------ | ------------------ | ------------------------------------------- |
| `200`        | `application/json` | the detail of the retrieved equipment       |
| `400`        | `text/plain`       | `{ message: "client error"}`                |
| `500`        | `text/plain`       | `{ message: "server error"}`                |

</details>