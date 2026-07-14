const express = require("express");
const router = express.Router();

const st = require("../controller/Student");
const te = require("../controller/Teacher");
const co = require("../controller/Course");
const ur = require("../controller/User");

const { verifyToken } = require("../controller/User");

// ================= STUDENT =================

router.get("/getStudent", verifyToken, st.getStudentdata);
router.post("/addStudent", verifyToken, st.insertStudentdata);
router.put("/updateStudent/:id", verifyToken, st.updateStudentdata);
router.delete("/deleteStudent/:id", verifyToken, st.deleteStudentdata);

// ================= TEACHER =================

router.get("/getTeacher", verifyToken, te.getTeacherdata);
router.post("/addTeacher", verifyToken, te.insertTeacherdata);
router.put("/updateTeacher/:id", verifyToken, te.updateTeacherdata);
router.delete("/deleteTeacher/:id", verifyToken, te.deleteTeacherdata);

// ================= COURSE =================

router.get("/getCourse", verifyToken, co.getCoursedata);
router.post("/addCourse", verifyToken, co.insertCoursedata);
router.put("/updateCourse/:id", verifyToken, co.updateCoursedata);
router.delete("/deleteCourse/:id", verifyToken, co.deleteCoursedata);

// ================= USER =================

router.get("/getUser", verifyToken, ur.getUserdata);
router.post("/login", ur.loginUser);

// ================= EJS DEMO =================

router.get("/getstudentmarks", (req, res) => {
  const users = [
    { name: "Pooja", age: 22 },
    { name: "Riya", age: 21 },
    { name: "Neha", age: 23 },
  ];

  res.render("home", { users });
});

module.exports = router;