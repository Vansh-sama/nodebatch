const express = require('express');
const router = express.Router();
const st = require('../controller/Student');
const te = require('../controller/Teacher');
const co = require('../controller/Course');
const ur =require('../controller/User')
const { verifyToken } = require('../controller/User');


router.get('/getStudent', verifyToken, st.getStudentdata);
router.post('/addStudent', verifyToken, st.insertStudentdata);
router.put('/updateStudent', verifyToken, st.updateStudentdata);
router.delete('/deleteStudent', verifyToken, st.deleteStudentdata);

router.get('/getTeacher', verifyToken, te.getTeacherdata);
router.post('/addTeacher', verifyToken, te.insertTeacherdata);
router.put('/updateTeacher', verifyToken, te.updateTeacherdata);
router.delete('/deleteTeacher', verifyToken, te.deleteTeacherdata);

router.get('/getCourse', verifyToken, co.getCoursedata);
router.post('/addCourse', verifyToken, co.insertCoursedata);
router.put('/updateCourse', verifyToken, co.updateCoursedata);
router.delete('/deleteCourse', verifyToken, co.deleteCoursedata);

router.get('/getUser', verifyToken, ur.getUserdata);
router.post('/login', ur.loginUser);


router.get('/getstudentmarks', (req, res) => {
  const users = [
  { name: "Pooja", age: 22 },
  { name: "Riya", age: 21 },
  { name: "Neha", age: 23 }
];

   res.render('home', { users });
});

module.exports=router;