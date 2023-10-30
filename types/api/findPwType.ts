export type TFindPwRequest = {
  email: string;
  username: string;
};

export type TFindPwResponse = {
  id: number;
  username: string;
  phoneNumber: string;
  email: string;
  password: string;
  oauth: null;
  oauthId: null;
  roles: [
    {
      id: number;
      name: string;
    }
  ];
  favoriteStores: [];
  authCode: null;
  joinDate: string;
};
