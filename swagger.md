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
| Create Project | `projectName(string)`, `PM(string)`, `Material(property: multiSelect, type: string(number))`, `Equipment(property: multiSelect, type: string)` | sucess(return {ProjectID, PMID, List-Equipment, Lisr-Material}), fail | ------- | ------ |

# Approve 
| API purpoes   | Input(type)                        | Ouput(type)   | Trigger | Remark |
| ------------- | ---------------------------------- | ------------- | ------- | ------ |
| Record Revise | ---------------------------------- | ------------- | ------- | ------ |
