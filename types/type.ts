export interface Todo {
  id: string;
  text: string;
  isCompleted: boolean;
}



 export interface ApiResponse {
    avatar: string;
    first_name?: string;
    last_name?: string;
    email?: string;
    name:string;
    description: string;

  }

  export interface todoSupa {
    id: string,
    created_at?: Date,
    user_id?: string,
    task: string;
    isCompleted?: boolean
  }
  
  export interface todoResponse {
    status: string;
    data?: todoSupa;
  }
  
