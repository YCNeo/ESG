# Login 
| API purpoes | Input(type)                        | Ouput(type)   | Trigger | Remark |
| ----------- | ---------------------------------- | ------------- | ------- | ------ |
| Login       | `user(string)`, `Password(string)` | Success, Fail | B       | ------ |

# Create user
| API purpoes | Input(type)                                                                      | Ouput(type)                                               | Trigger | Remark |
| ----------- | -------------------------------------------------------------------------------- | --------------------------------------------------------- | ------- | ------ |
| Create user | `userID(string)`, `Access(property: multiSelect, type: string(Combined number))` | success(return { userID, password }, fail(return reason)) | B       | ------ |

# Access Assignment
| API purpoes | Input(type)                                                                      | Ouput(type)   | Trigger | Remark |
| ----------- | -------------------------------------------------------------------------------- | ------------- | ------- | ------ |
| Revisement  | `userID(string)`, `Access(property: multiSelect, type: string(Combined number))` | success, fail | B       | ------ |

# Create Project
| API purpoes    | Input(type)                                                                                                                                    | Ouput(type)                                                           | Trigger | Remark |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- | ------- | ------ |
| Create Project | `projectName(string)`, `PM(string)`, `Material(property: multiSelect, type: string(number))`, `Equipment(property: multiSelect, type: string)` | sucess(return {ProjectID, PMID, List-Equipment, Lisr-Material}), fail | B       | ------ |

# Approve 
| API purpoes          | Input(type)                                                                                                       | Ouput(type)                  | Trigger | Remark |
| -------------------- | ----------------------------------------------------------------------------------------------------------------- | ---------------------------- | ------- | ------ |
| Accept Record Revise | `PID`, `PMID`, `time(system produce)`, `old content(equipment, usage time)`, `new content(equipment, usage time)` | success, fail(return reason) | B       | ------ |
| Reject Record Revise | `PID`, `PMID`, `time(system produce)`, `old content(equipment, usage time)`, `new content(equipment, usage time)` | success, fail(return reason) | B       | ------ |

# Employee
| API purpoes | Input(type)                                                                                            | Ouput(type)                              | Trigger | Remark |
| ----------- | ------------------------------------------------------------------------------------------------------ | ---------------------------------------- | ------- | ------ |
| Post        | `name(string)`, `gender(int)`, `phone(string)`, `mail(string)`, `region(char(2))`, `pID(default NULL)` | success(ID(string)), fail(return reason) | B       | ------ |
| Revise      | `name(string)`, `gender(int)`, `phone(string)`, `mail(string)`, `region(char(2))`, `pID(default NULL)` | success, fail(return reason)             | B       | ------ |
| Delete      | x                                                                                                      | success, fail                            | B       | ------ |
| Retrive     | `EID(string)` or `PID(string)` or `region(char(2))` or `name(string)`                                  | `employees(List)`                        | B       | ------ |

# Member

| API purpoes | Input(type)                        | Ouput(type)   | Trigger | Remark |
| ----------- | ---------------------------------- | ------------- | ------- | ------ |
|  | ---------------------------------- | ------------- | ------- | ------ |


# Flow
| -----test
