const baseDomain = 'https://lerningbackend2.onrender.com'
const baseUrl = `${baseDomain}/api/`

export const LOGIN = baseUrl+'login'
export const CREATE_COURSE = baseUrl+'create-course'
export const DELETE_COURSE = baseUrl+'delete-course'
export const UPDATE_COURSE = baseUrl+'update-course'
export const GET_ALL_COURSES = baseUrl+'get-courses'
export const GET_COURSE = baseUrl+'get-course-by-id/?id='
export const CREATE_STUDENT = baseUrl+'create-student'
export const GET_COURSE_STUDENTS = baseUrl+'get-students-by-course/?courseId='
export const GET_STUDENTS = baseUrl+'get-students'
export const GET_STUDENT = baseUrl+'get-student-by-id/?id='
export const DELETE_STUDENT = baseUrl+'delete-student'
