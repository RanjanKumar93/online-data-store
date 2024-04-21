import AuthPageLayout from "@/components/authPage/AuthPageLayout";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <AuthPageLayout>
      <SignUp path="/sign-up" />
    </AuthPageLayout>
  );
}
