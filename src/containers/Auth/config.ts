export type TLoginForm = {
  account: string;
  password: string;
};

export type TRegisterForm = {
  name: string;
  phoneNumber: string;
  email: string;
  password: string;
  rePassword: string;
  dateOfBirth: Date;
  gender: string;
  locationCity: string;
  locationDistrict: string;
  faviousRaps: string[];
};

export const defaultValueLoginForm = {
  account: '',
  password: '',
};

export const defaultValueRegisterForm = {
  name: '',
  phoneNumber: '',
  email: '',
  password: '',
  rePassword: '',
  dateOfBirth: new Date(),
  gender: '1',
  locationCity: '',
  locationDistrict: '',
  faviousRaps: [],
};
