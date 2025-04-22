/* style */
import styles from "./SearchInput.module.scss";
/* svg */
import search_svg from "/icons/search.svg";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
}

export default function SearchInput({
  value,
  onChange,
  onSearch
}: SearchInputProps) {
  return (
    <div className={styles.content}>
      <input
        type="text"
        placeholder="Digite um usuário do Github"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") onSearch();
        }}
      />
      <div className={styles.search_button} onClick={onSearch}>
        <img src={search_svg} className={styles.search_svg} />
      </div>
    </div>
  );
}
