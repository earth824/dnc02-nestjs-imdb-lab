import { Gender, Role } from '../../database/generated/prisma/enums';

export type UserCreateInput = {
  email: string;
  password: string;
  role?: Role;
  firstName?: string;
  lastName?: string;
  dob?: Date;
  gender?: Gender;
  status?: boolean;
};
