import { get, push, ref, set } from "firebase/database";
import { database } from "../firebaseApp";

export const getAllTeachers = async () => {
  const newTeachers = [];

  const teachersRef = ref(database, "teachers");

  const snapshot = await get(teachersRef);

  if (snapshot.exists()) {
    snapshot.forEach((teacher) => {
      newTeachers.push({ tid: teacher.key, ...teacher.val() });
    });
  }

  return newTeachers;
};

export const addTeacher = async (teacher) => {
  const teachersRef = ref(database, "teachers");
  const newTeacherRef = push(teachersRef);
  await set(newTeacherRef, teacher);
};
