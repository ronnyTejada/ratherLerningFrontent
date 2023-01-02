import React, { useReducer } from "react";
import { ApiService } from "../api";
import MyContext from "./Context";
import Reducer from "./Reducer";
import {
  ADD_STUDENT,
  CREATE_COURSE,
  ADD_STUDENT_TO_COURSE,
  ADMIN_LOGGED,
  ERROR,
  DELETE_COURSE,
  LOGOUT
} from "./Types";
export default function State(props) {
  const initialState = {
    courses: [],
    students: [],
    student:null,
    logged: localStorage.getItem("logged") ?? false,
    currentCourse: null,
    showError: false,
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  const login = async (email, password) => {
    let response = await ApiService.loginUser(email, password);
    if (response.status) {
      localStorage.setItem("logged", true);
      dispatch({
        type: ADMIN_LOGGED,
        payload: response.status,
      });
    } else {
      dispatch({
        type: ERROR,
        payload: true,
      });
    }
  };

  const logout=()=>{
    localStorage.removeItem('logged')
    dispatch({
      type:ADMIN_LOGGED,
      payload:false
    })
  }

  const createCourse = async (course,navigate) => {
    let response = await ApiService.createCourse(course);
    if (response.status) {
      dispatch({
        type: CREATE_COURSE,
        payload: course,
      });
      navigate('/dashboard')

    }
    
  };

  const deleteCourse = async (courseId,navigate)=>{
    let toDelete = window.confirm('do you want delete this course')
    if(toDelete){
      let response = await ApiService.deleteCourse(courseId)
      if(response.status){
        dispatch({
          type: DELETE_COURSE,
          payload: null,
        });
        navigate('/dashboard')
      }
    }
  }


  const getCourses = () => {
    ApiService.getCourses(dispatch);
  };

  const getCourseById = async (id) => {
    await ApiService.getCourseById(id, dispatch);
  };

  const addStudent = async (student) => {
    let response = await ApiService.createStudent(student);
    if (response.status) {
      dispatch({
        type: ADD_STUDENT,
        payload: student,
      });
      dispatch({
        type: ADD_STUDENT_TO_COURSE,
        payload: student.id,
      });
    }
  };

  const getStudentsByCourse = (id) => {
    ApiService.getStudentByCourse(id,dispatch)
  };

  const getStudentsById = (id) => {
    ApiService.getStudentById(id,dispatch)
  };

  const getAllStudents = () =>{
    ApiService.getStudents(dispatch)
  }

  return (
    <MyContext.Provider
      value={{
        courses: state.courses,
        currentCourse: state.currentCourse,
        logged: state.logged,
        students:state.students,
        student:state.student,
        createCourse,
        getCourseById,
        addStudent,
        getStudentsByCourse,
        login,
        getCourses,
        getStudentsById,
        getAllStudents,
        deleteCourse,
        logout
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
}
