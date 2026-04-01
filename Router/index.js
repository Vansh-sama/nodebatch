const express = require('express');
const router = express.Router();
const st = require('../controller/Student');
const te = require('../controller/Teacher');
const co = require('../controller/Course');
const ur =require('../controller/User')

router.get('/getStudent', st.getStudentdata);
router.post('/addStudent', st.insertStudentdata);
router.put('/updateStudent', st.updateStudentdata);
router.delete('/deleteStudent',st.deleteStudentdata);

router.get('/getTeacher', te.getTeacherdata);
router.post('/addTeacher', te.insertTeacherdata);
router.put('/updateTeacher', te.updateTeacherdata);
router.delete('/deleteTeacher',te.deleteTeacherdata);

router.get('/getCourse', co.getCoursedata);
router.post('/addCourse', co.insertCoursedata);
router.put('/updateCourse', co.updateCoursedata);
router.delete('/deleteCourse',co.deleteCoursedata);

router.get('/getUser', ur.getUserdata);
router.post('/addUser', ur.insertUserdata);
router.put('/updateUser', ur.updateUserdata);
router.delete('/deleteUser',ur.deleteUserdata);

router.get('/getstudentmarks', (req, res) => {
  const users = [
  { name: "Pooja", age: 22 },
  { name: "Riya", age: 21 },
  { name: "Neha", age: 23 }
];

   res.render('home', { users });
});

module.exports=router;