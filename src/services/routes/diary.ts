import dayjs from "dayjs";
import { Request, Response } from "miragejs";
import { Diary } from "../../interfaces/diary.interface";
import { User } from "../../interfaces/user.interface";
import { handleErrors } from "../mirage/server";

export const create = (schema: any,req: Request): { user: User; diary: Diary } | Response => {
  try {
    const { subject, title, type, userId } = JSON.parse(
      req.requestBody
    ) as Partial<Diary>;
    const exUser = schema.users.findBy({ id: userId });
    if (!exUser) {
      return handleErrors(null, "No such user exists.");
    }
    const now = dayjs().format();
    const diary = exUser.createDiary({
      subject,
      title,
      type,
      createdAt: now,
      updatedAt: now,
    });
    return {
      user: {
         ...exUser.attrs,
        },
        diary: diary.attrs,
    };
  } catch (error) {
    return handleErrors(error, "Failed to create Diary.");
  }
};
export const updateDiary = (schema: any, req: Request): Diary | Response => {
  try {
    const diary = schema.diaries.find(req.params.id);
    const data = JSON.parse(req.requestBody) as Partial<Diary>;
    const now = dayjs().format();
    diary.update({
      ...data,
      updatedAt: now,
    });
    return diary.attrs as Diary;
  } catch (error) {
    return handleErrors(error, 'Failed to update Diary.');
  }
};
export const getDiaries = (schema: any, req: Request): Diary[] | Response => {
  try {
    const user = schema.user.find(req.params.id);
    return user.diary as Diary[];
  } catch (error) {
    return handleErrors(error, "Could not get user diaries.");
  }
};
