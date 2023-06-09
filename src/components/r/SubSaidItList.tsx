import { api } from "../../utils/api";
import { SubSaidItItem } from "./SubSaidItItem";

export function SubSaidItList() {
  const {
    data: subSaidIts,
    isLoading,
    isError,
  } = api.subSaidIt.getAllSubSaidIts.useQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Something went wrong</div>;
  return (
    <div>
      {subSaidIts?.map((subSaidIt) => {
        return <SubSaidItItem key={subSaidIt.id} subSaidIt={subSaidIt} />;
      })}
    </div>
  );
}
