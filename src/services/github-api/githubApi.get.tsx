import axios from "axios";

export const getGitHubUser = async (username: string) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Erro ao buscar usuário no GitHub");
  }
};
