# Airbean-API-Admin




## Old routes from group-assignment:

localhost:8000/api/account/signup

Body:
json

```
{
    "username":"William2",
    "email":"william@hotmaail.se",
    "password":"pw65123"
}
```
Header:
Content-Type | application/json


------------------------------------------
localhost:8000/api/order

Body:
json

```
{"cart": [
    {"id": "2",
    "title": "Caffè Doppio",
    "price": 49,
    "amount": 1},
{
  "id": 3,
  "title": "Cappuccino",
  "price": 49,
  "amount": 2}
]}
```
Header:
username | William2
Content-Type | application/json


-----------------------------------------------
localhost:8000/api/account/orderhistory

Body:
no body

Header:
username | William2

localhost:8000/api/menu

Body:
no body

Header:
no header


--------------------------------------------
localhost:8000/api/account/login

Body:
json
```
{
  "username":"William2",
  "password":"pw65123"
}
```
Header:
no header
