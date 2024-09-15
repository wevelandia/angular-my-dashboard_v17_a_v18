export interface UsersResponse {
  page:        number;
  per_page:    number;
  total:       number;
  total_pages: number;
  data:        User[];
  support:     Support;
}

// Este se creo pero solo para cuando se consulta un usuario por id, por ello se adiciona aca.
export interface UserResponse {
  data: User;
  support: Support;
}

export interface User {
  id:         number;
  email:      string;
  first_name: string;
  last_name:  string;
  avatar:     string;
}

export interface Support {
  url:  string;
  text: string;
}
