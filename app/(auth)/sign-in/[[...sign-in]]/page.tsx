import AuthPageLayout from "@/components/authPage/AuthPageLayout";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <AuthPageLayout>
      <SignIn path="/sign-in" />
    </AuthPageLayout>
  );
}
