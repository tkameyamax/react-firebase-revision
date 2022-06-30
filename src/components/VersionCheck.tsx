import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { db } from "../config/firebase";

const usePrevious = (value: any) => {
  const ref = useRef(null);
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

export const VersionCheck = () => {
  const [version, setVersion] = useState<string | null>(null);
  const [isInitial, setIsInitial] = useState<boolean>(true);

  const preIsInitial = usePrevious(isInitial);
  const preVersion = usePrevious(version);
  const isChange = !preIsInitial && preVersion !== version;

  useEffect(() => {
    const ref = doc(db, "configs", "version");
    const unsubscribe = onSnapshot(
      ref,
      (doc) => {
        if (doc.exists()) {
          const newVersion = doc.data().value;
          setIsInitial(false);
          setVersion(newVersion);
        } else {
          setIsInitial(false);
          setVersion(null);
        }
      },
      (error) => {
        console.log(error);
        setIsInitial(false);
      }
    );
    return unsubscribe;
  }, []);

  if (isChange) {
    return (
      <div className="alert alert-warning py-2">
        お使いのxxxのバージョンは最新ではありません。
        <a href="#" onClick={(_) => window.location.reload()}>
          リロード
        </a>
        してください。
      </div>
    );
  }
  return null;
};
