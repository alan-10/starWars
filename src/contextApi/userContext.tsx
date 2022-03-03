import { createContext, ReactNode,  useContext, useState} from 'react';

interface UserType {
  name: String;
  height: String;
  mass: String;
}

interface DataConstext {
  users:UserType[];
  includUer (data: UserType[]): void;
  updatePage():void;
  updatePages: Boolean;
}

export const UserContext = createContext<DataConstext>({} as DataConstext);

type TypeContext =  {
  children: ReactNode
}

export function ContextProvider({ children}: TypeContext){


  const [users, setUser] = useState<UserType[]>([]);
  const [updatePages, setUpdatePages] = useState<Boolean>(false)
  function updatePage (){
    setUpdatePages(!updatePages)
  }

  function includUer(data:UserType[] ){
    setUser(data);
  }


  return (
    <UserContext.Provider value={{
      users,
      includUer,
      updatePage,
      updatePages
    }} >
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext(){
  const context = useContext(UserContext);
  
  if(!context){
    throw new Error('userContext must ber user within a Provider')
  }

  return context
}