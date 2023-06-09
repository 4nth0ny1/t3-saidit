import type { SubSaidIt } from "../../types";

type SubSaidItProps = {
  subSaidIt: SubSaidIt;
};

export function SubSaidItItem({ subSaidIt }: SubSaidItProps) {
  const { name, description } = subSaidIt;

  return (
    <div>
      {name}
      {description}
    </div>
  );
}
