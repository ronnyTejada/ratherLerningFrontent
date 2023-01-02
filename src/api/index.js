import axios from "axios";
import {
  GET_COURSES,
  GET_COURSE_BY_ID,
  GET_STUDENTS_BY_COURSE,
  GET_STUDENT_BY_ID,
  GET_ALL_STUDENTS,
} from "../context/Types";
import {
  LOGIN,
  CREATE_COURSE,
  GET_ALL_COURSES,
  GET_COURSE,
  CREATE_STUDENT,
  GET_STUDENTS,
  GET_COURSE_STUDENTS,
  GET_STUDENT,
  DELETE_COURSE,
  UPDATE_COURSE,
  DELETE_STUDENT,
} from "./types";

export const ApiService = {
  loginUser: (email, password) =>
    axios
      .post(LOGIN, {
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        return res.data;
      })
      .catch((error) => {
        console.log(error);
        return error;
      }),
  createCourse: (course) =>
    axios
      .post(CREATE_COURSE, {
        course,
      })
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .catch((error) => {
        console.log(error);
        return error;
      }),
  deleteCourse: (id) =>
    axios
      .post(DELETE_COURSE, {
        id,
      })
      .then((res) => {
        console.log(res);
        return res.data;
      })
      .catch((error) => {
        console.log(error);
        return error;
      }),
  editCourse: (course) =>
    axios
      .post(UPDATE_COURSE, {
        course,
      })
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .catch((error) => {
        console.log(error);
        return error;
      }),
  getCourses: (dispatch) => {
    axios
      .get(GET_ALL_COURSES)
      .then((res) => {
        dispatch({
          type: GET_COURSES,
          payload: res.data.data,
        });
      })
      .catch((error) => {
        console.log(error);

        return error;
      });
  },
  getCourseById: (id, dispatch) => {
    axios
      .get(GET_COURSE + id)
      .then((res) => {
        console.log(res.data, "awd");
        dispatch({
          type: GET_COURSE_BY_ID,
          payload: res.data.data,
        });
      })
      .catch((error) => {
        console.log(error);

        return error;
      });
  },
  createStudent: (student) =>
    axios
      .post(CREATE_STUDENT, {
        student,
      })
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .catch((error) => {
        console.log(error);
        return error;
      }),
  deleteStudent: (id) =>
    axios
      .post(DELETE_STUDENT, {
        id,
      })
      .then((res) => {
        console.log(res);
        return res.data;
      })
      .catch((error) => {
        console.log(error);
        return error;
      }),

  getStudents: (dispatch) => {
    axios
      .get(GET_STUDENTS)
      .then((res) => {
        console.log(res, "sddsd");
        dispatch({
          type: GET_ALL_STUDENTS,
          payload: res.data.data,
        });
      })
      .catch((error) => {
        console.log(error);

        return error;
      });
  },
  getStudentByCourse: (id, dispatch) => {
    axios
      .get(GET_COURSE_STUDENTS + id)
      .then((res) => {
        dispatch({
          type: GET_STUDENTS_BY_COURSE,
          payload: res.data.data,
        });
      })
      .catch((error) => {
        console.log(error);

        return error;
      });
  },
  getStudentById: (id, dispatch) => {
    axios
      .get(GET_STUDENT + id)
      .then((res) => {
        dispatch({
          type: GET_STUDENT_BY_ID,
          payload: res.data.data,
        });
      })
      .catch((error) => {
        console.log(error);

        return error;
      });
  },
  getSibling: (id, setSiblings) => {
    axios
      .get(GET_STUDENT + id)
      .then((res) => {
        setSiblings((prev) => [...prev, res.data.data]);
      })
      .catch((error) => {
        console.log(error);

        return error;
      });
  },
};
