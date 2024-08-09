import LoginForm from "./login-form";

export default function LoginPage() {
  return (
    <main className="h-screen p-24">
      <div className="max-w-md mx-auto">
        <h2 className="text-center text-xl font-bold mb-5">Login</h2>
        <LoginForm />
      </div>
    </main>
  );
}
