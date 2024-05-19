import {
  child,
  get,
  limitToFirst,
  orderByKey,
  push,
  query,
  ref,
  set,
  startAfter,
} from "firebase/database";
import { database } from "../firebaseApp";

export const getTeachers = async (limit, start = "0") => {
  const newTeachers = [];
  const teachersRef = ref(database, "teachers");
  const queryRef = query(teachersRef, orderByKey(), limitToFirst(limit), startAfter(start));

  const snapshot = await get(queryRef);
  snapshot.forEach((teacher) => {
    newTeachers.push({ tid: teacher.key, ...teacher.val() });
  });

  return newTeachers;
};

export const getTeachersByIds = async (teacherIds) => {
  const newTeachers = [];

  const teachersRef = ref(database, "teachers");

  for (const teacherId of teacherIds) {
    const snapshot = await get(child(teachersRef, teacherId));

    if (snapshot.exists()) {
      newTeachers.push({ tid: snapshot.key, ...snapshot.val() });
    }
  }

  return newTeachers;
};

export const addTeacher = async (teacher) => {
  const teachersRef = ref(database, "teachers");
  const newTeacherRef = push(teachersRef);
  await set(newTeacherRef, teacher);
};
