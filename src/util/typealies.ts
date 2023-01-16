export type Props = {
  children?: React.ReactNode;
};

export type StyledProps = {
  width: string;
  margin?: string;
};

export type EventObject = {
  id: string;
  value?: string;
};

export class UserInputData {
  nickname: string | undefined;
  password: string | undefined;
  id: string | undefined;
  context: string | undefined;

  constructor(
    nickname?: string,
    password?: string,
    id?: string,
    context?: string
  ) {
    this.nickname = nickname;
    this.password = password;
    this.id = id;
    this.context = context;
  }
}
