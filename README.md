# PaginationGraphQLBackend

This project used GraphQL to send Data to frontend App. Currently This project uses Firestore to get data.

### Development Environment 
- MacOS Mojave 10.14.3
- Node 11.8.0
- npm 6.5.0

### Running the project:-
1. Clone the project.
2. navigate to projectDirectory folder using `cd projectDirectory`.
3. Install dependencies with `npm install`.
4. Run with `npm start`.
5. goto browser and paste url http://localhost:3000/graphql
6. paste below query:- 

    `query ($page_number: Int!, $limit: Int!){
    getBookings(page_number: $page_number,  limit: $limit){
      address
      date
      date_of_booking
      booking_id
      club_name
      isSuccess
      package_name
      total
    }
  }`

7.  use Query variable :- 
  
  `{
    "page_number": 3,
    "limit": 5
  }`

