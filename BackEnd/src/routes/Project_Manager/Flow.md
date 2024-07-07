# I don't know what this part do
# /Project_Management/Flow

<details>
<summary><code>POST</code> <code><b>/</b></code> <code>(Post a flow of a project)</code></summary>

<br />

##### Headers
| key | values | description |
| --- | ------ | ----------- |
| --- | ------ | ----------- |
##### Body
| key                | required | data type | description                              |
| ------------------ | -------- | --------- | ---------------------------------------- |
| `{ST.{EQM...}.{MAT...}.{Description} -> ST.{EQM...}.{MAT}.{Description} ...}(string)` | true     | json | ---------------------------------------- |
##### Responses
| http code    | content-type         | description                        |
| ------------ | -------------------- | ---------------------------------- |
| `200`        | `text/plain`         | `{ message: "success"}`            |
| `400`        | `text/plain`         | `{ message: "client error"}`       |
| `500`        | `text/plain`         | `{ message: "server error"}`       |
</details>

<details>
<summary><code>REVISE</code> <code><b>/{PID}</b></code> <code>(Revise the flow of a project)</code></summary>

<br />

##### Headers
| key | values | description |
| --- | ------ | ----------- |
| --- | ------ | ----------- |
##### Path Parameters
| key | required | data type | description                        |
| --- | -------- | --------- | ---------------------------------- |
| PID | true     | string    | the pid which wanted to be revised |
##### Body
| key                | required | data type | description                              |
| ------------------ | -------- | --------- | ---------------------------------------- |
| `{ST.{EQM...}.{MAT...}.{Description} -> ST.{EQM...}.{MAT}.{Description} ...}(string)` | true     | json | ---------------------------------------- |
##### Responses
| http code    | content-type | description                           |
| ------------ | -------------| ------------------------------------- |
| `200`        | `text/plain` | `{ message: "success"}`               |
| `400`        | `text/plain` | `{ message: "client error"}`          |
| `500`        | `text/plain` | `{ message: "server error"}`          |

</details>