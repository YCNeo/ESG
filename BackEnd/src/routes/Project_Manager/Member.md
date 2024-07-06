# I don't know what this part do
# /Project_Management/member

<details>
<summary><code>POST</code> <code><b>/</b></code> <code>(Create an member)</code></summary>

<br />

##### Headers
| key | values | description |
| --- | ------ | ----------- |
| --- | ------ | ----------- |
##### Body
| key      | required | data type | description                              |
| -------- | -------- | --------- | ---------------------------------------- |
| EID      | true     | string    |                                          |
| Position | true     | string    |                                          |
##### Responses
| http code    | content-type         | description                        |
| ------------ | -------------------- | ---------------------------------- |
| `200`        | `application/json`   | the detail of the posted member    |
| `400`        | `text/plain`         | `{ message: "client error"}`       |
| `500`        | `text/plain`         | `{ message: "server error"}`       |
</details>

<details>
<summary><code>REVISE</code> <code><b>/{EID}</b></code> <code>(Revise an member)</code></summary>

<br />

##### Headers
| key | values | description |
| --- | ------ | ----------- |
| --- | ------ | ----------- |
##### Path Parameters
| key      | required | data type | description                              |
| -------- | -------- | --------- | ---------------------------------------- |
| EID      | true     | string    |                                          |
##### Body
| key      | required | data type | description                              |
| -------- | -------- | --------- | ---------------------------------------- |
| EID      | true     | string    |                                          |
| Position | true     | string    |                                          |
##### Responses
| http code    | content-type | description                           |
| ------------ | -------------| ------------------------------------- |
| `200`        | `text/plain` | `{ message: "success"}`               |
| `400`        | `text/plain` | `{ message: "client error"}`          |
| `500`        | `text/plain` | `{ message: "server error"}`          |

</details>

<details>
<summary><code>REMOVE</code> <code><b>/{EID}</b></code> <code>(Remove an member)</code></summary>

<br />

##### Headers
| key | values | description |
| --- | ------ | ----------- |
| --- | ------ | ----------- |
##### Path Parameters
| key      | required | data type | description                              |
| -------- | -------- | --------- | ---------------------------------------- |
| EID      | true     | string    |                                          |
##### Responses
| http code    | content-type | description                           |
| ------------ | -------------| ------------------------------------- |
| `200`        | `text/plain` | `{ message: "success"}`               |
| `400`        | `text/plain` | `{ message: "client error"}`          |
| `500`        | `text/plain` | `{ message: "server error"}`          |

</details>

<details>
<summary><code>RETRIEVE</code> <code><b>/{}</b></code> <code>(Retrieve the detail of an member)</code></summary>

<br />only for admin

##### Headers
| key | values | description |
| --- | ------ | ----------- |
| --- | ------ | ----------- |
##### Path Parameters
| key      | required | data type | description            |
| -------- | -------- | --------- | ---------------------- |
| EID      | true     | string    | EID of the member      |
| Name     | true     | string    | name of the member     |
| Position | true     | string    | position of the member |
##### Responses
| http code    | content-type       | description                                 |
| ------------ | ------------------ | ------------------------------------------- |
| `200`        | `application/json` | the detail of the retrieved member          |
| `400`,       | `text/plain`       | `{ message: "client error"}`                |
| `500`        | `text/plain`       | `{ message: "server error"}`                |

</details>