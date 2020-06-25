import React from "react";
import { useStateValue } from "../../state";

const Diagnose: React.FC<{ diagnosisCodes: string[] | undefined }> = ({
  diagnosisCodes,
}) => {
  const [{ diagnoses }] = useStateValue();
  if (!diagnosisCodes?.length) return null;
  return (
    <>
      <h4>diagnoses</h4>
      <ul>
        {diagnosisCodes?.map((code) => (
          <li key={code}>
            {code} {diagnoses[code]?.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Diagnose;
