export default function LoginForm() {
  return (
    <form className="form">
      <h2>Log In</h2>
      <input
        autoComplete="username"
        placeholder="Enter your username"
        type="text"
      />

      <input
        placeholder="Password"
        autoComplete="current-password"
        type="password"
        rules={{
          minLength: {
            value: 4,
            message: 'should be at least 8 characters',
          },
        }}
      />

      <input type="submit" value="Login" />
    </form>
  );
}
