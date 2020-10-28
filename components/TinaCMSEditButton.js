import styles from './TinaCMSEditButton.module.css'
import { useCMS } from 'tinacms';


export default function TinaCMSEditButton() {
  
  return <>
    <button onClick={() => cms.toggle()} className={styles.button}>
      {cms.enabled ? 'Exit edit mode' : 'Edit this site'}
    </button>
  </>
}