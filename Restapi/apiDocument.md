// Page 1
# List of city
>>http://localhost:9705/location
>>https://zomanode.herokuapp.com/location

# List of reasturant
>>http://localhost:9705/restaurants
>>https://zomanode.herokuapp.com/reasturant

# List of reasturant wrt city
>>http://localhost:9705/restaurants?state_id=4
>>https://zomanode.herokuapp.com/reasturant?state_id=4

# list of type of mealType
>> http://localhost:9705/mealType
>>
// Page 2
# List of reasturant on basis of meal
>>http://localhost:9705/restaurants?meal_id=4
>>https://zomanode.herokuapp.com/reasturant?meal_id=4

# Filter on basis of cuisine
>> https://zomatoajulypi.herokuapp.com/filter/4?cuisine=1
>> http://localhost:9705/filters/3?cuisineId=4

# Filter on basis of cost
>> https://zomatoajulypi.herokuapp.com/filter/1?hcost=1000&lcost=500
>> http://localhost:9705/filters/1?lcost=300&hcost=900

# Sort (low to High)
>>http://localhost:9705/filters/1?lcost=300&hcost=900&sort=-1
>>http://localhost:9705/filters/1?cuisineId=4&sort=-1

// Page 3 
 # Details of reasturants
 >>http://zomatoajulypi.herokuapp.com/details/1
 >>http://localhost:9705/details/6289d56e446b2f87c0756193
 

 # menu on the basis of reasturant
 >> http://localhost:9705/menu?restId=8
 >>https://zomanode.herokuapp.com/menu?restId=2

//page4 
> Menu details of item selected
(post) > localhost:9705/menuItem
(body) > [1,4,7]

> Place Order
(post) > localhost:9705/placeOrder
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
>> localhost:9705/viewOrder
>>https://zomanode.herokuapp.com/viewOrder

> Get Order on basis of emailId
>> localhost:9705/viewOrder?email=yuv554@gmail.com
>>https://zomanode.herokuapp.com/viewOrder?email=yuv554@gmail.com

//update order
(put) localhost:9705/updateOrder/62514d42f5aec503b2e0f2a9
(body) 
{
	"status":"In Transit",
    "bankName":"Axis Bank"
}


