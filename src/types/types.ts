export interface ButtonProps {
  $isPassed: boolean;
  $isAblePassword: boolean;
}

export type UserInput = {
  id: string;
  password: string;
  nickname: string;
};

export type FindUserInput = {
  id: string;
};
