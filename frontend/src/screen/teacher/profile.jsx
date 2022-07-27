import { Suspense, lazy } from "react";
const ProfileCom = lazy(() => import("../../components/teacher/ProfileCom"));

export function Profile() {
  return (
    <div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <ProfileCom />
      </Suspense>
    </div>
  );
}
