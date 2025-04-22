import { GitHubProvider } from "./GithubContext";

export function GlobalProviders({ children }: { children: React.ReactNode }) {
  return <GitHubProvider>{children}</GitHubProvider>;
}
