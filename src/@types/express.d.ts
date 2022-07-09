interface filetype {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  destination: string;
  filename: string;
  path: string;
  size: number;
}

declare namespace Express {
  export interface Request {
    userId: string;
    userName: string;
    userEmail: string;
    files: {
      fotoPerfil: Array<filetype>;
      fotoProfissional: Array<filetype>;
    }
  }
}
