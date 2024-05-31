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

export const getTeacherAttributes = async () => {
  const allLanguages = [];
  const allLevels = [];
  const allPrices = [];

  const teachersRef = ref(database, "teachers");

  const snapshot = await get(teachersRef);

  if (snapshot.exists()) {
    snapshot.forEach((teacher) => {
      const { languages, levels, price_per_hour } = teacher.val();

      allLanguages.push(...languages);
      allLevels.push(...levels);
      allPrices.push(price_per_hour);
    });
  }

  const languages = [...new Set(allLanguages)];
  const levels = [...new Set(allLevels)];
  const prices = [...new Set(allPrices)];

  return { languages, levels, prices };
};

export const addTeacher = async (teacher) => {
  const teachersRef = ref(database, "teachers");
  const newTeacherRef = push(teachersRef);
  await set(newTeacherRef, teacher);
};
