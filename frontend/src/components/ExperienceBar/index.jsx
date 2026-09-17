import { useSelector } from "react-redux";
import { getLevelInfo } from "../../utils/expConfig";
import styles from "./ExperienceBar.module.css";
export function ExperienceBar() {
  const exp = useSelector((state) => state.exp.exp);
  const { level, expIntoLevel, expForThisLevel, progress, isMaxLevel } =
    getLevelInfo(exp);
  return (
    <div className={styles.container}>
      <span className={styles.label}>LEVEL {level}</span>
      <div className={styles.track}>
        <div className={styles.fill} style={{ width: `${progress}%` }}>
          <span className={styles.trackLabel}>
            {isMaxLevel ? "MAX" : `${expIntoLevel}/${expForThisLevel} EXP`}
          </span>
        </div>
      </div>
    </div>
  );
}
