
const admin = require("firebase-admin");
const serviceAccount = require("../../serviceAccountKey.json");
const { filter, map }  = require('lodash');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://reactbackground.firebaseio.com"
});

module.exports = {
    bookings: async () => {
        try{
            var docRef = admin.firestore().collection("booking");
            const snapshot = await docRef.orderBy('date', 'desc').get();
            var bookings = []
            snapshot
                .docs
                .forEach(doc => {
                console.log(doc.data())
                const booking = {
                    address: doc.data().address,
                    total: doc.data().total,
                    isSuccess: doc.data().isSuccess,
                    date_of_booking: doc.data().date_of_booking.toDate().toGMTString(),
                    booking_id: doc.data().booking_id,
                    date: doc.data().date.toDate().toGMTString(),
                    club_name: doc.data().club_name,
                    package_name: doc.data().package_name,
                }
                bookings.push(booking);
            });
            return bookings;
        }catch(err){
            console.log(err)
            throw err;
        }
    },
    getBookings: async (page) => {
        try{
            const page_number = page.page_number;
            const limit = page.limit;
            var docRef = admin.firestore().collection("booking");
            const snapshot = await docRef.orderBy('date', 'desc').offset(page_number * limit).limit(limit).get();;
            var bookings = []
            snapshot
                .docs
                .forEach(doc => {
                const booking = {
                    address: doc.data().address,
                    total: doc.data().total,
                    isSuccess: doc.data().isSuccess,
                    date_of_booking: doc.data().date_of_booking.toDate().toGMTString(),
                    booking_id: doc.data().booking_id,
                    date:  doc.data().date.toDate().toGMTString(),
                    club_name: doc.data().club_name,
                    package_name: doc.data().package_name,
                }
                bookings.push(booking);
            });
            return bookings;
        }catch(err){
            console.log(err)
            throw err;
        }
    },
} ;