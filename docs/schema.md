# Schema Information

## users
| column name  |  data type |  details |
|---|---|---|
| id  | integer  |  not null, primary key |
| username  |  string | not null, indexed, unique |
| password_digest | string | not null |
| session_token | string | not null, indexed, unique |

## bars
| column name  |  data type |  details |
|---|---|---|
|id| integer| not null, primary key|
|name| string| not null|
|lat| integer | not null |
|lng| integer | not null |
|rating |integer | not null|
|image_url |string | |
|price |string | not null|
|pet_friendly |boolean | not null|
|wifi |boolean | not null|


## routes
| column name  |  data type |  details |
|---|---|---|
|id|integer| primary key|
|name| string| not null|

## routing
| column name  |  data type |  details |
|---|---|---|
|id|integer| primary key|
|bar_id| integer| not null, foreign key, indexed|
|route_id| integer| not null, foreign key, indexed|

## reviews
| column name  |  data type |  details |
|---|---|---|
|id|integer| primary key|
|body| string| not null|
|rating |integer| not null|
|bar_id|integer|not null, foreign key, indexed|
