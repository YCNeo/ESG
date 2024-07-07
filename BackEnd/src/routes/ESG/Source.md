# /ESG/Source
<details>
<summary><code>POST</code> <code><b>/</b></code> <code>(Create a source)</code></summary>

<br />

##### Headers
| key | values | description |
| --- | ------ | ----------- |
| --- | ------ | ----------- |
##### Body
| key      | required | data type | description                  |
| -------- | -------- | --------- | ---------------------------- |
| EName    | true     | string    | the name of the equipment    |
| Form     | true     | char(2)   | the name of the form         |
| MName    | true     | .json     | the name of the meterial     |
| Category | true     | int       | the categroy of the source   |
##### Responses
| http code    | content-type         | description                     |
| ------------ | -------------------- | ------------------------------- |
| `200`        | `application/json`   | the detail of the posted source |
| `400`        | `text/plain`         | `{ message: "client error"}`    |
| `500`        | `text/plain`         | `{ message: "server error"}`    |

</details>


<details>
<summary><code>REVISE</code> <code><b>/{SID}</b></code> <code>(Revise a source)</code></summary>

<br />

##### Headers
| key | values | description |
| --- | ------ | ----------- |
| --- | ------ | ----------- |
##### Path Parameters
| key     | required | data type      | description                     |
| ------- | -------- | -------------- | ------------------------------- |
| SID     | true     | string         | id of the source                |
##### Body
| key      | required | data type      | description                     |
| -------- | -------- | -------------- | ------------------------------- |
| EName    | true     | string         | the name of the equipment       |
| Form     | true     | char(2)        | the name of the form            |
| MName    | true     | .json          | the name of the meteril         |
| Category | true     | int            | the categroy of the source      |
##### Responses
| http code    | content-type       | description                        |
| ------------ | ------------------ | ---------------------------------- |
| `200`        | `application/json` | the detail of the revised source |
| `400`        | `text/plain`       | `{ message: "client error"}`       |
| `500`        | `text/plain`       | `{ message: "server error"}`       |

</details>

<details>
<summary><code>DELETE</code> <code><b>/{SID}</b></code> <code>(Delete a source)</code></summary>

<br />

##### Headers
| key | values | description |
| --- | ------ | ----------- |
| --- | ------ | ----------- |
##### Path Parameters
| key | required | data type | description        |
| --- | -------- | --------- | ------------------ |
| SID | true     | string    | id of the source   |
##### Responses
| http code    | content-type       | description                        |
| ------------ | -------------------| ---------------------------------- |
| `200`        | `application/json` | `{ message: "success"}`            |
| `400`        | `text/plain`       | `{ message: "client error"}`       |
| `500`        | `text/plain`       | `{ message: "server error"}`       |

</details>

<details>
<summary><code>RETRIEVE</code> <code><b>/{SID}</b></code> <code>(Retrieve a source)</code></summary>

<br />only for admin

##### Headers
| key | values | description |
| --- | ------ | ----------- |
| --- | ------ | ----------- |
##### Path Parameters
| key | required | data type | description        |
| --- | -------- | --------- | ------------------ |
| SID | true     | string    | id of the source   |
##### Responses
| http code    | content-type       | description                        |
| ------------ | ------------------ | ---------------------------------- |
| `200`        | `application/json` | the detail of the retrieved source |
| `401`        | `text/plain`       | `{"Not Found"}`                    |
| `400`        | `text/plain`       | `{ message: "client error"}`       |
| `500`        | `text/plain`       | `{ message: "server error"}`       |

</details>
