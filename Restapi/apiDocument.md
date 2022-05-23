// Page 1
# List of city
>>http://localhost:8230/location

# List of reasturant
>>http://localhost:8230/reasturant

# List of reasturant wrt city
>>http://localhost:8230/reasturant?state_id=4

# list of type of mealType
>> http://localhost:8230/mealType

// Page 2
# List of reasturant on basis of meal
>>http://localhost:8230/reasturant?meal_id=4

# Filter on basis of cuisine

# filter on basis of cost

# sort (low to high)

// Page 3 
 # Details of reasturants
 >> http://localhost:8230/details/6289d56e446b2f87c0756193

 # menu on the basis of reasturant
 >>http://localhost:8230/menu?restId=2

//page4 
> Menu details of item selected
(post) > localhost:8230/menuItem
(body) > [1,4,7]
> Place Order
(post) > localhost:8230/placeOrder
(body) > 
  {
        "name": "uvvv",
        "email": "yuv554@gmail.com",
        "adress": "cdce 15 sector",
        "phone": 45554455,
        "cost": 242,
        "menuItem": [7, 1, 5],
        "status": "pending"
    }

// page5
> See all order place
>> localhost:8230/viewOrder

> Get Order on basis of emailId
>> localhost:8230/viewOrder?email=yuv554@gmail.com

//update order
(put) localhost:8230/updateOrder/62514d42f5aec503b2e0f2a9
(body) 
{
	"status":"In Transit",
    "bankName":"Axis Bank"
}


