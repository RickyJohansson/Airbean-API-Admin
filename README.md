# Airbean-API-Admin

### New routes for assignment:

(Retrieve an API-Key):

http://localhost:8000/api/key

body: none

header: none

------------------------------------------------

(add products to menu):

http://localhost:8000/api/menu/addproduct

body:
```
{
	"title": "jjjjjj",
	"id": 11,
	"desc": "stuff",
	"price": 40
}
```

header:

ex: api-key | mdfgn71203123
    Content-Type | application/json
    
-----------------------------------------------------

(delete products from menu):

ex: http://localhost:8000/api/menu/6       
(/:id)

body: none

header:

Content-Type | multipart/form-data

ex: api-key | 9595959595959


---------------------------------------------------------

### Old routes from group-assignment:

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


------------------------------------------------
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
