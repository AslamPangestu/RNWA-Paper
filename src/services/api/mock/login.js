type Params = {
  username: string,
  password: string
};

// eslint-disable-next-line
type Payload = {
  userID: string, // email
  userpassword: string, // MD5(email.toUppercase() + password)
  userInputPassword: string // plain password
};

// eslint-disable-next-line
type Response = {
  success: boolean,
  result: string,
  msg: string,
  userid: string,
  username: string,
  userstatus: string,
  token: string
};

type ResultData = {
  userId: string,
  username: string,
  userStatus: string,
  accessToken: string
};

type Result = {
  ok: boolean,
  message: string,
  data: ResultData
};

export default async (params: Params): Promise<Result> => {
  if (
    !(params.username === "kusuma1192@yahoo.com" && params.password === "12345")
  ) {
    return {
      ok: false,
      message: "Email atau Kata Sandi Anda Tidak Sesuai"
    };
  }

  return {
    ok: true,
    data: {
      userId: "kusuma1192@yahoo.com",
      username: "Indra Kusuma",
      userStatus: "AC",
      accessToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiJrdXN1bWExMTkyQHlhaG9vLmNvbSIsInVzZXJuYW1lIjoiSW5kcmEgS3VzdW1hIiwiaWF0IjoxNTQ1NjIzNzcwLCJleHAiOjE1NDU3MTAxNzB9.YAYikqTQMuZv4mafRdDONB8WZyhaU3i1xBCPCURAgYA"
    }
  };
};
