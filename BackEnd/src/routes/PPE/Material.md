### PPE/Material

<details>
<summary><code>POST</code> <code><b>/</b></code> <code>(Create a meterial)</code></summary>

<br />

##### Headers
| key | values | description |
| --- | ------ | ----------- |
| --- | ------ | ----------- |
##### Path Parameters
| key          | required | data type | description                         |
| ------------ | -------- | --------- | ----------------------------------- |
| Name         | true     | string    | the name of the material　          |
| Supplier     | true     | string    | the supplier of the material        |
| Amount       | true     | int       | the amount of the material          |
| Unit         | true     | number    | the unit of the material            |
| Factor       | true     | float     | the emmision factor of the material |
| PurchaseDate | true     | date      | the day the material is purchased   |
| Age          | true     | int       | the age of the material             |
| AgeUnit      | true     | year      | the unit of the age                 |
##### Responses
| http code    | content-type         | description                       |
| ------------ | -------------------- | --------------------------------- |
| `200`        | `application/json`   | the detail of the posted material |
| `400`        | `text/plain`         | `{ message: "client error"}`      |
| `500`        | `text/plain`         | `{ message: "server error"}`      |

</details>

<details>
<summary><code>DELETE</code> <code><b>{MID}</b></code> <code>(Delete a material)</code></summary>

<br />

##### Headers
| key | values | description |
| --- | ------ | ----------- |
| --- | ------ | ----------- |
##### Path Parameters
| key | required | data type | description        |
| --- | -------- | --------- | ------------------ |
| MID | true     | string    | id of the material |
##### Responses
| http code    | content-type         | description                       |
| ------------ | ---------------------| --------------------------------- |
| `200`        | `text/plain`         | `{ message: "success"}`           |
| `400`        | `text/plain`         | `{ message: "client error"}`      |
| `500`        | `text/plain`         | `{ message: "server error"}`      |

</details>

<details>
<summary><code>RETERIVE</code> <code><b>/{MID}</b></code> <code>(Retrieve a meterial)</code></summary>

<br />

##### Headers
| key | values | description |
| --- | ------ | ----------- |
| --- | ------ | ----------- |
##### Path Parameters
| key | required | data type | description        |
| --- | -------- | --------- | ------------------ |
| MID | true     | string    | id of the material |
##### Responses
| http code    | content-type         | description                          |
| ------------ | -------------------- | ------------------------------------ |
| `200`        | `application/json`   | the detail of the retrieved material |
| `400`        | `text/plain`         | `{ message: "client error"}`         |
| `500`        | `text/plain`         | `{ message: "server error"}`         |
</details>

<details>
<summary><code>RETRIEVE</code> <code><b>/</b></code> <code>(Retrieve the disposal list of meterials)</code></summary>

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
| http code    | content-type         | description                           |
| ------------ | -------------------- | ------------------------------------- |
| `200`        | `application/json`   | the sorted list of disposed material  |
| `400`        | `text/plain`         | `{ message: "client error"}`          |
| `500`        | `text/plain`         | `{ message: "server error"}`          |

</details>
