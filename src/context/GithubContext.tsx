import { createContext, useState, ReactNode, useContext } from "react";
import { getGitHubUser } from "../services/github-api/githubApi.get";

interface GitHubUser {
  login: string;
  avatar_url: string;
  name: string;
  bio: string;
  html_url: string;
}

interface GitHubContextType {
  user: GitHubUser | null;
  fetchUser: (username: string) => void;
  error: string | null;
}

const GitHubContext = createContext<GitHubContextType | undefined>(undefined);

export const useGitHub = () => {
  const context = useContext(GitHubContext);
  if (!context) {
    throw new Error("useGitHub must be used within a GitHubProvider");
  }
  return context;
};

export function GitHubProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchUser = async (username: string) => {
    try {
      setError(null); // reseta o erro
      const userData = await getGitHubUser(username);
      setUser(userData);
      console.log("try: requisição aceita");
      console.log(userData);
    } catch (err: any) {
      setUser(null);
      setError(
        "Nenhum perfil foi encontrado com esse nome de usuário. Tente novamente"
      );
      console.log("catch: Usuário não encontrado");
      console.log(err);
    }
  };

  return (
    <GitHubContext.Provider value={{ user, fetchUser, error }}>
      {children}
    </GitHubContext.Provider>
  );
}
