"use client";

import { useParams } from "next/navigation";

export default function UserProfile() {
  const params = useParams(); // useParams()를 사용하여 동적 파라미터 추출
  const userId = params.userId; // [userId]를 추출하여 변수에 저장

  return (
    <div>
      <h1>사용자 프로필</h1>
      <p>사용자 ID: {userId}</p>
    </div>
  );
}
