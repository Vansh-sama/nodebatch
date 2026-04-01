const database=require('../database/db');
const getTeacherdata= async(req, res) => {
   try {
   const db=await database();
    const collection= db.collection('Teacher');
    const result=await collection.find({}).toArray();
     res.json({
    message: 'Teacher records retrieved successfully',
    data: result
  });
}
catch(err){
    console.error('Error fetching Teacher data:', err);
    res.status(500).json({ message: 'Internal Server Error' });  
} 
}
const insertTeacherdata= async(req, res) => {

 const db=await database();
    const collection= db.collection('Teacher');
    const result=await collection.insertOne(req.body);
    if(result.acknowledged==true){
     res.json({
    message: 'Teacher added successfully',
    data: result
  });
}
else
{
    res.status(500).json({ message: 'Failed to add Teacher' });
}
}


const updateTeacherdata= async(req, res) => {
  
 const db=await database();
    const collection= db.collection('Teacher');
    let prmid=parseInt(req.params.id)
    const result=await collection.updateOne({ id: prmid }, { $set: req.body });
    if(result.modifiedCount>0){
     res.json({
    message: 'Teacher update successfully',
    data: result
  });
}
else
{
    res.status(500).json({ message: 'Failed to add Teacher' });
}
}

const deleteTeacherdata = async (req, res) => {
  try {
    const db = await database();
    const collection = db.collection('Teacher');

    let prmid = parseInt(req.params.id);

    const result = await collection.deleteOne({ id: prmid });

    if (result.deletedCount > 0) {
      res.json({
        message: 'Teacher deleted successfully',
        data: result
      });
    } else {
      res.status(404).json({ message: 'Teacher not found' });
    }

  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

module.exports = {
  getTeacherdata,insertTeacherdata,updateTeacherdata,deleteTeacherdata
}