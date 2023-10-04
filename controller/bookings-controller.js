const pool = require("../database/index")
const bookingsController = {
    getAll: async (req, res) => {
        try {
            await pool.query("select * from bookings",[],(error,results)=>{
                if (error) throw error;
                res.json({
                    status:true,
                    data: results
                })
             })
          
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    },
    create: async (req, res) => {
        try {
            const { car_model, car_price,no_of_days_booked,start_date,end_date,price_to_pay } = req.body
            const sql = "insert into bookings(car_model, car_price , booking_duration,start_date,end_date,total_price) values (?,?,?,?,?,?)"
            await pool.query(sql, [car_model, car_price,no_of_days_booked,start_date,end_date,price_to_pay],(error,results)=>{
                if (error) throw error;
                res.json({
                    status:true,
                    data: results
                })
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    },
}

module.exports = bookingsController