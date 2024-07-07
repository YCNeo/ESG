# /Project_Management/Material

<details>
<summary><code>POST</code> <code><b>/</b></code> <code>(Create a material)</code></summary>

<br />

##### Headers
| key | values | description |
| --- | ------ | ----------- |
| --- | ------ | ----------- |
##### Body
| key                | required | data type | description                              |
| ------------------ | -------- | --------- | ---------------------------------------- |
| Name               | true     | string    | name of the material                     |
| Amount             | true     | int       | amount of the material                   |
| Unit               | true     | number    | the unit of the material                 |
##### Responses
| http code    | content-type         | description                        |
| ------------ | -------------------- | ---------------------------------- |
| `200`        | `application/json`   | the detail of the posted material  |
| `400`        | `text/plain`         | `{ message: "client error"}`       |
| `500`        | `text/plain`         | `{ message: "server error"}`       |
</details>

<details>
<summary><code>REVISE</code> <code><b>/{MID}</b></code> <code>(Revise a material)</code></summary>

<br />

##### Headers
| key | values | description |
| --- | ------ | ----------- |
| --- | ------ | ----------- |
##### Path Parameters
| key    | required | data type | description                |
| ------ | -------- | --------- | -------------------------- |
| MID    | true     | string    | id of the material         |
##### Body
| key    | required | data type | description                |
| ------ | -------- | --------- | -------------------------- |
| Amount | true     | int       | the amount of the material |
| Unit   | true     | number    | the unit of the material   |
##### Responses
| http code    | content-type | description                           |
| ------------ | -------------| ------------------------------------- |
| `200`        | `text/plain` | `{ message: "success"}`               |
| `400`        | `text/plain` | `{ message: "client error"}`          |
| `500`        | `text/plain` | `{ message: "server error"}`          |

</details>

<details>
<summary><code>RETRIEVE</code> <code><b>/{MID}</b></code> <code>(Retrieve the detail of an material)</code></summary>

<br />

##### Headers
| key | values | description |
| --- | ------ | ----------- |
| --- | ------ | ----------- |
##### Path Parameters
| key  | required | data type | description           |
| ---- | -------- | --------- | --------------------- |
| Name | true     | string    | name of the material  |
##### Responses
| http code    | content-type       | description                                 |
| ------------ | ------------------ | ------------------------------------------- |
| `200`        | `application/json` | the detail of the retrieved material        |
| `400`,       | `text/plain`       | `{ message: "client error"}`                |
| `500`        | `text/plain`       | `{ message: "server error"}`                |

</details>