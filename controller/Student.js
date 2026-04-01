const database=require('../database/db');
const getStudentdata= async(req, res) => {
   try {
   const db=await database();
    const collection= db.collection('Student');
    const result=await collection.find({}).toArray();
     res.json({
    message: 'Student records retrieved successfully',
    data: result
  });
}
catch(err){
    console.error('Error fetching Student data:', err);
    res.status(500).json({ message: 'Internal Server Error' });  
} 
}
const insertStudentdata= async(req, res) => {

 const db=await database();
    const collection= db.collection('Student');
    const result=await collection.insertOne(req.body);
    if(result.acknowledged==true){
     res.json({
    message: 'Student added successfully',
    data: result
  });
}
else
{
    res.status(500).json({ message: 'Failed to add Student' });
}
}


const updateStudentdata= async(req, res) => {
  
 const db=await database();
    const collection= db.collection('Student');
    let prmid=parseInt(req.params.id)
    const result=await collection.updateOne({ id: prmid }, { $set: req.body });
    if(result.modifiedCount>0){
     res.json({
    message: 'Student update successfully',
    data: result
  });
}
else
{
    res.status(500).json({ message: 'Failed to add Student' });
}
}

const deleteStudentdata = async (req, res) => {
  try {
    const db = await database();
    const collection = db.collection('Student');

    let prmid = parseInt(req.params.id);

    const result = await collection.deleteOne({ id: prmid });

    if (result.deletedCount > 0) {
      res.json({
        message: 'Student deleted successfully',
        data: result
      });
    } else {
      res.status(404).json({ message: 'Student not found' });
    }

  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

module.exports = {
  getStudentdata,insertStudentdata,updateStudentdata,deleteStudentdata
}