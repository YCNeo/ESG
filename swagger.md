## Login 
| API purpoes | Input(type)                        | Ouput(type)   | Tri | Remark |
| ----------- | ---------------------------------- | ------------- | --- | ------ |
| Login       | `user(string)`, `Password(string)` | Success, Fail | B   | ------ |


# Admin
## Create user
| API purpoes | Input(type)                                                                      | Ouput(type)                                               | Tri | Remark |
| ----------- | -------------------------------------------------------------------------------- | --------------------------------------------------------- | --- | ------ |
| Create user | `userID(string)`, `Access(property: multiSelect, type: string(Combined number))` | success(return { userID, password }, fail(return reason)) | B   | ------ |

## Access Assignment
| API purpoes | Input(type)                                                                      | Ouput(type)   | Tri | Remark |
| ----------- | -------------------------------------------------------------------------------- | ------------- | --- | ------ |
| Revisement  | `userID(string)`, `Access(property: multiSelect, type: string(Combined number))` | success, fail | B   | ------ |

## Create Project
| API purpoes    | Input(type)                                                                                                                                    | Ouput(type)                                                           | Tri | Remark |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- | --- | ------ |
| Create Project | `projectName(string)`, `PM(string)`, `Material(property: multiSelect, type: string(number))`, `Equipment(property: multiSelect, type: string)` | sucess(return {ProjectID, PMID, List-Equipment, Lisr-Material}), fail | B   | ------ |

## Approve 
| API purpoes          | Input(type)                                                                                                       | Ouput(type)                  | Tri | Remark |
| -------------------- | ----------------------------------------------------------------------------------------------------------------- | ---------------------------- | --- | ------ |
| Accept Record Revise | `PID`, `PMID`, `time(system produce)`, `old content(equipment, usage time)`, `new content(equipment, usage time)` | success, fail(return reason) | B   | ------ |
| Reject Record Revise | `PID`, `PMID`, `time(system produce)`, `old content(equipment, usage time)`, `new content(equipment, usage time)` | success, fail(return reason) | B   | ------ |

## Employee
| API purpoes | Input(type)                                                                                            | Ouput(type)                              | Tri | Remark |
| ----------- | ------------------------------------------------------------------------------------------------------ | ---------------------------------------- | --- | ------ |
| Post        | `name(string)`, `gender(int)`, `phone(string)`, `mail(string)`, `region(char(2))`, `pID(default NULL)` | success(ID(string)), fail(return reason) | B   | ------ |
| Revise      | `name(string)`, `gender(int)`, `phone(string)`, `mail(string)`, `region(char(2))`, `pID(default NULL)` | success, fail(return reason)             | B   | ------ |
| Delete      | x                                                                                                      | success, fail                            | B   | ------ |
| Retrive     | `EID(string)` or `PID(string)` or `region(char(2))` or `name(string)`                                  | `employees(List)`                        | B   | ------ |

# Project Management
## Member
| API purpoes | Input(type)                                           | Ouput(type)    | Tri | Remark |
| ----------- | ----------------------------------------------------- | -------------- | --- | ------ |
| Post        | `EID(string)`, `Position(string)`                     | success, fail  | B   | ------ |
| Revise      | `EID(string)`, `Position(string)`                     | success, fail  | B   | ------ |
| Remove      | `EID(string)`                                         | success, fail  | B   | ------ |
| Retrive     | `EID(string)` or `name(string)` or `position(string)` | `member(List)` | B   | ------ |


## Flow
| API purpoes | Input(type)                                                            | Ouput(type)   | Tri | Remark |
| ----------- | ---------------------------------------------------------------------- | ------------- | --- | ------ |
| Design      | `{ST.{EQM...}.{Description} -> ST.{EQM...}.{Description} ...}(string)` | success, fail | B   | ------ |
| Revise      | `{ST.{EQM...}.{Description} -> ST.{EQM...}.{Description} ...}(string)` | success, fail | B   | ------ |


## Material
| API purpoes | Input(type)                                   | Ouput(type)                  | Tri | Remark |
| ----------- | --------------------------------------------- | ---------------------------- | --- | ------ |
| Post        | `name(string)`, `amount(int)`, `Unit(number)` | success(return detail), fail | B   | ------ |
| Delete      | x                                             | success, fail                | B   | ------ |
| Retrive     | `name(string)`                                | Marerial(List)               | B   | ------ |


## Equipment
| API purpoes | Input(type)                                   | Ouput(type)           | Tri | Remark |
| ----------- | --------------------------------------------- | --------------------- | --- | ------ |
| Post        | `name(string)`, `amount(int)`, `Unit(number)` | success(detail), fail | B   | ------ |
| Remove      | `name(string)`, `amount(int)`, `Unit(number)` | success, fail         | B   | ------ |
| Retrive     | `name(string)`                                | Equipment(List)       | B   | ------ |


## Daily Record
| API purpoes | Input(type)                                                                                                  | Ouput(type)          | Tri | Remark |
| ----------- | ------------------------------------------------------------------------------------------------------------ | -------------------- | --- | ------ |
| Post        | `date(date)`, `Equipment(string)`, `Material(string)`, `amount(int)`, `Unit(number)`, `runtime(int)_unit:hr` | success(detil), fail | B   | ------ |
| Revise      | `date(date)`, `Equipment(string)`, `Material(string)`, `amount(int)`, `Unit(number)`, `runtime(int)_unit:hr` | success(detil), fail | B   | ------ |
| Retrive     | `date(date)`                                                                                                 | Record(List)         | B   | ------ |


## Statement
| API purpoes | Input(type)                        | Ouput(type)     | Tri | Remark |
| ----------- | ---------------------------------- | --------------- | --- | ------ |
| Retrive     | `startDate(date)`, `endDate(date)` | embedding table | B   | ------ |
| export      | `table(sheet)`                     | excel or pdf    | B   | ------ |


# PPE
## Equipment
| API purpoes   | Input(type)                                                                                                                                                     | Ouput(type)           | Tri | Remark           |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | --- | ---------------- |
| Post          | `name(string)`, `supplier(string)`, `amount(int)`, `Unit(number)`, `coefficient(float)`, `PurchseDate(date)`, `DisposalDate(date)`, `age(int)`, `ageUnit(year)` | success(detail), fail | B   | ------           |
| Delete        | `EQID(number)`                                                                                                                                                  | success, fail         | B   | 不能提早報廢     |
| retrive       | `EQID(number)`, `name(string)`, `supplier(string)`                                                                                                              | Equipment(List)       | B   | ------           |
| PostRepair    | `Date(date)`, `EQID(number)`                                                                                                                                    | success(detail), fail | B   | ------           |
| Repair log    | x                                                                                                                                                               | log(List)             | B   | ------           |
| Disposal list | x                                                                                                                                                               | Disposal(List)        | B   | 根據報廢日期排序 |


## Material
| API purpoes   | Input(type)                                                                                                                               | Ouput(type)                  | Tri | Remark           |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | --- | ---------------- |
| Post          | `name(string)`, `Supplier(string)`, `amount(int)`, `Unit(number)`, `Coefficient(float)`, `PurchseDate(date)`, `age(int)`, `ageUnit(year)` | success(return detail), fail | B   | ------           |
| Delete        | x                                                                                                                                         | success, fail                | B   | ------           |
| Retrive       | `MID(string)`, `name(string)`, `Supplier(string)`                                                                                         | Marerial(List)               | B   | ------           |
| Disposal list | x                                                                                                                                         | Disposal(List)               | B   | 根據報廢日期排序 |


# Statement
## Export Statement 
| API purpoes | Input(type)                                                          | Ouput(type)     | Tri | Remark |
| ----------- | -------------------------------------------------------------------- | --------------- | --- | ------ |
| Retrive     | `PID(multiSelect, type: number)`, `startDate(date)`, `endDate(date)` | embedding table | B   | ------ |
| exprot      | `table(sheet)`                                                       | excel or pdf    | B   | ------ |