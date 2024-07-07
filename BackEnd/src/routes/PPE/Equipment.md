# /PPE/Equipment

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
| Supplier           | true     | string    | name of the equipment                    |
| Amount             | true     | int       | amount of the equipment                  |
| Unit               | true     | number    | the unit of the equipment                |
| Factor             | true     | float     | the emission factor of the equipment     |
| PurchaseDate       | ture     | date      | the day the equipment is purchased       |
| DisposalDate(date) | true     | date      | the day the equipment should be disposed |
| age                | true     | int       | the age of the equipment                 |
| ageUnit            | true     | year      | the unit of the age                      |
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
| http code    | content-type | description                                     |
| ------------ | -------------| ----------------------------------------------- |
| `200`        | `text/plain` | `{ message: "success"}`                         |
| `400`        | `text/plain` | `{ message: "client error"}`                    |
| `401`        | `text/plain` | `{ message: "It have not reach its lifespan."}` |
| `500`        | `text/plain` | `{ message: "server error"}`                    |

</details>

<details>
<summary><code>RETRIEVE</code> <code><b>/{EID}</b></code> <code>(Retrieve the detail of an equipment)</code></summary>

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
| http code    | content-type       | description                                 |
| ------------ | ------------------ | ------------------------------------------- |
| `200`        | `application/json` | the detail of the retrieved equipment       |
| `400`        | `text/plain`       | `{ message: "client error"}`                |
| `500`        | `text/plain`       | `{ message: "server error"}`                |

</details>

<details>
<summary><code>POST</code> <code><b>/{EID}</b></code> <code>(Post a repair)</code></summary>

<br />

##### Headers
| key | values | description |
| --- | ------ | ----------- |
| --- | ------ | ----------- |
##### Path Parameters
| key | required | data type | description         |
| --- | -------- | --------- | ------------------- |
| EID | true     | string    | id of the equipment |
##### Body
| key  | required | data type | description                       |
| ---- | -------- | --------- | --------------------------------- |
| Date | true     | string    | the date the repairment is posted |
##### Responses
| http code    | content-type          | description                         |
| ------------ | --------------------- | ----------------------------------- |
| `200`        | `application/json`    | the detail of the posted repairment |
| `400`        | `text/plain`          | `{ message: "client error"}`        |
| `500`        | `text/plain`          | `{ message: "server error"}`        |

</details>

<details>
<summary><code>REPAIR_LOG</code> <code><b>/</b></code> <code>(Retrieve the repair logs of all equipment)</code></summary>

<br />

##### Headers
| key | values | description |
| --- | ------ | ----------- |
| --- | ------ | ----------- |
##### Path Parameters
| key | required | data type | description         |
| --- | -------- | --------- | ------------------- |
| --- | -------- | --------- | ------------------- |
##### Responses
| http code    | content-type         | description                  |
| ------------ | -------------------- | ---------------------------- |
| `200`        | `application/json`   | the repair log               |
| `400`        | `text/plain`         | `{ message: "client error"}` |
| `500`        | `text/plain`         | `{ message: "server error"}` |
</details>

<details>
<summary><code>RETRIEVE</code> <code><b>/</b></code> <code>(Retrieve the disposal list)</code></summary>

<br />

##### Headers
| key | values | description |
| --- | ------ | ----------- |
| --- | ------ | ----------- |
##### Path Parameters
| key | required | data type | description         |
| --- | -------- | --------- | ------------------- |
| --- | -------- | --------- | ------------------- |
##### Responses
| http code    | content-type         | description                                    |
| ------------ | -------------------- | ---------------------------------------------- |
| `200`        | `application/json`   | the sorted(by date) list of disposed equipment |
| `400`        | `text/plain`         | `{ message: "client error"}`                   |
| `500`        | `text/plain`         | `{ message: "server error"}`                   |

</details>
