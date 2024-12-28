const fs = require('fs');

const carsData = JSON.parse(fs.readFileSync(__dirname + '/../data/data.json'))


exports.getAllCars = (req,res) =>{
    res.status(200).json({
        status: "success",
        data: carsData
    })
}

exports.getCar = (req,res) =>{

    const { id } = req.params;
    const car = carsData.find((car)=> car.id === Number(id));
    res.status(200).json({...car})
}