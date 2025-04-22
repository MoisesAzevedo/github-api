import { useState } from "react";
import { useGitHub } from "../../context/GithubContext";

/* style */
import styles from "./Home.module.scss";

/* svg */
import grid_svg from "/icons/grid.svg";
import ellipse_1_svg from "/icons/ellipse_1.svg";
import ellipse_2_svg from "/icons/ellipse_2.svg";
import github_svg from "/logos/github.svg";
import github_letter_svg from "/logos/github_letter.svg";

/* components */
import SearchInput from "../../components/SearchInput/SearchInput";

export default function Home() {
  const { user, fetchUser, error } = useGitHub();
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    if (search.trim() !== "") {
      fetchUser(search);
    }
  };

  return (
    <section className={styles.wrapper}>
      <section className={styles.background}>
        <img src={grid_svg} className={styles.grid_svg} />
        <img src={ellipse_1_svg} className={styles.ellipse_1_svg} />
        <img src={ellipse_2_svg} className={styles.ellipse_2_svg} />
      </section>

      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.title}>
            <img src={github_svg} className={styles.github_svg} />
            <h1 className={styles.profile_title}>Perfil</h1>
            <img src={github_letter_svg} className={styles.github_letter_svg} />
          </div>
          <div className={styles.input_search}>
            <SearchInput
              value={search}
              onChange={setSearch}
              onSearch={handleSearch}
            />
          </div>
          <div className={styles.response}>
            {error ? (
              <div className={styles.error_container}>
                <h3 className={styles.error}>{error}</h3>
              </div>
            ) : user ? (
              <div className={styles.response_container}>
                <div className={styles.user_avatar}>
                  <img src={user.avatar_url} />
                </div>

                <article className={styles.response_text}>
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3>{user.name}</h3>
                  </a>
                  <p>{user.bio}</p>
                </article>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </section>
  );
}
