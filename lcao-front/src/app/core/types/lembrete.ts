export interface Lembrete {
  id?: number;
  titulo: string;
  descricao: string;
  prioridade: string;
  data: Date;
  modelo: string;
}

export interface Callback {
  content: Lembrete[];
  totalPages: number;
}
