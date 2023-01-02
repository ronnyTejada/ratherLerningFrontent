import {
  ADD_STUDENT,
  ADD_STUDENT_TO_COURSE,
  ADMIN_LOGGED,
  CREATE_COURSE,
  ERROR,
  GET_COURSES,
  GET_ALL_STUDENTS,
  GET_COURSE_BY_ID,
  GET_STUDENTS_BY_COURSE,
  GET_STUDENT_BY_ID,
  DELETE_COURSE
} from "./Types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case CREATE_COURSE:
      return {
        ...state,
        courses: [...state.courses, payload],
      };
    case GET_COURSES:
      return {
        ...state,
        courses: payload,
      };
      case DELETE_COURSE:
        return {
          ...state,
          currentCourse: payload,
        };
    case GET_COURSE_BY_ID:
      return {
        ...state,
        currentCourse: payload,
      };
    case ADD_STUDENT:
      return {
        ...state,
        students: [...state.students, payload],
      };
    case GET_STUDENTS_BY_COURSE:
      return {
        ...state,
        students: payload,
      };
    case GET_STUDENT_BY_ID:
      return {
        ...state,
        student: payload,
      };
      case GET_ALL_STUDENTS:
        return {
          ...state,
          students: payload,
        };
    case ADD_STUDENT_TO_COURSE:
      return {
        ...state,
        currentCourse: state.currentCourse.students.push(payload),
      };
    case ADMIN_LOGGED:
      return {
        ...state,
        logged: payload,
      };
    case ERROR:
      return {
        ...state,
        showError: payload,
      };
    default:
      return state;
  }
};
