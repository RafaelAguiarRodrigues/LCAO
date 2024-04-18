export interface Usuario {
  id?: number,
  nome: string,
  email: string,
  senha: string
}

export interface Callback {
  content: Usuario[];
  totalPages: number;
}
