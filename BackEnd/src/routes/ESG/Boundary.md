# /ESG/Boundary
<details>
<summary><code>POST</code> <code><b>/</b></code> <code>(Create a boundary)</code></summary>

<br />


##### Headers
| key | values | description |
| --- | ------ | ----------- |
| --- | ------ | ----------- |
##### Body
| key     | required | data type      | description                                  |
| ------- | -------- | -------------- | -------------------------------------------- |
| Name    | true     | string         | the name of the boundary                     |
| Address | false    | string or null | the address of the boundary                  |
| Type    | true     | string         | the type of the boundary                     |
##### Responses
| http code    | content-type         | description                       |
| ------------ | -------------------- | --------------------------------- |
| `200`        | `application/json`   | the detail of the posted boundary |
| `400`        | `text/plain`         | `{ message: "client error"}`      |
| `500`        | `text/plain`         | `{ message: "server error"}`      |

</details>


<details>
<summary><code>REVISE</code> <code><b>/{BID}</b></code> <code>(Revise a boundary)</code></summary>

<br />

##### Headers
| key | values | description |
| --- | ------ | ----------- |
| --- | ------ | ----------- |
##### Path Parameters
| key     | required | data type      | description                     |
| ------- | -------- | -------------- | ------------------------------- |
| BID     | true     | string         | id of the boundary              |
##### Body
| key     | required | data type      | description                     |
| ------- | -------- | -------------- | ------------------------------- |
| Address | true     | string or null | the new address of the boundary |
##### Responses
| http code    | content-type       | description                        |
| ------------ | ------------------ | ---------------------------------- |
| `200`        | `application/json` | the detail of the revised boundary |
| `400`        | `text/plain`       | `{ message: "client error"}`       |
| `500`        | `text/plain`       | `{ message: "server error"}`       |

</details>

<details>
<summary><code>DELETE</code> <code><b>/{BID}</b></code> <code>(Delete a boundary)</code></summary>

<br />

##### Headers
| key | values | description |
| --- | ------ | ----------- |
| --- | ------ | ----------- |
##### Path Parameters
| key | required | data type | description        |
| --- | -------- | --------- | ------------------ |
| BID | true     | string    | id of the boundary |
##### Responses
| http code    | content-type       | description                        |
| ------------ | -------------------| ---------------------------------- |
| `200`        | `application/json` | `{ message: "success"}`            |
| `400`        | `text/plain`       | `{ message: "client error"}`       |
| `500`        | `text/plain`       | `{ message: "server error"}`       |

</details>

<details>
<summary><code>RETRIEVE</code> <code><b>/{BID}</b></code> <code>(Retrieve a boundary)</code></summary>

<br />

##### Headers
| key | values | description |
| --- | ------ | ----------- |
| --- | ------ | ----------- |
##### Path Parameters
| key | required | data type | description        |
| --- | -------- | --------- | ------------------ |
| BID | true     | string    | id of the boundary |
##### Responses
| http code    | content-type       | description                          |
| ------------ | ------------------ | ------------------------------------ |
| `200`        | `application/json` | the detail of the retrieved boundary |
| `401`        | `text/plain`       | `{"Not Found"}`                      |
| `400`        | `text/plain`       | `{ message: "client error"}`         |
| `500`        | `text/plain`       | `{ message: "server error"}`         |

</details>
