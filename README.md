# Teduh-Backend

This is the internship assessment project for prospective Backend Engineer Interns at Teduh.

## Question 1: Encode Clothing Prices
Teduh Karya Clothing Store wants to create a coding system to inform salespeople about the price limits and ideal selling prices for clothes negotiated by customers. The system will be used by the cashier to determine whether the price offered by the customer is acceptable or not.
### Example
```
encodeClothing("AT", "YH", 70,000) // Returns "ACCEPT, thank you for shopping!"
encodeClothing("ESH", "DTT", 150,000) // Returns "REJECT, not profitable yet!"
encodeClothing("DET", "DHT", 250,000) // Returns "GOOD, the best customer doesn't bargain."
```

## Question 2: MongoDB Query for Psikolog and Reviews
There are two MongoDB collections, Psikolog and Review, with the following data. Create a MongoDB query to return a response that includes information about psychologists along with their reviews and the average rating from those reviews.
### Example Respons
```
{
    data: [
        {
            _id: ObjectId(“64f4b2344b447807a6d08555”),
            name: "Rafly Ario Bayu",
            reviews: [
            {
                _id: ObjectId(“64f4b3bee7d97fbac7e832f8”),
                psikolog_id: ObjectId(“64f4b2344b447807a6d08555”),
                rating: 4,
                message: "Penjelasannya enak banget"
            },  
        {
            _id: ObjectId(“64f4b510d9ac9e73eb1b9207”),
            psikolog_id: ObjectId(“64f4b2344b447807a6d08555”),
            rating: 5,
            message: "Informatif dan edukatif"
        }
        ],
        average_rating: 4.5,
        },
        {
        .....,
        ...
        },
        {
        ....,
        ...
        }
    ]
}
```