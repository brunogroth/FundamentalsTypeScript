type DefaultResponse = { id: ID | number; name: string; createdAt: string };

type ID = string | number;
type DataInput = { name: string; active: boolean };

interface Repository {
  readonly model: any;

  findAll(): DefaultResponse[];
  findById(id: ID): DefaultResponse;
  insert(data: DataInput): DefaultResponse;
  update(id: ID, data: DataInput): DefaultResponse;
  destroy(id: ID): boolean;
}

class UserModel {
  constructor(public username: string, public password: string) {}
}

class UserRepository implements Repository {
  model: UserModel;

  constructor(model: UserModel) {
    this.model = model;
  }

  findAll(): DefaultResponse[] {
    throw new Error("Method not implemented.");
  }
  findById(id: ID): DefaultResponse {
    throw new Error("Method not implemented.");
  }
  insert(data: DataInput): DefaultResponse {
    throw new Error("Method not implemented.");
  }
  update(id: ID, data: DataInput): DefaultResponse {
    throw new Error("Method not implemented.");
  }
  destroy(id: ID): boolean {
    throw new Error("Method not implemented.");
  }
}

class CustomerRepository implements Repository {
  model: UserModel;

  constructor(model: UserModel) {
    this.model = model;
  }

  findAll(): DefaultResponse[] {
    throw new Error("Method not implemented.");
  }
  findById(id: ID): DefaultResponse {
    throw new Error("Method not implemented.");
  }
  insert(data: DataInput): DefaultResponse {
    throw new Error("Method not implemented.");
  }
  update(id: ID, data: DataInput): DefaultResponse {
    throw new Error("Method not implemented.");
  }
  destroy(id: ID): boolean {
    throw new Error("Method not implemented.");
  }
}

// Inversão de dependências: MEtodoPassando a Interface Repository e não as classes que implementam o método
// Nesse cenário, NÃO IMPORTA quem implementa o método (UserRepository ou CustomerRepository).
// Baixo Acoplamento (Princípio de Inversão de Dependência)
const getAllUsers = (repository: Repository): DefaultResponse[] => {
  return repository.findAll();
};

interface Searchable {
  search(filter: string): DefaultResponse[];
}

interface EventManager {
  dispatch(payload: Object): void;
}

// Respeitando SOLID Principles, o Repository não deve implementar as interfaces Searchable e EventManager.
interface FullRepository extends Repository, Searchable, EventManager {
  // Interface completa pois já estende as outras classes.
}
export {};
