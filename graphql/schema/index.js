const { buildSchema } = require('graphql');

module.exports =  buildSchema(`
        type Booking {
           address: String!
           total: Float!
           isSuccess: Boolean!
           date_of_booking: String!
           booking_id: Int!
           date: String!
           club_name: String!
           package_name: String!
        }

        type RootQuery {
            bookings: [Booking!]!
            getBookings(page_number: Int!, limit: Int!): [Booking!]!
        }

        schema {
            query: RootQuery  
        }
    `);