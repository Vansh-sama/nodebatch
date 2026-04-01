const database=require('../database/db');
const getCoursedata= async(req, res) => {
   try {
   const db=await database();
    const collection= db.collection('Course');
    const result=await collection.find({}).toArray();
     res.json({
    message: 'Course records retrieved successfully',
    data: result
  });
}
catch(err){
    console.error('Error fetching course data:', err);
    res.status(500).json({ message: 'Internal Server Error' });  
} 
}
const insertCoursedata= async(req, res) => {

 const db=await database();
    const collection= db.collection('Course');
    const result=await collection.insertOne(req.body);
    if(result.acknowledged==true){
     res.json({
    message: 'Course added successfully',
    data: result
  });
}
else
{
    res.status(500).json({ message: 'Failed to add course' });
}
}


const updateCoursedata= async(req, res) => {
  
 const db=await database();
    const collection= db.collection('Course');
    let prmid=parseInt(req.params.id)
    const result=await collection.updateOne({ id: prmid }, { $set: req.body });
    if(result.modifiedCount>0){
     res.json({
    message: 'Course update successfully',
    data: result
  });
}
else
{
    res.status(500).json({ message: 'Failed to add course' });
}
}

const deleteCoursedata = async (req, res) => {
  try {
    const db = await database();
    const collection = db.collection('Course');

    let prmid = parseInt(req.params.id);

    const result = await collection.deleteOne({ id: prmid });

    if (result.deletedCount > 0) {
      res.json({
        message: 'Course deleted successfully',
        data: result
      });
    } else {
      res.status(404).json({ message: 'Course not found' });
    }

  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

module.exports = {
  getCoursedata,insertCoursedata,updateCoursedata,deleteCoursedata
}